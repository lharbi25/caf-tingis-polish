export type Language = 'fr' | 'en' | 'ar';

export interface Translations {
  nav: {
    home: string;
    history: string;
    menu: string;
    gallery: string;
    contact: string;
    reserve: string;
  };
  hero: {
    welcome: string;
    title: string;
    subtitle: string;
    discoverMenu: string;
    ourHistory: string;
    yearsLabel: string;
    foundedLabel: string;
    momentsLabel: string;
    scrollDown: string;
  };
  history: {
    sectionTitle: string;
    sectionSubtitle: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    timeline: {
      year1: string;
      desc1: string;
      year2: string;
      desc2: string;
      year3: string;
      desc3: string;
      year4: string;
      desc4: string;
    };
  };
  menu: {
    sectionTitle: string;
    sectionSubtitle: string;
    categoryCoffe: string;
    categoryTea: string;
    categoryFood: string;
    items: {
      espresso: { name: string; desc: string };
      nousNous: { name: string; desc: string };
      cappuccino: { name: string; desc: string };
      cafeAuLait: { name: string; desc: string };
      theMenthe: { name: string; desc: string };
      theVert: { name: string; desc: string };
      infusion: { name: string; desc: string };
      msemen: { name: string; desc: string };
      baghrir: { name: string; desc: string };
      harcha: { name: string; desc: string };
    };
  };
  gallery: {
    sectionTitle: string;
    sectionSubtitle: string;
  };
  testimonials: {
    sectionTitle: string;
    sectionSubtitle: string;
  };
  reservation: {
    sectionTitle: string;
    sectionSubtitle: string;
    name: string;
    phone: string;
    email: string;
    guests: string;
    date: string;
    time: string;
    submit: string;
    orWhatsApp: string;
    whatsAppButton: string;
  };
  footer: {
    address: string;
    hours: string;
    hoursValue: string;
    contact: string;
    copyright: string;
  };
}

export const translations: Record<Language, Translations> = {
  fr: {
    nav: {
      home: 'Accueil',
      history: 'Notre Histoire',
      menu: 'Menu',
      gallery: 'Galerie',
      contact: 'Contact',
      reserve: 'Réserver',
    },
    hero: {
      welcome: 'Bienvenue',
      title: 'Café Tingis',
      subtitle: "Savourez l'héritage du café marocain",
      discoverMenu: 'Découvrir le Menu',
      ourHistory: 'Notre Histoire',
      yearsLabel: 'Ans',
      foundedLabel: 'Fondation',
      momentsLabel: 'Moments',
      scrollDown: 'Défiler vers le bas',
    },
    history: {
      sectionTitle: 'Notre Histoire',
      sectionSubtitle: "Plus de 80 ans d'histoire et de passion",
      paragraph1: "Fondé en 1940 au cœur du Petit Socco, Café Tingis est bien plus qu'un simple café. C'est un témoin vivant de l'histoire de Tanger, une ville carrefour entre l'Europe et l'Afrique.",
      paragraph2: "Au fil des décennies, notre établissement a accueilli des artistes, des écrivains, des voyageurs et des Tangérois de toutes générations. Chaque tasse de café servie ici porte l'empreinte de cette riche histoire.",
      paragraph3: "Aujourd'hui, nous perpétuons cette tradition d'excellence et d'hospitalité, offrant à nos visiteurs une expérience authentique du café marocain dans un cadre chargé d'histoire.",
      timeline: {
        year1: '1940',
        desc1: "Ouverture du café au Petit Socco",
        year2: '1965',
        desc2: "Devient un lieu de rencontre pour artistes",
        year3: '1992',
        desc3: "Rénovation préservant le caractère historique",
        year4: '2024',
        desc4: "83 ans de service continu",
      },
    },
    menu: {
      sectionTitle: 'Notre Menu',
      sectionSubtitle: 'Une sélection de saveurs authentiques',
      categoryCoffe: 'Cafés',
      categoryTea: 'Thés & Infusions',
      categoryFood: 'Restauration',
      items: {
        espresso: { name: 'Espresso', desc: 'Café corsé traditionnel' },
        nousNous: { name: 'Nous-Nous', desc: 'Moitié café, moitié lait' },
        cappuccino: { name: 'Cappuccino', desc: 'Espresso avec mousse de lait' },
        cafeAuLait: { name: 'Café au Lait', desc: 'Café allongé au lait chaud' },
        theMenthe: { name: 'Thé à la Menthe', desc: 'Thé vert à la menthe fraîche' },
        theVert: { name: 'Thé Vert', desc: 'Thé vert nature' },
        infusion: { name: 'Infusion', desc: 'Verveine, camomille ou thym' },
        msemen: { name: 'Msemen', desc: 'Crêpe feuilletée traditionnelle' },
        baghrir: { name: 'Baghrir', desc: 'Crêpe mille trous au miel' },
        harcha: { name: 'Harcha', desc: 'Galette de semoule' },
      },
    },
    gallery: {
      sectionTitle: 'Galerie',
      sectionSubtitle: 'Découvrez notre univers',
    },
    testimonials: {
      sectionTitle: 'Témoignages',
      sectionSubtitle: 'Ce que disent nos visiteurs',
    },
    reservation: {
      sectionTitle: 'Réservation',
      sectionSubtitle: 'Réservez votre table',
      name: 'Nom complet',
      phone: 'Téléphone',
      email: 'Email',
      guests: 'Nombre de personnes',
      date: 'Date',
      time: 'Heure',
      submit: 'Réserver',
      orWhatsApp: 'Ou réservez via',
      whatsAppButton: 'WhatsApp',
    },
    footer: {
      address: 'Petit Socco, Médina de Tanger, Maroc',
      hours: 'Horaires',
      hoursValue: '07:00 - 23:00',
      contact: 'Contact',
      copyright: '© 2024 Café Tingis. Tous droits réservés.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      history: 'Our History',
      menu: 'Menu',
      gallery: 'Gallery',
      contact: 'Contact',
      reserve: 'Reserve',
    },
    hero: {
      welcome: 'Welcome',
      title: 'Café Tingis',
      subtitle: 'Savor the heritage of Moroccan coffee',
      discoverMenu: 'Discover Menu',
      ourHistory: 'Our History',
      yearsLabel: 'Years',
      foundedLabel: 'Founded',
      momentsLabel: 'Moments',
      scrollDown: 'Scroll down',
    },
    history: {
      sectionTitle: 'Our History',
      sectionSubtitle: 'More than 80 years of history and passion',
      paragraph1: "Founded in 1940 in the heart of Petit Socco, Café Tingis is more than just a café. It's a living witness to the history of Tangier, a crossroads city between Europe and Africa.",
      paragraph2: "Over the decades, our establishment has welcomed artists, writers, travelers, and Tangier locals of all generations. Every cup of coffee served here carries the imprint of this rich history.",
      paragraph3: "Today, we continue this tradition of excellence and hospitality, offering our visitors an authentic Moroccan coffee experience in a historically rich setting.",
      timeline: {
        year1: '1940',
        desc1: "Opening at Petit Socco",
        year2: '1965',
        desc2: "Becomes a meeting place for artists",
        year3: '1992',
        desc3: "Renovation preserving historic character",
        year4: '2024',
        desc4: "83 years of continuous service",
      },
    },
    menu: {
      sectionTitle: 'Our Menu',
      sectionSubtitle: 'A selection of authentic flavors',
      categoryCoffe: 'Coffees',
      categoryTea: 'Teas & Infusions',
      categoryFood: 'Food',
      items: {
        espresso: { name: 'Espresso', desc: 'Traditional bold coffee' },
        nousNous: { name: 'Nous-Nous', desc: 'Half coffee, half milk' },
        cappuccino: { name: 'Cappuccino', desc: 'Espresso with milk foam' },
        cafeAuLait: { name: 'Café au Lait', desc: 'Coffee with hot milk' },
        theMenthe: { name: 'Mint Tea', desc: 'Green tea with fresh mint' },
        theVert: { name: 'Green Tea', desc: 'Plain green tea' },
        infusion: { name: 'Herbal Tea', desc: 'Verbena, chamomile or thyme' },
        msemen: { name: 'Msemen', desc: 'Traditional layered pancake' },
        baghrir: { name: 'Baghrir', desc: 'Honeycomb pancake with honey' },
        harcha: { name: 'Harcha', desc: 'Semolina flatbread' },
      },
    },
    gallery: {
      sectionTitle: 'Gallery',
      sectionSubtitle: 'Discover our world',
    },
    testimonials: {
      sectionTitle: 'Testimonials',
      sectionSubtitle: 'What our visitors say',
    },
    reservation: {
      sectionTitle: 'Reservation',
      sectionSubtitle: 'Book your table',
      name: 'Full name',
      phone: 'Phone',
      email: 'Email',
      guests: 'Number of guests',
      date: 'Date',
      time: 'Time',
      submit: 'Reserve',
      orWhatsApp: 'Or book via',
      whatsAppButton: 'WhatsApp',
    },
    footer: {
      address: 'Petit Socco, Medina of Tangier, Morocco',
      hours: 'Hours',
      hoursValue: '07:00 - 23:00',
      contact: 'Contact',
      copyright: '© 2024 Café Tingis. All rights reserved.',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      history: 'تاريخنا',
      menu: 'القائمة',
      gallery: 'المعرض',
      contact: 'اتصل بنا',
      reserve: 'احجز',
    },
    hero: {
      welcome: 'مرحبا بكم',
      title: 'مقهى تنجيس',
      subtitle: 'تذوق تراث القهوة المغربية',
      discoverMenu: 'اكتشف القائمة',
      ourHistory: 'تاريخنا',
      yearsLabel: 'سنة',
      foundedLabel: 'التأسيس',
      momentsLabel: 'لحظات',
      scrollDown: 'انزل للأسفل',
    },
    history: {
      sectionTitle: 'تاريخنا',
      sectionSubtitle: 'أكثر من 80 عامًا من التاريخ والشغف',
      paragraph1: "تأسس مقهى تنجيس عام 1940 في قلب البيتي سوكو، وهو أكثر من مجرد مقهى. إنه شاهد حي على تاريخ طنجة، المدينة الملتقى بين أوروبا وأفريقيا.",
      paragraph2: "على مر العقود، استقبل مقهانا الفنانين والكتاب والمسافرين وأبناء طنجة من جميع الأجيال. كل فنجان قهوة يُقدم هنا يحمل بصمة هذا التاريخ الغني.",
      paragraph3: "اليوم، نواصل تقليد التميز والضيافة، مقدمين لزوارنا تجربة قهوة مغربية أصيلة في إطار غني بالتاريخ.",
      timeline: {
        year1: '1940',
        desc1: "افتتاح المقهى في البيتي سوكو",
        year2: '1965',
        desc2: "يصبح ملتقى للفنانين",
        year3: '1992',
        desc3: "تجديد مع الحفاظ على الطابع التاريخي",
        year4: '2024',
        desc4: "83 عامًا من الخدمة المستمرة",
      },
    },
    menu: {
      sectionTitle: 'قائمتنا',
      sectionSubtitle: 'تشكيلة من النكهات الأصيلة',
      categoryCoffe: 'القهوة',
      categoryTea: 'الشاي والأعشاب',
      categoryFood: 'المأكولات',
      items: {
        espresso: { name: 'إسبريسو', desc: 'قهوة تقليدية قوية' },
        nousNous: { name: 'نص نص', desc: 'نصف قهوة، نصف حليب' },
        cappuccino: { name: 'كابتشينو', desc: 'إسبريسو مع رغوة الحليب' },
        cafeAuLait: { name: 'قهوة بالحليب', desc: 'قهوة بالحليب الساخن' },
        theMenthe: { name: 'شاي بالنعناع', desc: 'شاي أخضر بالنعناع الطازج' },
        theVert: { name: 'شاي أخضر', desc: 'شاي أخضر طبيعي' },
        infusion: { name: 'أعشاب', desc: 'لويزة، بابونج أو زعتر' },
        msemen: { name: 'مسمن', desc: 'فطيرة مورقة تقليدية' },
        baghrir: { name: 'بغرير', desc: 'فطيرة ألف ثقب بالعسل' },
        harcha: { name: 'حرشة', desc: 'خبز السميد' },
      },
    },
    gallery: {
      sectionTitle: 'المعرض',
      sectionSubtitle: 'اكتشف عالمنا',
    },
    testimonials: {
      sectionTitle: 'شهادات',
      sectionSubtitle: 'ماذا يقول زوارنا',
    },
    reservation: {
      sectionTitle: 'الحجز',
      sectionSubtitle: 'احجز طاولتك',
      name: 'الاسم الكامل',
      phone: 'الهاتف',
      email: 'البريد الإلكتروني',
      guests: 'عدد الأشخاص',
      date: 'التاريخ',
      time: 'الوقت',
      submit: 'احجز',
      orWhatsApp: 'أو احجز عبر',
      whatsAppButton: 'واتساب',
    },
    footer: {
      address: 'البيتي سوكو، مدينة طنجة القديمة، المغرب',
      hours: 'ساعات العمل',
      hoursValue: '07:00 - 23:00',
      contact: 'اتصل بنا',
      copyright: '© 2024 مقهى تنجيس. جميع الحقوق محفوظة.',
    },
  },
};