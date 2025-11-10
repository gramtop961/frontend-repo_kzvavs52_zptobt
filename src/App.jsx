import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

const Navbar = () => {
  const items = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <div className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav className="flex items-center gap-1 rounded-full border border-white/10 bg-black/40 px-2 py-1 text-sm text-white/80 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        {items.map((i) => (
          <a
            key={i.href}
            href={i.href}
            className="rounded-full px-3 py-1.5 transition-colors hover:bg-white/10 hover:text-white"
          >
            {i.label}
          </a>
        ))}
      </nav>
    </div>
  );
};

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0a0a0c] font-sans">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
