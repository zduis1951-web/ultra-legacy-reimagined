import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

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

const StatsSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const stats = [
    { value: 15, suffix: '+', label: t('stats.experience') },
    { value: 500, suffix: '+', label: t('stats.properties') },
    { value: 1200, suffix: '+', label: t('stats.clients') },
    { value: 30, suffix: '+', label: t('stats.projects') },
  ];

  return (
    <section ref={ref} className="py-20 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => {
            const count = useCounter(stat.value, inView);
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center"
              >
                <span className="text-4xl md:text-6xl font-display font-bold text-gold">
                  {count}{stat.suffix}
                </span>
                <p className="mt-2 text-xs tracking-[0.2em] uppercase opacity-60 font-body">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
