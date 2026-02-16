import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bed, Bath, Maximize } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import property1 from '@/assets/property1.jpg';
import property2 from '@/assets/property2.jpg';
import property3 from '@/assets/property3.jpg';

const allProperties = [
  { id: 1, image: property1, category: 'villa', title: { en: 'Modern Villa - Al Raha', ar: 'فيلا عصرية - الراحة' }, price: 'AED 5,200,000', beds: 5, baths: 6, sqft: 8500, location: { en: 'Al Raha Beach', ar: 'شاطئ الراحة' } },
  { id: 2, image: property2, category: 'apartment', title: { en: 'Luxury Apartment - Saadiyat', ar: 'شقة فاخرة - السعديات' }, price: 'AED 2,800,000', beds: 3, baths: 4, sqft: 3200, location: { en: 'Saadiyat Island', ar: 'جزيرة السعديات' } },
  { id: 3, image: property3, category: 'penthouse', title: { en: 'Penthouse - Al Reem', ar: 'بنتهاوس - الريم' }, price: 'AED 8,900,000', beds: 4, baths: 5, sqft: 6000, location: { en: 'Al Reem Island', ar: 'جزيرة الريم' } },
  { id: 4, image: property1, category: 'villa', title: { en: 'Beach Villa - Yas', ar: 'فيلا شاطئية - ياس' }, price: 'AED 7,500,000', beds: 6, baths: 7, sqft: 10000, location: { en: 'Yas Island', ar: 'جزيرة ياس' } },
  { id: 5, image: property2, category: 'apartment', title: { en: 'Garden Apartment', ar: 'شقة مع حديقة' }, price: 'AED 1,900,000', beds: 2, baths: 3, sqft: 2100, location: { en: 'Al Raha Beach', ar: 'شاطئ الراحة' } },
  { id: 6, image: property3, category: 'land', title: { en: 'Premium Land Plot', ar: 'أرض مميزة' }, price: 'AED 12,000,000', beds: 0, baths: 0, sqft: 15000, location: { en: 'Saadiyat Island', ar: 'جزيرة السعديات' } },
];

interface PropertyListPageProps {
  type: 'sale' | 'rent';
}

const PropertyListPage = ({ type }: PropertyListPageProps) => {
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState('all');

  const title = type === 'sale' ? t('properties.forSale.title') : t('properties.forRent.title');
  const subtitle = type === 'sale' ? t('properties.forSale.subtitle') : t('properties.forRent.subtitle');

  const filters = [
    { key: 'all', label: t('properties.filter.all') },
    { key: 'villa', label: t('properties.filter.villa') },
    { key: 'apartment', label: t('properties.filter.apartment') },
    { key: 'penthouse', label: t('properties.filter.penthouse') },
    { key: 'land', label: t('properties.filter.land') },
  ];

  const filtered = filter === 'all' ? allProperties : allProperties.filter(p => p.category === filter);

  return (
    <main className="pt-24">
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <span className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-gold">BSH</span>
            <h1 className="mt-4 text-3xl md:text-5xl font-display font-bold text-foreground">{title}</h1>
            <p className="mt-4 text-muted-foreground">{subtitle}</p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-6 py-2 text-xs font-body font-semibold tracking-[0.15em] uppercase border transition-all duration-300 ${
                  filter === f.key
                    ? 'bg-foreground text-background border-foreground'
                    : 'border-border text-muted-foreground hover:border-gold hover:text-gold'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground py-20">{t('properties.noResults')}</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((prop, i) => (
                <motion.div
                  key={prop.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-card overflow-hidden border border-border hover:border-gold/30 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={prop.image} alt={prop.title[language]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-semibold text-lg text-foreground">{prop.title[language]}</h3>
                    <p className="mt-1 text-xs text-muted-foreground tracking-wider">{prop.location[language]}</p>
                    {prop.beds > 0 && (
                      <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><Bed className="h-3.5 w-3.5" /> {prop.beds}</span>
                        <span className="flex items-center gap-1"><Bath className="h-3.5 w-3.5" /> {prop.baths}</span>
                        <span className="flex items-center gap-1"><Maximize className="h-3.5 w-3.5" /> {prop.sqft.toLocaleString()}</span>
                      </div>
                    )}
                    <div className="mt-4 pt-4 border-t border-border">
                      <span className="font-display font-bold text-lg text-gold">{prop.price}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default PropertyListPage;
