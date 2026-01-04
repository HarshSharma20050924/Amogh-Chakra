import React from 'react';
import { motion } from 'framer-motion';

const AmbientBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {/* 
         This component creates the "Atmosphere". 
         It uses large blurred gradients that move extremely slowly 
         to simulate light shifting in a room or clouds passing.
      */}

      {/* Top Left - Soft Gold Glow */}
      <motion.div
        animate={{ 
          x: [0, 50, 0], 
          y: [0, -30, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-gold-200/20 rounded-full blur-[120px] mix-blend-multiply"
      />

      {/* Bottom Right - Deep Royal Depth */}
      <motion.div
        animate={{ 
          x: [0, -40, 0], 
          y: [0, 40, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-royal-200/20 rounded-full blur-[100px] mix-blend-multiply"
      />

      {/* Center - Subtle Pulse */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0, 0.1, 0]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-[30%] left-[30%] w-[40vw] h-[40vw] bg-cream-100 rounded-full blur-[80px]"
      />
    </div>
  );
};

export default AmbientBackground;