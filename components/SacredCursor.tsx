import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const SacredCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Mouse position values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the cursor "lag" feel (organic movement)
  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on desktop to save performance/ux on touch
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16); // Center offset
      mouseY.set(e.clientY - 16);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference"
      style={{
        x: cursorX,
        y: cursorY,
      }}
    >
      {/* 
        The Cursor Visual 
        A glowing orb that inverts colors slightly, creating a "lantern" effect
      */}
      <div className="relative w-full h-full">
         <div className="absolute inset-0 bg-gold-400 rounded-full blur-[4px] opacity-80" />
         <div className="absolute inset-[-4px] bg-gold-200 rounded-full blur-[8px] opacity-40" />
      </div>
    </motion.div>
  );
};

export default SacredCursor;