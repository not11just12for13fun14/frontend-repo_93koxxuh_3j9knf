import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-pink-300/40 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-indigo-300/40 blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-white to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900"
            >
              Nurturing curious minds with love, play, and purpose
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 text-lg text-slate-700"
            >
              A warm, vibrant space where children explore, grow, and build strong foundations for lifelong learning.
            </motion.p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#apply" className="inline-flex items-center rounded-full bg-indigo-600 text-white px-6 py-3 font-semibold shadow-lg hover:bg-indigo-500">Start Application</a>
              <a href="#programs" className="inline-flex items-center rounded-full bg-white text-slate-700 px-6 py-3 font-semibold shadow border">Explore Programs</a>
            </div>
            <div className="mt-6 text-sm text-slate-500">Open for Fall & Spring enrollments • Limited seats</div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIYXBweSUyMGtpZHMlMjBsZWFybmluZ3xlbnwwfDB8fHwxNzYzMzQzNTAzfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Happy kids learning" className="rounded-3xl shadow-2xl border border-slate-200" />
            <div className="absolute -bottom-4 -left-4 h-40 w-40 rounded-3xl bg-indigo-500/20 blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
