import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bed, Bath, Home, Phone, ArrowLeft, ArrowRight, CheckCircle, XCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import villaImg from '@/assets/villa-alrimaila.jpg';
import property1 from '@/assets/property1.jpg';
import property2 from '@/assets/property2.jpg';
import property3 from '@/assets/property3.jpg';

const propertiesData: Record<string, {
  images: string[];
  title: { en: string; ar: string };
  location: { en: string; ar: string };
  price: string;
  installments: number;
  bedrooms: number;
  bathrooms: number;
  balconies: number;
  forSale: boolean;
  forRent: boolean;
  agentName: string;
  agentPhone: string;
  category: string;
}> = {
  '1': {
    images: [villaImg],
    title: { en: 'Villa - Alrimaila', ar: 'فيلا - الرميلة' },
    location: { en: 'Alrimaila, Ajman', ar: 'الرميلة، عجمان' },
    price: '2,000,000 AED',
    installments: 48,
    bedrooms: 5,
    bathrooms: 4,
    balconies: 3,
    forSale: true,
    forRent: false,
    agentName: 'Ali',
    agentPhone: '+971563928635',
    category: 'villa',
  },
  '2': {
    images: [property1],
    title: { en: 'Luxury Flat - Ajman Towers', ar: 'شقة فاخرة - أبراج عجمان' },
    location: { en: 'Ajman Towers, Ajman', ar: 'أبراج عجمان، عجمان' },
    price: '450,000 AED',
    installments: 36,
    bedrooms: 2,
    bathrooms: 2,
    balconies: 1,
    forSale: true,
    forRent: true,
    agentName: 'Ali',
    agentPhone: '+971563928635',
    category: 'flat',
  },
  '3': {
    images: [property2],
    title: { en: 'Flat - Alrashidiya', ar: 'شقة - الرشيدية' },
    location: { en: 'Alrashidiya Towers, Ajman', ar: 'أبراج الرشيدية، عجمان' },
    price: '380,000 AED',
    installments: 24,
    bedrooms: 1,
    bathrooms: 1,
    balconies: 1,
    forSale: true,
    forRent: true,
    agentName: 'Ali',
    agentPhone: '+971563928635',
    category: 'flat',
  },
  '4': {
    images: [property3],
    title: { en: 'Residential Lot - Alnaimiya', ar: 'أرض سكنية - النعيمية' },
    location: { en: 'Alnaimiya, Ajman', ar: 'النعيمية، عجمان' },
    price: '1,200,000 AED',
    installments: 0,
    bedrooms: 0,
    bathrooms: 0,
    balconies: 0,
    forSale: true,
    forRent: false,
    agentName: 'Ali',
    agentPhone: '+971563928635',
    category: 'residential-lot',
  },
};

const PropertyDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { t, language, isRTL } = useLanguage();
  const property = id ? propertiesData[id] : null;

  if (!property) {
    return (
      <main className="pt-24">
        <div className="container mx-auto px-6 py-32 text-center">
          <h1 className="text-3xl font-display font-bold text-foreground">Property Not Found</h1>
          <Link to="/for-sale" className="mt-6 inline-flex items-center gap-2 text-gold hover:underline">
            {isRTL ? <ArrowRight className="h-4 w-4" /> : <ArrowLeft className="h-4 w-4" />}
            {t('property.backToList')}
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24">
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6">
          {/* Back link */}
          <Link to="/for-sale" className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors mb-8 text-sm font-body tracking-wider uppercase">
            {isRTL ? <ArrowRight className="h-4 w-4" /> : <ArrowLeft className="h-4 w-4" />}
            {t('property.backToList')}
          </Link>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="aspect-[4/3] overflow-hidden border border-border">
                <img src={property.images[0]} alt={property.title[language]} className="w-full h-full object-cover" />
              </div>
              <p className="mt-3 text-xs text-muted-foreground tracking-[0.15em] uppercase font-body">{t('property.photos')}</p>
            </motion.div>

            {/* Details */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="space-y-8">
              <div>
                <span className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-gold">{property.category}</span>
                <h1 className="mt-2 text-3xl md:text-4xl font-display font-bold text-foreground">{property.title[language]}</h1>
                <p className="mt-2 text-muted-foreground">{property.location[language]}</p>
              </div>

              {/* Price */}
              <div className="p-6 border border-gold/30 bg-gold/5">
                <span className="text-xs font-body tracking-[0.15em] uppercase text-muted-foreground">{t('property.price')}</span>
                <p className="mt-1 text-3xl font-display font-bold text-gold">{property.price}</p>
                {property.installments > 0 && (
                  <p className="mt-2 text-sm text-muted-foreground">{property.installments} {t('property.installment')}</p>
                )}
              </div>

              {/* Specs */}
              {property.bedrooms > 0 && (
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: Bed, label: t('property.bedrooms'), value: property.bedrooms },
                    { icon: Bath, label: t('property.bathrooms'), value: property.bathrooms },
                    { icon: Home, label: t('property.balconies'), value: property.balconies },
                  ].map((spec, i) => (
                    <div key={i} className="p-4 border border-border text-center">
                      <spec.icon className="h-5 w-5 text-gold mx-auto" />
                      <p className="mt-2 text-2xl font-display font-bold text-foreground">{spec.value}</p>
                      <p className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground mt-1">{spec.label}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Sale/Rent Status */}
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  {property.forSale ? <CheckCircle className="h-5 w-5 text-gold" /> : <XCircle className="h-5 w-5 text-muted-foreground/40" />}
                  <span className="text-sm font-body">{t('property.forSale')}: {property.forSale ? t('property.yes') : t('property.no')}</span>
                </div>
                <div className="flex items-center gap-2">
                  {property.forRent ? <CheckCircle className="h-5 w-5 text-gold" /> : <XCircle className="h-5 w-5 text-muted-foreground/40" />}
                  <span className="text-sm font-body">{t('property.forRent')}: {property.forRent ? t('property.yes') : t('property.no')}</span>
                </div>
              </div>

              {/* Agent Info */}
              <div className="p-6 border border-border">
                <h3 className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold mb-4">{t('property.agentInfo')}</h3>
                <div className="space-y-3">
                  <p className="text-sm"><span className="text-muted-foreground">{t('property.agentName')}:</span> <span className="font-semibold text-foreground">{property.agentName}</span></p>
                  <p className="text-sm"><span className="text-muted-foreground">{t('property.agentPhone')}:</span> <span className="font-semibold text-foreground">{property.agentPhone}</span></p>
                </div>
                <a
                  href={`tel:${property.agentPhone}`}
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-foreground px-8 py-4 text-xs font-body font-semibold tracking-[0.2em] uppercase transition-all duration-300"
                >
                  <Phone className="h-4 w-4" />
                  {t('property.contactAgent')}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PropertyDetailPage;
