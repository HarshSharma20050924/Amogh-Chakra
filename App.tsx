import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import FloatingContact from './components/FloatingContact';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Achievements from './sections/Achievements';
import Archive from './sections/Archive';
import SocialFeed from './sections/SocialFeed';
import Footer from './components/Footer';
import Intro from './components/Intro';
import AmbientBackground from './components/AmbientBackground';
import SacredDivider from './components/SacredDivider'; 
import { LanguageProvider } from './context/LanguageContext';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-cream-50 relative selection:bg-gold-200 selection:text-royal-900 overflow-hidden">
        
        {/* Global Systems */}
        <AmbientBackground />

        {/* 
            INTRO OVERLAY 
            We render the intro ON TOP of the app. 
            AnimatePresence handles the fade out when showIntro becomes false.
        */}
        <AnimatePresence>
          {showIntro && <Intro onComplete={() => setShowIntro(false)} />}
        </AnimatePresence>

        {/* 
          Main Content - Always rendered to ensure no layout shift or "pop-in".
          It sits underneath the Intro until Intro fades out.
        */}
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            
            <About />
            
            <SacredDivider />
            
            <Achievements />
            
            <Services />
            
            <SacredDivider reversed />
            
            <Archive />
            
            <SocialFeed />
          </main>
          <Footer />
          <FloatingContact />
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;