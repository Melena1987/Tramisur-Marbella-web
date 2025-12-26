
import React, { useState } from 'react';
import { IMAGES } from '../constants';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  onShowLegal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onShowLegal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { name: t.nav.home, href: '#inicio' },
    { name: t.nav.about, href: '#nosotros' },
    { name: t.nav.services, href: '#servicios' },
    { name: t.nav.contact, href: '#contacto' },
  ];

  const LanguageSwitcher = () => (
    <div className="flex items-center gap-3">
      <button 
        onClick={() => setLang('es')}
        className={`w-7 h-5 flex items-center justify-center rounded overflow-hidden border transition-all ${lang === 'es' ? 'border-tramisur-gold scale-110 shadow-sm' : 'border-transparent opacity-60 hover:opacity-100'}`}
        title="Español"
      >
        <img src="https://flagcdn.com/es.svg" alt="ES" className="w-full h-full object-cover" />
      </button>
      <button 
        onClick={() => setLang('en')}
        className={`w-7 h-5 flex items-center justify-center rounded overflow-hidden border transition-all ${lang === 'en' ? 'border-tramisur-gold scale-110 shadow-sm' : 'border-transparent opacity-60 hover:opacity-100'}`}
        title="English"
      >
        <img src="https://flagcdn.com/gb.svg" alt="EN" className="w-full h-full object-cover" />
      </button>
    </div>
  );

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <a href="#inicio" className="flex items-center gap-2 group">
              <img 
                src={IMAGES.logo} 
                alt="Tramisur Logo" 
                className="h-14 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="flex flex-col leading-none border-l border-slate-200 pl-3">
                <span className="text-2xl font-bold text-tramisur-blue font-serif uppercase tracking-tight">
                  Tramisur
                </span>
                <span className="text-[10px] font-black text-tramisur-gold uppercase tracking-[0.45em] mt-1">
                  Marbella
                </span>
              </div>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-tramisur-blue font-semibold transition-colors uppercase tracking-widest text-[11px]"
              >
                {link.name}
              </a>
            ))}
            
            <div className="w-px h-6 bg-slate-200"></div>
            
            <LanguageSwitcher />

            <a 
              href="#contacto"
              className="bg-tramisur-blue text-white px-7 py-2.5 rounded-full font-bold hover:bg-tramisur-dark transition-all transform hover:scale-105 shadow-lg text-[11px] tracking-widest uppercase"
            >
              {t.nav.quote}
            </a>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 p-2"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-4 text-base font-bold text-slate-800 border-b border-slate-50 last:border-0"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <a 
                href="#contacto"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-tramisur-blue text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs"
              >
                {t.nav.quote}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
