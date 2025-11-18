import React from 'react'
import { Sparkles, Palette, BookOpen, Users } from 'lucide-react'

const ProgramCard = ({ icon: Icon, title, desc, color }) => (
  <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${color} text-white shadow`}> 
      <Icon size={22} />
    </div>
    <h3 className="mt-4 font-bold text-slate-900 text-lg">{title}</h3>
    <p className="mt-2 text-slate-600 text-sm">{desc}</p>
  </div>
)

export default function Programs() {
  return (
    <section id="programs" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">Our Programs</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Playful learning at every stage</h2>
          <p className="mt-3 text-slate-600">Each program is designed to spark curiosity, build confidence, and develop essential skills through purposeful play.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProgramCard icon={Sparkles} title="Nursery (2-3 yrs)" color="bg-pink-500" desc="Gentle introduction to group play, social skills, and sensory exploration." />
          <ProgramCard icon={Palette} title="Pre-K (3-4 yrs)" color="bg-indigo-500" desc="Creative projects, early literacy and numeracy woven into everyday fun." />
          <ProgramCard icon={BookOpen} title="Kindergarten (4-5 yrs)" color="bg-amber-500" desc="Readiness for primary school with phonics, problem-solving and teamwork." />
          <ProgramCard icon={Users} title="After-school Care" color="bg-emerald-500" desc="Flexible care with activities, homework help and outdoor play." />
        </div>
      </div>
    </section>
  )
}
