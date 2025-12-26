import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ContactStrip } from '@/components/ContactStrip';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { History } from '@/components/History';
import { MenuSection } from '@/components/MenuSection';
import { Gallery } from '@/components/Gallery';
import { Testimonials } from '@/components/Testimonials';
import { Reservation } from '@/components/Reservation';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ContactStrip />
      <WhyChooseUs />
      <History />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      <MenuSection />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      <Gallery />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      <Testimonials />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      <Reservation />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
