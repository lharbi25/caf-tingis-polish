import { MapPin, Clock, Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { BUSINESS_CONFIG } from '@/lib/constants';

export function Footer() {
  const { t } = useLanguage();

  const phoneNumber = BUSINESS_CONFIG.phone;

  return (
    <footer id="contact" className="py-16 border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Address */}
          <div>
            <h3 className="font-display text-3xl text-primary mb-4">Café Tingis</h3>
            <div className="flex items-start gap-3 text-foreground/70">
              <MapPin size={20} className="text-primary mt-1 shrink-0" />
              <p className="leading-relaxed">{t.footer.address}</p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-medium text-foreground mb-4 flex items-center gap-2">
              <Clock size={18} className="text-primary" />
              {t.footer.hours}
            </h4>
            <p className="text-foreground/70 text-2xl font-display mb-1">{t.footer.hoursValue}</p>
            <p className="text-primary text-sm">{t.footer.openDaily}</p>
          </div>

          {/* Contact - Large clickable buttons */}
          <div>
            <h4 className="font-medium text-foreground mb-4 flex items-center gap-2">
              <Phone size={18} className="text-primary" />
              {t.footer.contact}
            </h4>

            {/* Phone Button */}
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-3 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-lg px-4 py-3 mb-3 transition-all duration-300 hover:shadow-md hover:shadow-primary/5 group"
            >
              <Phone size={20} className="text-primary" />
              <span className="text-foreground group-hover:text-primary transition-colors">
                +212 5XX XXX XXX
              </span>
            </a>

            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/${phoneNumber.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 rounded-lg px-4 py-3 transition-all duration-300 hover:shadow-md hover:shadow-green-500/5 group"
            >
              <MessageCircle size={20} className="text-green-500" />
              <span className="text-foreground group-hover:text-green-500 transition-colors">
                WhatsApp
              </span>
            </a>
          </div>
        </div>

        {/* Map - Larger and more prominent */}
        <div className="mb-12 rounded-xl overflow-hidden border border-border/30 shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3236.5!2d-5.8135!3d35.7854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQ3JzA3LjQiTiA1wrA0OCc0OC42Ilc!5e0!3m2!1sfr!2sma!4v1"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Café Tingis Location"
            className="grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
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
