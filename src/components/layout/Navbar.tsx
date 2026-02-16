import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
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

  // On home page before scroll: white text. Otherwise: dark text.
  const isTransparent = isHome && !scrolled;
  const textColor = isTransparent ? 'text-white' : 'text-foreground/70';
  const activeColor = 'text-gold';
  const brandColor = isTransparent ? 'text-white' : 'text-foreground';
  const brandSubColor = isTransparent ? 'text-white/60' : 'text-muted-foreground';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-md shadow-[0_1px_0_hsl(var(--border))]'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt={t('brand.name')}
            className={`h-10 w-auto transition-transform duration-300 group-hover:scale-105 ${isTransparent ? 'brightness-0 invert' : ''}`}
          />
          <div className="hidden sm:block">
            <span className={`block text-sm font-display font-bold tracking-[0.2em] uppercase ${brandColor} transition-colors duration-300`}>
              {t('brand.name')}
            </span>
            <span className={`block text-[10px] tracking-[0.3em] uppercase ${brandSubColor} transition-colors duration-300`}>
              {t('brand.subtitle')}
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-xs font-body font-medium tracking-[0.15em] uppercase transition-colors duration-300 hover:text-gold ${
                location.pathname === link.to ? activeColor : textColor
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
            className={`flex items-center gap-1.5 text-xs font-medium tracking-wider uppercase hover:text-gold transition-colors duration-300 ${textColor}`}
          >
            <Globe className="h-4 w-4" />
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
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        } bg-background/98 backdrop-blur-lg`}
      >
        <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-body font-medium tracking-[0.15em] uppercase py-2 border-b border-border transition-colors duration-300 hover:text-gold ${
                location.pathname === link.to ? 'text-gold' : 'text-foreground/70'
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
