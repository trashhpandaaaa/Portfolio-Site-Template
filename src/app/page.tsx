import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import About from './components/sections/About';
import Contact from './components/sections/Contact';

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}