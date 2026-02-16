import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import aboutBg from '@/assets/about-bg.jpg';

const AboutSection = () => {
  const { t } = useLanguage();

  const values = [
    { icon: Target, title: t('about.mission'), desc: t('about.missionDesc'), delay: 0.2 },
    { icon: Eye, title: t('about.vision'), desc: t('about.visionDesc'), delay: 0.4 },
    { icon: Heart, title: t('about.values'), desc: t('about.valuesDesc'), delay: 0.6 },
  ];

  return (
    <section className="relative py-32 md:py-44 overflow-hidden">
      {/* Top & bottom decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src={aboutBg}
                alt="Luxury Interior"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
            </div>

            {/* Decorative frame */}
            <div className="absolute -bottom-8 -right-8 w-full h-full border-2 border-gold/20 hidden lg:block pointer-events-none" />

            {/* Gold corner accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 hidden lg:block">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gold" />
              <div className="absolute top-0 left-0 w-[2px] h-full bg-gold" />
            </div>

            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 left-8 bg-foreground text-background px-8 py-6 hidden lg:block"
            >
              <span className="block text-4xl font-display font-bold text-gold">10+</span>
              <span className="block text-[10px] tracking-[0.3em] uppercase font-body mt-1">{t('stats.experience')}</span>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:pt-8"
          >
            {/* Tag */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-px bg-gold mb-6"
            />
            <span className="text-xs font-body font-semibold tracking-[0.4em] uppercase text-gold">{t('about.tag')}</span>

            {/* Title */}
            <h2 className="mt-6 text-3xl md:text-5xl lg:text-[3.5rem] font-display font-bold text-foreground leading-[1.15]">
              {t('about.title')}
            </h2>

            {/* Description */}
            <p className="mt-8 text-muted-foreground font-body leading-[2] text-[15px]">
              {t('about.desc')}
            </p>

            {/* Mission / Vision / Values */}
            <div className="mt-14 space-y-10">
              {values.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: item.delay }}
                  className="group flex gap-6"
                >
                  {/* Icon container - double border diamond style */}
                  <div className="shrink-0 relative w-16 h-16 flex items-center justify-center">
                    <div className="absolute inset-0 border border-border group-hover:border-gold/40 transition-all duration-500 rotate-0" />
                    <div className="absolute inset-1.5 border border-border/50 group-hover:border-gold/30 transition-all duration-500 rotate-0" />
                    <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/5 transition-all duration-500" />
                    <item.icon className="relative h-6 w-6 text-gold transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-lg text-foreground tracking-wide group-hover:text-gold transition-colors duration-300">
                      {item.title}
                    </h3>
                    <div className="w-6 h-px bg-gold/40 my-3 group-hover:w-10 transition-all duration-500" />
                    <p className="text-sm text-muted-foreground leading-[1.9] font-body">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
