import { useLanguage } from '@/contexts/LanguageContext';

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
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            {t.history.sectionSubtitle}
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6" />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=800"
                alt="Café Tingis Interior"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/30 rounded-lg -z-10" />
          </div>

          {/* Text Content */}
          <div className="space-y-6">
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="text-center p-6 bg-background/50 rounded-lg border border-border/50 hover:border-primary/50 transition-colors duration-300"
            >
              <div className="font-display text-3xl md:text-4xl text-primary mb-2">
                {item.year}
              </div>
              <p className="text-foreground/70 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}