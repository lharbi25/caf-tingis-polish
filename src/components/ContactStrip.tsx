import { MapPin, Phone, Clock, MessageCircle, Map } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function ContactStrip() {
  const { t } = useLanguage();

  const phoneNumber = '+212600000000'; // Placeholder - update with real number

  return (
    <section className="bg-primary/10 border-y border-primary/20 py-4 md:py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 items-center text-center md:text-left">
          {/* Address */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-2">
            <MapPin className="text-primary shrink-0" size={20} />
            <span className="text-foreground/80 text-sm">{t.contactStrip.address}</span>
          </div>

          {/* Phone - Clickable */}
          <a
            href={`tel:${phoneNumber}`}
            className="flex flex-col md:flex-row items-center md:items-start gap-2 hover:text-primary transition-colors group"
          >
            <Phone className="text-primary shrink-0 group-hover:scale-110 transition-transform" size={20} />
            <span className="text-foreground/80 text-sm group-hover:text-primary">{t.contactStrip.phone}</span>
          </a>

          {/* Hours */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-2">
            <Clock className="text-primary shrink-0" size={20} />
            <span className="text-foreground/80 text-sm">{t.contactStrip.hoursValue}</span>
          </div>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${phoneNumber.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col md:flex-row items-center md:items-start gap-2 hover:text-primary transition-colors group"
          >
            <MessageCircle className="text-green-500 shrink-0 group-hover:scale-110 transition-transform" size={20} />
            <span className="text-foreground/80 text-sm group-hover:text-primary">{t.contactStrip.whatsapp}</span>
          </a>

          {/* Map Link */}
          <a
            href="https://maps.google.com/?q=Petit+Socco+Tangier+Morocco"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col md:flex-row items-center md:items-start gap-2 hover:text-primary transition-colors group col-span-2 md:col-span-1"
          >
            <Map className="text-primary shrink-0 group-hover:scale-110 transition-transform" size={20} />
            <span className="text-foreground/80 text-sm group-hover:text-primary">{t.contactStrip.viewMap}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
