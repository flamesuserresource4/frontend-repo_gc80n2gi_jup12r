import React from 'react'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="consult" className="relative w-full bg-gradient-to-b from-[#07091A] to-black text-white">
      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight"
          >
            Ready to co‑design your Senso Cube?
          </motion.h2>
          <p className="mt-4 text-white/70">Share your goals, footprint and preferred finishes. Our team will craft a tailored concept and quote.</p>

          <form className="mt-10 grid gap-4 sm:grid-cols-2 text-left">
            <input required placeholder="Full name" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500/50" />
            <input required type="email" placeholder="Email address" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500/50" />
            <input placeholder="Company / Organisation" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500/50 sm:col-span-2" />
            <textarea required placeholder="Tell us about your space and objectives" rows={4} className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500/50 sm:col-span-2" />
            <button type="submit" className="sm:col-span-2 inline-flex items-center justify-center rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 transition-colors">
              Request consultation
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
