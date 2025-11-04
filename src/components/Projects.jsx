import React from 'react'

const sampleProjects = [
  {
    title: 'Disaster Recovery Design — Arman Financial',
    period: '2023 - Current',
    bullets: ['Designed DR plan to reduce RTO by 60%','Implemented secure remote access & monitoring']
  },
  {
    title: 'Cloud Migration Proof-of-Concept',
    period: '2022',
    bullets: ['GCP PoC for microservices','Cost optimization & infra automation']
  }
]

export default function Projects(){
  return (
    <section id="projects" className="py-10">
      <div className="container">
        <h2 className="section-title text-2xl mb-6">Key Projects & Impact</h2>
        <div className="grid gap-4">
          {sampleProjects.map((p, idx) => (
            <article key={idx} className="card p-4">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">{p.title}</h3>
                <div className="text-sm text-gray-500">{p.period}</div>
              </div>
              <ul className="mt-2 text-sm text-gray-700">
                {p.bullets.map((b,i)=> <li key={i}>• {b}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
