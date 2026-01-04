import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Globe } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  
  // Use scroll hook for smoother, continuous transitions
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  // Update state based on scroll position for conditional rendering logic
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Derived animation values
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.95]);
  const blurAmount = useTransform(scrollY, [0, 100], [0, 8]);
  const textColor = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 1)", "rgba(23, 37, 84, 1)"]); // White to Royal-900
  const iconColor = useTransform(scrollY, [0, 100], ["rgba(251, 191, 36, 1)", "rgba(217, 119, 6, 1)"]); // Gold-400 to Gold-600
  const borderColor = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 0.3)", "rgba(23, 37, 84, 0.2)"]);

  const navLinks = [
    { name: { hi: 'मुख्य पृष्ठ', en: 'Home' }, href: '#' },
    { name: { hi: 'गुरु जी', en: 'Guru Ji' }, href: '#about' },
    { name: { hi: 'सेवाएं', en: 'Services' }, href: '#services' },
    { name: { hi: 'गैलरी', en: 'Gallery' }, href: '#archive' },
  ];

  return (
    <>
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 4.2, duration: 1, ease: "easeOut" }} // Delays until intro finishes
      className="fixed top-0 left-0 w-full z-40 transition-colors"
      style={{ 
        backgroundColor: `rgba(253, 251, 247, ${bgOpacity.get()})` // Direct value doesn't update on scroll without useTransform mapped to style, workaround below
      }}
    >
      {/* Dynamic Background Layer using Framer Motion style */}
      <motion.div 
        className="absolute inset-0 pointer-events-none shadow-sm"
        style={{ 
            opacity: bgOpacity,
            backdropFilter: `blur(${blurAmount}px)`
        }} 
      />
      
      {/* Background fill for solid color calc */}
      <motion.div 
        className="absolute inset-0 bg-cream-50 pointer-events-none"
        style={{ opacity: bgOpacity }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <motion.div style={{ color: iconColor }}>
               <Sun className="w-8 h-8 group-hover:rotate-45 transition-transform duration-700" />
            </motion.div>
            <div className="flex flex-col">
              <motion.span 
                style={{ color: textColor }}
                className="font-serif font-bold text-xl tracking-wide uppercase"
              >
                Amogh Chakra
              </motion.span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                style={{ color: textColor }}
                className="font-sans font-medium text-xs uppercase tracking-widest hover:text-gold-500 transition-colors relative group"
              >
                {t(link.name)}
                <span className="absolute -bottom-2 left-1/2 w-0 h-[1px] bg-gold-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
              </motion.a>
            ))}
            
            {/* Language Toggle */}
            <motion.button 
              onClick={toggleLanguage}
              style={{ color: textColor, borderColor: borderColor }}
              className="flex items-center gap-1 font-bold text-[10px] uppercase px-3 py-1 rounded-full border hover:bg-gold-500/10 transition-colors"
            >
              <Globe size={12} />
              {language === 'hi' ? 'EN' : 'HI'}
            </motion.button>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-sm font-bold text-xs uppercase tracking-widest transition-all ${
                isScrolled
                  ? 'bg-royal-900 text-white shadow-lg'
                  : 'bg-gold-500 text-white shadow-[0_0_15px_rgba(245,158,11,0.4)]'
              }`}
            >
              {language === 'hi' ? 'संपर्क' : 'Contact'}
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
             <motion.button 
                onClick={toggleLanguage}
                style={{ color: textColor, borderColor: borderColor }}
                className="flex items-center gap-1 font-bold text-xs uppercase px-2 py-1 rounded border"
            >
                {language === 'hi' ? 'EN' : 'HI'}
            </motion.button>

            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 relative z-50"
            >
                <motion.div style={{ color: textColor }}>
                   {isMobileMenuOpen ? <X /> : <Menu />}
                </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-cream-50 border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-royal-900 font-serif text-2xl"
                >
                  {t(link.name)}
                </a>
              ))}
              <div className="w-full h-[1px] bg-gray-200" />
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gold-600 font-bold uppercase tracking-widest text-sm"
              >
                 {language === 'hi' ? 'संपर्क करें' : 'Contact Us'}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
    </>
  );
};

export default Navbar;