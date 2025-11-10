import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-[#0a0a0c] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_0%_0%,rgba(139,92,246,0.10),transparent_60%)]" />
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl font-semibold tracking-tight md:text-4xl"
        >
          About
        </motion.h2>

        <div className="mt-8 grid gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-2 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm"
          >
            <p className="text-white/80 leading-relaxed">
              I’m a creative UI/UX Designer with experience in designing user-friendly, responsive, and accessible interfaces. Currently working as a Graphic Designer, I create engaging visuals for digital platforms and collaborate closely with teams to deliver impactful design solutions.
            </p>
            <p className="mt-4 text-white/70">
              Education: <span className="font-medium text-white">B.E in Computer Science (2021–2025)</span> – Erode Sengunthar Engineering College, Tamil Nadu.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm"
          >
            <h3 className="text-white/90 font-medium">Contact</h3>
            <div className="mt-4 space-y-3 text-white/80">
              <a href="tel:+919943024742" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone size={18} /> +91 9943024742
              </a>
              <a href="mailto:gopika.sj352@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail size={18} /> gopika.sj352@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/gopika-s-j"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
