import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const items = [
  'UI/UX Design Internship – Zidio Development',
  'WordPress Internship Training – ATS',
  'Adobe Photoshop – Udemy',
  'Adobe Illustrator – Udemy',
];

const Certifications = () => {
  return (
    <section id="certifications" className="relative w-full bg-[#0a0a0c] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl font-semibold tracking-tight md:text-4xl"
        >
          Certifications
        </motion.h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex items-start gap-3 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur-sm"
            >
              <CheckCircle2 className="mt-0.5 text-violet-300" size={20} />
              <p className="text-white/85">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
