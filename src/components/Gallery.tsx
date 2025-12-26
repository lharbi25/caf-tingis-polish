import { useLanguage } from '@/contexts/LanguageContext';
import { Camera } from 'lucide-react';
import cafeInteriorNew from '@/assets/cafe-interior-new.jpg';
import cafeMain from '@/assets/cafe-main.jpg';
import cafeDetail1 from '@/assets/cafe-detail-1.jpg';
import cafeBar from '@/assets/cafe-bar.jpg';
import cafeTerrace from '@/assets/cafe-terrace.jpg';

export function Gallery() {
  const { t, language } = useLanguage();

  const images = [
    {
      src: cafeInteriorNew,
      alt: language === 'ar' 
        ? 'داخل مقهى طنجيس مع الديكور المغربي التقليدي والإضاءة الدافئة' 
        : language === 'fr' 
        ? 'Intérieur de Café Tingis avec décor marocain traditionnel et éclairage chaleureux' 
        : 'Café Tingis interior with traditional Moroccan décor and warm lighting',
    },
    {
      src: cafeDetail1,
      alt: language === 'ar' 
        ? 'أتاي بالنعناع الطازج يقدم في كأس تقليدي' 
        : language === 'fr' 
        ? 'Thé à la menthe fraîche servi dans un verre traditionnel' 
        : 'Fresh mint tea served in traditional glass',
    },
    {
      src: cafeBar,
      alt: language === 'ar' 
        ? 'البار والقهوة مع آلة الإسبريسو التقليدية' 
        : language === 'fr' 
        ? 'Le bar et café avec machine à espresso traditionnelle' 
        : 'Bar and coffee counter with traditional espresso machine',
      featured: true,
    },
    {
      src: cafeMain,
      alt: language === 'ar' 
        ? 'داخل المقهى يُظهر المقاعد والأجواء المريحة' 
        : language === 'fr' 
        ? 'Intérieur du café montrant les sièges et l\'ambiance confortable' 
        : 'Café interior showing seating area and comfortable ambiance',
    },
    {
      src: cafeTerrace,
      alt: language === 'ar' 
        ? 'شرفة مقهى طنجيس بإطلالة على المدينة القديمة' 
        : language === 'fr' 
        ? 'Terrasse de Café Tingis avec vue sur la médina' 
        : 'Café Tingis terrace with view of the medina',
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-lg group cursor-pointer ${
                image.featured ? 'sm:col-span-2 md:col-span-2 md:row-span-2' : ''
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
