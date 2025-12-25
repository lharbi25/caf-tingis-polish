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
      subtitle: 'Le cœur traditionnel de Tanger',
      emotionalSubtitle: 'Installez-vous, détendez-vous et savourez une ambiance inoubliable avec notre café authentique',
      callNow: 'Appelez maintenant',
      reserveTable: 'Réservez votre table',
      ourLocation: 'Trouvez-nous',
      yearsLabel: 'Ans',
      foundedLabel: 'Fondation',
      momentsLabel: 'Moments',
      scrollDown: 'Défiler vers le bas',
    },
    contactStrip: {
      address: 'Place du Petit Socco, Médina, Tanger',
      phone: '+212 5XX XXX XXX',
      hours: 'Horaires',
      hoursValue: '06:30 - 00:30 tous les jours',
      whatsapp: 'Contactez-nous sur WhatsApp',
      viewMap: 'Voir sur Google Maps',
    },
    whyChoose: {
      sectionTitle: 'Pourquoi Café Tingis?',
      sectionSubtitle: 'Ce qui nous rend unique',
      reason1: { title: 'Expérience Authentique', desc: 'Une expérience traditionnelle authentique au cœur de Tanger' },
      reason2: { title: 'Haute Qualité', desc: 'Café et boissons de haute qualité préparés avec soin' },
      reason3: { title: 'Espace Confortable', desc: 'Un lieu accueillant idéal pour les rencontres' },
      reason4: { title: 'Emplacement Central', desc: 'Facilement accessible dans la Médina historique' },
      reason5: { title: 'Ambiance Locale', desc: 'Une atmosphère authentique mêlant histoire et vie quotidienne' },
    },
    history: {
      sectionTitle: 'À propos de Café Tingis',
      sectionSubtitle: 'Plus de 80 ans d\'hospitalité et d\'authenticité',
      paragraph1: "Café Tingis est un café traditionnel au cœur de Tanger depuis 1940. Il allie ambiance historique et confort moderne.",
      paragraph2: "Ici, les visiteurs peuvent savourer un café authentique et des conversations chaleureuses avec les habitants et les touristes.",
      paragraph3: "Nous perpétuons la tradition de l'hospitalité marocaine authentique, où chaque tasse raconte une histoire de Tanger.",
      timeline: {
        year1: '1940',
        desc1: "Ouverture du café au Petit Socco",
        year2: '1965',
        desc2: "Devient un lieu de rencontre pour artistes",
        year3: '1992',
        desc3: "Rénovation préservant le caractère historique",
        year4: '2024',
        desc4: "Plus de 80 ans de service continu",
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
      sectionTitle: 'Photos de notre café',
      sectionSubtitle: 'Découvrez l\'ambiance authentique de Café Tingis',
      realPhotos: 'Toutes les photos sont réelles',
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
      address: 'Place du Petit Socco, Médina, Tanger, Maroc',
      hours: 'Horaires',
      hoursValue: '06:30 - 00:30',
      contact: 'Contact',
      copyright: '© 2024 Café Tingis. Tous droits réservés.',
      openDaily: 'Ouvert tous les jours',
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
      subtitle: 'The Traditional Heart of Tangier',
      emotionalSubtitle: 'Sit back, relax, and enjoy an unforgettable atmosphere with our authentic coffee',
      callNow: 'Call Now',
      reserveTable: 'Book Your Table',
      ourLocation: 'Find Us',
      yearsLabel: 'Years',
      foundedLabel: 'Founded',
      momentsLabel: 'Moments',
      scrollDown: 'Scroll down',
    },
    contactStrip: {
      address: 'Petit Socco Square, Medina, Tangier',
      phone: '+212 5XX XXX XXX',
      hours: 'Hours',
      hoursValue: '06:30 - 00:30 daily',
      whatsapp: 'Contact us on WhatsApp',
      viewMap: 'View on Google Maps',
    },
    whyChoose: {
      sectionTitle: 'Why Café Tingis?',
      sectionSubtitle: 'What makes us unique',
      reason1: { title: 'Authentic Experience', desc: 'A genuine traditional experience in the heart of Tangier' },
      reason2: { title: 'High Quality', desc: 'Premium coffee and beverages prepared with care' },
      reason3: { title: 'Comfortable Space', desc: 'A cozy place perfect for social gatherings' },
      reason4: { title: 'Central Location', desc: 'Easily accessible in the historic Medina' },
      reason5: { title: 'Local Atmosphere', desc: 'An authentic vibe blending history with daily life' },
    },
    history: {
      sectionTitle: 'About Café Tingis',
      sectionSubtitle: 'More than 80 years of hospitality and authenticity',
      paragraph1: "Café Tingis is a traditional café in the heart of Tangier since 1940. It combines historic ambiance with modern comfort.",
      paragraph2: "Here, visitors can enjoy authentic coffee and warm conversations with locals and tourists alike.",
      paragraph3: "We continue the tradition of genuine Moroccan hospitality, where every cup tells a story of Tangier.",
      timeline: {
        year1: '1940',
        desc1: "Opening at Petit Socco",
        year2: '1965',
        desc2: "Becomes a meeting place for artists",
        year3: '1992',
        desc3: "Renovation preserving historic character",
        year4: '2024',
        desc4: "More than 80 years of continuous service",
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
      sectionTitle: 'Photos from our café',
      sectionSubtitle: 'Discover the authentic atmosphere of Café Tingis',
      realPhotos: 'All photos are real',
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
      address: 'Petit Socco Square, Medina, Tangier, Morocco',
      hours: 'Hours',
      hoursValue: '06:30 - 00:30',
      contact: 'Contact',
      copyright: '© 2024 Café Tingis. All rights reserved.',
      openDaily: 'Open every day',
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
      subtitle: 'قلب طنجة التقليدي',
      emotionalSubtitle: 'اجلس، استرخِ، واستمتع بأجواء لا تُنسى مع قهوتنا الأصيلة',
      callNow: 'اتصل الآن',
      reserveTable: 'احجز طاولتك',
      ourLocation: 'اعرف موقعنا',
      yearsLabel: 'سنة',
      foundedLabel: 'التأسيس',
      momentsLabel: 'لحظات',
      scrollDown: 'انزل للأسفل',
    },
    contactStrip: {
      address: 'ساحة البيتي سوكو، المدينة القديمة، طنجة',
      phone: '+212 5XX XXX XXX',
      hours: 'ساعات العمل',
      hoursValue: '06:30 - 00:30 يوميًا',
      whatsapp: 'تواصل واتساب',
      viewMap: 'اعرض الموقع على الخريطة',
    },
    whyChoose: {
      sectionTitle: 'لماذا مقهى طنجيس؟',
      sectionSubtitle: 'ما يميزنا',
      reason1: { title: 'تجربة أصيلة', desc: 'تجربة تقليدية أصيلة في قلب طنجة' },
      reason2: { title: 'جودة عالية', desc: 'قهوة ومشروبات عالية الجودة محضرة بعناية' },
      reason3: { title: 'مكان مريح', desc: 'مكان مريح ومناسب للقاءات الاجتماعية' },
      reason4: { title: 'موقع مميز', desc: 'موقع مركزي وسهل الوصول في المدينة القديمة' },
      reason5: { title: 'أجواء محلية', desc: 'أجواء محلية أصيلة تجمع بين التاريخ والحياة اليومية' },
    },
    history: {
      sectionTitle: 'عن مقهى طنجيس',
      sectionSubtitle: 'أكثر من 80 عامًا من الضيافة والأصالة',
      paragraph1: "مقهى طنجيس هو مقهى تقليدي في قلب طنجة منذ عام 1940. يجمع بين الأجواء التاريخية والراحة العصرية.",
      paragraph2: "هنا يمكن للزوار الاستمتاع بالقهوة الأصيلة والمحادثات الودية مع السكان المحليين والسياح على حد سواء.",
      paragraph3: "نحن نواصل تقليد الضيافة المغربية الأصيلة، حيث كل فنجان يحكي قصة من قصص طنجة.",
      timeline: {
        year1: '1940',
        desc1: "افتتاح المقهى في البيتي سوكو",
        year2: '1965',
        desc2: "يصبح ملتقى للفنانين",
        year3: '1992',
        desc3: "تجديد مع الحفاظ على الطابع التاريخي",
        year4: '2024',
        desc4: "أكثر من 80 عامًا من الخدمة المستمرة",
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
      sectionTitle: 'صور من مقهانا',
      sectionSubtitle: 'اكتشف أجواء مقهى طنجيس الأصيلة',
      realPhotos: 'جميع الصور حقيقية من مقهانا',
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
      address: 'ساحة البيتي سوكو، المدينة القديمة، طنجة، المغرب',
      hours: 'ساعات العمل',
      hoursValue: '06:30 - 00:30',
      contact: 'اتصل بنا',
      copyright: '© 2024 مقهى طنجيس. جميع الحقوق محفوظة.',
      openDaily: 'مفتوح كل يوم',
    },
  },
};
