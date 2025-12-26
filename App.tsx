import React, { useState } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Services from './components/Services.tsx';
import VehicleFocus from './components/VehicleFocus.tsx';
import VideoSection from './components/VideoSection.tsx';
import About from './components/About.tsx';
import TeamSection from './components/TeamSection.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import CookieBanner from './components/CookieBanner.tsx';
import WhatsAppButton from './components/WhatsAppButton.tsx';
import LegalModal from './components/LegalModal.tsx';
import SEOHelmet from './components/SEOHelmet.tsx';

const App: React.FC = () => {
  const [showLegal, setShowLegal] = useState<boolean>(false);

  return (
    <div className="min-h-screen flex flex-col relative bg-white">
      <SEOHelmet />
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