import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 400], [1, 0.2])
  const y = useTransform(scrollY, [0, 400], [0, -80])

  return (
    <section id="home" className="relative h-[100svh] w-full overflow-hidden bg-black text-white">
      <motion.div style={{ opacity }} className="absolute inset-0">
        <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black pointer-events-none" />

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <motion.h1
            style={{ y }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight"
          >
            The Senso Cube
            <span className="align-top text-cyan-400"> ™</span>
          </motion.h1>
          <motion.p
            style={{ y }}
            className="mt-6 max-w-2xl text-lg sm:text-xl text-white/80"
          >
            A modular, multi-sensory room — a luxurious alternative to traditional sensory spaces where footprint or installation is limited. Bespoke, flexible, and fully interactive.
          </motion.p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#consult" className="inline-flex items-center justify-center rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 transition-colors">
              Book a Design Consultation
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-full border border-white/30 hover:border-white/60 text-white font-semibold px-6 py-3 transition-colors">
              Explore Features
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm">Scroll to explore</div>
    </section>
  )
}
