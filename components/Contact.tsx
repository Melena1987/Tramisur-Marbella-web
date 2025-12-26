
import React from 'react';
import { CONTACT_INFO } from '../constants';
import { useLanguage } from '../context/LanguageContext';
import ContactItem from './ContactItem';
import ContactForm from './ContactForm';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-tramisur-dark rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-white/5">
          <div className="lg:w-5/12 p-12 lg:p-20 text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-tramisur-blue/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif leading-tight">
              {t.contact.title} <br/>
              <span className="text-tramisur-gold">{t.contact.highlight}</span>
            </h2>
            <p className="text-slate-400 text-lg mb-12 font-medium leading-relaxed">
              {t.contact.desc}
            </p>
            
            <div className="space-y-10 relative z-10">
              <ContactItem 
                label={t.contact.labels.address}
                title={CONTACT_INFO.address}
                subtitle={CONTACT_INFO.city}
                href={CONTACT_INFO.googleMaps}
                icon={
                  <svg className="w-7 h-7 text-tramisur-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                }
              />

              <ContactItem 
                label={t.contact.labels.direct}
                title={CONTACT_INFO.phone}
                subtitle={`${t.contact.labels.whatsapp}: ${CONTACT_INFO.whatsapp}`}
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                icon={
                  <svg className="w-7 h-7 text-tramisur-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                }
              />
              
              <ContactItem 
                label={t.contact.labels.email}
                title={CONTACT_INFO.email}
                href={`mailto:${CONTACT_INFO.email}`}
                icon={
                  <svg className="w-7 h-7 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                }
              />
            </div>
          </div>
          
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
