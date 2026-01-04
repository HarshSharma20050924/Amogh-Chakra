import React from 'react';
import { GURU_PROFILE } from '../data/seed';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="about" className="bg-cream-50 overflow-hidden relative">
      
      {/* Background: Sanctum Texture - Removed Noise, kept subtle texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-60 mix-blend-multiply pointer-events-none" />
      
      {/* Giant OM Background Watermark */}
      <div className="absolute top-[10%] left-[-5%] text-gold-500 opacity-[0.07] font-hindi text-[30rem] leading-none pointer-events-none select-none">
          ॐ
      </div>
      <div className="absolute bottom-[-10%] right-[-5%] text-gold-500 opacity-[0.05] font-hindi text-[25rem] leading-none pointer-events-none select-none rotate-12">
          श्री
      </div>

      <div className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Sanskrit Invocation */}
        <div className="text-center mb-16 opacity-70">
            <p className="font-hindi text-gold-700 text-lg md:text-xl tracking-widest font-bold">
                ॥ ॐ गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः ॥
            </p>
            <p className="font-serif text-royal-900/50 text-xs uppercase tracking-[0.3em] mt-2">
                Guru Brahma, Guru Vishnu, Guru Devo Maheshwara
            </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative group perspective-1000">
            {/* Main Image Container - Arch Shape */}
            <div className="relative z-10 w-4/5 mx-auto">
                <div className="relative rounded-t-full border-t-[1px] border-x-[1px] border-b-[8px] border-white/80 shadow-2xl bg-white p-2">
                    <div className="rounded-t-full overflow-hidden">
                        <img 
                            src={GURU_PROFILE.image} 
                            alt={GURU_PROFILE.name} 
                            className="w-full h-auto object-cover sepia-[0.3] hover:sepia-0 transition-all duration-1000"
                        />
                    </div>
                    {/* Tilak / Decorative Element */}
                    <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 text-red-700 text-4xl shadow-sm">
                        ❧
                    </div>
                </div>
            </div>
          </div>

          {/* Text Side - The Scripture */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-block mb-6">
                <div className="h-[2px] w-20 bg-gold-500 mb-2 mx-auto lg:mx-0"></div>
                <span className="text-royal-900 font-bold uppercase tracking-[0.3em] text-xs">
                    {language === 'hi' ? 'आचार्य परिचय' : 'About The Acharya'}
                </span>
            </div>

            <h2 className="font-hindi text-5xl lg:text-6xl text-royal-900 font-bold mb-4 leading-tight">
                {t(GURU_PROFILE.title)}
            </h2>
            
            <h3 className="text-2xl font-serif text-gold-700 italic mb-8">
                {GURU_PROFILE.name}
            </h3>

            <div className="relative p-8 border-l-4 border-gold-500 bg-white/50 mb-10 text-left">
                <span className="absolute -top-4 -left-3 text-4xl text-gold-600 bg-cream-50 px-1">❝</span>
                <p className="font-hindi text-lg leading-loose text-royal-900/80 font-medium">
                {t(GURU_PROFILE.bio)}
                </p>
                <p className="mt-4 font-serif text-sm text-gold-700 font-bold tracking-widest uppercase">
                — {GURU_PROFILE.brandName}
                </p>
            </div>

            {/* Dharmic Pillars */}
            <div className="grid grid-cols-2 gap-y-6 gap-x-4 border-t border-royal-900/10 pt-8">
                {[
                    { label: { hi: 'सनातन धर्म', en: 'Sanatan Dharma' }, icon: '॥' },
                    { label: { hi: 'वैदिक अनुष्ठान', en: 'Vedic Rituals' }, icon: '॥' },
                    { label: { hi: 'ज्योतिष विज्ञान', en: 'Astrology Science' }, icon: '॥' },
                    { label: { hi: 'कर्म सिद्धांत', en: 'Karma Theory' }, icon: '॥' },
                ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 justify-center lg:justify-start group">
                        <span className="text-gold-600 font-bold text-xl opacity-60 group-hover:opacity-100 transition-opacity">{item.icon}</span>
                        <span className="font-hindi font-bold text-royal-900 text-sm tracking-wide group-hover:text-gold-700 transition-colors">
                            {t(item.label)}
                        </span>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;