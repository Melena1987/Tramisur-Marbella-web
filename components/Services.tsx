
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="servicios" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-tramisur-gold font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">
            {t.services.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">
            {t.services.title} <span className="text-tramisur-blue">{t.services.highlight}</span>
          </h2>
          <div className="w-20 h-1 bg-tramisur-gold mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.list.map((service: any) => (
            <div 
              key={service.id} 
              className="bg-white rounded-[2.5rem] p-10 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col h-full group"
            >
              <div className="flex-grow">
                 <h3 className="text-2xl font-bold text-slate-900 mb-4 font-serif">{service.title}</h3>
                 <p className="text-slate-500 mb-8 text-sm leading-relaxed">{service.description}</p>
                 
                 <ul className="space-y-4">
                   {service.items.map((item: string, i: number) => (
                     <li key={i} className="flex items-start gap-3 text-slate-600 text-[13px] font-medium">
                       <span className="text-tramisur-gold font-bold">✓</span>
                       {item}
                     </li>
                   ))}
                 </ul>
              </div>
              
              <div className="mt-10 pt-8 border-t border-slate-50 flex items-center justify-between">
                <a 
                  href="#contacto" 
                  className="inline-flex items-center text-tramisur-blue text-[11px] font-black uppercase tracking-widest hover:text-tramisur-gold transition-colors"
                >
                  {t.services.cta}
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
