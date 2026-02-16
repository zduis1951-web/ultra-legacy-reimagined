import { motion } from 'framer-motion';
import { TrendingUp, Award, Layers, Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WhyChooseUs = () => {
  const { t } = useLanguage();

  const reasons = [
    { icon: TrendingUp, title: t('why.expertise'), desc: t('why.expertiseDesc') },
    { icon: Award, title: t('why.service'), desc: t('why.serviceDesc') },
    { icon: Layers, title: t('why.portfolio'), desc: t('why.portfolioDesc') },
    { icon: Shield, title: t('why.trust'), desc: t('why.trustDesc') },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-gold">{t('why.tag')}</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-display font-bold text-foreground">{t('why.title')}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group text-center p-8 border border-border hover:border-gold/30 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]"
            >
              <div className="mx-auto w-16 h-16 flex items-center justify-center border border-border group-hover:border-gold group-hover:bg-gold/5 transition-all duration-300">
                <item.icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="mt-6 font-display font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
