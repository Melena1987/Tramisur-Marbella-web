import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';

const SEOHelmet: React.FC = () => {
  const { lang } = useLanguage();

  useEffect(() => {
    if (lang === 'es') {
      document.title = 'Tramisur - Gestoría Administrativa en Marbella | Vehículos y DGT';
      document.documentElement.lang = 'es';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', 'Gestoría líder en Marbella desde 1995. Especialistas en matriculación e importación de vehículos, trámites DGT, asesoría fiscal y jurídica.');
      }
    } else {
      document.title = 'Tramisur - Administrative Agency in Marbella | Vehicle Registration & DGT';
      document.documentElement.lang = 'en';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', 'Leading administrative agency in Marbella since 1995. Specialists in vehicle registration, car importation, DGT procedures, and legal advisory.');
      }
    }
  }, [lang]);

  return null; // Componente puramente funcional para efectos de SEO
};

export default SEOHelmet;