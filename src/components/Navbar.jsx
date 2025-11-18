import React from 'react'
import { Menu, School, Phone, Mail } from 'lucide-react'

const NavLink = ({ href, children }) => (
  <a href={href} className="px-4 py-2 text-slate-700 hover:text-indigo-600 transition-colors">
    {children}
  </a>
)

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-pink-500 text-white shadow-md">
            <School size={20} />
          </span>
          <span className="font-extrabold text-slate-900 tracking-tight">BrightSteps Academy</span>
        </a>

        <nav className="hidden md:flex items-center">
          <NavLink href="#programs">Programs</NavLink>
          <NavLink href="#why-us">Why Us</NavLink>
          <NavLink href="#testimonials">Families</NavLink>
          <NavLink href="#apply">Apply</NavLink>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+1234567890" className="inline-flex items-center gap-2 text-slate-700 hover:text-indigo-600">
            <Phone size={18} /> <span className="text-sm">(123) 456-7890</span>
          </a>
          <a href="mailto:hello@brightsteps.school" className="inline-flex items-center gap-2 text-slate-700 hover:text-indigo-600">
            <Mail size={18} /> <span className="text-sm">hello@brightsteps.school</span>
          </a>
          <a href="#apply" className="ml-2 inline-flex items-center rounded-full bg-indigo-600 text-white px-4 py-2 text-sm font-medium shadow hover:bg-indigo-500">
            Start Application
          </a>
        </div>

        <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700">
          <Menu />
        </button>
      </div>
    </header>
  )
}
