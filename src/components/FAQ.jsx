import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'What sizes are available?',
    a: 'The Senso Cube is modular. Start from a compact 2m x 2m footprint and scale up in 0.5m increments to suit your room.'
  },
  {
    q: 'How long does installation take?',
    a: 'Most installs complete in a single day with minimal disruption. Components are pre‑fabricated and click‑fit on site.'
  },
  {
    q: 'Is it safe and easy to maintain?',
    a: 'Yes. Surfaces are durable and wipe‑clean. The control system includes session presets and a simple admin mode.'
  },
  {
    q: 'Can we customise finishes and content?',
    a: 'Absolutely. Choose from materials, lighting palettes and digital scenes that reflect your brand and therapeutic goals.'
  }
]

function Item({ q, a, i }) {
  const [open, setOpen] = React.useState(false)
  return (
    <div className="border-b border-white/10 py-4">
      <button onClick={() => setOpen(!open)} className="w-full text-left flex justify-between items-center">
        <span className="font-medium">{q}</span>
        <span className="text-cyan-400">{open ? '−' : '+'}</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.p
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="text-white/70 overflow-hidden"
          >
            <span className="block pt-3">{a}</span>
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="relative w-full bg-black text-white">
      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-center">Frequently asked questions</h2>
          <div className="mt-10 divide-y divide-white/10">
            {faqs.map((f, i) => (
              <Item key={i} {...f} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
