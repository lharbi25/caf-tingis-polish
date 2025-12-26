import { Coffee, Building2, Armchair, MapPin, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function WhyChooseUs() {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: Coffee,
      title: t.whyChoose.reason1.title,
      desc: t.whyChoose.reason1.desc,
    },
    {
      icon: Building2,
      title: t.whyChoose.reason2.title,
      desc: t.whyChoose.reason2.desc,
    },
    {
      icon: Armchair,
      title: t.whyChoose.reason3.title,
      desc: t.whyChoose.reason3.desc,
    },
    {
      icon: MapPin,
      title: t.whyChoose.reason4.title,
      desc: t.whyChoose.reason4.desc,
    },
    {
      icon: Heart,
      title: t.whyChoose.reason5.title,
      desc: t.whyChoose.reason5.desc,
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-3">
            {t.whyChoose.sectionTitle}
          </h2>
          <p className="text-foreground/60 text-lg max-w-xl mx-auto leading-relaxed">
            {t.whyChoose.sectionSubtitle}
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-5 rounded-full shadow-lg shadow-primary/20" />
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-300">
                <reason.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-display text-lg text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
