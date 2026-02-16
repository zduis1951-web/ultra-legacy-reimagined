import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';
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

  const socials = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-foreground text-background relative">
      {/* Gold top line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <img src={logo} alt={t('brand.name')} className="h-11 w-auto brightness-0 invert" />
              <div>
                <span className="block text-sm font-display font-bold tracking-[0.25em] uppercase">{t('brand.name')}</span>
                <span className="block text-[9px] tracking-[0.35em] uppercase opacity-50 mt-0.5">{t('brand.subtitle')}</span>
              </div>
            </div>
            <p className="text-sm opacity-50 leading-[1.9]">{t('footer.desc')}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-[11px] tracking-[0.2em] uppercase mb-8 text-gold">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3.5">
              {links.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm opacity-50 hover:opacity-100 hover:text-gold transition-all duration-500">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-[11px] tracking-[0.2em] uppercase mb-8 text-gold">{t('footer.contactInfo')}</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-sm opacity-50">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold/60" />
                <span>{t('footer.address')}</span>
              </li>
              <li className="flex items-center gap-3 text-sm opacity-50">
                <Phone className="h-4 w-4 shrink-0 text-gold/60" />
                <a href="tel:+971501788428" className="hover:text-gold transition-colors duration-500">+971-50-178-8428</a>
              </li>
              <li className="flex items-center gap-3 text-sm opacity-50">
                <Mail className="h-4 w-4 shrink-0 text-gold/60" />
                <a href="mailto:info@baytalshumukh.com" className="hover:text-gold transition-colors duration-500">info@baytalshumukh.com</a>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h4 className="font-display font-semibold text-[11px] tracking-[0.2em] uppercase mb-8 text-gold">{t('contact.hours')}</h4>
            <p className="text-sm opacity-50">{t('contact.hoursValue')}</p>
            <div className="mt-10">
              <h4 className="font-display font-semibold text-[11px] tracking-[0.2em] uppercase mb-5 text-gold">{t('footer.followUs')}</h4>
              <div className="flex gap-4">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 border border-background/15 hover:border-gold flex items-center justify-center text-background/50 hover:text-gold transition-all duration-500"
                  >
                    <social.icon className="h-4 w-4" strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-gold/10 text-center">
          <p className="text-[10px] opacity-35 tracking-[0.2em] uppercase">
            {t('footer.copyright').replace('{year}', new Date().getFullYear().toString())}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
