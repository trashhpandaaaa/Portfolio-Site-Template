// src/app/components/ui/Button.tsx
'use client'
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Button({ 
  children, 
  onClick, 
  variant = 'primary',
  size = 'md',
  className
}: ButtonProps) {
  const baseStyle = "rounded-full font-medium transition-all duration-300 relative overflow-hidden";
  
  const variants = {
    primary: "bg-forest text-cream hover:bg-forest/90",
    secondary: "bg-sage text-cream hover:bg-sage/90",
    outline: "border-2 border-forest text-forest hover:bg-forest/10"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(baseStyle, variants[variant], sizes[size], className)}
      onClick={onClick}
    >
      {children}
      <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity" />
    </motion.button>
  );
}