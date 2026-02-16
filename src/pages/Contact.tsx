import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: 'Message sent!', description: 'We will get back to you shortly.' });
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <main className="pt-24">
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-gold">BSH</span>
            <h1 className="mt-4 text-3xl md:text-5xl font-display font-bold text-foreground">{t('contact.title')}</h1>
            <p className="mt-4 text-muted-foreground">{t('contact.subtitle')}</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              {[
                { key: 'name', type: 'text', label: t('contact.name') },
                { key: 'email', type: 'email', label: t('contact.email') },
                { key: 'phone', type: 'tel', label: t('contact.phone') },
              ].map((field) => (
                <div key={field.key}>
                  <label className="block text-xs font-body font-semibold tracking-[0.15em] uppercase text-foreground mb-2">{field.label}</label>
                  <input
                    type={field.type}
                    required
                    value={form[field.key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-foreground font-body transition-colors duration-300"
                  />
                </div>
              ))}
              <div>
                <label className="block text-xs font-body font-semibold tracking-[0.15em] uppercase text-foreground mb-2">{t('contact.message')}</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-foreground font-body transition-colors duration-300 resize-none"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex items-center gap-2 bg-foreground hover:bg-gold text-background px-8 py-4 text-xs font-body font-semibold tracking-[0.2em] uppercase transition-all duration-300"
              >
                {t('contact.send')}
                <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.form>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              {[
                { icon: MapPin, label: t('contact.office'), value: t('footer.address') },
                { icon: Phone, label: t('cta.call'), value: '+971 2 666 6888' },
                { icon: Mail, label: t('contact.email'), value: 'info@baytalshumukh.com' },
                { icon: Clock, label: t('contact.hours'), value: t('contact.hoursValue') },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 border border-border hover:border-gold/30 transition-all duration-300">
                  <div className="w-12 h-12 shrink-0 flex items-center justify-center border border-border">
                    <item.icon className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-xs font-body font-semibold tracking-[0.15em] uppercase text-muted-foreground">{item.label}</p>
                    <p className="mt-1 font-body text-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
