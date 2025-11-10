import React from 'react';
import { motion } from 'framer-motion';
import { Brush, Layout, TestTube, Smartphone, Users, Type, PencilRuler } from 'lucide-react';

const skills = [
  { name: 'Visual Design', icon: Brush },
  { name: 'Interaction Design', icon: Layout },
  { name: 'Usability Testing', icon: TestTube },
  { name: 'User-Centric Mindset', icon: Users },
  { name: 'Responsive Design', icon: Smartphone },
  { name: 'User Research', icon: Users },
  { name: 'Typography', icon: Type },
  { name: 'Prototyping & Wireframing', icon: PencilRuler },
  { name: 'Figma · Photoshop · Illustrator', icon: PencilRuler },
];

const Skills = () => {
  return (
    <section id="skills" className="relative w-full bg-[#0a0a0c] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_50%_at_100%_0%,rgba(59,130,246,0.10),transparent_60%)]" />
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl font-semibold tracking-tight md:text-4xl"
        >
          Skills
        </motion.h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {skills.map(({ name, icon: Icon }) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/30 to-fuchsia-500/30 text-violet-300">
                  <Icon size={20} />
                </div>
                <span className="text-white/90">{name}</span>
              </div>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-[0_0_20px_rgba(167,139,250,0.6)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
