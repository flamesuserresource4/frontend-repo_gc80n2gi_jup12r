import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white/70">
      <div className="container mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} The Senso Cube™</p>
        <nav className="flex gap-6 text-white/70">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#video" className="hover:text-white">Video</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
          <a href="#consult" className="hover:text-white">Consultation</a>
        </nav>
      </div>
    </footer>
  )
}
