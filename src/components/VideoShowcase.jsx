import React from 'react'
import { motion } from 'framer-motion'

export default function VideoShowcase() {
  return (
    <section id="video" className="relative w-full bg-[#07091A] text-white">
      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">See the Cube in action</h2>
            <p className="mt-4 text-white/70 max-w-xl">Experience the responsive lighting, audio and interactive scenes. This quick overview shows how spaces transform from calming to playful in seconds.</p>
            <div className="mt-8 flex gap-4">
              <a href="#consult" className="inline-flex items-center justify-center rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 transition-colors">Start a design brief</a>
              <a href="#faq" className="inline-flex items-center justify-center rounded-full border border-white/30 hover:border-white/60 text-white font-semibold px-6 py-3 transition-colors">Common questions</a>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl"
          >
            <div className="aspect-video bg-black/50">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/ScMzIvxBSi4?rel=0&modestbranding=1&color=white"
                title="Senso Cube Overview"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-cyan-500/10 to-purple-500/10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
