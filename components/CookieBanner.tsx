import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';

const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem('tramisur-cookies-consent');
    if (!consent) {
      setTimeout(() => setVisible(true), 1500);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('tramisur-cookies-consent', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 p-4 animate-fade-in-up">
      <div className="max-w-3xl mx-auto bg-slate-900/95 backdrop-blur-md text-white p-6 rounded-2xl shadow-2xl flex flex-col sm:flex-row items-center gap-6 border border-white/10">
        <div className="flex-grow">
          <p className="text-sm text-slate-300 leading-relaxed">
            {t.ui.cookies.text}
          </p>
        </div>
        <div className="flex gap-4 flex-shrink-0">
          <button 
            onClick={accept}
            className="px-6 py-2 bg-blue-500 hover:bg-blue-400 text-white rounded-lg font-bold text-sm transition-all"
          >
            {t.ui.cookies.accept}
          </button>
          <button 
            onClick={() => setVisible(false)}
            className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg font-bold text-sm transition-all underline underline-offset-4"
          >
            {t.ui.cookies.close}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;