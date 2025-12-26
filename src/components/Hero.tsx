import { ChevronDown, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { scrollToSection } from '@/lib/scroll-utils';
import { BUSINESS_CONFIG } from '@/lib/constants';
import cafeExterior from '@/assets/cafe-hero.jpg';
export function Hero() {
  const {
    t
  } = useLanguage();
  const phoneNumber = BUSINESS_CONFIG.phone;
  return <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background with real café photo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105" style={{
        backgroundImage: `url('${cafeExterior}')`
      }} role="img" aria-label="Café Tingis exterior showcasing historic Moroccan café architecture" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Welcome Badge */}
        <div className="inline-block mb-6 animate-fade-in" style={{
        animationDelay: '0.2s'
      }}>
          <span className="inline-flex items-center gap-2 px-5 py-2.5 border border-primary/40 rounded-full text-primary text-sm uppercase tracking-widest bg-primary/5 backdrop-blur-sm shadow-lg shadow-primary/10">
            {t.hero.welcome}
          </span>
        </div>

        {/* Main Title */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-foreground mb-4 animate-fade-in drop-shadow-2xl" style={{
        animationDelay: '0.4s'
      }}>
          {t.hero.title}
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-foreground/80 mb-3 animate-fade-in" style={{
        animationDelay: '0.6s'
      }}>
          {t.hero.subtitle}
        </p>

        {/* Emotional Subheadline */}
        <p className="text-lg md:text-xl text-primary/90 mb-10 max-w-2xl mx-auto animate-fade-in" style={{
        animationDelay: '0.7s'
      }}>
          {t.hero.emotionalSubtitle}
        </p>

        {/* CTA Buttons - 3 action buttons - Improved mobile UX */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-16 animate-fade-in px-4" style={{
        animationDelay: '0.8s'
      }}>
          {/* Call Now - Primary */}
          <a href={`tel:${phoneNumber}`} className="flex items-center gap-2 px-7 sm:px-9 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-gold-dark transition-all duration-300 w-full sm:w-auto sm:min-w-[180px] justify-center text-base sm:text-lg shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0">
            <Phone size={18} className="sm:w-5 sm:h-5" aria-hidden="true" />
            {t.hero.callNow}
          </a>

          {/* Reserve Table - Secondary */}
          <button onClick={() => scrollToSection('#reservation')} className="px-7 sm:px-9 py-4 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 w-full sm:w-auto sm:min-w-[180px] text-base sm:text-lg hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5 active:translate-y-0">
            {t.hero.reserveTable}
          </button>

          {/* Our Location - Tertiary */}
          <button onClick={() => scrollToSection('#contact')} className="flex items-center gap-2 px-7 sm:px-9 py-4 border border-foreground/30 text-foreground rounded-full font-medium hover:border-primary hover:text-primary transition-all duration-300 w-full sm:w-auto sm:min-w-[180px] justify-center text-base sm:text-lg hover:-translate-y-0.5 active:translate-y-0">
            <MapPin size={18} className="sm:w-5 sm:h-5" aria-hidden="true" />
            {t.hero.ourLocation}
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 md:gap-8 max-w-lg mx-auto animate-fade-in px-4" style={{
        animationDelay: '1s'
      }}>
          <div className="text-center p-4">
            <div className="font-display text-4xl md:text-5xl text-primary mb-1 drop-shadow-lg">83+</div>
            <div className="text-xs md:text-sm text-foreground/60 uppercase tracking-wider leading-tight">
              {t.hero.yearsLabel}
            </div>
          </div>
          <div className="text-center p-4 border-l border-r border-foreground/10">
            <div className="font-display text-4xl md:text-5xl text-primary mb-1 drop-shadow-lg">1940</div>
            <div className="text-xs md:text-sm text-foreground/60 uppercase tracking-wider leading-tight">
              {t.hero.foundedLabel}
            </div>
          </div>
          <div className="text-center p-4">
            <div className="font-display text-4xl md:text-5xl text-primary mb-1 drop-shadow-lg">∞</div>
            <div className="text-xs md:text-sm text-foreground/60 uppercase tracking-wider leading-tight">
              {t.hero.momentsLabel}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        
      </div>
    </section>;
}