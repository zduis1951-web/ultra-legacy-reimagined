import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/services', label: t('nav.services') },
    { to: '/for-sale', label: t('nav.forSale') },
    { to: '/for-rent', label: t('nav.forRent') },
    { to: '/off-plan', label: t('nav.offPlan') },
    { to: '/contact', label: t('nav.contact') },
  ];

  const isTransparent = isHome && !scrolled;
  const textColor = isTransparent ? 'text-white' : 'text-foreground/60';
  const activeColor = 'text-gold';
  const brandColor = isTransparent ? 'text-white' : 'text-foreground';
  const brandSubColor = isTransparent ? 'text-white/50' : 'text-muted-foreground';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-6 py-5 lg:py-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4 group">
          <img
            src={logo}
            alt={t('brand.name')}
            className={`h-11 w-auto transition-transform duration-300 group-hover:scale-105 ${isTransparent ? 'brightness-0 invert' : ''}`}
          />
          <div className="hidden sm:block">
            <span className={`block text-sm font-display font-bold tracking-[0.25em] uppercase ${brandColor} transition-colors duration-300`}>
              {t('brand.name')}
            </span>
            <span className={`block text-[9px] tracking-[0.35em] uppercase ${brandSubColor} transition-colors duration-300 mt-0.5`}>
              {t('brand.subtitle')}
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={(e) => {
                if (location.pathname === link.to) {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className={`relative text-[11px] font-body font-medium tracking-[0.2em] uppercase transition-colors duration-300 hover:text-gold group ${
                location.pathname === link.to ? activeColor : textColor
              }`}
            >
              {link.label}
              {location.pathname === link.to && (
                <motion.div
                  layoutId="navbar-underline"
                  className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-gold"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="absolute -bottom-1.5 left-1/2 right-1/2 h-[1px] bg-gold/50 transition-all duration-300 group-hover:left-0 group-hover:right-0" />
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-5">
          <button
            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
            className={`flex items-center gap-1.5 text-[11px] font-medium tracking-wider uppercase hover:text-gold transition-colors duration-300 ${textColor}`}
          >
            <Globe className="h-3.5 w-3.5" />
            <span>{language === 'en' ? 'العربية' : 'English'}</span>
          </button>

          <button
            className={`lg:hidden ${brandColor} transition-colors duration-300`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        } bg-background/98 backdrop-blur-xl border-t border-gold/10`}
      >
        <div className="container mx-auto px-6 py-8 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={(e) => {
                if (location.pathname === link.to) {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className={`text-sm font-body font-medium tracking-[0.2em] uppercase py-3 border-b border-border/50 transition-colors duration-300 hover:text-gold hover:border-gold/20 ${
                location.pathname === link.to ? 'text-gold border-gold/30' : 'text-foreground/60'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
