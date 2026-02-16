import { motion } from 'framer-motion';
import { Users, Handshake } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const TeamCommitmentSection = () => {
  const { t } = useLanguage();

  const sections = [
    { icon: Users, title: t('about.team'), desc: t('about.teamDesc'), delay: 0.2 },
    { icon: Handshake, title: t('about.commitment'), desc: t('about.commitmentDesc'), delay: 0.4 },
  ];

  return (
    <section className="relative py-32 md:py-44 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {sections.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: item.delay }}
              className="group relative"
            >
              {/* Gold corner accent */}
              <div className="absolute -top-4 -left-4 w-20 h-20 hidden md:block rtl:-right-4 rtl:left-auto">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gold/30 group-hover:bg-gold transition-colors duration-500" />
                <div className="absolute top-0 left-0 w-[2px] h-full bg-gold/30 group-hover:bg-gold transition-colors duration-500" />
              </div>

              {/* Diamond icon */}
              <div className="relative w-16 h-16 mb-8 flex items-center justify-center">
                <div className="absolute inset-0 border border-border group-hover:border-gold/40 transition-all duration-500 rotate-45" />
                <div className="absolute inset-1.5 border border-border/50 group-hover:border-gold/30 transition-all duration-500 rotate-45" />
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/5 transition-all duration-500 rotate-45" />
                <item.icon className="relative h-6 w-6 text-gold transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground tracking-wide group-hover:text-gold transition-colors duration-300">
                {item.title}
              </h3>

              <div className="w-8 h-px bg-gold/40 my-6 group-hover:w-14 transition-all duration-500" />

              {/* Description */}
              <p className="text-muted-foreground font-body leading-[2] text-[15px]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamCommitmentSection;
