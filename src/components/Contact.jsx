import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Behance } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative w-full bg-[#0a0a0c] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_100%,rgba(124,58,237,0.12),transparent_60%)]" />
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center font-display text-3xl font-semibold tracking-tight md:text-4xl"
        >
          Let’s create something meaningful
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-10 grid max-w-3xl gap-4 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm"
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const name = data.get('name');
            const email = data.get('email');
            const message = data.get('message');
            window.location.href = `mailto:gopika.sj352@gmail.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(
              name || 'Visitor'
            )}&body=${encodeURIComponent(`Email: ${email}\n\n${message}`)}`;
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm text-white/70">Name</label>
              <input
                name="name"
                className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-violet-400/50"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="text-sm text-white/70">Email</label>
              <input
                type="email"
                name="email"
                className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-violet-400/50"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>
          <div>
            <label className="text-sm text-white/70">Message</label>
            <textarea
              name="message"
              rows={5}
              className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-violet-400/50"
              placeholder="Tell me about your project..."
              required
            />
          </div>
          <div className="flex items-center justify-between gap-4">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-3 text-sm font-medium text-white shadow-[0_10px_40px_rgba(167,139,250,0.35)] transition-transform hover:scale-[1.01]"
            >
              Send Message
            </button>
            <div className="flex items-center gap-3">
              <a href="https://www.behance.net/sjgopika" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-2 text-white/80 transition-colors hover:bg-white/10"><Behance size={18} /></a>
              <a href="https://www.linkedin.com/in/gopika-s-j" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-2 text-white/80 transition-colors hover:bg-white/10"><Linkedin size={18} /></a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-2 text-white/80 transition-colors hover:bg-white/10"><Instagram size={18} /></a>
            </div>
          </div>
        </motion.form>

        <p className="mt-8 text-center text-xs text-white/40">© {new Date().getFullYear()} Gopika S J. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Contact;
