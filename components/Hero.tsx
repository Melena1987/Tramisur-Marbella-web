
import React from 'react';
import { CONTACT_INFO, IMAGES } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="inicio" className="relative min-h-[90vh] md:min-h-screen flex items-center pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.hero_bg} 
          className="w-full h-full object-cover opacity-30 scale-105 animate-slow-zoom"
          alt="Gestoría Vehículos Marbella"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-tramisur-dark via-tramisur-dark/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-[11px] font-black tracking-[0.2em] text-white uppercase bg-tramisur-gold/20 backdrop-blur-md rounded-lg border border-tramisur-gold/30">
            {t.hero.badge}
          </div>
          
          <h1 className="text-5xl md:text-[85px] font-bold text-white leading-[1.1] mb-8 font-serif tracking-tight">
            {t.hero.title} <br/>
            <span className="text-tramisur-gold">{t.hero.subtitle}</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl font-medium">
            {t.hero.desc}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <a 
              href="#vehiculos" 
              className="inline-flex items-center justify-center px-10 py-5 text-xs font-black uppercase tracking-widest text-white bg-tramisur-blue rounded-xl hover:bg-tramisur-gold transition-all shadow-xl hover:-translate-y-1"
            >
              {t.hero.cta}
            </a>
            <a 
              href={`https://wa.me/${CONTACT_INFO.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 text-xs font-black uppercase tracking-widest text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-all shadow-md"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
          
          <div className="mt-16 flex items-center gap-10">
             <div className="flex flex-col">
                <span className="text-4xl font-bold text-tramisur-gold font-serif">2.5k+</span>
                <span className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-400 mt-1">{t.hero.stats.vehicles}</span>
             </div>
             <div className="w-px h-12 bg-white/10"></div>
             <div className="flex flex-col">
                <span className="text-4xl font-bold text-white font-serif">100%</span>
                <span className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-400 mt-1">{t.hero.stats.guarantee}</span>
             </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes slow-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s ease-in-out infinite alternate;
        }
      `}</style>
    </section>
  );
};

export default Hero;
