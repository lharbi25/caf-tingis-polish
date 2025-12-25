import { useState } from 'react';
import { Coffee, Leaf, UtensilsCrossed } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

type Category = 'coffee' | 'tea' | 'food';

interface MenuItem {
  name: string;
  desc: string;
  price: string;
}

export function MenuSection() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<Category>('coffee');

  const categories = [
    { id: 'coffee' as Category, label: t.menu.categoryCoffe, icon: Coffee },
    { id: 'tea' as Category, label: t.menu.categoryTea, icon: Leaf },
    { id: 'food' as Category, label: t.menu.categoryFood, icon: UtensilsCrossed },
  ];

  const menuItems: Record<Category, MenuItem[]> = {
    coffee: [
      { name: t.menu.items.espresso.name, desc: t.menu.items.espresso.desc, price: '12 DH' },
      { name: t.menu.items.nousNous.name, desc: t.menu.items.nousNous.desc, price: '10 DH' },
      { name: t.menu.items.cappuccino.name, desc: t.menu.items.cappuccino.desc, price: '18 DH' },
      { name: t.menu.items.cafeAuLait.name, desc: t.menu.items.cafeAuLait.desc, price: '15 DH' },
    ],
    tea: [
      { name: t.menu.items.theMenthe.name, desc: t.menu.items.theMenthe.desc, price: '12 DH' },
      { name: t.menu.items.theVert.name, desc: t.menu.items.theVert.desc, price: '10 DH' },
      { name: t.menu.items.infusion.name, desc: t.menu.items.infusion.desc, price: '15 DH' },
    ],
    food: [
      { name: t.menu.items.msemen.name, desc: t.menu.items.msemen.desc, price: '8 DH' },
      { name: t.menu.items.baghrir.name, desc: t.menu.items.baghrir.desc, price: '10 DH' },
      { name: t.menu.items.harcha.name, desc: t.menu.items.harcha.desc, price: '8 DH' },
    ],
  };

  return (
    <section id="menu" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            {t.menu.sectionTitle}
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            {t.menu.sectionSubtitle}
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6" />
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-2 md:gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 md:px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-foreground/70 hover:bg-secondary/80 hover:text-foreground'
                }`}
              >
                <Icon size={18} />
                <span className="hidden sm:inline">{category.label}</span>
              </button>
            );
          })}
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {menuItems[activeCategory].map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-start p-6 bg-secondary/30 rounded-lg border border-border/30 hover:border-primary/30 transition-colors duration-300"
            >
              <div className="flex-1">
                <h3 className="font-display text-xl text-foreground mb-1">{item.name}</h3>
                <p className="text-foreground/60 text-sm">{item.desc}</p>
              </div>
              <div className="font-display text-xl text-primary ml-4">{item.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}