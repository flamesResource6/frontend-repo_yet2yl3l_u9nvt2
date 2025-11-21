import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import Sections from './components/Sections'

function App() {
  const [open, setOpen] = useState(false)
  return (
    <div className="bg-[#F7F3EC] text-[#38332F] min-h-screen">
      <Navbar onOpenMenu={() => setOpen(true)} />
      <Sidebar open={open} onClose={() => setOpen(false)} />

      {/* Offset for navbar */}
      <div className="pt-20" />

      <Hero />
      <Sections />
    </div>
  )
}

export default App
