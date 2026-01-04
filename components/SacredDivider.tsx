import React from 'react';
import { motion } from 'framer-motion';

interface SacredDividerProps {
  reversed?: boolean;
}

const SacredDivider: React.FC<SacredDividerProps> = ({ reversed = false }) => {
  return (
    <div className="w-full flex items-center justify-center py-20 opacity-90">
      <div className="relative flex items-center justify-center w-full max-w-4xl px-4">
        
        {/* Left Line */}
        <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className={`h-[2px] w-full bg-gradient-to-r from-transparent via-gold-500 to-gold-700 origin-right ${reversed ? 'order-3' : 'order-1'}`}
        />

        {/* Center Motif (Chakra) */}
        <div className={`mx-8 relative flex items-center justify-center ${reversed ? 'order-2' : 'order-2'}`}>
            {/* Outer Ring with Glow */}
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 border-2 border-gold-500 rounded-full border-dashed shadow-[0_0_15px_rgba(245,158,11,0.5)]"
            />
            
            {/* Inner Ring */}
            <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-8 h-8 border border-gold-600 rounded-full"
            />
            
            {/* Center Om Symbol */}
            <div className="absolute inset-0 flex items-center justify-center pb-1">
                <span className="text-gold-600 font-hindi font-bold text-lg leading-none">ॐ</span>
            </div>
        </div>

        {/* Right Line */}
        <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className={`h-[2px] w-full bg-gradient-to-l from-transparent via-gold-500 to-gold-700 origin-left ${reversed ? 'order-1' : 'order-3'}`}
        />
      </div>
    </div>
  );
};

export default SacredDivider;