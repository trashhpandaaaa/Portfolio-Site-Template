'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode, useMemo } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  // Pre-calculate sprite positions to ensure consistency between server and client
  const spritePositions = useMemo(() => {
    return Array.from({ length: 10 }, (_, i) => ({
      x: `${(i + 1) * 10}%`,
      y: `${((i + 1) * 10) % 100}%`,
    }));
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {children}
        
        {/* Animated overlay that slides in and out */}
        <motion.div
          className="fixed inset-0 bg-forest/10 dark:bg-green-900/20 z-50 pointer-events-none"
          initial={{ scaleY: 0, originY: 0 }}
          animate={{ 
            scaleY: [0, 1, 1, 0],
            originY: [0, 0, 1, 1],
          }}
          transition={{ 
            times: [0, 0.3, 0.7, 1],
            duration: 0.8,
            ease: "easeInOut"
          }}
        >
          {/* Dust sprites that appear during transition */}
          <div className="absolute inset-0 overflow-hidden">
            {spritePositions.map((position, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 bg-black/80 dark:bg-white/80 rounded-full"
                initial={{ 
                  x: position.x,
                  y: position.y,
                  scale: 0 
                }}
                animate={{ 
                  scale: [0, 1, 0],
                  rotate: [0, 360],
                }}
                transition={{ 
                  duration: 0.8,
                  delay: 0.1 + (i * 0.05),
                  ease: "easeInOut"
                }}
              >
                {/* Eyes */}
                <div className="absolute w-1 h-1 bg-white dark:bg-black rounded-full top-1 left-1"></div>
                <div className="absolute w-1 h-1 bg-white dark:bg-black rounded-full top-1 right-1"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
} 