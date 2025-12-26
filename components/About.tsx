import React from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="nosotros" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          <div className="lg:col-span-3">
            <span className="text-tramisur-gold font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">{t.about.badge}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight font-serif">
              {t.about.title} <span className="text-tramisur-blue">{t.about.highlight}</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              {t.about.desc1}
            </p>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed">
              {t.about.desc2}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.about.features.map((item: string, idx: number) => (
                <div key={idx} className="flex items-center gap-4 bg-slate-50/50 p-5 rounded-2xl border border-slate-100 hover:border-tramisur-gold/20 transition-colors">
                  <div className="flex-shrink-0 w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center border border-slate-100">
                    <svg className="w-5 h-5 text-tramisur-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-800 font-bold text-xs uppercase tracking-wider">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 relative">
            <div className="absolute inset-0 bg-tramisur-blue/5 transform -rotate-3 rounded-3xl"></div>
            <div className="relative z-10 p-12 bg-white rounded-3xl border border-slate-100 shadow-2xl text-center">
              <div className="mb-8">
                <span className="text-7xl font-bold text-tramisur-blue block mb-2 font-serif">30</span>
                <span className="text-[10px] font-black text-tramisur-gold uppercase tracking-[0.3em]">{t.about.experience}</span>
              </div>
              <p className="text-slate-600 text-sm italic leading-relaxed font-medium">
                "{t.about.mission}"
              </p>
              <div className="mt-10 pt-10 border-t border-slate-100">
                <span className="text-xs font-black text-slate-900 block uppercase tracking-widest mb-1">Tramisur Marbella</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest">Gestoría Administrativa Certificada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;