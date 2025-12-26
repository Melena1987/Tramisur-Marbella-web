import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';
import emailjs from 'https://esm.sh/@emailjs/browser';

const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    const serviceId = (import.meta as any).env.VITE_EMAILJS_SERVICE_ID;
    const templateId = (import.meta as any).env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = (import.meta as any).env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      const templateParams = {
        nombre: formData.name,
        telefono: formData.phone,
        email: formData.email,
        mensaje: formData.message,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setStatus('success');
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  if (status === 'success') {
    return (
      <div className="lg:w-7/12 bg-white p-12 lg:p-24 flex flex-col items-center justify-center text-center animate-fade-in-up">
        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
          <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4 font-serif">¡Mensaje Enviado!</h3>
        <p className="text-slate-500 mb-8 max-w-xs mx-auto">
          Gracias por contactar con Tramisur. Uno de nuestros expertos se pondrá en contacto con usted a la mayor brevedad posible.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-tramisur-blue font-black text-[10px] uppercase tracking-widest hover:text-tramisur-gold transition-colors"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <div className="lg:w-7/12 bg-white p-12 lg:p-24">
      <form className="space-y-8" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-1">
              {t.contact.form.name}
            </label>
            <input 
              required
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-tramisur-gold transition-all font-semibold outline-none" 
              placeholder={t.contact.form.placeholderName} 
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-1">
              {t.contact.form.phone}
            </label>
            <input 
              required
              type="text" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-tramisur-gold transition-all font-semibold outline-none" 
              placeholder="600 000 000" 
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-1">
            {t.contact.form.email}
          </label>
          <input 
            required
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-tramisur-gold transition-all font-semibold outline-none" 
            placeholder="su@email.com" 
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-1">
            {t.contact.form.message}
          </label>
          <textarea 
            required
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5} 
            className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-tramisur-gold transition-all resize-none font-semibold outline-none" 
            placeholder={t.contact.form.placeholderMessage}
          ></textarea>
        </div>

        {status === 'error' && (
          <div className="p-4 bg-red-50 text-red-600 rounded-xl text-xs font-bold border border-red-100">
            Hubo un error al enviar el mensaje. Por favor, inténtelo de nuevo o llámenos directamente.
          </div>
        )}

        <button 
          type="submit" 
          disabled={loading}
          className={`w-full py-5 bg-tramisur-blue text-white font-black text-xs uppercase tracking-[0.3em] rounded-2xl hover:bg-tramisur-dark transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {loading ? (
            <>
              <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {t.lang === 'es' ? 'Enviando...' : 'Sending...'}
            </>
          ) : (
            t.contact.form.submit
          )}
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