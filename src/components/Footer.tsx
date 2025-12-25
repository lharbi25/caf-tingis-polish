import { MapPin, Clock, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="py-16 border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <h3 className="font-display text-3xl text-primary mb-4">Café Tingis</h3>
            <p className="text-foreground/60 leading-relaxed">
              {t.footer.address}
            </p>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-medium text-foreground mb-4 flex items-center gap-2">
              <Clock size={18} className="text-primary" />
              {t.footer.hours}
            </h4>
            <p className="text-foreground/60">{t.footer.hoursValue}</p>
            <p className="text-foreground/60 text-sm mt-1">7 jours / 7</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium text-foreground mb-4 flex items-center gap-2">
              <Phone size={18} className="text-primary" />
              {t.footer.contact}
            </h4>
            <a
              href="https://wa.me/212600000000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-gold-light transition-colors"
            >
              +212 6 00 00 00 00
            </a>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mb-12 rounded-lg overflow-hidden border border-border/30">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3236.5!2d-5.8135!3d35.7854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQ3JzA3LjQiTiA1wrA0OCc0OC42Ilc!5e0!3m2!1sfr!2sma!4v1"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Café Tingis Location"
            className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          />
        </div>

        {/* Copyright */}
        <div className="text-center text-foreground/50 text-sm">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
}