import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function Testimonials() {
  const { t, language } = useLanguage();

  // Realistic local testimonials - believable Moroccan reviews
  const testimonials = [
    {
      name: language === 'ar' ? 'محمد ب.' : 'Mohammed B.',
      location: language === 'ar' ? 'طنجة' : language === 'fr' ? 'Tanger' : 'Tangier',
      text: language === 'fr' 
        ? "Mon café du quartier. Chaque matin, je prends mon nous-nous ici depuis des années."
        : language === 'en'
        ? "My neighborhood café. Every morning, I've been having my nous-nous here for years."
        : "مقهى الحي ديالي. كل صباح، كنشرب النص نص هنا من سنين.",
      rating: 5,
    },
    {
      name: language === 'ar' ? 'سعيد م.' : 'Said M.',
      location: language === 'ar' ? 'الرباط' : 'Rabat',
      text: language === 'fr'
        ? "J'ai découvert ce café par hasard en visitant Tanger. L'ambiance authentique m'a conquis."
        : language === 'en'
        ? "I discovered this café by chance while visiting Tangier. The authentic atmosphere won me over."
        : "لقيت هذا المقهى بالصدفة ملي زرت طنجة. الجو الأصيل عجبني بزاف.",
      rating: 5,
    },
    {
      name: language === 'ar' ? 'فاطمة ز.' : 'Fatima Z.',
      location: language === 'ar' ? 'طنجة' : language === 'fr' ? 'Tanger' : 'Tangier',
      text: language === 'fr'
        ? "L'atay est excellent et l'ambiance rappelle le Tanger d'autrefois. Simple et authentique."
        : language === 'en'
        ? "The atay is excellent and the atmosphere reminds me of old Tangier. Simple and authentic."
        : "الأتاي بنين والجو ديال زمان. بسيط وأصيل.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            {t.testimonials.sectionTitle}
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            {t.testimonials.sectionSubtitle}
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-secondary/30 rounded-lg p-8 border border-border/30 relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 text-primary/20" size={40} />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/80 mb-6 leading-relaxed text-lg">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div>
                <div className="font-medium text-foreground">{testimonial.name}</div>
                <div className="text-sm text-foreground/50">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
