import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.png';

const Footer = () => {
  const { t } = useLanguage();

  const links = [
    { to: '/', label: t('nav.home') },
    { to: '/services', label: t('nav.services') },
    { to: '/for-sale', label: t('nav.forSale') },
    { to: '/for-rent', label: t('nav.forRent') },
    { to: '/off-plan', label: t('nav.offPlan') },
    { to: '/contact', label: t('nav.contact') },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="BSH" className="h-10 w-auto brightness-0 invert" />
              <div>
                <span className="block text-sm font-display font-bold tracking-[0.2em] uppercase">Bayt Alshumukh</span>
                <span className="block text-[10px] tracking-[0.3em] uppercase opacity-60">Real Estate</span>
              </div>
            </div>
            <p className="text-sm opacity-60 leading-relaxed">{t('footer.desc')}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-sm tracking-[0.15em] uppercase mb-6 text-gold">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm opacity-60 hover:opacity-100 hover:text-gold transition-all duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-sm tracking-[0.15em] uppercase mb-6 text-gold">{t('footer.contactInfo')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm opacity-60">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>{t('footer.address')}</span>
              </li>
              <li className="flex items-center gap-3 text-sm opacity-60">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:+97126666888" className="hover:text-gold transition-colors">+971 2 666 6888</a>
              </li>
              <li className="flex items-center gap-3 text-sm opacity-60">
                <Mail className="h-4 w-4 shrink-0" />
                <a href="mailto:info@baytalshumukh.com" className="hover:text-gold transition-colors">info@baytalshumukh.com</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display font-semibold text-sm tracking-[0.15em] uppercase mb-6 text-gold">{t('contact.hours')}</h4>
            <p className="text-sm opacity-60">{t('contact.hoursValue')}</p>
            <div className="mt-8">
              <h4 className="font-display font-semibold text-sm tracking-[0.15em] uppercase mb-4 text-gold">{t('footer.followUs')}</h4>
              <div className="flex gap-4">
                {['Instagram', 'Facebook', 'LinkedIn'].map((social) => (
                  <a key={social} href="#" className="text-xs opacity-60 hover:opacity-100 hover:text-gold transition-all duration-300 tracking-wider uppercase">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-background/10 text-center">
          <p className="text-xs opacity-40 tracking-wider">
            © {new Date().getFullYear()} Bayt Alshumukh Real Estate. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
