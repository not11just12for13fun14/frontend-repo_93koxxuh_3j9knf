import React from 'react'
import { ShieldCheck, Smile, Trees, HeartHandshake } from 'lucide-react'

const Feature = ({ icon: Icon, title, desc }) => (
  <div className="flex gap-4">
    <div className="mt-1 h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 inline-flex items-center justify-center">
      <Icon size={20} />
    </div>
    <div>
      <h4 className="font-semibold text-slate-900">{title}</h4>
      <p className="text-slate-600 text-sm mt-1">{desc}</p>
    </div>
  </div>
)

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">A place where children feel safe, seen and celebrated</h2>
            <p className="mt-4 text-slate-600">We believe in small class sizes, experienced educators, and a warm, inclusive environment that supports each child's unique journey.</p>
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <Feature icon={ShieldCheck} title="Safety First" desc="Secure campus, trained staff, and rigorous health & safety protocols." />
              <Feature icon={Smile} title="Happy Hearts" desc="Social-emotional learning weaves into daily routines and play." />
              <Feature icon={Trees} title="Nature Play" desc="Outdoor learning in our garden and natural play spaces." />
              <Feature icon={HeartHandshake} title="Family Partner" desc="Open communication and regular updates through our parent app." />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img className="rounded-3xl shadow-2xl border border-slate-200" src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1600&auto=format&fit=crop" alt="Classroom" />
          </div>
        </div>
      </div>
    </section>
  )
}
