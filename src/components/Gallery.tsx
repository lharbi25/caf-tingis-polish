import { useLanguage } from '@/contexts/LanguageContext';

export function Gallery() {
  const { t } = useLanguage();

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600',
      alt: 'Coffee cup',
    },
    {
      src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=600',
      alt: 'Café interior',
    },
    {
      src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=600',
      alt: 'Coffee beans',
    },
    {
      src: 'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=600',
      alt: 'Mint tea',
    },
    {
      src: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600',
      alt: 'Coffee art',
    },
    {
      src: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=600',
      alt: 'Café atmosphere',
    },
    {
      src: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=600',
      alt: 'Traditional pastries',
    },
    {
      src: 'https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?q=80&w=600',
      alt: 'Coffee preparation',
    },
    {
      src: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=600',
      alt: 'Café scene',
    },
  ];

  return (
    <section id="gallery" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            {t.gallery.sectionTitle}
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            {t.gallery.sectionSubtitle}
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6" />
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg group cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}