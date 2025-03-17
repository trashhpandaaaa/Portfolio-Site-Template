'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // On mount, check the user's preferred theme
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-forest/10 hover:bg-forest/20 transition-colors"
      aria-label="Toggle theme"
    >
      <motion.div 
        animate={{ rotate: isDarkMode ? 0 : 360 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center"
      >
        {isDarkMode ? (
          <Moon className="h-5 w-5 text-blue-400" />
        ) : (
          <Sun className="h-5 w-5 text-amber-400" />
        )}
      </motion.div>
      
      {/* Totoro shadow appears in dark mode */}
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: isDarkMode ? 1 : 0,
          scale: isDarkMode ? 1 : 0
        }}
        className="absolute -bottom-2 -right-2"
      >
        <div className="w-4 h-4 bg-gray-800 rounded-full overflow-hidden">
          {isDarkMode && (
            <div className="w-full h-full relative">
              <div className="absolute w-1 h-1 bg-white rounded-full left-1 top-1"></div>
              <div className="absolute w-1 h-1 bg-white rounded-full right-1 top-1"></div>
            </div>
          )}
        </div>
      </motion.div>
    </button>
  );
} 