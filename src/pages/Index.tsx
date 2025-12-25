import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
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
      <History />
      <MenuSection />
      <Gallery />
      <Testimonials />
      <Reservation />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;