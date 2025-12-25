import { ChevronDown, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import cafeExterior from '@/assets/cafe-hero.jpg';

export function Hero() {
  const { t } = useLanguage();

  const phoneNumber = '+212600000000'; // Placeholder - update with real number

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with real café photo */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${cafeExterior}')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Welcome Badge */}
        <div className="inline-block mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <span className="px-4 py-2 border border-primary/50 rounded-full text-primary text-sm uppercase tracking-widest">
            {t.hero.welcome}
          </span>
        </div>

        {/* Main Title */}
        <h1
          className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-4 animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          {t.hero.title}
        </h1>

        {/* Subtitle */}
        <p
          className="text-xl md:text-2xl text-foreground/80 mb-3 animate-fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          {t.hero.subtitle}
        </p>

        {/* Emotional Subheadline */}
        <p
          className="text-lg md:text-xl text-primary/90 mb-10 max-w-2xl mx-auto animate-fade-in"
          style={{ animationDelay: '0.7s' }}
        >
          {t.hero.emotionalSubtitle}
        </p>

        {/* CTA Buttons - 3 action buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in"
          style={{ animationDelay: '0.8s' }}
        >
          {/* Call Now - Primary */}
          <a
            href={`tel:${phoneNumber}`}
            className="flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-gold-dark transition-colors duration-200 min-w-[180px] justify-center text-lg"
          >
            <Phone size={20} />
            {t.hero.callNow}
          </a>
          
          {/* Reserve Table - Secondary */}
          <button
            onClick={() => scrollToSection('#reservation')}
            className="px-8 py-4 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200 min-w-[180px] text-lg"
          >
            {t.hero.reserveTable}
          </button>
          
          {/* Our Location - Tertiary */}
          <button
            onClick={() => scrollToSection('#contact')}
            className="flex items-center gap-2 px-8 py-4 border border-foreground/30 text-foreground rounded-full font-medium hover:border-primary hover:text-primary transition-colors duration-200 min-w-[180px] justify-center text-lg"
          >
            <MapPin size={20} />
            {t.hero.ourLocation}
          </button>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-in"
          style={{ animationDelay: '1s' }}
        >
          <div className="text-center">
            <div className="font-display text-4xl md:text-5xl text-primary mb-1">83+</div>
            <div className="text-sm text-foreground/60 uppercase tracking-wider">
              {t.hero.yearsLabel}
            </div>
          </div>
          <div className="text-center">
            <div className="font-display text-4xl md:text-5xl text-primary mb-1">1940</div>
            <div className="text-sm text-foreground/60 uppercase tracking-wider">
              {t.hero.foundedLabel}
            </div>
          </div>
          <div className="text-center">
            <div className="font-display text-4xl md:text-5xl text-primary mb-1">∞</div>
            <div className="text-sm text-foreground/60 uppercase tracking-wider">
              {t.hero.momentsLabel}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <button
          onClick={() => scrollToSection('#history')}
          className="flex flex-col items-center text-foreground/50 hover:text-primary transition-colors"
          aria-label={t.hero.scrollDown}
        >
          <span className="text-xs uppercase tracking-widest mb-2">{t.hero.scrollDown}</span>
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
}
