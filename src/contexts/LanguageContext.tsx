import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Brand
    "brand.name": "Bayt Alshumukh",
    "brand.subtitle": "Real Estate",
    // Nav
    "nav.home": "Home",
    "nav.services": "Our Services",
    "nav.forSale": "For Sale",
    "nav.forRent": "For Rent",
    "nav.offPlan": "Off Plan",
    "nav.contact": "Contact Us",
    // Hero
    "hero.title": "Luxury Living,\nRedefined.",
    "hero.subtitle": "Discover exceptional properties curated by Bayt Alshumukh, where elegance meets investment.",
    "hero.cta": "Explore Properties",
    "hero.secondary": "Get In Touch",
    // About - Original content from baytalshumukh.com
    "about.tag": "About Us",
    "about.title": "Your Trusted Real Estate Partner",
    "about.desc": "At Bayt Alshumukh, we are more than just a real estate agency — we are your trusted partner in navigating the real estate landscape with confidence and ease. Our agency has earned a reputation for excellence, integrity, and innovation in the real estate market.",
    "about.mission": "Our Mission",
    "about.missionDesc": "Our mission is to deliver exceptional real estate solutions that exceed our clients' expectations. Whether you are buying, selling, renting, or investing, we provide expert guidance and tailored strategies to help you achieve your real estate goals. We are committed to making every transaction smooth, transparent, and successful.",
    "about.vision": "Our Vision",
    "about.visionDesc": "Our vision is to be the leading real estate agency, recognized for unparalleled client service, cutting-edge technology, and market expertise. We strive to redefine the real estate experience by integrating innovative solutions with a personal touch, ensuring every client's journey is as rewarding as possible.",
    "about.values": "Our Values",
    "about.valuesDesc": "Integrity: We uphold the highest ethical standards in all our dealings, ensuring transparency and honesty in every transaction.\nExcellence: We are committed to delivering top-notch service and achieving outstanding results for our clients.\nInnovation: We embrace new technologies and creative approaches to stay ahead in a dynamic market.\nCustomer-Centricity: Our clients are at the heart of everything we do. We listen, understand, and act in their best interests.\nCollaboration: We believe in working with clients, partners, and our team to achieve mutual success.",
    "about.expertise": "Our Expertise",
    "about.expertiseDesc": "With a team of experienced professionals and a deep understanding of local and national real estate markets, Bayt Alshumukh offers a comprehensive range of services, including:",
    "about.residential": "Residential Sales & Leasing",
    "about.residentialDesc": "Finding the perfect home or investment property for you.",
    "about.commercial": "Commercial Real Estate",
    "about.commercialDesc": "Helping businesses buy, sell, and lease commercial spaces.",
    "about.propertyMgmt": "Property Management",
    "about.propertyMgmtDesc": "Efficiently managing and maintaining properties to maximize value.",
    "about.investment": "Investment Consulting",
    "about.investmentDesc": "Providing expert advice on real estate investments and market opportunities.",
    "about.team": "Our Team",
    "about.teamDesc": "Our team consists of industry experts who bring a wealth of knowledge and passion for real estate. From our experienced agents to our dedicated support staff, we are all committed to delivering exceptional service and ensuring a seamless experience for our clients.",
    "about.commitment": "Our Commitment",
    "about.commitmentDesc": "At Bayt Alshumukh Real Estate, we are committed to fostering long-term relationships with our clients and partners. We take pride in our community involvement and strive to contribute positively to the areas we serve.",
    // Stats
    "stats.experience": "Years of Experience",
    "stats.properties": "Properties Sold",
    "stats.clients": "Happy Clients",
    "stats.projects": "Active Projects",
    // Featured
    "featured.tag": "Featured Properties",
    "featured.title": "Handpicked Luxury Residences",
    "featured.viewAll": "View All Properties",
    "featured.forSale": "For Sale",
    "featured.forRent": "For Rent",
    "featured.beds": "Beds",
    "featured.baths": "Baths",
    "featured.sqft": "sq ft",
    // Why Us
    "why.tag": "Why Choose Us",
    "why.title": "Excellence in Every Detail",
    "why.expertise": "Market Expertise",
    "why.expertiseDesc": "Deep knowledge of local and regional property markets with data-driven insights.",
    "why.service": "Premium Service",
    "why.serviceDesc": "Personalized attention and white-glove service for every client, every time.",
    "why.portfolio": "Curated Portfolio",
    "why.portfolioDesc": "Handpicked selection of the finest properties that meet our exacting standards.",
    "why.trust": "Trusted Partner",
    "why.trustDesc": "Years of proven track record with complete transparency and integrity.",
    // Testimonials
    "testimonials.tag": "Client Testimonials",
    "testimonials.title": "What Our Clients Say",
    // CTA
    "cta.title": "Ready to Find Your Dream Property?",
    "cta.desc": "Let our expert team guide you to the perfect investment. Contact us today for a personalized consultation.",
    "cta.button": "Schedule a Consultation",
    "cta.call": "Call Us Now",
    // Footer
    "footer.desc": "Your trusted partner in luxury real estate. Delivering exceptional properties and unmatched service since our founding.",
    "footer.quickLinks": "Quick Links",
    "footer.contactInfo": "Contact Info",
    "footer.address": "Ajman - Rashidiya 3 - Near Elia Mall - Opposite Tower 8, Ajman 1",
    "footer.followUs": "Follow Us",
    "footer.rights": "All rights reserved.",
    "footer.copyright": "© {year} Bayt Alshumukh Real Estate. All rights reserved.",
    // Social
    "social.instagram": "Instagram",
    "social.facebook": "Facebook",
    "social.linkedin": "LinkedIn",
    // Services - Original from baytalshumukh.com
    "services.title": "Our Services",
    "services.subtitle": "Comprehensive real estate solutions tailored to your needs",
    "services.buying.title": "Buying & Selling Homes",
    "services.buying.desc": "Whether you're looking to buy your dream home or sell a property, our experienced agents guide you through every step, ensuring a seamless and rewarding experience.",
    "services.management.title": "Property Management",
    "services.management.desc": "Our property management services take the hassle out of owning rental properties. From tenant screening to maintenance, we handle it all so you can enjoy peace of mind.",
    "services.consulting.title": "Real Estate Consulting",
    "services.consulting.desc": "Our expert consultants provide valuable insights and strategic advice to help you make informed decisions in the ever-changing real estate market.",
    "services.relocation.title": "Relocation Services",
    "services.relocation.desc": "Moving to a new area? Our relocation services ensure a smooth transition, helping you find the perfect home and settle into your new community with ease.",
    "services.whyUs.title": "Why Choose Us?",
    "services.whyUs.expertise": "Expertise",
    "services.whyUs.expertiseDesc": "Our team of seasoned professionals brings years of experience and deep market knowledge to every transaction.",
    "services.whyUs.customerFocus": "Customer Focus",
    "services.whyUs.customerFocusDesc": "We prioritize your needs and preferences, offering personalized solutions that align with your goals.",
    "services.whyUs.integrity": "Integrity",
    "services.whyUs.integrityDesc": "We operate with the highest ethical standards, ensuring transparency and honesty in all our dealings.",
    "services.whyUs.innovation": "Innovation",
    "services.whyUs.innovationDesc": "We leverage the latest technology and market trends to provide you with cutting-edge real estate solutions.",
    // Properties
    "properties.forSale.title": "Properties For Sale",
    "properties.forSale.subtitle": "Discover your next luxury investment",
    "properties.forRent.title": "Properties For Rent",
    "properties.forRent.subtitle": "Find your perfect luxury rental",
    "properties.filter.all": "All",
    "properties.filter.villa": "Villa",
    "properties.filter.flat": "Flat",
    "properties.filter.residentialLot": "Residential Lot",
    "properties.filter.agriculturalLot": "Agricultural Lot",
    "properties.filter.offPlan": "Off Plan",
    "properties.filter.others": "Others",
    "properties.noResults": "No properties found matching your criteria.",
    "properties.location.all": "All Locations",
    "properties.location.ajmanTowers": "Ajman Towers",
    "properties.location.alrashidiya": "Alrashidiya Towers",
    "properties.location.cityTowers": "City Towers",
    "properties.location.alkhoar": "Alkhoar Towers",
    "properties.location.alrimaila": "Alrimaila",
    "properties.location.alnaimiya": "Alnaimiya",
    // Property Detail
    "property.bedrooms": "Bedrooms",
    "property.bathrooms": "Bathrooms",
    "property.balconies": "Balconies",
    "property.forSale": "For Sale",
    "property.forRent": "For Rent",
    "property.price": "Price",
    "property.installment": "Installments",
    "property.agentInfo": "Agent Information",
    "property.agentName": "Agent Name",
    "property.agentPhone": "Telephone",
    "property.viewDetails": "View Details",
    "property.contactAgent": "Contact Agent",
    "property.photos": "Property Photos",
    "property.yes": "Yes",
    "property.no": "No",
    "property.backToList": "Back to Properties",
    // Off Plan
    "offplan.title": "Off Plan Projects",
    "offplan.subtitle": "Invest in the future of luxury living",
    "offplan.completion": "Expected Completion",
    "offplan.startingFrom": "Starting From",
    // Contact
    "contact.title": "Get In Touch",
    "contact.subtitle": "We'd love to hear from you. Reach out to us for any inquiries.",
    "contact.name": "Full Name",
    "contact.email": "Email Address",
    "contact.phone": "Phone Number",
    "contact.message": "Your Message",
    "contact.send": "Send Message",
    "contact.office": "Our Office",
    "contact.hours": "Working Hours",
    "contact.hoursValue": "Sun - Thu: 9AM - 6PM",
  },
  ar: {
    // Brand
    "brand.name": "بيت الشموخ",
    "brand.subtitle": "عقارات",
    // Nav
    "nav.home": "الرئيسية",
    "nav.services": "خدماتنا",
    "nav.forSale": "للبيع",
    "nav.forRent": "للإيجار",
    "nav.offPlan": "قيد الإنشاء",
    "nav.contact": "تواصل معنا",
    // Hero
    "hero.title": "العيش الفاخر،\nبمفهوم جديد.",
    "hero.subtitle": "اكتشف عقارات استثنائية مختارة بعناية من بيت الشموخ، حيث تلتقي الأناقة بالاستثمار.",
    "hero.cta": "استكشف العقارات",
    "hero.secondary": "تواصل معنا",
    // About - Original content
    "about.tag": "من نحن",
    "about.title": "شريكك العقاري الموثوق",
    "about.desc": "نحن في بيت الشموخ أكثر من مجرد وكالة عقارات، فنحن شريكك المخلص في التعامل مع المشهد العقاري بثقة وسهولة. وقد اكتسبت وكالتنا سمعة طيبة في التميز والنزاهة والابتكار في سوق العقارات.",
    "about.mission": "مهمتنا",
    "about.missionDesc": "تتمثل مهمتنا في تقديم حلول عقارية استثنائية تتجاوز توقعات عملائنا. سواء كنت تشتري أو تبيع أو تستأجر أو تستثمر، فإننا نقدم إرشادات متخصصة واستراتيجيات مخصصة لمساعدتك في تحقيق أهدافك العقارية. نحن ملتزمون بجعل كل معاملة سلسة وشفافة وناجحة.",
    "about.vision": "رؤيتنا",
    "about.visionDesc": "تتمثل رؤيتنا في أن نكون وكالة العقارات الرائدة، والمعروفة بخدمة العملاء التي لا مثيل لها، والتكنولوجيا المتطورة، والخبرة في السوق. نسعى جاهدين لإعادة تعريف تجربة العقارات من خلال دمج الحلول المبتكرة بلمسة شخصية، وضمان أن تكون رحلة كل عميل مجزية قدر الإمكان.",
    "about.values": "قيمنا",
    "about.valuesDesc": "النزاهة: نلتزم بأعلى المعايير الأخلاقية في جميع تعاملاتنا، ونضمن الشفافية والصدق في كل معاملة.\nالتميز: نحن ملتزمون بتقديم خدمة من الدرجة الأولى وتحقيق نتائج متميزة لعملائنا.\nالابتكار: نتبنى التقنيات الجديدة والأساليب الإبداعية للبقاء في المقدمة في سوق ديناميكي.\nالتركيز على العملاء: عملاؤنا هم في قلب كل ما نقوم به. نحن نستمع ونفهم ونتصرف بما يخدم مصالحهم.\nالتعاون: نؤمن بالعمل مع العملاء والشركاء وفريقنا لتحقيق النجاح المتبادل.",
    "about.expertise": "خبرتنا",
    "about.expertiseDesc": "مع فريق من المحترفين ذوي الخبرة والفهم العميق لأسواق العقارات المحلية والوطنية، تقدم بيت الشموخ مجموعة شاملة من الخدمات، بما في ذلك:",
    "about.residential": "المبيعات والتأجير السكني",
    "about.residentialDesc": "العثور على المنزل المثالي أو العقار الاستثماري المناسب لك.",
    "about.commercial": "خدمات العقارات التجارية",
    "about.commercialDesc": "مساعدة الشركات في شراء وبيع وتأجير المساحات التجارية.",
    "about.propertyMgmt": "إدارة العقارات",
    "about.propertyMgmtDesc": "إدارة وصيانة العقارات بكفاءة لتحقيق أقصى قيمة.",
    "about.investment": "الاستشارات الاستثمارية",
    "about.investmentDesc": "تقديم المشورة المتخصصة بشأن الاستثمارات العقارية وفرص السوق.",
    "about.team": "فريقنا",
    "about.teamDesc": "يتألف فريقنا من خبراء الصناعة الذين يجلبون ثروة من المعرفة والشغف بالعقارات. من وكلائنا ذوي الخبرة إلى موظفي الدعم المتفانين لدينا، نحن جميعًا ملتزمون بتقديم خدمة استثنائية وضمان تجربة سلسة لعملائنا.",
    "about.commitment": "التزامنا",
    "about.commitmentDesc": "في بيت الشموخ العقارية، نحن ملتزمون بتعزيز العلاقات طويلة الأمد مع عملائنا وشركائنا. نحن نفخر بمشاركتنا المجتمعية ونسعى جاهدين للمساهمة بشكل إيجابي في المناطق التي نخدمها.",
    // Stats
    "stats.experience": "سنوات الخبرة",
    "stats.properties": "عقار مباع",
    "stats.clients": "عميل سعيد",
    "stats.projects": "مشروع نشط",
    // Featured
    "featured.tag": "عقارات مميزة",
    "featured.title": "مساكن فاخرة مختارة بعناية",
    "featured.viewAll": "عرض جميع العقارات",
    "featured.forSale": "للبيع",
    "featured.forRent": "للإيجار",
    "featured.beds": "غرف",
    "featured.baths": "حمامات",
    "featured.sqft": "قدم مربع",
    // Why Us
    "why.tag": "لماذا تختارنا",
    "why.title": "التميز في كل التفاصيل",
    "why.expertise": "خبرة السوق",
    "why.expertiseDesc": "معرفة عميقة بأسواق العقارات المحلية والإقليمية مع رؤى مدعومة بالبيانات.",
    "why.service": "خدمة متميزة",
    "why.serviceDesc": "اهتمام شخصي وخدمة فاخرة لكل عميل في كل مرة.",
    "why.portfolio": "محفظة مختارة",
    "why.portfolioDesc": "مجموعة مختارة بعناية من أفضل العقارات التي تلبي معاييرنا الصارمة.",
    "why.trust": "شريك موثوق",
    "why.trustDesc": "سنوات من السجل المثبت مع شفافية ونزاهة كاملة.",
    // Testimonials
    "testimonials.tag": "آراء العملاء",
    "testimonials.title": "ماذا يقول عملاؤنا",
    // CTA
    "cta.title": "مستعد لإيجاد عقار أحلامك؟",
    "cta.desc": "دع فريقنا المتخصص يرشدك إلى الاستثمار المثالي. تواصل معنا اليوم للحصول على استشارة مخصصة.",
    "cta.button": "احجز استشارة",
    "cta.call": "اتصل بنا الآن",
    // Footer
    "footer.desc": "شريكك الموثوق في العقارات الفاخرة. نقدم عقارات استثنائية وخدمة لا مثيل لها منذ تأسيسنا.",
    "footer.quickLinks": "روابط سريعة",
    "footer.contactInfo": "معلومات التواصل",
    "footer.address": "عجمان - الرشيدية 3 - بالقرب من مول ايليا - مقابل برج 8، عجمان 1",
    "footer.followUs": "تابعنا",
    "footer.rights": "جميع الحقوق محفوظة.",
    "footer.copyright": "© {year} بيت الشموخ العقارية. جميع الحقوق محفوظة.",
    // Social
    "social.instagram": "انستغرام",
    "social.facebook": "فيسبوك",
    "social.linkedin": "لينكدإن",
    // Services - Original
    "services.title": "خدماتنا",
    "services.subtitle": "حلول عقارية شاملة مصممة لاحتياجاتك",
    "services.buying.title": "بيع وشراء المنازل",
    "services.buying.desc": "سواء كنت تبحث عن شراء منزل أحلامك أو بيع عقار، يرشدك وكلاؤنا ذوو الخبرة خلال كل خطوة لضمان تجربة سلسة ومجزية.",
    "services.management.title": "إدارة العقارات",
    "services.management.desc": "خدمات إدارة العقارات لدينا تزيل عناء امتلاك العقارات المؤجرة. من فحص المستأجرين إلى الصيانة، نتولى كل شيء حتى تتمتع براحة البال.",
    "services.consulting.title": "الاستشارات العقارية",
    "services.consulting.desc": "يقدم مستشارونا الخبراء رؤى قيمة ونصائح استراتيجية لمساعدتك على اتخاذ قرارات مدروسة في سوق العقارات المتغير باستمرار.",
    "services.relocation.title": "خدمات الانتقال",
    "services.relocation.desc": "هل تنتقل إلى منطقة جديدة؟ تضمن خدمات الانتقال لدينا انتقالًا سلسًا، مما يساعدك على إيجاد المنزل المثالي والاستقرار في مجتمعك الجديد بسهولة.",
    "services.whyUs.title": "لماذا تختارنا؟",
    "services.whyUs.expertise": "الخبرة",
    "services.whyUs.expertiseDesc": "يجمع فريقنا من المحترفين المتمرسين سنوات من الخبرة والمعرفة العميقة بالسوق في كل معاملة.",
    "services.whyUs.customerFocus": "التركيز على العميل",
    "services.whyUs.customerFocusDesc": "نضع احتياجاتك وتفضيلاتك في المقام الأول، ونقدم حلولاً مخصصة تتوافق مع أهدافك.",
    "services.whyUs.integrity": "النزاهة",
    "services.whyUs.integrityDesc": "نعمل بأعلى المعايير الأخلاقية، مما يضمن الشفافية والصدق في جميع تعاملاتنا.",
    "services.whyUs.innovation": "الابتكار",
    "services.whyUs.innovationDesc": "نستفيد من أحدث التقنيات واتجاهات السوق لتزويدك بحلول عقارية متطورة.",
    // Properties
    "properties.forSale.title": "عقارات للبيع",
    "properties.forSale.subtitle": "اكتشف استثمارك الفاخر التالي",
    "properties.forRent.title": "عقارات للإيجار",
    "properties.forRent.subtitle": "ابحث عن إيجارك الفاخر المثالي",
    "properties.filter.all": "الكل",
    "properties.filter.villa": "فيلا",
    "properties.filter.flat": "شقة",
    "properties.filter.residentialLot": "أرض سكنية",
    "properties.filter.agriculturalLot": "أرض زراعية",
    "properties.filter.offPlan": "قيد الإنشاء",
    "properties.filter.others": "أخرى",
    "properties.noResults": "لم يتم العثور على عقارات تطابق معاييرك.",
    "properties.location.all": "جميع المواقع",
    "properties.location.ajmanTowers": "أبراج عجمان",
    "properties.location.alrashidiya": "أبراج الرشيدية",
    "properties.location.cityTowers": "أبراج المدينة",
    "properties.location.alkhoar": "أبراج الخوار",
    "properties.location.alrimaila": "الرميلة",
    "properties.location.alnaimiya": "النعيمية",
    // Property Detail
    "property.bedrooms": "غرف النوم",
    "property.bathrooms": "الحمامات",
    "property.balconies": "البلكونات",
    "property.forSale": "للبيع",
    "property.forRent": "للإيجار",
    "property.price": "السعر",
    "property.installment": "أقساط",
    "property.agentInfo": "معلومات الوكيل",
    "property.agentName": "اسم الوكيل",
    "property.agentPhone": "الهاتف",
    "property.viewDetails": "عرض التفاصيل",
    "property.contactAgent": "تواصل مع الوكيل",
    "property.photos": "صور العقار",
    "property.yes": "نعم",
    "property.no": "لا",
    "property.backToList": "العودة للعقارات",
    // Off Plan
    "offplan.title": "مشاريع قيد الإنشاء",
    "offplan.subtitle": "استثمر في مستقبل الحياة الفاخرة",
    "offplan.completion": "الإنجاز المتوقع",
    "offplan.startingFrom": "يبدأ من",
    // Contact
    "contact.title": "تواصل معنا",
    "contact.subtitle": "يسعدنا سماع رأيك. تواصل معنا لأي استفسار.",
    "contact.name": "الاسم الكامل",
    "contact.email": "البريد الإلكتروني",
    "contact.phone": "رقم الهاتف",
    "contact.message": "رسالتك",
    "contact.send": "إرسال الرسالة",
    "contact.office": "مكتبنا",
    "contact.hours": "ساعات العمل",
    "contact.hoursValue": "الأحد - الخميس: ٩ صباحاً - ٦ مساءً",
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL: language === 'ar' }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
