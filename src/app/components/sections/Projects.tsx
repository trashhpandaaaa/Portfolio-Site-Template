'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import Card from '../ui/Card';

const projects = [
  {
    title: "Toto-Rain",
    description: "I wonder if Totoro got the umbrella today?",
    image: "/images/project1.gif",
    tags: ["React", "Weather API", "Animation"]
  },
  {
    title: "Kiki's Delivery Service",
    description: "We deliver with cats and witches.",
    image: "/images/project2.gif",
    tags: ["Next.js", "MDX", "Framer Motion"]
  },
  {
    title: "Kodama",
    description: "Protect the forest Princess Mononoke!!",
    image: "/images/project3.gif",
    tags: ["React Native", "Firebase", "Illustration"]
  }
];

export default function Projects() {
  return (
    <section className="py-20" id="projects">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group transform transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sage mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-sage/10 text-sage rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
