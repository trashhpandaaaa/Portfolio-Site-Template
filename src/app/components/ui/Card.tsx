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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "bg-paper rounded-lg shadow-lg p-6 relative overflow-hidden",
        "before:content-[''] before:absolute before:inset-0 before:bg-sage/5 before:opacity-50",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
