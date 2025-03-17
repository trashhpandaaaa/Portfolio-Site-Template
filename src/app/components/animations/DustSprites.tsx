'use client'

import { motion } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';

export default function DustSprites() {
  const [isClient, setIsClient] = useState(false);

  // Pre-calculate sprite configurations to ensure consistency
  const sprites = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      size: 5 + ((i % 3) * 5), // Deterministic sizes: 5px, 10px, or 15px
      x: `${((i + 1) * 6.5) % 100}%`, // Spread evenly across the width
      delay: (i * 0.2) % 2, // Staggered delays
      duration: 4 + (i % 3), // Varying durations: 4s, 5s, or 6s
    }));
  }, []);

  // Only show animations after client-side hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Return nothing during SSR
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {sprites.map((sprite) => (
        <motion.div
          key={sprite.id}
          className="absolute bottom-0"
          style={{ left: sprite.x }}
          initial={{ y: '100%', opacity: 0 }}
          animate={{
            y: '-100vh',
            opacity: [0, 1, 1, 0],
            x: [
              0,
              Math.sin(sprite.id) * 50,
              Math.sin(sprite.id + 2) * 50,
              0
            ],
          }}
          transition={{
            duration: sprite.duration,
            delay: sprite.delay,
            repeat: Infinity,
            repeatDelay: sprite.id * 0.1, // Deterministic repeat delay
            ease: 'easeInOut',
          }}
        >
          <div
            className="relative bg-black dark:bg-gray-300 rounded-full"
            style={{
              width: `${sprite.size}px`,
              height: `${sprite.size}px`,
            }}
          >
            {/* Eyes */}
            <motion.div
              className="absolute bg-white dark:bg-gray-800 rounded-full"
              style={{
                width: `${sprite.size * 0.3}px`,
                height: `${sprite.size * 0.3}px`,
                top: `${sprite.size * 0.2}px`,
                left: `${sprite.size * 0.2}px`,
              }}
              animate={{ scale: [1, 0.8, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
            <motion.div
              className="absolute bg-white dark:bg-gray-800 rounded-full"
              style={{
                width: `${sprite.size * 0.3}px`,
                height: `${sprite.size * 0.3}px`,
                top: `${sprite.size * 0.2}px`,
                right: `${sprite.size * 0.2}px`,
              }}
              animate={{ scale: [1, 0.8, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
                delay: 0.5,
              }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
