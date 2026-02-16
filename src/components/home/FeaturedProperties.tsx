import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Bed, Bath, Maximize } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import property1 from '@/assets/property1.jpg';
import property2 from '@/assets/property2.jpg';
import property3 from '@/assets/property3.jpg';

const properties = [
  {
    id: 1, image: property1, type: 'forSale',
    title: { en: 'Modern Villa - Al Raha', ar: 'فيلا عصرية - الراحة' },
    price: 'AED 5,200,000', beds: 5, baths: 6, sqft: 8500,
    location: { en: 'Al Raha Beach, Abu Dhabi', ar: 'شاطئ الراحة، أبوظبي' },
  },
  {
    id: 2, image: property2, type: 'forRent',
    title: { en: 'Luxury Apartment - Saadiyat', ar: 'شقة فاخرة - السعديات' },
    price: 'AED 180,000/yr', beds: 3, baths: 4, sqft: 3200,
    location: { en: 'Saadiyat Island, Abu Dhabi', ar: 'جزيرة السعديات، أبوظبي' },
  },
  {
    id: 3, image: property3, type: 'forSale',
    title: { en: 'Penthouse - Al Reem', ar: 'بنتهاوس - الريم' },
    price: 'AED 8,900,000', beds: 4, baths: 5, sqft: 6000,
    location: { en: 'Al Reem Island, Abu Dhabi', ar: 'جزيرة الريم، أبوظبي' },
  },
];

const FeaturedProperties = () => {
  const { t, language, isRTL } = useLanguage();

  return (
    <section className="relative py-32 md:py-44 bg-background overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="container mx-auto px-6">
        {/* Section heading - unified style */}
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
          <span className="text-xs font-body font-semibold tracking-[0.4em] uppercase text-gold">{t('featured.tag')}</span>
          <h2 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[1.1]">
            {t('featured.title')}
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-px bg-gold mx-auto mt-8"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {properties.map((prop, i) => (
            <motion.div
              key={prop.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group"
            >
              <div className="relative h-full bg-card border border-border/60 overflow-hidden transition-all duration-700 hover:border-gold/40 hover:shadow-[0_25px_80px_-20px_rgba(0,0,0,0.12)]">
                {/* Top gold line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-gold-light via-gold to-gold-dark group-hover:w-full transition-all duration-700 z-10" />

                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={prop.image}
                    alt={prop.title[language]}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  <div className="absolute top-5 left-5">
                    <span className="text-[10px] font-body font-semibold tracking-[0.2em] uppercase text-white/90 bg-foreground/70 backdrop-blur-sm px-4 py-2">
                      {prop.type === 'forSale' ? t('featured.forSale') : t('featured.forRent')}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="font-display font-semibold text-lg text-foreground tracking-wide">{prop.title[language]}</h3>
                  <p className="mt-2 text-[11px] text-muted-foreground tracking-[0.15em] uppercase">{prop.location[language]}</p>

                  <div className="mt-5 flex items-center gap-5 text-[11px] text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Bed className="h-3.5 w-3.5 text-gold/60" /> {prop.beds} {t('featured.beds')}</span>
                    <span className="flex items-center gap-1.5"><Bath className="h-3.5 w-3.5 text-gold/60" /> {prop.baths} {t('featured.baths')}</span>
                    <span className="flex items-center gap-1.5"><Maximize className="h-3.5 w-3.5 text-gold/60" /> {prop.sqft.toLocaleString()} {t('featured.sqft')}</span>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border/50 flex items-center justify-between">
                    <span className="font-display font-bold text-xl text-gold">{prop.price}</span>
                  </div>
                </div>

                {/* Bottom gold line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-gold-light via-gold to-gold-dark group-hover:w-full transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            to="/for-sale"
            className="group inline-flex items-center gap-3 text-[11px] font-body font-semibold tracking-[0.25em] uppercase text-foreground hover:text-gold transition-colors duration-500"
          >
            {t('featured.viewAll')}
            {isRTL ? <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" /> : <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
