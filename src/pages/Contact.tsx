import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ChevronDown, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: t('contact.successTitle'), description: t('contact.successMessage') });
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <main className="pt-24">
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          {/* Page Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <div className="w-12 h-px bg-gold/60 mx-auto mb-6" />
            <span className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-gold">BSH</span>
            <h1 className="mt-4 text-3xl md:text-5xl font-display font-bold text-foreground">{t('contact.title')}</h1>
            <p className="mt-4 text-muted-foreground font-body">{t('contact.subtitle')}</p>
            <div className="w-12 h-px bg-gold/60 mx-auto mt-6" />
          </motion.div>

          {/* Collapsible Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-20"
          >
            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
              <CollapsibleTrigger className="w-full group">
                <div className="flex items-center justify-center gap-3 py-5 px-8 border border-border hover:border-gold/40 bg-card transition-all duration-300 cursor-pointer">
                  <span className="text-sm font-body font-semibold tracking-[0.2em] uppercase text-foreground group-hover:text-gold transition-colors">
                    {t('contact.clickToSend')}
                  </span>
                  <ChevronDown className={`h-4 w-4 text-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="border border-t-0 border-border p-8 md:p-12 bg-card">
                  <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
                    {[
                      { key: 'name', type: 'text', label: t('contact.name') },
                      { key: 'email', type: 'email', label: t('contact.email') },
                      { key: 'phone', type: 'tel', label: t('contact.phone') },
                      { key: 'subject', type: 'text', label: t('contact.subject') },
                    ].map((field) => (
                      <div key={field.key}>
                        <label className="block text-xs font-body font-semibold tracking-[0.15em] uppercase text-foreground mb-2">
                          {field.label}
                        </label>
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
                      <label className="block text-xs font-body font-semibold tracking-[0.15em] uppercase text-foreground mb-2">
                        {t('contact.message')}
                      </label>
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
                  </form>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </motion.div>

          {/* Contact Information Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground text-center mb-12">
              {t('contact.contactInfo')}
            </h2>

            <div className="grid lg:grid-cols-2 gap-10">
              {/* Google Maps */}
              <div className="border border-border overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d901.4!2d55.4374702!3d25.3991525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f59002d2d35c5%3A0xa385fd166e22cee!2sBayt%20alshumukh%20real%20estate!5e0!3m2!1sen!2sae!4v1700000000000"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bayt Alshumukh Location"
                  className="w-full h-[400px]"
                />
              </div>

              {/* Contact Details */}
              <div className="space-y-6 flex flex-col justify-center">
                {[
                  { icon: MapPin, label: t('contact.office'), value: t('footer.address') },
                  { icon: Phone, label: t('cta.call'), value: '+971-50-178-8428' },
                  { icon: Mail, label: t('contact.email'), value: 'info@baytalshumukh.com' },
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
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
