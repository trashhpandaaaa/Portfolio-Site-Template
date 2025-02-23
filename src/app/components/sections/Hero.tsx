// src/app/components/sections/Hero.tsx
'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../ui/Button';
import DustSprites from '../animations/DustSprites';

export default function Hero() {
  // Function to handle smooth scrolling
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <DustSprites />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center z-20 max-w-2xl mx-auto px-4"
      >
        <motion.div
          className="mb-8 relative"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
        >
          <Image
            src="/images/profile-circular.gif"
            alt="Profile"
            width={150}
            height={150}
            className="mx-auto rounded-full border-4 border-forest/20"
            priority
          />
          <div className="absolute -bottom-2 -right-2 w-12 h-12">
            <Image
              src="/images/totoro-small.jpg"
              alt="Totoro"
              width={48}
              height={48}
              className="mx-auto rounded-full border-4 border-forest/20 animate-float"
            />
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl font-bold mb-4 text-forest"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Aakriti Rai
        </motion.h1>
        
        <motion.p
          className="text-xl text-sage mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Creative Developer & Digital Artist
        </motion.p>
        
        <motion.div
          className="flex gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Button onClick={() => scrollToSection('projects')}>
            View Projects
          </Button>
          <Button 
            variant="secondary" 
            onClick={() => scrollToSection('contact')}
          >
            Contact Me
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}