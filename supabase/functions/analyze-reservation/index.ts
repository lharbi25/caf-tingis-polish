import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.89.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ReservationData {
  id: string;
  name: string;
  phone: string;
  email?: string;
  guests: number;
  reservation_date: string;
  reservation_time: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    const SUPABASE_URL = Deno.env.get('SUPABASE_URL');
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      throw new Error('Supabase credentials not configured');
    }

    const { reservation } = await req.json() as { reservation: ReservationData };

    console.log('Analyzing reservation:', reservation);

    // Create Supabase client
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    // Get current date/time info for context
    const reservationDate = new Date(reservation.reservation_date);
    const dayOfWeek = reservationDate.toLocaleDateString('ar-MA', { weekday: 'long' });
    const isWeekend = [0, 6].includes(reservationDate.getDay());

    // Prepare prompt for AI analysis
    const analysisPrompt = `أنت مساعد ذكي لمقهى طنجيس في طنجة، المغرب. قم بتحليل بيانات الحجز التالية وقدم تقريراً مختصراً لصاحب المقهى:

بيانات الحجز:
- الاسم: ${reservation.name}
- رقم الهاتف: ${reservation.phone}
- البريد الإلكتروني: ${reservation.email || 'غير متوفر'}
- عدد الضيوف: ${reservation.guests}
- التاريخ: ${reservation.reservation_date} (${dayOfWeek})
- الوقت: ${reservation.reservation_time}
- نهاية الأسبوع: ${isWeekend ? 'نعم' : 'لا'}

قدم التحليل التالي بصيغة JSON:
{
  "priority": "عالية/متوسطة/عادية",
  "priority_reason": "سبب الأولوية",
  "time_category": "صباحي/ظهري/مسائي",
  "is_peak_time": true/false,
  "guest_size_category": "فردي/صغير/متوسط/كبير",
  "recommendations": ["توصية 1", "توصية 2"],
  "special_notes": "ملاحظات خاصة إن وجدت",
  "summary_for_owner": "ملخص قصير للمالك باللغة العربية"
}`;

    // Call Lovable AI for analysis
    const aiResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          {
            role: 'system',
            content: 'أنت مساعد ذكي متخصص في تحليل حجوزات المقاهي والمطاعم. قدم تحليلاتك بصيغة JSON فقط بدون أي نص إضافي.'
          },
          {
            role: 'user',
            content: analysisPrompt
          }
        ],
      }),
    });

    if (!aiResponse.ok) {
      const errorText = await aiResponse.text();
      console.error('AI Gateway error:', aiResponse.status, errorText);
      
      if (aiResponse.status === 429) {
        return new Response(JSON.stringify({ error: 'تم تجاوز حد الطلبات، يرجى المحاولة لاحقاً' }), {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      if (aiResponse.status === 402) {
        return new Response(JSON.stringify({ error: 'يرجى إضافة رصيد لحساب Lovable AI' }), {
          status: 402,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      throw new Error('AI gateway error');
    }

    const aiData = await aiResponse.json();
    const aiContent = aiData.choices?.[0]?.message?.content;

    console.log('AI Response:', aiContent);

    // Parse AI analysis
    let analysis;
    try {
      // Extract JSON from response (handle potential markdown code blocks)
      const jsonMatch = aiContent.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        analysis = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error('No JSON found in response');
      }
    } catch (parseError) {
      console.error('Failed to parse AI response:', parseError);
      analysis = {
        priority: 'متوسطة',
        priority_reason: 'تحليل افتراضي',
        time_category: 'غير محدد',
        is_peak_time: false,
        guest_size_category: reservation.guests > 4 ? 'كبير' : 'صغير',
        recommendations: ['التأكد من توفر المكان'],
        special_notes: '',
        summary_for_owner: `حجز جديد: ${reservation.guests} ضيوف في ${reservation.reservation_date} الساعة ${reservation.reservation_time}`
      };
    }

    // Update reservation with AI analysis
    const { error: updateError } = await supabase
      .from('reservations')
      .update({ ai_analysis: analysis })
      .eq('id', reservation.id);

    if (updateError) {
      console.error('Failed to update reservation:', updateError);
    }

    // Prepare WhatsApp notification message for owner
    const ownerMessage = `🔔 حجز جديد في مقهى طنجيس

👤 الاسم: ${reservation.name}
📞 الهاتف: ${reservation.phone}
👥 عدد الضيوف: ${reservation.guests}
📅 التاريخ: ${reservation.reservation_date}
⏰ الوقت: ${reservation.reservation_time}

📊 تحليل الذكاء الاصطناعي:
• الأولوية: ${analysis.priority}
• السبب: ${analysis.priority_reason}
• ${analysis.summary_for_owner}

💡 التوصيات:
${analysis.recommendations.map((r: string) => `• ${r}`).join('\n')}`;

    // Return analysis and notification data
    return new Response(JSON.stringify({
      success: true,
      analysis,
      whatsappMessage: encodeURIComponent(ownerMessage),
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in analyze-reservation function:', error);
    return new Response(JSON.stringify({ 
      error: error instanceof Error ? error.message : 'حدث خطأ غير متوقع' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
