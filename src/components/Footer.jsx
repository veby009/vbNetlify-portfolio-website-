import React from 'react'

export default function Footer(){
  return (
    <footer className="py-6 mt-10 border-t">
      <div className="container text-center text-sm">
        <div>© {new Date().getFullYear()} Vishal Bhatt — Senior IT Manager</div>
        <div className="mt-2">Powered by Dharma & Digital — Vastu-friendly layout</div>
      </div>
    </footer>
  )
}
