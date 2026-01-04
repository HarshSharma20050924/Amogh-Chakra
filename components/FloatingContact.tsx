import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, X, ScrollText } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/seed';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const FloatingContact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();

  const toggleOpen = () => setIsOpen(!isOpen);

  const menuItems = [
    { 
      id: 'call',
      icon: Phone, 
      label: { hi: 'कॉल करें', en: 'Call Guru Ji' }, 
      href: `tel:${SOCIAL_LINKS.phone}`
    },
    { 
      id: 'whatsapp',
      icon: MessageCircle, 
      label: { hi: 'व्हाट्सएप', en: 'WhatsApp' }, 
      href: SOCIAL_LINKS.whatsapp,
      target: '_blank'
    },
    { 
      id: 'email',
      icon: Mail, 
      label: { hi: 'ईमेल', en: 'Email' }, 
      href: `mailto:${SOCIAL_LINKS.email}`
    }
  ];

  return (
    <div className="fixed bottom-8 right-6 z-[60] flex flex-col items-end pointer-events-none">
      <div className="pointer-events-auto relative">
        
        {/* Fan Menu Items */}
        <AnimatePresence>
          {isOpen && (
            <div className="absolute bottom-full right-0 mb-4 flex flex-col items-end gap-3 min-w-[200px]">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  target={item.target}
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  transition={{ 
                    delay: index * 0.1, 
                    type: "spring",
                    stiffness: 400,
                    damping: 25
                  }}
                  className="group flex items-center justify-end gap-3 w-full"
                >
                  {/* Label */}
                  <span className="bg-royal-950 text-gold-100 px-4 py-3 rounded-r-none rounded-l-full border-r-4 border-gold-500 text-xs font-bold uppercase tracking-widest shadow-xl group-hover:bg-gold-600 group-hover:text-royal-950 transition-colors duration-300">
                    {language === 'hi' ? item.label.hi : item.label.en}
                  </span>
                  
                  {/* Icon Button */}
                  <div className="w-12 h-12 bg-white border-2 border-gold-500 rounded-full flex items-center justify-center text-royal-900 shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <item.icon size={20} />
                  </div>
                </motion.a>
              ))}
            </div>
          )}
        </AnimatePresence>

        {/* Main Toggle Button - "Connect Us" Pill */}
        <motion.button
          onClick={toggleOpen}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`relative h-14 flex items-center gap-3 px-6 shadow-[0_0_30px_rgba(217,119,6,0.3)] transition-all duration-500 rounded-full group ${
             isOpen 
               ? 'bg-royal-950 text-gold-500 border border-gold-500/30' 
               : 'bg-gradient-to-r from-gold-500 to-gold-600 text-white'
          }`}
        >
            <AnimatePresence mode="wait">
                {isOpen ? (
                    <motion.div 
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        className="flex items-center gap-2"
                    >
                        <span className="text-xs font-bold uppercase tracking-widest">Close</span>
                        <X size={20} />
                    </motion.div>
                ) : (
                    <motion.div 
                        key="open"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-3"
                    >
                        <ScrollText size={20} className="animate-pulse" />
                        <span className="font-serif font-bold tracking-wide text-sm">
                            {language === 'hi' ? 'संपर्क करें' : 'Connect Us'}
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
};

export default FloatingContact;