import React from 'react'
import Hero from './components/Hero'
import FeatureSections from './components/FeatureSections'
import VideoShowcase from './components/VideoShowcase'
import CTA from './components/CTA'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <FeatureSections />
      <VideoShowcase />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
