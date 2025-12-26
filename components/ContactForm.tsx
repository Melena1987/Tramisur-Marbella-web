import React from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';

const ContactForm: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="lg:w-7/12 bg-white p-12 lg:p-24">
      <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-1">{t.contact.form.name}</label>
            <input type="text" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-tramisur-gold transition-all font-semibold" placeholder={t.contact.form.placeholderName} />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-1">{t.contact.form.phone}</label>
            <input type="text" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-tramisur-gold transition-all font-semibold" placeholder="600 000 000" />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-1">{t.contact.form.email}</label>
          <input type="email" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-tramisur-gold transition-all font-semibold" placeholder="su@email.com" />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-1">{t.contact.form.message}</label>
          <textarea rows={5} className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-tramisur-gold transition-all resize-none font-semibold" placeholder={t.contact.form.placeholderMessage}></textarea>
        </div>
        <button type="submit" className="w-full py-5 bg-tramisur-blue text-white font-black text-xs uppercase tracking-[0.3em] rounded-2xl hover:bg-tramisur-dark transition-all shadow-xl hover:-translate-y-1">
          {t.contact.form.submit}
        </button>
        <div className="flex items-center justify-center gap-3 pt-4">
           <div className="h-px w-8 bg-slate-100"></div>
           <p className="text-[9px] font-bold text-slate-300 uppercase tracking-widest text-center">
              {t.contact.form.footer}
           </p>
           <div className="h-px w-8 bg-slate-100"></div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;