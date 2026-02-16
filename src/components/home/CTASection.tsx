import { motion } from 'framer-motion';
import { Phone, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const CTASection = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-24 md:py-32 bg-foreground text-background relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-64 h-64 border border-gold/10 rotate-45 translate-x-32 -translate-y-32" />
      <div className="absolute bottom-0 left-0 w-96 h-96 border border-gold/5 rotate-12 -translate-x-48 translate-y-48" />

      <div className="container mx-auto px-6 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">{t('cta.title')}</h2>
          <p className="mt-6 text-background/60 max-w-xl mx-auto font-body leading-relaxed">{t('cta.desc')}</p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-foreground px-8 py-4 text-xs font-body font-semibold tracking-[0.2em] uppercase transition-all duration-300"
            >
              {t('cta.button')}
              {isRTL ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
            </Link>
            <a
              href="tel:+97126666888"
              className="inline-flex items-center gap-2 border border-background/30 hover:border-gold text-background hover:text-gold px-8 py-4 text-xs font-body font-semibold tracking-[0.2em] uppercase transition-all duration-300"
            >
              <Phone className="h-4 w-4" />
              {t('cta.call')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
