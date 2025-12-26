
import React from 'react';
import { IMAGES } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const TeamSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-tramisur-blue/5 -skew-x-12 transform translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-6 bg-gradient-to-tr from-tramisur-blue/20 to-tramisur-gold/20 rounded-3xl opacity-30 blur-3xl group-hover:opacity-50 transition-opacity"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src={IMAGES.team} 
                  alt="Equipo Profesional Tramisur Marbella" 
                  className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-tramisur-blue text-white p-8 rounded-3xl shadow-2xl hidden lg:block max-w-xs border-4 border-white">
                <p className="text-[13px] font-bold leading-relaxed italic">
                  {t.team.quote}
                </p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <span className="text-tramisur-gold font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">
              {t.team.badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight font-serif">
              {t.team.title} <span className="text-tramisur-blue">{t.team.highlight}</span>
            </h2>
            <div className="w-24 h-1.5 bg-tramisur-gold mb-10 rounded-full"></div>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
              {t.team.desc}
            </p>
            <div className="space-y-8">
              {t.team.features.map((feature: any, idx: number) => (
                <div key={idx} className="flex gap-6 items-start group/feature">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center shadow-sm flex-shrink-0 border border-slate-100 group-hover/feature:bg-tramisur-blue transition-colors duration-500">
                    <span className="text-tramisur-blue font-black group-hover/feature:text-white transition-colors">0{idx + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-2 font-serif">{feature.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
