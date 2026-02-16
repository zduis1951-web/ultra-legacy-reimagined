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
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-gold">{t('featured.tag')}</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-display font-bold text-foreground">{t('featured.title')}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((prop, i) => (
            <motion.div
              key={prop.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group bg-card overflow-hidden border border-border hover:border-gold/30 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={prop.image}
                  alt={prop.title[language]}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gold text-foreground px-3 py-1 text-[10px] font-body font-semibold tracking-[0.15em] uppercase">
                    {prop.type === 'forSale' ? t('featured.forSale') : t('featured.forRent')}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display font-semibold text-lg text-foreground">{prop.title[language]}</h3>
                <p className="mt-1 text-xs text-muted-foreground tracking-wider">{prop.location[language]}</p>

                <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Bed className="h-3.5 w-3.5" /> {prop.beds} {t('featured.beds')}</span>
                  <span className="flex items-center gap-1"><Bath className="h-3.5 w-3.5" /> {prop.baths} {t('featured.baths')}</span>
                  <span className="flex items-center gap-1"><Maximize className="h-3.5 w-3.5" /> {prop.sqft.toLocaleString()} {t('featured.sqft')}</span>
                </div>

                <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                  <span className="font-display font-bold text-lg text-gold">{prop.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            to="/for-sale"
            className="group inline-flex items-center gap-2 text-xs font-body font-semibold tracking-[0.2em] uppercase text-foreground hover:text-gold transition-colors duration-300"
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
