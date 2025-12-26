import { useLanguage } from '@/contexts/LanguageContext';
import cafeHistory from '@/assets/cafe-history.jpg';

export function History() {
  const { t } = useLanguage();

  const timeline = [
    { year: t.history.timeline.year1, desc: t.history.timeline.desc1 },
    { year: t.history.timeline.year2, desc: t.history.timeline.desc2 },
    { year: t.history.timeline.year3, desc: t.history.timeline.desc3 },
    { year: t.history.timeline.year4, desc: t.history.timeline.desc4 },
  ];

  return (
    <section id="history" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            {t.history.sectionTitle}
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto leading-relaxed">
            {t.history.sectionSubtitle}
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full shadow-lg shadow-primary/20" />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image */}
          <div className="relative order-1 lg:order-1">
            <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-2xl">
              <img
                src={cafeHistory}
                alt="Historic interior of Café Tingis showing traditional Moroccan café seating with vintage decor and warm lighting, established since 1940"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/20 rounded-xl -z-10 shadow-xl" />
          </div>

          {/* Text Content */}
          <div className="space-y-7 order-2 lg:order-2">
            <p className="text-foreground/80 text-lg leading-relaxed">
              {t.history.paragraph1}
            </p>
            <p className="text-foreground/80 text-lg leading-relaxed">
              {t.history.paragraph2}
            </p>
            <p className="text-foreground/80 text-lg leading-relaxed">
              {t.history.paragraph3}
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="text-center p-6 bg-background/60 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/50 hover:bg-background/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
            >
              <div className="font-display text-3xl md:text-4xl text-primary mb-2 drop-shadow-sm">
                {item.year}
              </div>
              <p className="text-foreground/70 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}