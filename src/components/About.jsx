import React from 'react'

export default function About(){
  return (
    <section id="about" className="py-10">
      <div className="container">
        <h2 className="section-title text-2xl mb-4">About — Executive Summary</h2>
        <p className="text-gray-700 mb-4">
          Seasoned IT professional with exceptional leadership and project management skills. Well-organized, systematic and diplomatic in building consensus and spearheading cross-functional teams. Specialize in IT Infrastructure and Security planning and implementation. Results-focused Sr. IT Manager with 24 years of proven success.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="card p-4">
            <h3 className="font-semibold">Core Strengths</h3>
            <ul className="mt-2 text-sm text-gray-600">
              <li>Information Security & Governance</li>
              <li>Cloud (GCP/Azure) & CI/CD</li>
              <li>Disaster Recovery & Business Continuity</li>
            </ul>
          </div>

          <div className="card p-4">
            <h3 className="font-semibold">Leadership</h3>
            <ul className="mt-2 text-sm text-gray-600">
              <li>Managed cross-site teams (45–50 people)</li>
              <li>Vendor & budget control</li>
              <li>Staff training & hiring</li>
            </ul>
          </div>

          <div className="card p-4">
            <h3 className="font-semibold">Tools & Technologies</h3>
            <ul className="mt-2 text-sm text-gray-600">
              <li>VMware, VDI, Thin clients</li>
              <li>Networking & Security stacks</li>
              <li>Azure DevOps, Terraform basics</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
