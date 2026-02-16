import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="relative h-screen min-h-[750px] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-16 h-[2px] bg-gold mb-10" />
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] whitespace-pre-line drop-shadow-lg">
              {t('hero.title')}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 text-white/70 text-lg md:text-xl font-body font-light max-w-lg leading-relaxed"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 flex flex-wrap gap-5"
          >
            <Link
              to="/for-sale"
              className="group inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-foreground px-10 py-4 text-[11px] font-body font-semibold tracking-[0.25em] uppercase transition-all duration-500"
            >
              {t('hero.cta')}
              {isRTL ? <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" /> : <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />}
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-gold text-white hover:text-gold px-10 py-4 text-[11px] font-body font-semibold tracking-[0.25em] uppercase transition-all duration-500"
            >
              {t('hero.secondary')}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-gold/60 to-gold animate-pulse" />
        
      </motion.div>
    </section>
  );
};

export default HeroSection;
