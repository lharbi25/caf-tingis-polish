import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/lib/i18n';
import { scrollToSection } from '@/lib/scroll-utils';
import { getLanguageName } from '@/lib/i18n-helpers';
import { BUSINESS_CONFIG } from '@/lib/constants';

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const phoneNumber = BUSINESS_CONFIG.phone;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#history', label: t.nav.history },
    { href: '#menu', label: t.nav.menu },
    { href: '#gallery', label: t.nav.gallery },
    { href: '#contact', label: t.nav.contact },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'fr', label: 'FR' },
    { code: 'en', label: 'EN' },
    { code: 'ar', label: 'ع' },
  ];

  const handleScrollToSection = (href: string) => {
    scrollToSection(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection('#home');
            }}
            className="font-display text-2xl md:text-3xl text-primary font-semibold tracking-wide"
          >
            Café Tingis
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection(link.href);
                }}
                className="text-foreground/80 hover:text-primary transition-colors duration-200 text-sm uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side - Language switcher + Call + Reserve button */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center gap-1 border border-border/50 rounded-full px-2 py-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-2 py-1 text-xs rounded-full transition-colors duration-200 ${
                    language === lang.code
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground/70 hover:text-foreground'
                  }`}
                  aria-label={`Switch to ${getLanguageName(lang.code)} language`}
                  aria-pressed={language === lang.code}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            {/* Call Button */}
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-2 text-primary hover:text-gold-light transition-colors"
            >
              <Phone size={18} />
              <span className="text-sm">{t.nav.callNow}</span>
            </a>

            {/* Reserve Button */}
            <a
              href="#reservation"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection('#reservation');
              }}
              className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-medium hover:bg-gold-dark transition-colors duration-200"
            >
              {t.nav.reserve}
            </a>
          </div>

          {/* Mobile - Call Button + Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            {/* Mobile Call Button - Always visible */}
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-1.5 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium"
            >
              <Phone size={16} />
              <span>{t.nav.callNow}</span>
            </a>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground p-2"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border/30">
            <nav className="flex flex-col py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToSection(link.href);
                  }}
                  className="px-4 py-3 text-foreground/80 hover:text-primary hover:bg-secondary/50 transition-colors duration-200 text-lg"
                >
                  {link.label}
                </a>
              ))}
              
              {/* Language Switcher Mobile */}
              <div className="flex items-center gap-2 px-4 py-3 border-t border-border/30 mt-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`px-4 py-2 text-sm rounded-full transition-colors duration-200 ${
                      language === lang.code
                        ? 'bg-primary text-primary-foreground'
                        : 'border border-border text-foreground/70 hover:text-foreground'
                    }`}
                    aria-label={`Switch to ${getLanguageName(lang.code)} language`}
                    aria-pressed={language === lang.code}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>

              {/* Reserve Button Mobile */}
              <div className="px-4 pt-3">
                <a
                  href="#reservation"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToSection('#reservation');
                  }}
                  className="block w-full text-center bg-primary text-primary-foreground px-6 py-4 rounded-full font-medium text-lg"
                >
                  {t.nav.reserve}
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
