
import React from 'react';
import { SOCIAL_LINKS } from '../data/seed';
import { Instagram, Youtube, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import SacredDivider from './SacredDivider';

const Footer: React.FC = () => {
  const { language } = useLanguage();

  return (
    <footer id="contact" className="bg-royal-950 text-white relative overflow-hidden scroll-mt-20">
       
       {/* The Seal - Giant OM - Increased Visibility (White Side) */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/20 pointer-events-none font-hindi font-bold text-[20rem] select-none z-0">
          ॐ
       </div>

      {/* Top Divider */}
      <div className="opacity-20 relative z-10">
         <SacredDivider />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 flex flex-col items-center text-center">
        
        {/* Logo / Brand */}
        <div className="mb-8">
           <h3 className="font-serif text-3xl md:text-5xl font-bold tracking-widest text-white mb-2">
               AMOGH CHAKRA
           </h3>
           <p className="text-gold-500 text-xs uppercase tracking-[0.5em] font-light">
               Vedic Astrology & Guidance
           </p>
        </div>

        {/* Mantra */}
        <p className="font-hindi text-xl text-white/60 mb-12 font-light">
           ॥ तमसो मा ज्योतिर्गमय ॥
        </p>

        {/* Navigation - Symmetrical */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-bold uppercase tracking-wider text-white/40 mb-12">
            <a href="#" className="hover:text-gold-400 transition-colors">Home</a>
            <span className="text-white/10">•</span>
            <a href="#about" className="hover:text-gold-400 transition-colors">Guru Ji</a>
            <span className="text-white/10">•</span>
            <a href="#services" className="hover:text-gold-400 transition-colors">Services</a>
            <span className="text-white/10">•</span>
            <a href="#archive" className="hover:text-gold-400 transition-colors">Archive</a>
        </div>

        {/* Contact Icons */}
        <div className="flex gap-6 mb-16">
            <a href={SOCIAL_LINKS.instagram} className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-gold-600 hover:border-gold-600 hover:text-white transition-all duration-300 text-white/50">
                <Instagram size={18} />
            </a>
            <a href={SOCIAL_LINKS.youtube} className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-gold-600 hover:border-gold-600 hover:text-white transition-all duration-300 text-white/50">
                <Youtube size={18} />
            </a>
            <a href={`mailto:${SOCIAL_LINKS.email}`} className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-gold-600 hover:border-gold-600 hover:text-white transition-all duration-300 text-white/50">
                <Mail size={18} />
            </a>
             <a href={`tel:${SOCIAL_LINKS.phone}`} className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-gold-600 hover:border-gold-600 hover:text-white transition-all duration-300 text-white/50">
                <Phone size={18} />
            </a>
        </div>

        {/* Copyright */}
        <div className="text-white/20 text-xs font-light tracking-wide flex flex-col gap-2 items-center">
            <p>© {new Date().getFullYear()} Amogh Chakra. {language === 'hi' ? 'सर्वाधिकार सुरक्षित' : 'All Rights Reserved'}.</p>
            <div className="w-8 h-[1px] bg-white/20" />
            <p className="font-hindi text-lg opacity-80 mt-2">ॐ</p>
        </div>
      </div>
      
      {/* Bottom Gold Line */}
      <div className="h-1 w-full bg-gradient-to-r from-royal-950 via-gold-600 to-royal-950 opacity-40" />
    </footer>
  );
};

export default Footer;
