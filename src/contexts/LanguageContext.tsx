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
    // Nav
    "nav.home": "Home",
    "nav.services": "Our Services",
    "nav.forSale": "For Sale",
    "nav.forRent": "For Rent",
    "nav.offPlan": "Off Plan",
    "nav.contact": "Contact Us",
    // Hero
    "hero.title": "Luxury Living,\nRedefined.",
    "hero.subtitle": "Discover exceptional properties curated by Bayt Alshumukh — where elegance meets investment.",
    "hero.cta": "Explore Properties",
    "hero.secondary": "Get In Touch",
    // About
    "about.tag": "About Us",
    "about.title": "Building Trust Since Day One",
    "about.desc": "Bayt Alshumukh Real Estate is your premier partner in the property market. We combine deep market knowledge with unparalleled service to deliver exceptional results for our clients.",
    "about.mission": "Our Mission",
    "about.missionDesc": "To provide world-class real estate services with integrity, innovation, and a commitment to excellence.",
    "about.vision": "Our Vision",
    "about.visionDesc": "To be the most trusted and respected real estate company in the region.",
    "about.values": "Our Values",
    "about.valuesDesc": "Integrity, transparency, and client satisfaction are the cornerstones of everything we do.",
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
    "footer.address": "Abu Dhabi, United Arab Emirates",
    "footer.followUs": "Follow Us",
    "footer.rights": "All rights reserved.",
    // Services
    "services.title": "Our Services",
    "services.subtitle": "Comprehensive real estate solutions tailored to your needs",
    "services.buying.title": "Buying & Selling",
    "services.buying.desc": "Expert guidance through every step of the buying and selling process, ensuring you get the best value for your investment.",
    "services.management.title": "Property Management",
    "services.management.desc": "Complete property management solutions including tenant relations, maintenance, and financial reporting.",
    "services.consulting.title": "Real Estate Consulting",
    "services.consulting.desc": "Strategic advisory services to help you make informed decisions about your real estate portfolio.",
    "services.valuation.title": "Property Valuation",
    "services.valuation.desc": "Accurate and comprehensive property valuations backed by market data and expert analysis.",
    "services.investment.title": "Investment Advisory",
    "services.investment.desc": "Maximize your returns with our data-driven investment strategies and market insights.",
    "services.legal.title": "Legal Services",
    "services.legal.desc": "End-to-end legal support for all your property transactions, ensuring full compliance and protection.",
    // Properties
    "properties.forSale.title": "Properties For Sale",
    "properties.forSale.subtitle": "Discover your next luxury investment",
    "properties.forRent.title": "Properties For Rent",
    "properties.forRent.subtitle": "Find your perfect luxury rental",
    "properties.filter.all": "All",
    "properties.filter.villa": "Villa",
    "properties.filter.apartment": "Apartment",
    "properties.filter.land": "Land",
    "properties.filter.penthouse": "Penthouse",
    "properties.noResults": "No properties found matching your criteria.",
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
    // Nav
    "nav.home": "الرئيسية",
    "nav.services": "خدماتنا",
    "nav.forSale": "للبيع",
    "nav.forRent": "للإيجار",
    "nav.offPlan": "قيد الإنشاء",
    "nav.contact": "تواصل معنا",
    // Hero
    "hero.title": "العيش الفاخر،\nبمفهوم جديد.",
    "hero.subtitle": "اكتشف عقارات استثنائية مختارة بعناية من بيت الشموخ — حيث تلتقي الأناقة بالاستثمار.",
    "hero.cta": "استكشف العقارات",
    "hero.secondary": "تواصل معنا",
    // About
    "about.tag": "من نحن",
    "about.title": "بناء الثقة منذ اليوم الأول",
    "about.desc": "بيت الشموخ العقارية شريكك المميز في سوق العقارات. نجمع بين المعرفة العميقة بالسوق والخدمة المتميزة لتحقيق نتائج استثنائية لعملائنا.",
    "about.mission": "مهمتنا",
    "about.missionDesc": "تقديم خدمات عقارية عالمية المستوى بنزاهة وابتكار والتزام بالتميز.",
    "about.vision": "رؤيتنا",
    "about.visionDesc": "أن نكون الشركة العقارية الأكثر ثقة واحتراماً في المنطقة.",
    "about.values": "قيمنا",
    "about.valuesDesc": "النزاهة والشفافية ورضا العملاء هي أساس كل ما نقوم به.",
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
    "footer.address": "أبوظبي، الإمارات العربية المتحدة",
    "footer.followUs": "تابعنا",
    "footer.rights": "جميع الحقوق محفوظة.",
    // Services
    "services.title": "خدماتنا",
    "services.subtitle": "حلول عقارية شاملة مصممة لاحتياجاتك",
    "services.buying.title": "البيع والشراء",
    "services.buying.desc": "إرشاد متخصص في كل خطوة من عملية البيع والشراء لضمان حصولك على أفضل قيمة لاستثمارك.",
    "services.management.title": "إدارة العقارات",
    "services.management.desc": "حلول إدارة عقارات شاملة تشمل العلاقات مع المستأجرين والصيانة والتقارير المالية.",
    "services.consulting.title": "الاستشارات العقارية",
    "services.consulting.desc": "خدمات استشارية استراتيجية لمساعدتك في اتخاذ قرارات مدروسة بشأن محفظتك العقارية.",
    "services.valuation.title": "تقييم العقارات",
    "services.valuation.desc": "تقييمات عقارية دقيقة وشاملة مدعومة ببيانات السوق وتحليل الخبراء.",
    "services.investment.title": "الاستشارات الاستثمارية",
    "services.investment.desc": "حقق أقصى عائد مع استراتيجيات الاستثمار المبنية على البيانات ورؤى السوق.",
    "services.legal.title": "الخدمات القانونية",
    "services.legal.desc": "دعم قانوني شامل لجميع معاملاتك العقارية لضمان الامتثال الكامل والحماية.",
    // Properties
    "properties.forSale.title": "عقارات للبيع",
    "properties.forSale.subtitle": "اكتشف استثمارك الفاخر التالي",
    "properties.forRent.title": "عقارات للإيجار",
    "properties.forRent.subtitle": "ابحث عن إيجارك الفاخر المثالي",
    "properties.filter.all": "الكل",
    "properties.filter.villa": "فيلا",
    "properties.filter.apartment": "شقة",
    "properties.filter.land": "أرض",
    "properties.filter.penthouse": "بنتهاوس",
    "properties.noResults": "لم يتم العثور على عقارات تطابق معاييرك.",
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
    "contact.hoursValue": "الأحد - الخميس: 9 صباحاً - 6 مساءً",
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
