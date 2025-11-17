import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
const Spline = React.lazy(() => import('@splinetool/react-spline'))

export default function SplineShowcase() {
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const titleY = useTransform(scrollYProgress, [0, 0.5, 1], [40, 0, -40])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const panelOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])

  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])

  return (
    <section id="experience" ref={ref} className="relative h-[100svh] w-full snap-start overflow-hidden bg-black">
      <motion.div style={{ opacity: panelOpacity }} className="absolute inset-0">
        <React.Suspense fallback={<div className="w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(34,211,238,0.15),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.15),transparent_40%)]" />}>        
          {mounted ? (
            <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          ) : (
            <div className="w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(34,211,238,0.15),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.15),transparent_40%)]" />
          )}
        </React.Suspense>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 pointer-events-none" />

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <motion.h2 style={{ y: titleY, opacity: titleOpacity }} className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-3xl">
            Step inside. Surfaces come alive.
          </motion.h2>
          <motion.p style={{ y: titleY, opacity: titleOpacity }} className="mt-4 max-w-2xl text-white/80">
            Dynamic lighting, spatial audio and tactile panels respond to touch and motion. Create calming or energising scenes on demand.
          </motion.p>
          <motion.div style={{ opacity: titleOpacity }} className="mt-8 flex gap-4">
            <a href="#video" className="inline-flex items-center justify-center rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 transition-colors">Watch overview</a>
            <a href="#consult" className="inline-flex items-center justify-center rounded-full border border-white/30 hover:border-white/60 text-white font-semibold px-6 py-3 transition-colors">Start a brief</a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
