import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import aboutBg from '@/assets/about-bg.jpg';

const AboutSection = () => {
  const { t } = useLanguage();

  const values = [
    { icon: Target, title: t('about.mission'), desc: t('about.missionDesc') },
    { icon: Eye, title: t('about.vision'), desc: t('about.visionDesc') },
    { icon: Heart, title: t('about.values'), desc: t('about.valuesDesc') },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img src={aboutBg} alt="Luxury Interior" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-gold hidden lg:block" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-gold">{t('about.tag')}</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-display font-bold text-foreground leading-tight">{t('about.title')}</h2>
            <p className="mt-6 text-muted-foreground font-body leading-relaxed">{t('about.desc')}</p>

            <div className="mt-12 space-y-8">
              {values.map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="shrink-0 w-12 h-12 flex items-center justify-center border border-border group-hover:border-gold group-hover:bg-gold/5 transition-all duration-300">
                    <item.icon className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
