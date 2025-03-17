'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      name: 'GitHub', 
      href: 'https://github.com/aakritirai', 
      icon: <Github className="h-5 w-5" /> 
    },
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com/in/aakritirai', 
      icon: <Linkedin className="h-5 w-5" /> 
    },
    { 
      name: 'Twitter', 
      href: 'https://twitter.com/aakritirai', 
      icon: <Twitter className="h-5 w-5" /> 
    },
    { 
      name: 'Email', 
      href: 'mailto:hello@aakritirai.com', 
      icon: <Mail className="h-5 w-5" /> 
    },
  ];

  return (
    <footer className="bg-forest/5 dark:bg-slate-800/50 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and tagline */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="font-semibold text-xl text-forest dark:text-green-400 mb-2">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center"
              >
                <span className="mr-2">🌱</span>
                <span>Aakriti Rai</span>
              </motion.div>
            </Link>
            <p className="text-sage dark:text-gray-400 text-center md:text-left">
              Creating magical digital experiences inspired by Studio Ghibli
            </p>
          </div>
          
          {/* Quick links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-forest dark:text-green-400 mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sage hover:text-forest dark:text-gray-400 dark:hover:text-green-400 transition-colors">
                Home
              </Link>
              <Link href="#projects" className="text-sage hover:text-forest dark:text-gray-400 dark:hover:text-green-400 transition-colors">
                Projects
              </Link>
              <Link href="#about" className="text-sage hover:text-forest dark:text-gray-400 dark:hover:text-green-400 transition-colors">
                About
              </Link>
              <Link href="/blog" className="text-sage hover:text-forest dark:text-gray-400 dark:hover:text-green-400 transition-colors">
                Blog
              </Link>
              <Link href="#contact" className="text-sage hover:text-forest dark:text-gray-400 dark:hover:text-green-400 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          
          {/* Social links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-forest dark:text-green-400 mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sage hover:text-forest dark:text-gray-400 dark:hover:text-green-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-forest/10 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sage dark:text-gray-400 text-sm">
            © {currentYear} Aakriti Rai. All rights reserved.
          </p>
          <motion.p 
            className="text-sage dark:text-gray-400 text-sm mt-2 md:mt-0 flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            Made with 
            <motion.span 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="mx-1 text-sunset"
            >
              <Heart className="h-4 w-4 fill-current" />
            </motion.span>
            and a sprinkle of Ghibli magic
          </motion.p>
        </div>
      </div>
    </footer>
  );
} 