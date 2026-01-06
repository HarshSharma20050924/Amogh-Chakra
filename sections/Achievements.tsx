
import React from 'react';
import { ACHIEVEMENTS } from '../data/seed';
import { Sun, Compass, Map, Flame, Star, Moon, Orbit } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Achievements: React.FC = () => {
  const { t, language } = useLanguage();
  
  // Custom Icon mapping for the central wheel if needed, defaulting to items
  // Using pure CSS animation classes defined in index.html for performance (animate-spin-slow)

  return (
    <section className="py-32 bg-royal-950 relative overflow-hidden text-white min-h-screen flex items-center">
      
      {/* 
         THE OBSERVATORY BACKGROUND
         A large rotating zodiac wheel effect using CSS for performance (no main thread blocking)
      */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
        {/* Outer Ring */}
        <div className="w-[140vw] h-[140vw] md:w-[60vw] md:h-[60vw] border border-white/5 rounded-full absolute flex items-center justify-center animate-spin-slow opacity-20">
             {/* Planets/Nodes on the ring */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-gold-500 rounded-full blur-[2px]" />
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-white/50 rounded-full" />
             <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 bg-royal-400 rounded-full" />
        </div>

        {/* Middle Ring (Counter Rotate) */}
        <div className="w-[100vw] h-[100vw] md:w-[45vw] md:h-[45vw] border border-dashed border-gold-500/10 rounded-full absolute animate-spin-reverse-slow opacity-30">
        </div>

        {/* Inner Graphic */}
        <div className="absolute w-[600px] h-[600px] bg-royal-900/0 rounded-full radial-gradient-mask" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header */}
        <div className="text-center mb-20">
            <div className="flex flex-col items-center">
                <span className="text-gold-400 font-hindi font-bold tracking-[0.5em] text-sm mb-4 animate-pulse">
                    ॥  ज्योतिष शास्त्र  ॥
                </span>
                <h2 className="text-4xl md:text-5xl font-serif text-white tracking-wide drop-shadow-2xl">
                    {language === 'hi' ? 'ब्रह्मांडीय उपलब्धियाँ' : 'The Celestial Observatory'}
                </h2>
            </div>
        </div>

        {/* The Instruments (Cards) - Arranged in a grid but styled to float */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ACHIEVEMENTS.map((item, index) => {
              return (
                <div key={item.id} className="relative group">
                    {/* Card Background with Glassmorphism */}
                    <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-sm hover:bg-white/10 hover:border-gold-500/30 transition-all duration-500 relative overflow-hidden">
                        
                        {/* Hover Glow */}
                        <div className="absolute -right-10 -top-10 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl group-hover:bg-gold-500/20 transition-all duration-700" />

                        {/* Icon */}
                        <div className="mb-6 text-gold-400 opacity-80 group-hover:scale-110 transition-transform duration-500 origin-left">
                           {index === 0 && <Sun size={32} strokeWidth={1} />}
                           {index === 1 && <Compass size={32} strokeWidth={1} />}
                           {index === 2 && <Map size={32} strokeWidth={1} />}
                           {index === 3 && <Flame size={32} strokeWidth={1} />}
                        </div>

                        {/* Number */}
                        <div className="font-serif text-5xl font-bold text-white mb-2 drop-shadow-md">
                            {item.count}<span className="text-2xl text-gold-500 ml-1">{item.suffix}</span>
                        </div>

                        {/* Divider */}
                        <div className="w-12 h-[2px] bg-gold-500/50 my-4 group-hover:w-full transition-all duration-700" />

                        {/* Content */}
                        <h3 className="text-lg font-hindi font-bold text-gold-200 mb-2">
                             {t(item.label)}
                        </h3>
                        {/* Improved Visibility: Changed text-white/40 to text-white/70 */}
                        <p className="text-white/70 text-xs uppercase tracking-widest font-sans font-medium">
                             {t(item.description)}
                        </p>
                    </div>
                </div>
              );
          })}
        </div>
        
        <div className="mt-16 text-center text-white/30 font-serif text-[10px] italic tracking-widest">
            * CALCULATED BASED ON VEDIC EPHEMERIS
        </div>

      </div>
    </section>
  );
};

export default Achievements;
