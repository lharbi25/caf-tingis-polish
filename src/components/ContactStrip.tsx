import { MapPin, Phone, Clock, MessageCircle, Map } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function ContactStrip() {
  const { t } = useLanguage();

  const phoneNumber = '+212600000000'; // Placeholder - update with real number

  return (
    <section className="bg-primary/10 border-y border-primary/20 py-5 md:py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 items-center">
          {/* Address */}
          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors">
            <div className="bg-primary/20 p-2 rounded-full shrink-0">
              <MapPin className="text-primary" size={18} />
            </div>
            <span className="text-foreground/80 text-sm leading-tight">{t.contactStrip.address}</span>
          </div>

          {/* Phone - Clickable */}
          <a
            href={`tel:${phoneNumber}`}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors group"
          >
            <div className="bg-primary/20 p-2 rounded-full shrink-0 group-hover:bg-primary/30 transition-colors">
              <Phone className="text-primary" size={18} />
            </div>
            <span className="text-foreground/80 text-sm group-hover:text-primary transition-colors">{t.contactStrip.phone}</span>
          </a>

          {/* Hours */}
          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors">
            <div className="bg-primary/20 p-2 rounded-full shrink-0">
              <Clock className="text-primary" size={18} />
            </div>
            <span className="text-foreground/80 text-sm font-medium">{t.contactStrip.hoursValue}</span>
          </div>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${phoneNumber.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg bg-green-500/10 hover:bg-green-500/20 transition-colors group"
          >
            <div className="bg-green-500/20 p-2 rounded-full shrink-0 group-hover:bg-green-500/30 transition-colors">
              <MessageCircle className="text-green-500" size={18} />
            </div>
            <span className="text-foreground/80 text-sm group-hover:text-green-600 transition-colors font-medium">{t.contactStrip.whatsapp}</span>
          </a>

          {/* Map Link */}
          <a
            href="https://maps.google.com/?q=Petit+Socco+Tangier+Morocco"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors group col-span-2 md:col-span-1"
          >
            <div className="bg-primary/20 p-2 rounded-full shrink-0 group-hover:bg-primary/30 transition-colors">
              <Map className="text-primary" size={18} />
            </div>
            <span className="text-foreground/80 text-sm group-hover:text-primary transition-colors">{t.contactStrip.viewMap}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
