import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="py-10">
      <div className="container">
        <h2 className="section-title text-2xl mb-4">Contact</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="font-semibold mb-2">Let’s talk</h3>
            <p className="text-sm text-gray-700 mb-3">Email: veby009@gmail.com</p>
            <p className="text-sm text-gray-700 mb-3">Phone: +91 94282 19280</p>
            <a href="https://wa.me/919428219280" target="_blank" rel="noreferrer" className="btn-gold inline-block mt-2">WhatsApp</a>
          </div>

          <div className="card p-6">
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-sm text-gray-700">Anand, Gujarat — Available for Ahmedabad roles</p>
            <h4 className="mt-4 font-semibold">Resume</h4>
            <a href="/VISHAL_BHATT_Chief_Information_Security_Officer.pdf" className="text-maroon-700 hover:underline">Download PDF (ATS resume)</a>
          </div>
        </div>
      </div>
    </section>
  )
}
