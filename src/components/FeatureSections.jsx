import React from 'react'
import { motion } from 'framer-motion'
import { Cube, Sparkles, Layers, SlidersHorizontal } from 'lucide-react'

const features = [
  {
    icon: Cube,
    title: 'Modular By Design',
    body: 'Assemble the perfect footprint for your space with interchangeable panels and corners that click together with precision.'
  },
  {
    icon: Sparkles,
    title: 'Immersive Multi‑Sensory',
    body: 'Lighting, audio, projection and tactile surfaces work together to create calming or energizing environments on demand.'
  },
  {
    icon: Layers,
    title: 'Bespoke & Scalable',
    body: 'From compact pods to expansive suites — tailor materials, finishes and digital scenes to your brand and needs.'
  },
  {
    icon: SlidersHorizontal,
    title: 'Fully Interactive',
    body: 'Touch, motion and voice inputs let participants influence the environment, supporting therapy, play and de‑escalation.'
  }
]

export default function FeatureSections() {
  return (
    <section id="features" className="relative w-full bg-gradient-to-b from-black to-[#07091A] text-white">
      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Designed for focus, comfort and control</h2>
          <p className="mt-4 text-white/70">A scrolling story that reveals how The Senso Cube adapts to any setting.</p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:bg-white/10 transition-colors"
            >
              <f.icon className="h-8 w-8 text-cyan-400" />
              <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
