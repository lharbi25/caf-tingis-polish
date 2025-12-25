export type Language = 'fr' | 'en' | 'ar';

export interface Translations {
  nav: {
    home: string;
    history: string;
    menu: string;
    gallery: string;
    contact: string;
    reserve: string;
    callNow: string;
  };
  hero: {
    welcome: string;
    title: string;
    subtitle: string;
    emotionalSubtitle: string;
    callNow: string;
    reserveTable: string;
    ourLocation: string;
    yearsLabel: string;
    foundedLabel: string;
    momentsLabel: string;
    scrollDown: string;
  };
  contactStrip: {
    address: string;
    phone: string;
    hours: string;
    hoursValue: string;
    whatsapp: string;
    viewMap: string;
  };
  whyChoose: {
    sectionTitle: string;
    sectionSubtitle: string;
    reason1: { title: string; desc: string };
    reason2: { title: string; desc: string };
    reason3: { title: string; desc: string };
    reason4: { title: string; desc: string };
    reason5: { title: string; desc: string };
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
    realPhotos: string;
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
    orCall: string;
  };
  footer: {
    address: string;
    hours: string;
    hoursValue: string;
    contact: string;
    copyright: string;
    openDaily: string;
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
      callNow: 'Appeler',
    },
    hero: {
      welcome: 'Depuis 1940',
      title: 'Café Tingis',
      subtitle: 'Au cœur de la Médina de Tanger',
      emotionalSubtitle: 'Un lieu de rencontre, de partage et de traditions',
      callNow: 'Appeler maintenant',
      reserveTable: 'Réserver une table',
      ourLocation: 'Notre emplacement',
      yearsLabel: 'Ans',
      foundedLabel: 'Fondation',
      momentsLabel: 'Moments',
      scrollDown: 'Défiler vers le bas',
    },
    contactStrip: {
      address: 'Petit Socco, Médina de Tanger',
      phone: '+212 5XX XXX XXX',
      hours: 'Horaires',
      hoursValue: '07:00 - 23:00',
      whatsapp: 'WhatsApp',
      viewMap: 'Voir sur la carte',
    },
    whyChoose: {
      sectionTitle: 'Pourquoi Café Tingis?',
      sectionSubtitle: 'Ce qui nous rend unique',
      reason1: { title: 'Café Traditionnel', desc: 'Nous-nous, espresso et café au lait préparés avec soin' },
      reason2: { title: 'Ambiance Tangéroise', desc: "L'authenticité du Petit Socco depuis 1940" },
      reason3: { title: 'Confort Simple', desc: 'Une terrasse agréable pour se détendre' },
      reason4: { title: 'Emplacement Idéal', desc: 'Au cœur de la Médina historique' },
      reason5: { title: 'Accueil Chaleureux', desc: 'Un café de quartier où tout le monde se sent chez soi' },
    },
    history: {
      sectionTitle: 'Notre Histoire',
      sectionSubtitle: 'Plus de 80 ans de tradition et de convivialité',
      paragraph1: "Café Tingis est un lieu simple et authentique au cœur de la Médina. Depuis 1940, nous accueillons voisins et visiteurs avec un sourire et un verre de thé.",
      paragraph2: "Au fil des décennies, notre établissement a vu passer artistes, écrivains et Tangérois de toutes générations. Chaque tasse servie ici porte l'empreinte de cette histoire.",
      paragraph3: "Aujourd'hui, nous continuons cette tradition d'hospitalité, offrant une expérience authentique du café marocain.",
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
      realPhotos: 'Photos réelles de notre café',
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
      orCall: 'Ou appelez-nous directement',
    },
    footer: {
      address: 'Petit Socco, Médina de Tanger, Maroc',
      hours: 'Horaires',
      hoursValue: '07:00 - 23:00',
      contact: 'Contact',
      copyright: '© 2024 Café Tingis. Tous droits réservés.',
      openDaily: 'Ouvert 7j/7',
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
      callNow: 'Call',
    },
    hero: {
      welcome: 'Since 1940',
      title: 'Café Tingis',
      subtitle: 'In the heart of Tangier Medina',
      emotionalSubtitle: 'A place for gathering, sharing and traditions',
      callNow: 'Call Now',
      reserveTable: 'Reserve a Table',
      ourLocation: 'Our Location',
      yearsLabel: 'Years',
      foundedLabel: 'Founded',
      momentsLabel: 'Moments',
      scrollDown: 'Scroll down',
    },
    contactStrip: {
      address: 'Petit Socco, Tangier Medina',
      phone: '+212 5XX XXX XXX',
      hours: 'Hours',
      hoursValue: '07:00 - 23:00',
      whatsapp: 'WhatsApp',
      viewMap: 'View on map',
    },
    whyChoose: {
      sectionTitle: 'Why Café Tingis?',
      sectionSubtitle: 'What makes us unique',
      reason1: { title: 'Traditional Coffee', desc: 'Nous-nous, espresso and café au lait made with care' },
      reason2: { title: 'Tangier Atmosphere', desc: 'Petit Socco authenticity since 1940' },
      reason3: { title: 'Simple Comfort', desc: 'A pleasant terrace to relax' },
      reason4: { title: 'Prime Location', desc: 'In the heart of the historic Medina' },
      reason5: { title: 'Warm Welcome', desc: 'A neighborhood café where everyone feels at home' },
    },
    history: {
      sectionTitle: 'Our History',
      sectionSubtitle: 'More than 80 years of tradition and warmth',
      paragraph1: "Café Tingis is a simple and authentic place in the heart of the Medina. Since 1940, we welcome neighbors and visitors with a smile and a glass of tea.",
      paragraph2: "Over the decades, our establishment has seen artists, writers, and Tangier locals of all generations. Every cup served here carries the imprint of this history.",
      paragraph3: "Today, we continue this tradition of hospitality, offering an authentic Moroccan coffee experience.",
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
      realPhotos: 'Real photos of our café',
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
      orCall: 'Or call us directly',
    },
    footer: {
      address: 'Petit Socco, Medina of Tangier, Morocco',
      hours: 'Hours',
      hoursValue: '07:00 - 23:00',
      contact: 'Contact',
      copyright: '© 2024 Café Tingis. All rights reserved.',
      openDaily: 'Open 7 days a week',
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
      callNow: 'اتصل',
    },
    hero: {
      welcome: 'منذ 1940',
      title: 'مقهى طنجيس',
      subtitle: 'في قلب المدينة القديمة بطنجة',
      emotionalSubtitle: 'مكان للراحة والأصدقاء والتقاليد',
      callNow: 'اتصل الآن',
      reserveTable: 'احجز طاولتك',
      ourLocation: 'موقعنا',
      yearsLabel: 'سنة',
      foundedLabel: 'التأسيس',
      momentsLabel: 'لحظات',
      scrollDown: 'انزل للأسفل',
    },
    contactStrip: {
      address: 'البيتي سوكو، المدينة القديمة، طنجة',
      phone: '+212 5XX XXX XXX',
      hours: 'ساعات العمل',
      hoursValue: '07:00 - 23:00',
      whatsapp: 'واتساب',
      viewMap: 'اعرض على الخريطة',
    },
    whyChoose: {
      sectionTitle: 'لماذا مقهى طنجيس؟',
      sectionSubtitle: 'ما يميزنا',
      reason1: { title: 'قهوة تقليدية', desc: 'نص نص، إسبريسو وقهوة بالحليب محضرة بعناية' },
      reason2: { title: 'أجواء طنجاوية', desc: 'أصالة البيتي سوكو منذ 1940' },
      reason3: { title: 'جلسة مريحة', desc: 'شرفة لطيفة للاسترخاء' },
      reason4: { title: 'موقع ممتاز', desc: 'في قلب المدينة القديمة التاريخية' },
      reason5: { title: 'استقبال حار', desc: 'مقهى الحي حيث يشعر الجميع بأنهم في بيتهم' },
    },
    history: {
      sectionTitle: 'تاريخنا',
      sectionSubtitle: 'أكثر من 80 عامًا من التقاليد والود',
      paragraph1: "مقهى طنجيس مكان بسيط وأصيل في قلب المدينة القديمة. منذ 1940، نستقبل الجيران والزوار بابتسامة وكأس شاي.",
      paragraph2: "على مر العقود، استقبل مقهانا الفنانين والكتاب وأبناء طنجة من جميع الأجيال. كل فنجان يُقدم هنا يحمل بصمة هذا التاريخ.",
      paragraph3: "اليوم، نواصل تقليد الضيافة، مقدمين تجربة قهوة مغربية أصيلة.",
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
        theMenthe: { name: 'أتاي بالنعناع', desc: 'شاي أخضر بالنعناع الطازج' },
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
      realPhotos: 'صور حقيقية من مقهانا',
    },
    testimonials: {
      sectionTitle: 'آراء الزوار',
      sectionSubtitle: 'ماذا يقول زبائننا',
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
      orCall: 'أو اتصل بنا مباشرة',
    },
    footer: {
      address: 'البيتي سوكو، المدينة القديمة، طنجة، المغرب',
      hours: 'ساعات العمل',
      hoursValue: '07:00 - 23:00',
      contact: 'اتصل بنا',
      copyright: '© 2024 مقهى طنجيس. جميع الحقوق محفوظة.',
      openDaily: 'مفتوح كل يوم',
    },
  },
};
