
import React from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';
import NativeVideoPlayer from './NativeVideoPlayer.tsx';

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

        <NativeVideoPlayer />
        
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
