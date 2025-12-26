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
        ? "Le meilleur endroit pour boire un café à Tanger ! L'ambiance est inoubliable."
        : language === 'en'
        ? "The best place to have coffee in Tangier! The atmosphere is unforgettable."
        : "أفضل مكان لشرب القهوة في طنجة! الأجواء لا تُنسى.",
      rating: 5,
    },
    {
      name: language === 'ar' ? 'ليلى م.' : 'Leila M.',
      location: language === 'ar' ? 'الرباط' : 'Rabat',
      text: language === 'fr'
        ? "Une expérience magnifique alliant histoire et confort. Je recommande vivement !"
        : language === 'en'
        ? "A wonderful experience combining history and comfort. Highly recommend!"
        : "تجربة رائعة تجمع بين التاريخ والراحة، أنصح الجميع بزيارته.",
      rating: 5,
    },
    {
      name: language === 'ar' ? 'يوسف ز.' : 'Youssef Z.',
      location: language === 'ar' ? 'طنجة' : language === 'fr' ? 'Tanger' : 'Tangier',
      text: language === 'fr'
        ? "Leur café est délicieux et le service est très chaleureux."
        : language === 'en'
        ? "Their coffee is delicious and the service is very friendly."
        : "قهوتهم لذيذة والخدمة ودودة جدًا.",
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
            <article
              key={index}
              className="bg-secondary/30 rounded-lg p-8 border border-border/30 relative"
              itemScope
              itemType="https://schema.org/Review"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 text-primary/20" size={40} aria-hidden="true" />

              {/* Stars */}
              <div className="flex gap-1 mb-4" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
                <meta itemProp="ratingValue" content={testimonial.rating.toString()} />
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" aria-hidden="true" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/80 mb-6 leading-relaxed text-lg" itemProp="reviewBody">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div itemProp="author" itemScope itemType="https://schema.org/Person">
                <div className="font-medium text-foreground" itemProp="name">{testimonial.name}</div>
                <div className="text-sm text-foreground/50" itemProp="address">{testimonial.location}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
