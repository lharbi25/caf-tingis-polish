import { useLanguage } from '@/contexts/LanguageContext';
import { Camera } from 'lucide-react';
import cafeExterior1 from '@/assets/cafe-exterior-1.jpg';
import cafeMain from '@/assets/cafe-main.jpg';
import cafeDetail1 from '@/assets/cafe-detail-1.jpg';
import cafeDetail2 from '@/assets/cafe-detail-2.jpg';
import cafeDetail3 from '@/assets/cafe-detail-3.jpg';
import cafeDetail4 from '@/assets/cafe-detail-4.jpg';
import cafeBar from '@/assets/cafe-bar.jpg';
import cafeTerrace from '@/assets/cafe-terrace.jpg';

export function Gallery() {
  const { t, language } = useLanguage();

  const images = [
    {
      src: cafeExterior1,
      alt: language === 'ar' ? 'واجهة المقهى' : language === 'fr' ? 'Façade du café' : 'Café exterior',
    },
    {
      src: cafeDetail1,
      alt: language === 'ar' ? 'أتاي بالنعناع' : language === 'fr' ? 'Thé à la menthe' : 'Mint tea',
    },
    {
      src: cafeBar,
      alt: language === 'ar' ? 'البار والقهوة' : language === 'fr' ? 'Le bar et café' : 'Bar and coffee',
      featured: true,
    },
    {
      src: cafeDetail2,
      alt: language === 'ar' ? 'تفاصيل المقهى' : language === 'fr' ? 'Détails du café' : 'Café details',
    },
    {
      src: cafeMain,
      alt: language === 'ar' ? 'داخل المقهى' : language === 'fr' ? 'Intérieur du café' : 'Café interior',
    },
    {
      src: cafeTerrace,
      alt: language === 'ar' ? 'شرفة مقهى طنجيس' : language === 'fr' ? 'Terrasse Café Tingis' : 'Café Tingis terrace',
    },
    {
      src: cafeDetail3,
      alt: language === 'ar' ? 'القهوة' : language === 'fr' ? 'Le café' : 'Coffee',
    },
    {
      src: cafeDetail4,
      alt: language === 'ar' ? 'أجواء المقهى' : language === 'fr' ? 'Ambiance' : 'Atmosphere',
    },
  ];

  return (
    <section id="gallery" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            {t.gallery.sectionTitle}
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            {t.gallery.sectionSubtitle}
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6" />
          
          {/* Real Photos Badge */}
          <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
            <Camera size={16} className="text-primary" />
            <span className="text-primary text-sm font-medium">{t.gallery.realPhotos}</span>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-lg group cursor-pointer ${
                image.featured ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div className="aspect-square w-full h-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
