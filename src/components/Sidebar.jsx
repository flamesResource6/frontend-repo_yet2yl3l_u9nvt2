import React from 'react'
import { X, Instagram, Phone, MapPin } from 'lucide-react'

export default function Sidebar({ open, onClose }) {
  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`}>
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/30 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />

      {/* Panel */}
      <aside
        className={`absolute top-0 left-0 h-full w-[82%] max-w-sm bg-[#F7F3EC] shadow-xl border-r border-black/5
        transition-transform duration-500 ease-[cubic-bezier(.22,.61,.36,1)] ${open ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-6 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-cinzel-decorative text-2xl tracking-wide text-[#38332F]">Lumina</span>
            <span className="font-cinzel text-sm uppercase text-[#38332F]/70 tracking-[0.3em]">Hotel</span>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-black/10 text-[#38332F] hover:bg-black/20 grid place-items-center"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="px-6 py-2 space-y-3">
          {[
            ['Suites', '#suites'],
            ['Dining', '#dining'],
            ['Spa', '#spa'],
            ['Gallery', '#gallery'],
            ['Location', '#location'],
            ['Contact', '#contact'],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={onClose}
              className="block text-xl py-3 border-b border-black/5 text-[#38332F] font-cinzel hover:opacity-70"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="px-6 py-6 space-y-3 text-[#38332F]">
          <div className="flex items-center gap-3">
            <Phone size={18} />
            <span className="font-cormorant">+1 (212) 555-0189</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={18} />
            <span className="font-cormorant">21 Ocean Drive, Bali</span>
          </div>
          <a href="#" className="inline-flex items-center gap-2 underline underline-offset-4 decoration-[#38332F]/30 hover:decoration-[#38332F]">
            <Instagram size={18} />
            <span className="font-cormorant">Follow on Instagram</span>
          </a>
        </div>

        <div className="px-6 py-6">
          <a
            href="#book"
            className="w-full inline-flex items-center justify-center px-5 py-3 rounded-full bg-[#38332F] text-white font-cinzel tracking-wide hover:bg-[#2f2b27] transition shadow-sm"
          >
            Book Now
          </a>
        </div>
      </aside>
    </div>
  )
}
