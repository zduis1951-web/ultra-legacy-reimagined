import { motion } from 'framer-motion';
import { Home, Building, Briefcase, Truck, Award, Users, Shield, Lightbulb } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Home, title: t('services.buying.title'), desc: t('services.buying.desc') },
    { icon: Building, title: t('services.management.title'), desc: t('services.management.desc') },
    { icon: Briefcase, title: t('services.consulting.title'), desc: t('services.consulting.desc') },
    { icon: Truck, title: t('services.relocation.title'), desc: t('services.relocation.desc') },
  ];

  const whyUs = [
    { icon: Award, title: t('services.whyUs.expertise'), desc: t('services.whyUs.expertiseDesc') },
    { icon: Users, title: t('services.whyUs.customerFocus'), desc: t('services.whyUs.customerFocusDesc') },
    { icon: Shield, title: t('services.whyUs.integrity'), desc: t('services.whyUs.integrityDesc') },
    { icon: Lightbulb, title: t('services.whyUs.innovation'), desc: t('services.whyUs.innovationDesc') },
  ];

  return (
    <main className="pt-24">
      {/* Services */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-gold">BSH</span>
            <h1 className="mt-4 text-3xl md:text-5xl font-display font-bold text-foreground">{t('services.title')}</h1>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">{t('services.subtitle')}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 border border-border hover:border-gold/30 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]"
              >
                <div className="w-14 h-14 flex items-center justify-center border border-border group-hover:border-gold group-hover:bg-gold/5 transition-all duration-300">
                  <service.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="mt-6 font-display font-semibold text-lg text-foreground">{service.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-gold">BSH</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-display font-bold text-foreground">{t('services.whyUs.title')}</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 mx-auto flex items-center justify-center border border-gold/30 bg-gold/5">
                  <item.icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="mt-6 font-display font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
