
import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, X, Users } from 'lucide-react';
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
      href: `tel:${SOCIAL_LINKS.phone}`,
      color: 'bg-green-600'
    },
    { 
      id: 'whatsapp',
      icon: MessageCircle, 
      label: { hi: 'व्हाट्सएप', en: 'WhatsApp' }, 
      href: SOCIAL_LINKS.whatsapp,
      target: '_blank',
      color: 'bg-emerald-500'
    },
    { 
      id: 'email',
      icon: Mail, 
      label: { hi: 'ईमेल', en: 'Email' }, 
      href: `mailto:${SOCIAL_LINKS.email}`,
      color: 'bg-blue-600'
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex flex-col items-end">
      
      {/* 
        FAN MENU 
      */}
      <AnimatePresence>
        {isOpen && (
          <div className="absolute bottom-full right-0 mb-4 flex flex-col items-end gap-3 min-w-[200px] pointer-events-auto">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.id}
                href={item.href}
                target={item.target}
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                transition={{ 
                  delay: index * 0.05, 
                  duration: 0.2
                }}
                className="flex items-center justify-end gap-3 group cursor-pointer"
                onClick={() => setTimeout(() => setIsOpen(false), 300)} // Close after selection
              >
                {/* Label */}
                <div className="bg-white text-royal-950 px-3 py-2 rounded-md shadow-md font-bold uppercase text-[10px] tracking-wider border border-gray-100">
                  {language === 'hi' ? item.label.hi : item.label.en}
                </div>
                
                {/* Icon Circle */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md border-2 border-white ${item.color} group-hover:scale-105 transition-transform`}>
                  <item.icon size={16} />
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* 
        MAIN TOGGLE BUTTON 
        "Connect in a Box" - Rectangular, Stable, No Flash
      */}
      <motion.button
        onClick={toggleOpen}
        whileTap={{ scale: 0.95 }}
        className="relative group outline-none"
      >
        <div className={`
          flex items-center gap-3 px-6 py-3
          bg-gold-500 text-white
          rounded-lg shadow-xl
          border border-gold-400
          transition-all duration-300
          ${isOpen ? 'bg-royal-900 border-royal-800' : 'hover:bg-gold-600'}
        `}>
            {/* Icon */}
            <div className="relative">
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                             <X size={20} />
                        </motion.div>
                    ) : (
                        <motion.div key="open" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                             <Users size={20} fill="currentColor" className="opacity-90" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Label */}
            <span className="font-bold uppercase tracking-widest text-xs">
                {isOpen ? (language === 'hi' ? 'बंद करें' : 'Close') : (language === 'hi' ? 'संपर्क' : 'Connect')}
            </span>
        </div>
      </motion.button>
    </div>
  );
};

export default FloatingContact;
