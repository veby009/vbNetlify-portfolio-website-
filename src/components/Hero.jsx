import React from 'react'

export default function Hero(){
  return (
    <section className="py-12">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold section-title mb-4">Vishal Bhatt</h1>
          <p className="text-lg mb-4">Senior IT Manager • 24+ years in IT Infrastructure, Security & Digital Transformation. Proven leadership in Cloud, VDI, DR, and governance. Seeking senior executive (CIO/CISO track) roles.</p>
          <div className="flex gap-3">
            <a href="/VISHAL_BHATT_Chief_Information_Security_Officer.pdf" className="btn-gold">Download Resume (PDF)</a>
            <a href="#contact" className="border border-maroon-600 px-4 py-2 rounded-md text-maroon-700">Hire Me</a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="card p-6 flex items-center gap-4">
            <img src="/Vishal1.jpeg" alt="Vishal" className="w-36 h-36 object-cover rounded-full" />
            <div>
              <div className="text-lg font-semibold">Vishal Bhatt</div>
              <div className="text-sm text-gray-600">Senior IT Manager — Arman Financial Services</div>
              <div className="text-sm mt-2">Ahmedabad, India • +91 94282 19280</div>
              <div className="mt-2">
                <a className="text-sm text-blue-600" href="https://www.linkedin.com/in/vishal-bhatt-b0306718/" target="_blank" rel="noreferrer">LinkedIn</a>
                <span className="mx-2">|</span>
                <a className="text-sm text-gray-600" href="https://github.com/veby009" target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
