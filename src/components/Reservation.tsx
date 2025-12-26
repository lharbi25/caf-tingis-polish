import { useState } from 'react';
import { Calendar, Clock, Users, User, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { BUSINESS_CONFIG } from '@/lib/constants';

export function Reservation() {
  const { t, isRTL } = useLanguage();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    guests: '2',
    date: '',
    time: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Réservation envoyée!',
      description: 'Nous vous contacterons pour confirmer votre réservation.',
    });
    setFormData({
      name: '',
      phone: '',
      email: '',
      guests: '2',
      date: '',
      time: '',
    });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Bonjour, je souhaite réserver une table pour ${formData.guests} personnes.`
    );
    const whatsappNumber = BUSINESS_CONFIG.phone.replace(/\D/g, '');
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="reservation" className="pt-16 md:pt-0 py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            {t.reservation.sectionTitle}
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto leading-relaxed">
            {t.reservation.sectionSubtitle}
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full shadow-lg shadow-primary/20" />
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-5">
              {/* Name */}
              <div className="relative">
                <label htmlFor="name" className="sr-only">{t.reservation.name}</label>
                <User className={`absolute top-1/2 -translate-y-1/2 text-foreground/40 ${isRTL ? 'right-4' : 'left-4'}`} size={18} aria-hidden="true" />
                <input
                  id="name"
                  type="text"
                  required
                  placeholder={t.reservation.name}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full bg-background border border-border rounded-xl py-3.5 text-foreground placeholder:text-foreground/40 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 ${isRTL ? 'pr-12 pl-4' : 'pl-12 pr-4'}`}
                  aria-label={t.reservation.name}
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <label htmlFor="phone" className="sr-only">{t.reservation.phone}</label>
                <Phone className={`absolute top-1/2 -translate-y-1/2 text-foreground/40 ${isRTL ? 'right-4' : 'left-4'}`} size={18} aria-hidden="true" />
                <input
                  id="phone"
                  type="tel"
                  required
                  placeholder={t.reservation.phone}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`w-full bg-background border border-border rounded-xl py-3.5 text-foreground placeholder:text-foreground/40 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 ${isRTL ? 'pr-12 pl-4' : 'pl-12 pr-4'}`}
                  aria-label={t.reservation.phone}
                />
              </div>

              {/* Email */}
              <div className="relative">
                <label htmlFor="email" className="sr-only">{t.reservation.email}</label>
                <Mail className={`absolute top-1/2 -translate-y-1/2 text-foreground/40 ${isRTL ? 'right-4' : 'left-4'}`} size={18} aria-hidden="true" />
                <input
                  id="email"
                  type="email"
                  placeholder={t.reservation.email}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full bg-background border border-border rounded-xl py-3.5 text-foreground placeholder:text-foreground/40 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 ${isRTL ? 'pr-12 pl-4' : 'pl-12 pr-4'}`}
                  aria-label={t.reservation.email}
                />
              </div>

              {/* Guests */}
              <div className="relative">
                <label htmlFor="guests" className="sr-only">{t.reservation.guests}</label>
                <Users className={`absolute top-1/2 -translate-y-1/2 text-foreground/40 ${isRTL ? 'right-4' : 'left-4'}`} size={18} aria-hidden="true" />
                <select
                  id="guests"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className={`w-full bg-background border border-border rounded-xl py-3.5 text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 appearance-none cursor-pointer ${isRTL ? 'pr-12 pl-4' : 'pl-12 pr-4'}`}
                  aria-label={t.reservation.guests}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <option key={num} value={num}>
                      {num} {t.reservation.guests}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div className="relative">
                <label htmlFor="date" className="sr-only">Date</label>
                <Calendar className={`absolute top-1/2 -translate-y-1/2 text-foreground/40 ${isRTL ? 'right-4' : 'left-4'}`} size={18} aria-hidden="true" />
                <input
                  id="date"
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className={`w-full bg-background border border-border rounded-xl py-3.5 text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 ${isRTL ? 'pr-12 pl-4' : 'pl-12 pr-4'}`}
                  aria-label="Date"
                />
              </div>

              {/* Time */}
              <div className="relative">
                <label htmlFor="time" className="sr-only">Time</label>
                <Clock className={`absolute top-1/2 -translate-y-1/2 text-foreground/40 ${isRTL ? 'right-4' : 'left-4'}`} size={18} aria-hidden="true" />
                <input
                  id="time"
                  type="time"
                  required
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className={`w-full bg-background border border-border rounded-xl py-3.5 text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 ${isRTL ? 'pr-12 pl-4' : 'pl-12 pr-4'}`}
                  aria-label="Time"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-medium hover:bg-gold-dark transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              {t.reservation.submit}
            </button>
          </form>

          {/* WhatsApp Option */}
          <div className="mt-8 text-center">
            <p className="text-foreground/60 mb-4">{t.reservation.orWhatsApp}</p>
            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {t.reservation.whatsAppButton}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}