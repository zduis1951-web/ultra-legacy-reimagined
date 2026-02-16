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
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-gold">{t('testimonials.tag')}</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-display font-bold text-foreground">{t('testimonials.title')}</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card p-8 border border-border hover:border-gold/20 transition-all duration-500"
            >
              <Quote className="h-8 w-8 text-gold/30 mb-4" />
              <p className="text-foreground/80 leading-relaxed italic font-body">{item.text[language]}</p>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-display font-semibold text-foreground">{item.name[language]}</p>
                <p className="text-xs text-muted-foreground tracking-wider mt-1">{item.role[language]}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
