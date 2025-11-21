import React from 'react'
import { motion } from 'framer-motion'

export default function Sections() {
  return (
    <div className="bg-[#F7F3EC] text-[#38332F]">
      {/* Intro section */}
      <section id="discover" className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-cinzel text-3xl md:text-4xl mb-4">Where Elegance Meets Tranquility</h2>
            <p className="font-cormorant text-lg leading-relaxed opacity-80">
              Experience unparalleled comfort in our meticulously designed suites, savor world-class dining, and rejuvenate at our serene spa — all nestled in an unforgettable destination.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[1,2,3,4,5,6].map(i => (
              <img key={i} className={`rounded-lg object-cover h-28 md:h-36 w-full ${i%2? 'mt-6': ''}`} src={`https://images.unsplash.com/photo-15${80+i}6956-000000000000?q=80&w=800&auto=format&fit=crop`} alt="preview" />
            ))}
          </div>
        </div>
      </section>

      {/* Diagonal gallery */}
      <section id="gallery" className="overflow-hidden py-20 relative">
        <h3 className="font-cinzel text-center text-2xl md:text-3xl mb-10">Gallery</h3>
        <div className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            initial={{ x: '-10%', y: 0 }}
            whileInView={{ x: '10%', y: -60 }}
            transition={{ duration: 14, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
            className="flex gap-6 rotate-[-6deg]"
          >
            {[
              'photo-1501117716987-c8e3f9c34a06',
              'photo-1512917774080-9991f1c4c750',
              'photo-1501117716987-c8e3f9c34a06',
              'photo-1505691723518-36a5ac3b2b8b',
              'photo-1551776235-dde6d4829808',
              'photo-1542314831-068cd1dbfeeb'
            ].map((id, i) => (
              <img
                key={i}
                src={`https://images.unsplash.com/${id}?q=80&w=1200&auto=format&fit=crop`}
                alt="gallery"
                className="h-56 md:h-72 w-auto rounded-xl object-cover shadow-md"
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Amenities */}
      <section id="suites" className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-10">
        {[
          ['Ocean Suites', 'Wake up to a horizon painted in gold and azure.'],
          ['Private Dining', 'Cuisine crafted with seasonal ingredients and local flair.'],
          ['Holistic Spa', 'Ancient rituals meet modern wellness in our signature treatments.'],
        ].map(([title, desc]) => (
          <div key={title} className="p-8 rounded-2xl bg-white/60 border border-black/5 shadow-sm">
            <h4 className="font-cinzel text-2xl mb-2">{title}</h4>
            <p className="font-cormorant opacity-80">{desc}</p>
          </div>
        ))}
      </section>

      {/* Location/Contact */}
      <section id="location" className="max-w-7xl mx-auto px-6 pb-24">
        <div className="rounded-2xl overflow-hidden border border-black/5">
          <iframe
            title="map"
            className="w-full h-80 grayscale"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31565.708895173782!2d115.147!3d-8.650!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2474083a5c7e3%3A0x3030bfbcaf77260!2sSeminyak%2C%20Kuta%2C%20Badung%20Regency%2C%20Bali%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1700000000000"
            loading="lazy"
          />
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-black/5 py-10 text-center">
        <p className="font-cormorant">© {new Date().getFullYear()} Lumina Hotel. All rights reserved.</p>
      </footer>
    </div>
  )
}
