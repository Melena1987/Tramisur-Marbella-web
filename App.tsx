
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import VehicleFocus from './components/VehicleFocus';
import VideoSection from './components/VideoSection';
import About from './components/About';
import TeamSection from './components/TeamSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import WhatsAppButton from './components/WhatsAppButton';
import LegalModal from './components/LegalModal';

const App: React.FC = () => {
  const [showLegal, setShowLegal] = useState<boolean>(false);

  return (
    <div className="min-h-screen flex flex-col relative bg-white">
      <Navbar onShowLegal={() => setShowLegal(true)} />
      
      <main className="flex-grow">
        <Hero />
        <VehicleFocus />
        <VideoSection />
        <About />
        <TeamSection />
        <Services />
        <Contact />
      </main>

      <Footer onShowLegal={() => setShowLegal(true)} />
      
      <CookieBanner />
      <WhatsAppButton />
      
      {showLegal && <LegalModal onClose={() => setShowLegal(false)} />}
    </div>
  );
};

export default App;
