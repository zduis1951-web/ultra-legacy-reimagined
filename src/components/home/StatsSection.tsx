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
    <section ref={ref} className="py-24 md:py-32 bg-foreground text-background relative">
      {/* Gold top line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {stats.map((stat, i) => {
            const count = useCounter(stat.value, inView);
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`text-center group cursor-default py-4 ${
                  i < stats.length - 1 ? 'md:border-r md:border-gold/15' : ''
                }`}
              >
                <span className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-gold group-hover:text-gold-light transition-colors duration-500">
                  {count}{stat.suffix}
                </span>
                <p className="mt-3 text-[10px] tracking-[0.25em] uppercase opacity-50 font-body group-hover:opacity-70 transition-opacity duration-500">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
