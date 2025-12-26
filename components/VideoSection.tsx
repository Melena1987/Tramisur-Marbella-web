import React from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';

const VideoSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-tramisur-dark py-24 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-50 to-transparent opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <span className="text-tramisur-gold font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">{t.video.badge}</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-serif">{t.video.title}</h2>
            <div className="w-16 h-1 bg-tramisur-gold mx-auto rounded-full"></div>
        </div>

        <div className="relative aspect-video rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] overflow-hidden group max-w-5xl mx-auto border-4 border-tramisur-blue/20">
          <iframe
            className="absolute inset-0 w-full h-full scale-[1.01]"
            src="https://www.youtube.com/embed/ve6wXpvbk4I?autoplay=1&mute=1&loop=1&playlist=ve6wXpvbk4I&controls=0&modestbranding=1&rel=0"
            title="Tramisur Presentación"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="absolute inset-0 bg-tramisur-blue/5 pointer-events-none group-hover:bg-transparent transition-all duration-700"></div>
          
          <div className="absolute inset-0 pointer-events-none border-[1px] border-white/5 m-4 rounded-2xl"></div>
        </div>
        
        <div className="mt-16 text-center max-w-2xl mx-auto">
            <p className="text-slate-400 font-medium leading-relaxed italic">
              {t.video.quote}
            </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;