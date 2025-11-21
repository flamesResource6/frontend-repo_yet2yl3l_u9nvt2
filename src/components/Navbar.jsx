import React from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar({ onOpenMenu }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/10 text-[#38332F] hover:bg-black/20 transition"
            aria-label="Open menu"
            onClick={onOpenMenu}
          >
            <Menu size={20} />
          </button>
          <div className="flex items-baseline gap-2">
            <span className="font-cinzel-decorative text-2xl tracking-wide text-[#38332F]">Lumina</span>
            <span className="font-cinzel text-sm uppercase text-[#38332F]/70 tracking-[0.3em]">Hotel</span>
          </div>
        </div>

        {/* Center nav */}
        <nav className="hidden md:flex items-center gap-8 text-[#38332F]">
          <a href="#suites" className="hover:opacity-70 transition font-cinzel">Suites</a>
          <a href="#dining" className="hover:opacity-70 transition font-cinzel">Dining</a>
          <a href="#spa" className="hover:opacity-70 transition font-cinzel">Spa</a>
          <a href="#gallery" className="hover:opacity-70 transition font-cinzel">Gallery</a>
          <a href="#location" className="hover:opacity-70 transition font-cinzel">Location</a>
        </nav>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="text-[#38332F] font-cormorant underline underline-offset-4 decoration-[#38332F]/30 hover:decoration-[#38332F] transition">Contact</a>
          <a
            href="#book"
            className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#38332F] text-white font-cinzel tracking-wide hover:bg-[#2f2b27] transition shadow-sm"
          >
            Book Now
          </a>
        </div>

        {/* Mobile CTA placeholder for alignment */}
        <div className="md:hidden w-10" />
      </div>
    </header>
  )
}
