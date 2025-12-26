import React from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';

const VehicleFocus: React.FC = () => {
  const { t } = useLanguage();

  const icons = [
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>,
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
  ];

  return (
    <section id="vehiculos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-tramisur-gold font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">
              {t.vehicleFocus.badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-serif">
              {t.vehicleFocus.title} <span className="text-tramisur-blue">{t.vehicleFocus.highlight}</span> {t.vehicleFocus.titleSuffix}
            </h2>
          </div>
          <p className="text-slate-500 font-medium max-w-sm">
            {t.vehicleFocus.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.vehicleFocus.steps.map((step: any, i: number) => (
            <div key={i} className="group p-10 bg-slate-50 rounded-[2rem] border border-slate-100 hover:bg-tramisur-blue transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-tramisur-blue mb-8 shadow-sm group-hover:bg-tramisur-gold group-hover:text-white transition-colors duration-500">
                {icons[i]}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 font-serif group-hover:text-white">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-200 transition-colors">
                {step.desc}
              </p>
              <div className="mt-8 pt-8 border-t border-slate-200 group-hover:border-white/10">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-tramisur-gold group-hover:text-white">
                  {t.vehicleFocus.priority}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleFocus;