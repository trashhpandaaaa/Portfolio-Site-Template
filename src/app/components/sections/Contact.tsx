'use client'
import { motion } from 'framer-motion';
import { Send, Linkedin, Twitter, Facebook, Instagram, Github } from 'lucide-react';
import { useState, FormEvent } from 'react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { sendContactEmail } from '@/lib/actions';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | 'loading' | null;
    message: string;
  }>({
    type: null,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        type: 'error',
        message: 'Please fill in all the fields.'
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        type: 'error',
        message: 'Please enter a valid email address.'
      });
      return;
    }
    
    // Set loading state
    setFormStatus({
      type: 'loading',
      message: 'Sending your message...'
    });
    
    try {
      // Call the server action
      const result = await sendContactEmail(formData);
      
      if (result.success) {
        // Reset form on success
        setFormData({ name: '', email: '', message: '' });
        setFormStatus({
          type: 'success',
          message: result.message
        });
      } else {
        setFormStatus({
          type: 'error',
          message: result.message
        });
      }
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'An unexpected error occurred. Please try again later.'
      });
    }
  };

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
          <form className="space-y-6" onSubmit={handleSubmit}>
            {formStatus.type && (
              <div
                className={`p-4 rounded-lg ${
                  formStatus.type === 'success'
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                    : formStatus.type === 'error'
                    ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                    : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                }`}
              >
                {formStatus.message}
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-sage/20 bg-white/50 dark:bg-slate-800/50 dark:border-green-900/20 focus:outline-none focus:ring-2 focus:ring-forest/20 dark:focus:ring-green-900/30"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-sage/20 bg-white/50 dark:bg-slate-800/50 dark:border-green-900/20 focus:outline-none focus:ring-2 focus:ring-forest/20 dark:focus:ring-green-900/30"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-sage/20 bg-white/50 dark:bg-slate-800/50 dark:border-green-900/20 focus:outline-none focus:ring-2 focus:ring-forest/20 dark:focus:ring-green-900/30 h-32"
                placeholder="Your message..."
                required
              />
            </div>

            <Button 
              type="submit" 
              className="w-full"
              disabled={formStatus.type === 'loading'}
            >
              <span className="flex items-center justify-center gap-2">
                {formStatus.type === 'loading' ? 'Sending...' : 'Send Message'}
                <Send size={18} />
              </span>
            </Button>
          </form>

          <div className="mt-8 pt-8 border-t border-sage/20 dark:border-green-900/20">
            <div className="flex justify-center gap-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest hover:text-forest/80 dark:text-green-400 dark:hover:text-green-300 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-forest hover:text-forest/80 dark:text-green-400 dark:hover:text-green-300 transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-forest hover:text-forest/80 dark:text-green-400 dark:hover:text-green-300 transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-forest hover:text-forest/80 dark:text-green-400 dark:hover:text-green-300 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-forest hover:text-forest/80 dark:text-green-400 dark:hover:text-green-300 transition-colors"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}