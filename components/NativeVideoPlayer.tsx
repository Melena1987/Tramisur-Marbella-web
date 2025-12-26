
import React, { useRef } from 'react';
import { IMAGES, VIDEOS } from '../constants.tsx';

const NativeVideoPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative aspect-video rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] overflow-hidden group max-w-5xl mx-auto border-4 border-tramisur-blue/20 bg-black">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        poster={IMAGES.video_poster}
        autoPlay
        muted
        loop
        playsInline
        controls
      >
        <source src={VIDEOS.presentation} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>

      {/* Decorative frame inside - only visible when not in fullscreen or controls hidden */}
      <div className="absolute inset-0 pointer-events-none border-[1px] border-white/10 m-4 rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
      
      {/* Autoplay Hint Overlay (Optional, but useful since it starts muted) */}
      <div className="absolute top-4 left-4 pointer-events-none">
        <div className="bg-tramisur-gold/80 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
          Audio disponible en controles
        </div>
      </div>
    </div>
  );
};

export default NativeVideoPlayer;
