import React from 'react';
import { motion } from 'framer-motion';

interface RitualButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  icon?: React.ReactNode;
  href?: string; // If href is provided, acts as link
  target?: string;
}

const RitualButton: React.FC<RitualButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon, 
  className = '', 
  href,
  ...props 
}) => {
  
  const baseClasses = "relative inline-flex items-center justify-center gap-3 px-8 py-4 uppercase tracking-[0.2em] text-xs font-bold transition-all duration-500 group overflow-hidden";
  
  const variants = {
    primary: "bg-royal-900 text-white shadow-lg hover:shadow-gold-500/20",
    outline: "bg-transparent border border-gold-500/50 text-royal-900 hover:border-gold-600",
    ghost: "bg-transparent text-royal-900 hover:text-gold-600"
  };

  const Content = () => (
    <>
      {/* Background Hover Effect */}
      <span className={`absolute inset-0 w-full h-full bg-gold-500/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out ${variant === 'ghost' ? 'hidden' : ''}`} />
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-3">
        {children}
        {icon && <span className="group-hover:translate-x-1 transition-transform duration-500">{icon}</span>}
      </span>
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.97, y: 1 }, // Resistance feel
    transition: { type: "spring", stiffness: 400, damping: 25 }
  };

  if (href) {
    return (
      <motion.a 
        href={href}
        className={`${baseClasses} ${variants[variant]} ${className}`}
        {...motionProps as any}
        {...(props as any)}
      >
        <Content />
      </motion.a>
    );
  }

  return (
    <motion.button 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...motionProps}
      {...props as any}
    >
      <Content />
    </motion.button>
  );
};

export default RitualButton;