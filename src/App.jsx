import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import ApplicationForm from './components/ApplicationForm'

function App() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <WhyUs />
        <Testimonials />
        <ApplicationForm />
      </main>
      <footer className="border-t border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} BrightSteps Academy. All rights reserved.</p>
          <div className="text-sm text-slate-500">Designed with care for little learners.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
