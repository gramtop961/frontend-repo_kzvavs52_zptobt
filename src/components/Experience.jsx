import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="relative w-full bg-[#0a0a0c] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl font-semibold tracking-tight md:text-4xl"
        >
          Experience
        </motion.h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm"
          >
            <h3 className="text-xl font-medium text-white">Graphic Designer – Changing Tree</h3>
            <p className="text-sm text-white/60">Jun 2025 – Oct 2025</p>
            <p className="mt-3 text-white/80">
              Designed creative visuals for brands like Tata Neu, BigBasket, Croma, Flipkart, Jio, and Myntra.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm"
          >
            <h3 className="text-xl font-medium text-white">UI/UX Designer Intern – Zidio Development</h3>
            <p className="text-sm text-white/60">—</p>
            <p className="mt-3 text-white/80">
              Led the design of a responsive e-learning platform with research, usability testing, and prototyping.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
