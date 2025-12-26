import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language } from '../types.ts';
import { translations } from '../translations.ts';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('es');

  const value = {
    lang,
    setLang,
    t: translations[lang]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};