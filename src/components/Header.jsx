import React from 'react'

export default function Header(){
  return (
    <header className="header-gradient text-white py-6 mb-8">
      <div className="container flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
            <img src="/logo192.png" alt="logo" className="w-8 h-8" />
          </div>
          <div>
            <div className="text-lg font-bold">Vishal Bhatt</div>
            <div className="text-sm opacity-90">Senior IT Manager • Cybersecurity & Digital Transformation</div>
          </div>
        </div>
        <nav className="flex items-center gap-4">
          <a href="#about" className="text-white hover:underline">About</a>
          <a href="#projects" className="text-white hover:underline">Projects</a>
          <a href="#certs" className="text-white hover:underline">Certifications</a>
          <a href="#contact" className="btn-gold">Contact</a>
        </nav>
      </div>
    </header>
  )
}
