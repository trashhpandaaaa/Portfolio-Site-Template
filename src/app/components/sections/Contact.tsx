'use client'
import { motion } from 'framer-motion';
import { Send, Linkedin, Twitter, Facebook, Instagram, Github } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';

export default function Contact() {
  return (
    <section className="py-20" id="contact">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Let's Connect
        </motion.h2>

        <Card>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-sage/20 bg-white/50 focus:outline-none focus:ring-2 focus:ring-forest/20"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg border border-sage/20 bg-white/50 focus:outline-none focus:ring-2 focus:ring-forest/20"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                className="w-full px-4 py-2 rounded-lg border border-sage/20 bg-white/50 focus:outline-none focus:ring-2 focus:ring-forest/20 h-32"
                placeholder="Your message..."
              />
            </div>

            <Button className="w-full">
              <span className="flex items-center justify-center gap-2">
                Send Message
                <Send size={18} />
              </span>
            </Button>
          </form>

          <div className="mt-8 pt-8 border-t border-sage/20">
            <div className="flex justify-center gap-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-forest hover:text-forest/80 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-forest hover:text-forest/80 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-forest hover:text-forest/80 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-forest hover:text-forest/80 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-forest hover:text-forest/80 transition-colors">
                <Github size={24} />
              </a>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}