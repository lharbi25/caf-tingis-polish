import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function Testimonials() {
  const { t, language } = useLanguage();

  const testimonials = [
    {
      name: 'Marie L.',
      location: 'Paris, France',
      text: language === 'fr' 
        ? "Un voyage dans le temps! L'atmosphère authentique et le café délicieux m'ont transportée dans le Tanger d'antan."
        : language === 'en'
        ? "A journey through time! The authentic atmosphere and delicious coffee transported me to old Tangier."
        : "رحلة عبر الزمن! الأجواء الأصيلة والقهوة اللذيذة نقلتني إلى طنجة القديمة.",
      rating: 5,
    },
    {
      name: 'Ahmed B.',
      location: 'Casablanca, Maroc',
      text: language === 'fr'
        ? "Le meilleur nous-nous de Tanger! Un lieu chargé d'histoire où l'on se sent chez soi."
        : language === 'en'
        ? "The best nous-nous in Tangier! A place full of history where you feel at home."
        : "أفضل نص نص في طنجة! مكان مليء بالتاريخ تشعر فيه وكأنك في بيتك.",
      rating: 5,
    },
    {
      name: 'James W.',
      location: 'London, UK',
      text: language === 'fr'
        ? "Incontournable à Tanger. Le personnel est accueillant et le thé à la menthe est parfait."
        : language === 'en'
        ? "A must-visit in Tangier. The staff is welcoming and the mint tea is perfect."
        : "زيارة لا بد منها في طنجة. الموظفون ودودون والشاي بالنعناع مثالي.",
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
              <p className="text-foreground/80 mb-6 leading-relaxed">
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