'use client'
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div 
      className={cn(
        "bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden p-6 border border-forest/5 dark:border-green-900/20",
        className
      )}
    >
      {children}
    </div>
  );
}
