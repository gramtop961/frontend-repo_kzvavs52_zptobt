import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'E-Learning Website (UI/UX Design)',
    tools: 'Figma · Prototyping · Usability',
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1600&auto=format&fit=crop',
    link: 'https://www.behance.net/sjgopika',
  },
  {
    title: 'Portfolio Management – UI Design',
    tools: 'Figma · Interaction · Visual Design',
    image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1600&auto=format&fit=crop',
    link: 'https://www.behance.net/sjgopika',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-[#0a0a0c] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(124,58,237,0.10),transparent_60%)]" />
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl font-semibold tracking-tight md:text-4xl"
        >
          Projects
        </motion.h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <motion.a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10"
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-80" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="rounded-xl bg-white/5 p-4 backdrop-blur-md ring-1 ring-white/10">
                  <h3 className="text-lg font-medium text-white">{p.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{p.tools}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://www.behance.net/sjgopika"
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm text-white/90 backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            Explore more on Behance
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
