import { motion } from 'framer-motion';
import { Home, Building2, Settings, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ExpertiseSection = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Home, title: t('about.residential'), desc: t('about.residentialDesc'), delay: 0.1 },
    { icon: Building2, title: t('about.commercial'), desc: t('about.commercialDesc'), delay: 0.2 },
    { icon: Settings, title: t('about.propertyMgmt'), desc: t('about.propertyMgmtDesc'), delay: 0.3 },
    { icon: TrendingUp, title: t('about.investment'), desc: t('about.investmentDesc'), delay: 0.4 },
  ];

  return (
    <section className="relative py-32 md:py-44 overflow-hidden bg-muted/30">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-px bg-gold mx-auto mb-6"
          />
          <span className="text-xs font-body font-semibold tracking-[0.4em] uppercase text-gold">
            {t('about.expertise')}
          </span>
          <p className="mt-6 text-muted-foreground font-body leading-[2] text-[15px]">
            {t('about.expertiseDesc')}
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: item.delay }}
              className="group relative bg-background border border-border p-8 hover:shadow-[0_25px_80px_-20px_rgba(0,0,0,0.12)] transition-all duration-700"
            >
              {/* Top gold line on hover */}
              <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-gold transition-all duration-700" />

              {/* Diamond icon */}
              <div className="relative w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <div className="absolute inset-0 border border-border group-hover:border-gold/40 transition-all duration-500 rotate-45" />
                <div className="absolute inset-1.5 border border-border/50 group-hover:border-gold/30 transition-all duration-500 rotate-45" />
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/5 transition-all duration-500 rotate-45" />
                <item.icon className="relative h-6 w-6 text-gold transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
              </div>

              {/* Text */}
              <h3 className="font-display font-bold text-lg text-foreground text-center tracking-wide group-hover:text-gold transition-colors duration-300">
                {item.title}
              </h3>
              <div className="w-6 h-px bg-gold/40 mx-auto my-4 group-hover:w-10 transition-all duration-500" />
              <p className="text-sm text-muted-foreground leading-[1.9] font-body text-center">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
