// src/app/components/animations/FloatingElements.tsx
'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  delay: number;
  scale: number;
}

export default function FloatingElements() {
  const elements: FloatingElement[] = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    scale: 0.5 + Math.random() * 0.5
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: 6,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Image
            src="/images/totoro-small.png"
            alt="Floating element"
            width={48}
            height={48}
            style={{
              transform: `scale(${element.scale})`
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}