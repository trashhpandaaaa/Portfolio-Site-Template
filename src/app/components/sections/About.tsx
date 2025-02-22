'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import Card from '../ui/Card';

export default function About() {
  return (
    <section className="py-20 bg-sage/5" id="about">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          About My Journey
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="relative z-10">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/images/about-image.gif"
                  alt="About section image"
                  fill
                  className="object-cover"
                />
              </div>
            </Card>
            <div className="rounded-full absolute -bottom-6 -right-6 w-24 h-24 z-20">
              <Image
                src="/images/totoro-yo.jpg"
                alt="Totoro decoration"
                width={96}
                height={96}
                className="mx-auto rounded-full border-4 border-forest/20 animate-float"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <h3 className="text-2xl font-semibold mb-4">Creative Developer</h3>
              <p className="text-sage mb-6">
                With a passion for bringing magical experiences to life through code,
                I blend technical expertise with artistic vision. Every project is an
                opportunity to create something that delights and inspires.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="w-20 h-1 bg-forest rounded-full"></span>
                  <span className="text-forest font-medium">Frontend Magic</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-16 h-1 bg-sage rounded-full"></span>
                  <span className="text-sage font-medium">UI Animation</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-24 h-1 bg-sunset rounded-full"></span>
                  <span className="text-sunset font-medium">Creative Coding</span>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}