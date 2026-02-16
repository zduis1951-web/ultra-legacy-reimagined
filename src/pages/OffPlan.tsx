import { motion } from 'framer-motion';
import { Calendar, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import property1 from '@/assets/property1.jpg';
import property2 from '@/assets/property2.jpg';
import property3 from '@/assets/property3.jpg';

const projects = [
  {
    id: 1, image: property1,
    title: { en: 'The Grand Residences', ar: 'ذا جراند ريزيدنسز' },
    location: { en: 'Al Raha Beach, Abu Dhabi', ar: 'شاطئ الراحة، أبوظبي' },
    completion: 'Q4 2027', startingPrice: 'AED 3,500,000',
  },
  {
    id: 2, image: property2,
    title: { en: 'Saadiyat Shores', ar: 'شواطئ السعديات' },
    location: { en: 'Saadiyat Island, Abu Dhabi', ar: 'جزيرة السعديات، أبوظبي' },
    completion: 'Q2 2028', startingPrice: 'AED 2,100,000',
  },
  {
    id: 3, image: property3,
    title: { en: 'Reem Heights Tower', ar: 'برج ريم هايتس' },
    location: { en: 'Al Reem Island, Abu Dhabi', ar: 'جزيرة الريم، أبوظبي' },
    completion: 'Q1 2029', startingPrice: 'AED 1,800,000',
  },
];

const OffPlan = () => {
  const { t, language, isRTL } = useLanguage();

  return (
    <main className="pt-24">
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-gold">BSH</span>
            <h1 className="mt-4 text-3xl md:text-5xl font-display font-bold text-foreground">{t('offplan.title')}</h1>
            <p className="mt-4 text-muted-foreground">{t('offplan.subtitle')}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="group bg-card overflow-hidden border border-border hover:border-gold/30 transition-all duration-500"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={project.image} alt={project.title[language]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-background">
                    <Calendar className="h-4 w-4 text-gold" />
                    <span className="text-xs font-body tracking-wider">{t('offplan.completion')}: {project.completion}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-semibold text-xl text-foreground">{project.title[language]}</h3>
                  <p className="mt-1 text-xs text-muted-foreground tracking-wider">{project.location[language]}</p>
                  <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{t('offplan.startingFrom')}</span>
                      <p className="font-display font-bold text-lg text-gold">{project.startingPrice}</p>
                    </div>
                    {isRTL ? <ArrowLeft className="h-5 w-5 text-gold" /> : <ArrowRight className="h-5 w-5 text-gold" />}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default OffPlan;
