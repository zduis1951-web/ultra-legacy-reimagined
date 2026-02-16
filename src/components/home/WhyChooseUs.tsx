import { motion } from 'framer-motion';
import { TrendingUp, Award, Layers, Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WhyChooseUs = () => {
  const { t } = useLanguage();

  const reasons = [
    { icon: TrendingUp, title: t('why.expertise'), desc: t('why.expertiseDesc'), delay: 0 },
    { icon: Award, title: t('why.service'), desc: t('why.serviceDesc'), delay: 0.15 },
    { icon: Layers, title: t('why.portfolio'), desc: t('why.portfolioDesc'), delay: 0.3 },
    { icon: Shield, title: t('why.trust'), desc: t('why.trustDesc'), delay: 0.45 },
  ];

  return (
    <section className="relative py-32 md:py-44 overflow-hidden">
      {/* Luxurious background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

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
          <span className="text-xs font-body font-semibold tracking-[0.4em] uppercase text-gold">{t('why.tag')}</span>
          <h2 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[1.1]">
            {t('why.title')}
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-px bg-gold mx-auto mt-8"
          />
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: item.delay }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full p-10 bg-card border border-border/60 transition-all duration-700 hover:border-gold/40 hover:shadow-[0_25px_80px_-20px_rgba(0,0,0,0.12)]">
                {/* Top gold accent line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-gold-light via-gold to-gold-dark group-hover:w-full transition-all duration-700" />

                {/* Icon */}
                <div className="relative mx-auto w-20 h-20 flex items-center justify-center mb-8">
                  <div className="absolute inset-0 border border-border/40 group-hover:border-gold/30 transition-all duration-500 rotate-45" />
                  <div className="absolute inset-2 border border-border/20 group-hover:border-gold/20 transition-all duration-500 rotate-45" />
                  <item.icon className="relative h-7 w-7 text-gold transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-center font-display font-semibold text-lg text-foreground tracking-wide">{item.title}</h3>
                <div className="w-8 h-px bg-gold/40 mx-auto my-5 group-hover:w-12 transition-all duration-500" />
                <p className="text-center text-sm text-muted-foreground leading-[1.8] font-body">{item.desc}</p>

                {/* Bottom gold accent line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-gold-light via-gold to-gold-dark group-hover:w-full transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
