import { motion } from 'framer-motion';
import { Phone, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const CTASection = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-28 md:py-40 bg-foreground text-background relative overflow-hidden">
      {/* Gold border lines */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Decorative */}
      <div className="absolute top-0 right-0 w-72 h-72 border border-gold/8 rotate-45 translate-x-36 -translate-y-36" />
      <div className="absolute bottom-0 left-0 w-96 h-96 border border-gold/5 rotate-12 -translate-x-48 translate-y-48" />

      <div className="container mx-auto px-6 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-px bg-gold mx-auto mb-8"
          />

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">{t('cta.title')}</h2>
          <p className="mt-8 text-background/50 max-w-xl mx-auto font-body leading-[2] text-[15px]">{t('cta.desc')}</p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-foreground px-10 py-4 text-[11px] font-body font-semibold tracking-[0.25em] uppercase transition-all duration-500"
            >
              {t('cta.button')}
              {isRTL ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
            </Link>
            <a
              href="tel:+971501788428"
              className="inline-flex items-center gap-3 border border-background/20 hover:border-gold text-background hover:text-gold px-10 py-4 text-[11px] font-body font-semibold tracking-[0.25em] uppercase transition-all duration-500"
            >
              <Phone className="h-4 w-4" />
              {t('cta.call')}
            </a>
          </div>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-px bg-gold mx-auto mt-16"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
