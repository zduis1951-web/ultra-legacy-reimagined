import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const testimonials = [
  {
    text: { en: "Bayt Alshumukh made our dream home a reality. Their professionalism and attention to detail are unmatched.", ar: "بيت الشموخ حققوا حلمنا بمنزل أحلامنا. احترافيتهم واهتمامهم بالتفاصيل لا مثيل لهما." },
    name: { en: "Ahmed Al Mansouri", ar: "أحمد المنصوري" },
    role: { en: "Property Investor", ar: "مستثمر عقاري" },
  },
  {
    text: { en: "Exceptional service from start to finish. They understood exactly what we were looking for and delivered beyond expectations.", ar: "خدمة استثنائية من البداية إلى النهاية. فهموا بالضبط ما كنا نبحث عنه وتجاوزوا توقعاتنا." },
    name: { en: "Sara Al Hammadi", ar: "سارة الحمادي" },
    role: { en: "Homeowner", ar: "مالكة منزل" },
  },
  {
    text: { en: "The best real estate experience I've ever had. Their market knowledge and negotiation skills saved us significantly.", ar: "أفضل تجربة عقارية مررت بها. معرفتهم بالسوق ومهاراتهم في التفاوض وفرت لنا الكثير." },
    name: { en: "Mohammed Al Dhaheri", ar: "محمد الظاهري" },
    role: { en: "Business Owner", ar: "رجل أعمال" },
  },
];

const TestimonialsSection = () => {
  const { t, language } = useLanguage();

  return (
    <section className="relative py-32 md:py-44 bg-foreground text-background overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute top-12 right-12 w-72 h-72 border border-gold/5 rotate-45 hidden lg:block" />
      <div className="absolute bottom-12 left-12 w-52 h-52 border border-gold/5 -rotate-12 hidden lg:block" />

      <div className="relative container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 md:mb-28"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-px bg-gold mx-auto mb-8"
          />
          <span className="text-xs font-body font-semibold tracking-[0.4em] uppercase text-gold">{t('testimonials.tag')}</span>
          <h2 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1]">
            {t('testimonials.title')}
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-px bg-gold mx-auto mt-8"
          />
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group relative"
            >
              <div className="relative h-full p-10 bg-background/5 border border-background/10 backdrop-blur-sm transition-all duration-700 hover:border-gold/30 hover:bg-background/10">
                {/* Top gold line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-gold-light via-gold to-gold-dark group-hover:w-full transition-all duration-700" />

                {/* Quote icon */}
                <Quote className="h-10 w-10 text-gold/40 mb-6 group-hover:text-gold/70 transition-colors duration-500" strokeWidth={1.5} />

                {/* Text */}
                <p className="text-background/70 leading-[1.9] italic font-body text-[15px] group-hover:text-background/90 transition-colors duration-500">
                  {item.text[language]}
                </p>

                {/* Author */}
                <div className="mt-8 pt-6 border-t border-background/10">
                  <p className="font-display font-bold text-background tracking-wide">{item.name[language]}</p>
                  <p className="text-xs text-gold tracking-[0.15em] uppercase mt-1.5 font-body">{item.role[language]}</p>
                </div>

                {/* Bottom gold line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-gold-light via-gold to-gold-dark group-hover:w-full transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
