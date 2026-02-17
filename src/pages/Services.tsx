import { motion } from 'framer-motion';
import { Home, Building, Briefcase, Truck, Award, Users, Shield, Lightbulb, ArrowRight, ArrowLeft, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import servicesHeroBg from '@/assets/services-hero-bg.jpg';

const Services = () => {
  const { t, isRTL } = useLanguage();

  const services = [
    { icon: Home, title: t('services.buying.title'), desc: t('services.buying.desc') },
    { icon: Building, title: t('services.management.title'), desc: t('services.management.desc') },
    { icon: Briefcase, title: t('services.consulting.title'), desc: t('services.consulting.desc') },
    { icon: Truck, title: t('services.relocation.title'), desc: t('services.relocation.desc') },
  ];

  const whyUs = [
    { icon: Award, title: t('services.whyUs.expertise'), desc: t('services.whyUs.expertiseDesc'), delay: 0 },
    { icon: Users, title: t('services.whyUs.customerFocus'), desc: t('services.whyUs.customerFocusDesc'), delay: 0.15 },
    { icon: Shield, title: t('services.whyUs.integrity'), desc: t('services.whyUs.integrityDesc'), delay: 0.3 },
    { icon: Lightbulb, title: t('services.whyUs.innovation'), desc: t('services.whyUs.innovationDesc'), delay: 0.45 },
  ];

  return (
    <main className="pt-24">
      {/* Hero Services Section */}
      <section className="relative py-32 md:py-44 overflow-hidden">
        <div className="absolute inset-0">
          <img src={servicesHeroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85 backdrop-blur-[2px]" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        <div className="relative container mx-auto px-6">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20 md:mb-28"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-px bg-gold mx-auto mb-8"
            />
            <span className="text-xs font-body font-semibold tracking-[0.4em] uppercase text-gold">BSH</span>
            <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[1.1]">
              {t('services.title')}
            </h1>
            <p className="mt-8 text-muted-foreground max-w-xl mx-auto font-body leading-[2] text-[15px]">
              {t('services.subtitle')}
            </p>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-px bg-gold mx-auto mt-8"
            />
          </motion.div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className="group relative"
              >
                <div className="relative h-full p-10 bg-card border border-border/60 transition-all duration-700 hover:border-gold/40 hover:shadow-[0_25px_80px_-20px_rgba(0,0,0,0.12)]">
                  {/* Top gold accent line */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-gold-light via-gold to-gold-dark group-hover:w-full transition-all duration-700" />

                  {/* Diamond Icon */}
                  <div className="relative w-20 h-20 flex items-center justify-center mb-8">
                    <div className="absolute inset-0 border border-border/40 group-hover:border-gold/30 transition-all duration-500 rotate-45" />
                    <div className="absolute inset-2 border border-border/20 group-hover:border-gold/20 transition-all duration-500 rotate-45" />
                    <service.icon className="relative h-7 w-7 text-gold transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-semibold text-lg text-foreground tracking-wide">{service.title}</h3>
                  <div className="w-8 h-px bg-gold/40 my-5 group-hover:w-12 transition-all duration-500" />
                  <p className="text-sm text-muted-foreground leading-[1.8] font-body">{service.desc}</p>

                  {/* Bottom gold accent line */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-gold-light via-gold to-gold-dark group-hover:w-full transition-all duration-700" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-32 md:py-44 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-muted/10 to-muted/30" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        <div className="relative container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20 md:mb-28"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-px bg-gold mx-auto mb-8"
            />
            <span className="text-xs font-body font-semibold tracking-[0.4em] uppercase text-gold">BSH</span>
            <h2 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[1.1]">
              {t('services.whyUs.title')}
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-px bg-gold mx-auto mt-8"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {whyUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: item.delay }}
                className="group relative"
              >
                <div className="relative h-full p-10 bg-card border border-border/60 transition-all duration-700 hover:border-gold/40 hover:shadow-[0_25px_80px_-20px_rgba(0,0,0,0.12)]">
                  {/* Top gold accent line */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-gold-light via-gold to-gold-dark group-hover:w-full transition-all duration-700" />

                  {/* Diamond Icon */}
                  <div className="relative mx-auto w-20 h-20 flex items-center justify-center mb-8">
                    <div className="absolute inset-0 border border-border/40 group-hover:border-gold/30 transition-all duration-500 rotate-45" />
                    <div className="absolute inset-2 border border-border/20 group-hover:border-gold/20 transition-all duration-500 rotate-45" />
                    <item.icon className="relative h-7 w-7 text-gold transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <h3 className="text-center font-display font-semibold text-lg text-foreground tracking-wide">{item.title}</h3>
                  <div className="w-8 h-px bg-gold/40 mx-auto my-5 group-hover:w-12 transition-all duration-500" />
                  <p className="text-center text-sm text-muted-foreground leading-[1.8] font-body">{item.desc}</p>

                  {/* Bottom gold accent line */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-gold-light via-gold to-gold-dark group-hover:w-full transition-all duration-700" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 md:py-40 bg-foreground text-background relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
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
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              {t('cta.title')}
            </h2>
            <p className="mt-8 text-background/50 max-w-xl mx-auto font-body leading-[2] text-[15px]">
              {t('cta.desc')}
            </p>
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
    </main>
  );
};

export default Services;
