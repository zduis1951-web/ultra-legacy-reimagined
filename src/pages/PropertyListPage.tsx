import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bed, Bath, Home, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Skeleton } from '@/components/ui/skeleton';
import villaImg from '@/assets/villa-alrimaila-new.jpg';
import property1 from '@/assets/property1.jpg';
import property2 from '@/assets/property2.jpg';
import property3 from '@/assets/property3.jpg';

const allProperties = [
  {
    id: 1, image: villaImg, category: 'villa', locationKey: 'alrimaila',
    title: { en: 'Villa - Alrimaila', ar: 'فيلا - الرميلة' },
    price: '2,000,000 AED', beds: 5, baths: 4, balconies: 3,
    location: { en: 'Alrimaila, Ajman', ar: 'الرميلة، عجمان' },
  },
  {
    id: 2, image: property1, category: 'flat', locationKey: 'ajmanTowers',
    title: { en: 'Luxury Flat - Ajman Towers', ar: 'شقة فاخرة - أبراج عجمان' },
    price: '450,000 AED', beds: 2, baths: 2, balconies: 1,
    location: { en: 'Ajman Towers, Ajman', ar: 'أبراج عجمان، عجمان' },
  },
  {
    id: 3, image: property2, category: 'flat', locationKey: 'alrashidiya',
    title: { en: 'Flat - Alrashidiya', ar: 'شقة - الرشيدية' },
    price: '380,000 AED', beds: 1, baths: 1, balconies: 1,
    location: { en: 'Alrashidiya Towers, Ajman', ar: 'أبراج الرشيدية، عجمان' },
  },
  {
    id: 4, image: property3, category: 'residential-lot', locationKey: 'alnaimiya',
    title: { en: 'Residential Lot - Alnaimiya', ar: 'أرض سكنية - النعيمية' },
    price: '1,200,000 AED', beds: 0, baths: 0, balconies: 0,
    location: { en: 'Alnaimiya, Ajman', ar: 'النعيمية، عجمان' },
  },
];

interface PropertyListPageProps {
  type: 'sale' | 'rent';
}

const PropertyListPage = ({ type }: PropertyListPageProps) => {
  const { t, language, isRTL } = useLanguage();
  const [filter, setFilter] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');
  const [loading, setLoading] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  const title = type === 'sale' ? t('properties.forSale.title') : t('properties.forRent.title');
  const subtitle = type === 'sale' ? t('properties.forSale.subtitle') : t('properties.forRent.subtitle');

  const handleFilterChange = (key: string, isLocation = false) => {
    setLoading(true);
    if (isLocation) {
      setLocationFilter(key);
    } else {
      setFilter(key);
    }
    // Smooth scroll to grid
    setTimeout(() => {
      gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
    // Brief skeleton for premium feel
    setTimeout(() => setLoading(false), 350);
  };

  const categoryFilters = [
    { key: 'all', label: t('properties.filter.all') },
    { key: 'villa', label: t('properties.filter.villa') },
    { key: 'flat', label: t('properties.filter.flat') },
    { key: 'residential-lot', label: t('properties.filter.residentialLot') },
    { key: 'agricultural-lot', label: t('properties.filter.agriculturalLot') },
    { key: 'off-plan', label: t('properties.filter.offPlan') },
    { key: 'others', label: t('properties.filter.others') },
  ];

  const locationFilters = [
    { key: 'all', label: t('properties.location.all') },
    { key: 'ajmanTowers', label: t('properties.location.ajmanTowers') },
    { key: 'alrashidiya', label: t('properties.location.alrashidiya') },
    { key: 'cityTowers', label: t('properties.location.cityTowers') },
    { key: 'alkhoar', label: t('properties.location.alkhoar') },
    { key: 'alrimaila', label: t('properties.location.alrimaila') },
    { key: 'alnaimiya', label: t('properties.location.alnaimiya') },
  ];

  let filtered = allProperties;
  if (filter !== 'all') filtered = filtered.filter(p => p.category === filter);
  if (locationFilter !== 'all') filtered = filtered.filter(p => p.locationKey === locationFilter);

  const showingText = t('properties.showing')
    .replace('{count}', String(filtered.length))
    .replace('{total}', String(allProperties.length));

  return (
    <main className="pt-24">
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <span className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-gold">BSH</span>
            <h1 className="mt-4 text-3xl md:text-5xl font-display font-bold text-foreground">{title}</h1>
            <p className="mt-4 text-muted-foreground">{subtitle}</p>
          </motion.div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {categoryFilters.map((f) => (
              <button
                key={f.key}
                onClick={() => handleFilterChange(f.key)}
                className={`px-5 py-2 text-xs font-body font-semibold tracking-[0.15em] uppercase border transition-all duration-300 ${
                  filter === f.key
                    ? 'bg-foreground text-background border-foreground'
                    : 'border-border text-muted-foreground hover:border-gold hover:text-gold'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Location Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {locationFilters.map((f) => (
              <button
                key={f.key}
                onClick={() => handleFilterChange(f.key, true)}
                className={`px-4 py-1.5 text-[10px] font-body tracking-[0.1em] uppercase border transition-all duration-300 ${
                  locationFilter === f.key
                    ? 'bg-gold text-foreground border-gold'
                    : 'border-border/50 text-muted-foreground hover:border-gold/50 hover:text-gold'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Results counter */}
          <motion.p
            key={`${filter}-${locationFilter}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-xs text-muted-foreground tracking-wider mb-10"
          >
            {showingText}
          </motion.p>

          <div ref={gridRef} className="scroll-mt-28">
            {loading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-card border border-border overflow-hidden">
                    <Skeleton className="aspect-[4/3] w-full rounded-none" />
                    <div className="p-6 space-y-3">
                      <Skeleton className="h-5 w-3/4" />
                      <Skeleton className="h-3 w-1/2" />
                      <Skeleton className="h-4 w-1/3 mt-4" />
                    </div>
                  </div>
                ))}
              </div>
            ) : filtered.length === 0 ? (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-muted-foreground py-20"
              >
                {t('properties.noResults')}
              </motion.p>
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${filter}-${locationFilter}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {filtered.map((prop, i) => (
                    <motion.div
                      key={prop.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
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
                            {prop.balconies > 0 && <span className="flex items-center gap-1"><Home className="h-3.5 w-3.5" /> {prop.balconies}</span>}
                          </div>
                        )}
                        <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                          <span className="font-display font-bold text-lg text-gold">{prop.price}</span>
                          <Link
                            to={`/property/${prop.id}`}
                            className="inline-flex items-center gap-1 text-xs font-body tracking-wider uppercase text-muted-foreground hover:text-gold transition-colors"
                          >
                            {t('property.viewDetails')}
                            {isRTL ? <ArrowLeft className="h-3.5 w-3.5" /> : <ArrowRight className="h-3.5 w-3.5" />}
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default PropertyListPage;
