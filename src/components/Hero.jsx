import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  // Parallax scale and fade for background image
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3])
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.3, 0])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4, 0.8], [1, 0.6, 0])
  const y = useTransform(scrollYProgress, [0, 1], [0, 80])

  return (
    <section ref={ref} className="relative h-[110vh] min-h-[720px] w-full overflow-hidden">
      {/* Background image */}
      <motion.div style={{ scale, opacity }} className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519822471223-3a5b0540f63c?q=80&w=2000&auto=format&fit=crop"
          alt="Luxurious hotel by the ocean"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity: contentOpacity, y }} className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="mb-6">
          <div className="flex items-baseline gap-3 justify-center">
            <span className="font-cinzel-decorative text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-2xl">Lumina</span>
            <span className="font-cinzel text-white/90 tracking-[0.3em] text-xs md:text-sm uppercase">Hotel</span>
          </div>
        </div>

        <p className="max-w-3xl text-white/90 font-cormorant text-2xl md:text-3xl leading-relaxed mb-10">
          A sanctuary where time slows and every detail whispers luxury.
        </p>

        <div className="flex items-center gap-4">
          <a href="#book" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/90 text-[#38332F] font-cinzel tracking-wide hover:bg-white transition shadow-lg">
            Book Now
          </a>
          <a href="#discover" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-black/20 text-white font-cinzel tracking-wide hover:bg-black/30 transition border border-white/20">
            Discover More
          </a>
        </div>
      </motion.div>

      {/* Bottom fade to creamy background for seamless transition */}
      <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-b from-transparent to-[#F7F3EC]" />
    </section>
  )
}
