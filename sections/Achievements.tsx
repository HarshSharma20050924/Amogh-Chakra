import React from 'react';
import { ACHIEVEMENTS } from '../data/seed';
import { Sun, Compass, Map, Star, Flame } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Achievements: React.FC = () => {
  const { t, language } = useLanguage();
  
  const getAstroIcon = (id: string) => {
    switch (id) {
      case 'exp': return <Sun size={32} strokeWidth={1} className="text-gold-400" />; 
      case 'clients': return <Compass size={32} strokeWidth={1} className="text-gold-400" />; 
      case 'countries': return <Map size={32} strokeWidth={1} className="text-gold-400" />; 
      case 'rituals': return <Flame size={32} strokeWidth={1} className="text-gold-400" />;
      default: return <Star size={32} strokeWidth={1} className="text-gold-400" />;
    }
  };

  const getAstroLabel = (id: string, originalLabel: any) => {
    switch (id) {
        case 'exp': return { hi: 'सूर्य आवर्तन (अनुभव)', en: 'Solar Returns' };
        case 'clients': return { hi: 'कुंडलियाँ विश्लेषित', en: 'Horoscopes Decoded' };
        case 'countries': return { hi: 'वैश्विक निर्देशांक', en: 'Global Coordinates' };
        case 'rituals': return { hi: 'वैदिक अनुष्ठान', en: 'Vedic Rituals' };
        default: return originalLabel;
    }
  };

  return (
    <section 
        className="py-32 bg-royal-950 relative overflow-hidden text-white"
    >
      
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-10 pointer-events-none select-none">
        <div 
            className="w-[120vw] h-[120vw] border-[1px] border-white/10 rounded-full relative flex items-center justify-center animate-spin-slow"
        >
            <div className="absolute inset-0 border border-dashed border-white/20 rounded-full scale-[0.85]"></div>
            
            {/* Degree Markings */}
            {[...Array(12)].map((_, i) => (
                <div 
                    key={i} 
                    className="absolute w-[1px] h-8 bg-white/30"
                    style={{ 
                        top: '0', 
                        left: '50%', 
                        transformOrigin: '50% 60vw',
                        transform: `rotate(${i * 30}deg)` 
                    }} 
                />
            ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
            <div className="flex flex-col items-center">
                <span className="text-gold-400 font-hindi font-bold tracking-[0.5em] text-sm mb-4">
                    ॥  ज्योतिष शास्त्र  ॥
                </span>
                <h2 className="text-4xl md:text-5xl font-serif text-white tracking-wide">
                    {language === 'hi' ? 'ब्रह्मांडीय उपलब्धियाँ' : 'The Celestial Observatory'}
                </h2>
            </div>
        </div>

        {/* The Instruments (Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ACHIEVEMENTS.map((item) => {
              const astroLabel = getAstroLabel(item.id, item.label);
              
              return (
                <div key={item.id} className="h-full">
                    <div
                        className="relative group h-full flex flex-col items-center justify-center py-6 transition-transform duration-300 hover:-translate-y-2"
                    >
                        {/* Instrumental Rings */}
                        <div className="relative w-40 h-40 mb-8 flex items-center justify-center">
                            <div className="absolute inset-0 border border-white/10 rounded-full group-hover:border-gold-500/50 transition-colors duration-500"></div>
                            <div className="absolute inset-3 border border-dashed border-white/10 rounded-full" />
                            
                            {/* Center Plate */}
                            <div className="absolute inset-0 bg-royal-900/40 backdrop-blur-sm rounded-full m-6 border border-white/5 flex items-center justify-center">
                                {getAstroIcon(item.id)}
                            </div>
                        </div>

                        {/* Data */}
                        <div className="text-center relative z-10">
                            <h3 className="font-hindi text-sm text-gold-200 mb-2 tracking-widest uppercase opacity-80">
                                {t(astroLabel)}
                            </h3>
                            <div className="font-serif text-4xl md:text-5xl text-white font-medium mb-2">
                                {item.count}<span className="text-2xl text-gold-500">{item.suffix}</span>
                            </div>
                            <div className="h-[1px] w-8 bg-gold-500/50 mx-auto mb-3 group-hover:w-16 transition-all duration-500"></div>
                            <p className="text-white/40 text-xs font-sans tracking-wide uppercase">
                                {t(item.description)}
                            </p>
                        </div>
                    </div>
                </div>
              );
          })}
        </div>
        
        <div className="mt-16 text-center text-white/20 font-serif text-[10px] italic tracking-widest">
            * CALCULATED BASED ON VEDIC EPHEMERIS
        </div>

      </div>
    </section>
  );
};

export default Achievements;