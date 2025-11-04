import React from 'react'

const certs = [
  '/CISSP-CERTIFICATE.jpg',
  '/Vishal_Naresh_Bhatt_Certificate.jpg',
  '/Certificate.jpg',
  '/ETHICAL HACKING FOR BEGINNERS.jpg',
  '/INTRO-CYBERCRIME.jpg',
  '/CORE-INFRIA STRUCTUR.jpg'
]

export default function Certifications(){
  return (
    <section id="certs" className="py-10">
      <div className="container">
        <h2 className="section-title text-2xl mb-6">Certifications & Training</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {certs.map((c, i) => (
            <div key={i} className="card p-3 flex items-center justify-center">
              <img src={c} alt={`cert-${i}`} className="max-h-40 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
