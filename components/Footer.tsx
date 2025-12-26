
import React from 'react';
import { CONTACT_INFO, IMAGES } from '../constants';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onShowLegal: () => void;
}

const Footer: React.FC<FooterProps> = ({ onShowLegal }) => {
  const { t } = useLanguage();

  return (
    <footer className="bg-white border-t border-slate-100 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <img 
                src={IMAGES.logo} 
                alt="Tramisur Logo" 
                className="h-10 w-auto object-contain"
              />
              <div className="flex flex-col leading-none border-l border-slate-200 pl-3">
                <span className="text-xl font-bold text-tramisur-blue font-serif">
                  Tramisur
                </span>
                <span className="text-[8px] font-black text-tramisur-gold uppercase tracking-[0.4em] mt-1">
                  Marbella
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-[13px] leading-relaxed font-medium mb-8">
              {t.footer.desc}
            </p>
          </div>
          
          <div>
            <h4 className="font-black text-slate-900 mb-8 uppercase tracking-[0.3em] text-[10px]">{t.footer.menu}</h4>
            <ul className="space-y-4 text-[13px] text-slate-500 font-bold">
              <li><a href="#inicio" className="hover:text-tramisur-blue transition-colors">{t.nav.home}</a></li>
              <li><a href="#nosotros" className="hover:text-tramisur-blue transition-colors">{t.nav.about}</a></li>
              <li><a href="#servicios" className="hover:text-tramisur-blue transition-colors">{t.nav.services}</a></li>
              <li><a href="#contacto" className="hover:text-tramisur-blue transition-colors">{t.nav.contact}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black text-slate-900 mb-8 uppercase tracking-[0.3em] text-[10px]">{t.footer.specialties}</h4>
            <ul className="space-y-4 text-[13px] text-slate-500 font-bold">
              {t.footer.specialtyList.map((specialty: string, i: number) => (
                <li key={i}>
                  <a href="#servicios" className="hover:text-tramisur-blue transition-colors">{specialty}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-black text-slate-900 mb-8 uppercase tracking-[0.3em] text-[10px]">{t.footer.attention}</h4>
            <ul className="space-y-4 text-[13px] text-slate-500 font-bold">
              <li>
                <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="flex items-center gap-3 hover:text-tramisur-blue transition-colors">
                  <span className="text-tramisur-blue font-black">T:</span> {CONTACT_INFO.phone}
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${CONTACT_INFO.whatsappRaw}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-tramisur-gold transition-colors">
                  <span className="text-tramisur-gold font-black">W:</span> {CONTACT_INFO.whatsapp}
                </a>
              </li>
              <li className="break-all text-slate-400 font-medium">
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-tramisur-blue transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="pt-2">
                <a href={CONTACT_INFO.googleMaps} target="_blank" rel="noopener noreferrer" className="text-[11px] text-slate-400 hover:text-tramisur-gold underline underline-offset-4 transition-colors">
                  {t.footer.maps}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p className="text-slate-300 text-[9px] uppercase font-black tracking-[0.2em] text-center md:text-left">
              © {new Date().getFullYear()} Tramisur Marbella SL · {t.footer.rights}
            </p>
            
            <div className="hidden md:block w-px h-3 bg-slate-100"></div>
            
            <a 
              href="https://melenamarketing.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2"
            >
              <span className="text-slate-300 text-[9px] uppercase font-black tracking-[0.2em]">
                {t.footer.madeBy}
              </span>
              <span className="text-slate-400 group-hover:text-tramisur-gold text-[10px] font-black uppercase tracking-widest transition-all duration-300 border-b border-transparent group-hover:border-tramisur-gold/30 pb-0.5">
                Melena Marketing
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-slate-100 group-hover:bg-tramisur-gold group-hover:animate-ping transition-colors"></div>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-10">
            <button onClick={onShowLegal} className="text-slate-300 hover:text-tramisur-blue text-[9px] uppercase font-black tracking-widest transition-colors">
              {t.footer.privacy}
            </button>
            <button onClick={onShowLegal} className="text-slate-300 hover:text-tramisur-blue text-[9px] uppercase font-black tracking-widest transition-colors">
              {t.footer.cookies}
            </button>
            <button onClick={onShowLegal} className="text-slate-300 hover:text-tramisur-blue text-[9px] uppercase font-black tracking-widest transition-colors">
              {t.footer.legal}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
