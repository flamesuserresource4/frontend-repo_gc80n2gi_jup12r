import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Box, Sparkles, Layers, SlidersHorizontal } from 'lucide-react'

function Panel({ index, title, body, Icon, accent }) {
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -60])
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.98])

  return (
    <section ref={ref} className="relative h-[100svh] w-full snap-start overflow-hidden bg-black">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `radial-gradient(600px 300px at ${20 + index*15}% 30%, ${accent}22, transparent 60%),
                     radial-gradient(600px 300px at ${80 - index*10}% 70%, ${accent}15, transparent 60%)`
      }} />
      <motion.div style={{ y, opacity, scale }} className="relative z-10 h-full">
        <div className="h-full container mx-auto px-6 flex items-center">
          <div className="max-w-2xl">
            <Icon className="h-10 w-10 text-cyan-400" />
            <h3 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight">{title}</h3>
            <p className="mt-4 text-white/80 text-lg">{body}</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default function ScrollPanels() {
  const panels = [
    { title: 'Modular by design', body: 'Interchangeable panels click together, adapting to your footprint.', Icon: Box, accent: '#22d3ee' },
    { title: 'Immersive multi‑sensory', body: 'Lighting, audio and projection create responsive, calming scenes.', Icon: Sparkles, accent: '#a855f7' },
    { title: 'Bespoke & scalable', body: 'From compact pods to expansive suites, tailored to your brand.', Icon: Layers, accent: '#06b6d4' },
    { title: 'Fully interactive', body: 'Touch, motion and voice inputs put participants in control.', Icon: SlidersHorizontal, accent: '#8b5cf6' },
  ]

  return (
    <div className="bg-black text-white">
      {panels.map((p, i) => (
        <Panel key={i} index={i} {...p} />
      ))}
    </div>
  )
}
