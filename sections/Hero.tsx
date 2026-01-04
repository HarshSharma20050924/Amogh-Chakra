import React, { useState, useEffect, useRef } from 'react';
import { HERO_SLIDES } from '../data/seed';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);

  // Simplified Parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  
  // Cinematic Slide Interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-royal-950">
      
      {/* Background Media Layer */}
      <motion.div 
        style={{ y: yBackground }}
        className="absolute inset-0 w-full h-full z-0"
      >
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            {HERO_SLIDES[currentIndex].mediaType === 'video' ? (
              <video
                className="w-full h-full object-cover opacity-50"
                autoPlay
                muted
                loop
                playsInline
                src={HERO_SLIDES[currentIndex].src}
              />
            ) : (
              <div
                className="w-full h-full bg-cover bg-center opacity-50"
                style={{ backgroundImage: `url(${HERO_SLIDES[currentIndex].src})` }}
              />
            )}
            
            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-royal-950/60 via-transparent to-royal-950/90" />
            <div className="absolute inset-0 bg-gradient-to-r from-royal-950/40 via-transparent to-royal-950/40" />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Text Content Layer */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-4 z-10">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              {/* Badge */}
              <div className="mb-8">
                <span className="py-2 px-6 border border-gold-500/30 rounded-full bg-royal-950/30 backdrop-blur-sm text-gold-300 text-[10px] md:text-xs tracking-[0.4em] uppercase">
                  Vedic Wisdom
                </span>
              </div>
              
              {/* Main Title - Clean & Crisp */}
              <h1 className="font-hindi text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-8 leading-tight max-w-5xl tracking-tight">
                {t(HERO_SLIDES[currentIndex].title)}
              </h1>
              
              {/* Divider Line */}
              <div className="w-32 h-[1px] bg-gold-400 mb-8" />

              {/* Subtitle */}
              <p className="text-gray-200 text-lg md:text-2xl font-serif italic max-w-2xl mx-auto mb-12 leading-relaxed font-light tracking-wide">
                {t(HERO_SLIDES[currentIndex].subtitle)}
              </p>

              {/* CTA Button */}
              <a
                href="#services"
                className="relative overflow-hidden group inline-flex items-center justify-center bg-gold-600/90 text-white font-medium py-4 px-10 rounded-sm shadow-lg uppercase tracking-widest text-xs border border-gold-500/50 backdrop-blur-sm hover:bg-gold-500 transition-colors duration-300"
              >
                <span>Start Your Journey</span>
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 right-12 flex gap-3 z-20">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-500 rounded-full ${
              index === currentIndex 
              ? 'bg-gold-500 w-3 h-3' 
              : 'bg-white/20 w-1.5 h-1.5 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Scroll Discovery Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/40 flex flex-col items-center gap-2"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-light">Scroll</span>
        <ArrowDown size={14} />
      </motion.div>

    </section>
  );
};

export default Hero;