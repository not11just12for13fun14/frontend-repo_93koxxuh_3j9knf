import React from 'react'

const testimonials = [
  {
    quote: "Our daughter bloomed here. The teachers are so caring and creative!",
    name: "Amelia R.",
    role: "Nursery Parent"
  },
  {
    quote: "A beautiful community. My son can’t wait to go every morning.",
    name: "Jason M.",
    role: "Pre-K Parent"
  },
  {
    quote: "The kindergarten program prepared our child wonderfully for first grade.",
    name: "Priya S.",
    role: "Kindergarten Parent"
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-medium">From our families</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Love notes from parents</h2>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
              <p className="text-slate-700">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-slate-500">— {t.name}, {t.role}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
