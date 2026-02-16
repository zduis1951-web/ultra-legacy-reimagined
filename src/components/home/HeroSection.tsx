import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-12 h-[1px] bg-gold mb-8" />
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] whitespace-pre-line drop-shadow-lg">
              {t('hero.title')}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 text-white/80 text-lg md:text-xl font-body font-light max-w-lg leading-relaxed drop-shadow-md"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/for-sale"
              className="group inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-foreground px-8 py-4 text-xs font-body font-semibold tracking-[0.2em] uppercase transition-all duration-300"
            >
              {t('hero.cta')}
              {isRTL ? <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" /> : <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />}
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-white/40 hover:border-gold text-white hover:text-gold px-8 py-4 text-xs font-body font-semibold tracking-[0.2em] uppercase transition-all duration-300"
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-gold animate-pulse" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
