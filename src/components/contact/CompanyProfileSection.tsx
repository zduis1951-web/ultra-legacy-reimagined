import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Award, Lightbulb } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import heroBg from '@/assets/hero-bg.jpg';
import logo from '@/assets/logo.png';

const useCounter = (end: number, inView: boolean) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [end, inView]);
  return count;
};

const CompanyProfileSection = () => {
  const { t } = useLanguage();
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true });

  const stats = [
    { value: 10, suffix: '+', label: t('profile.stats.experience') },
    { value: 500, suffix: '+', label: t('profile.stats.properties') },
    { value: 1000, suffix: '+', label: t('profile.stats.clients') },
    { value: 50, suffix: '+', label: t('profile.stats.projects') },
  ];

  const values = [
    { icon: Shield, title: t('profile.values.integrity'), desc: t('profile.values.integrityDesc') },
    { icon: Award, title: t('profile.values.excellence'), desc: t('profile.values.excellenceDesc') },
    { icon: Lightbulb, title: t('profile.values.innovation'), desc: t('profile.values.innovationDesc') },
  ];

  return (
    <div className="mb-20">
      {/* Part 1: Hero Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative overflow-hidden"
        style={{ minHeight: '500px' }}
      >
        {/* Background */}
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/85" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-foreground/95" />
          {/* Gold corner accents */}
          <div className="absolute top-8 left-8 w-20 h-20 border-t-2 border-l-2 border-gold/30" />
          <div className="absolute top-8 right-8 w-20 h-20 border-t-2 border-r-2 border-gold/30" />
          <div className="absolute bottom-8 left-8 w-20 h-20 border-b-2 border-l-2 border-gold/30" />
          <div className="absolute bottom-8 right-8 w-20 h-20 border-b-2 border-r-2 border-gold/30" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center py-20 md:py-28 px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src={logo} alt="Bayt Alshumukh" className="w-24 h-24 md:w-32 md:h-32 object-contain mx-auto mb-8" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-background tracking-wide">
              {t('brand.name')}
            </h2>
            <p className="text-xs md:text-sm font-body tracking-[0.4em] uppercase text-gold">
              {t('brand.subtitle')}
            </p>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-10 text-[10px] md:text-xs font-body tracking-[0.35em] uppercase text-background/50"
          >
            {t('profile.established')} &nbsp;|&nbsp; {t('profile.tagline')}
          </motion.p>
        </div>
      </motion.div>

      {/* Part 2: Stats Strip */}
      <div ref={statsRef} className="bg-foreground py-16 md:py-20 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
            {stats.map((stat, i) => {
              const count = useCounter(stat.value, statsInView);
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className={`text-center group cursor-default py-4 ${
                    i < stats.length - 1 ? 'md:border-r md:border-gold/10' : ''
                  }`}
                >
                  <span className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-gold group-hover:text-gold-light transition-colors duration-500">
                    {count}{stat.suffix}
                  </span>
                  <p className="mt-3 text-[10px] tracking-[0.25em] uppercase text-background/40 font-body group-hover:text-background/60 transition-opacity duration-500">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Part 3: Core Values */}
      <div className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="w-12 h-px bg-gold/60 mx-auto mb-6" />
            <span className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-gold">
              {t('profile.valuesTag')}
            </span>
            <h3 className="mt-4 text-2xl md:text-4xl font-display font-bold text-foreground">
              {t('profile.valuesTitle')}
            </h3>
            <div className="w-12 h-px bg-gold/60 mx-auto mt-6" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 md:gap-16 max-w-5xl mx-auto">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="text-center group"
              >
                {/* Diamond Icon */}
                <div className="relative w-20 h-20 mx-auto mb-8">
                  <div className="absolute inset-0 rotate-45 border-2 border-border group-hover:border-gold/50 transition-colors duration-500" />
                  <div className="absolute inset-2 rotate-45 border border-border/50 group-hover:border-gold/30 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <value.icon className="h-7 w-7 text-gold group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>

                <h4 className="text-sm font-body font-semibold tracking-[0.2em] uppercase text-foreground mb-3">
                  {value.title}
                </h4>
                <p className="text-sm font-body text-muted-foreground leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Part 4: Management Quote */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 md:py-28 bg-background relative"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            {/* Gold quotation mark */}
            <span className="text-7xl md:text-9xl font-display text-gold/20 leading-none select-none">"</span>

            <p className="mt-[-20px] md:mt-[-40px] text-lg md:text-xl font-body italic text-foreground/80 leading-relaxed px-4">
              {t('profile.quote')}
            </p>

            <div className="mt-10 space-y-2">
              <div className="w-12 h-px bg-gold/60 mx-auto" />
              <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-gold pt-4">
                {t('profile.quoteAuthor')}
              </p>
              <p className="text-[10px] font-body tracking-[0.2em] uppercase text-muted-foreground">
                {t('brand.name')} {t('brand.subtitle')}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CompanyProfileSection;
