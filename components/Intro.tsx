
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GURU_PROFILE } from '../data/seed';
import { useLanguage } from '../context/LanguageContext';

interface IntroProps {
  onComplete: () => void;
}

const Intro: React.FC<IntroProps> = ({ onComplete }) => {
  const [exit, setExit] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    // LOCK SCROLL IMMEDIATELY
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setExit(true); 
      setTimeout(() => {
        onComplete();
        // UNLOCK SCROLL ONLY AFTER ANIMATION COMPLETES
        document.body.style.overflow = 'unset';
      }, 800); 
    }, 2500);

    return () => {
      // Safety cleanup in case component unmounts unexpectedly
      document.body.style.overflow = 'unset';
      clearTimeout(timer);
    };
  }, [onComplete]);

  // Simplified Rings for better performance
  const Ring = ({ size, duration, reverse = false, opacity = 0.2, border = "border-white/20" }: any) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: opacity, scale: 1, rotate: reverse ? -180 : 180 }}
      transition={{ duration: duration, ease: "linear", repeat: Infinity }}
      className={`absolute rounded-full border ${border} flex items-center justify-center`}
      style={{ width: size, height: size }}
    >
      <div className={`w-full h-full border border-dashed ${border} rounded-full transform scale-90`} />
    </motion.div>
  );

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-royal-950 flex flex-col items-center justify-center overflow-hidden"
      exit={{ opacity: 0, pointerEvents: "none" }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-radial-gradient from-royal-900 to-royal-950" />
      <Ring size={600} duration={30} opacity={0.1} />
      <Ring size={450} duration={20} reverse opacity={0.15} border="border-gold-500/20" />

      {/* Text Container */}
      <motion.div 
        className="relative z-10 flex flex-col items-center text-center px-4"
        animate={exit ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Sanskrit Mantra */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1 }}
          className="text-gold-200 font-hindi text-sm md:text-base mb-8 tracking-[0.3em] uppercase drop-shadow-md"
        >
          ॥ श्री गणेशाय नमः ॥
        </motion.div>

        {/* Brand Name - HINDI & VISIBLE */}
        <div className="mb-6 relative">
            <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="font-hindi text-6xl md:text-8xl text-gold-400 font-bold leading-tight drop-shadow-[0_0_25px_rgba(251,191,36,0.4)]"
            >
                अमोघ चक्र
            </motion.h1>
            <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="h-[2px] w-full bg-gradient-to-r from-transparent via-gold-500 to-transparent mt-2 shadow-[0_0_10px_rgba(251,191,36,0.8)]"
            />
        </div>

        {/* Guru Name - Increased Size */}
        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-6 font-sans text-lg md:text-xl uppercase tracking-[0.3em] text-white/80 font-bold"
        >
            {t(GURU_PROFILE.name)}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Intro;
