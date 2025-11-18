import React, { useState } from 'react'

const initialState = {
  child_name: '',
  dob: '',
  gender: '',
  program: 'Nursery',
  start_term: 'Fall',
  parent_name: '',
  email: '',
  phone: '',
  address: '',
  message: '',
  consent: false,
}

export default function ApplicationForm() {
  const [form, setForm] = useState(initialState)
  const [status, setStatus] = useState({ type: 'idle', message: '' })

  const backend = import.meta.env.VITE_BACKEND_URL || ''

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ type: 'loading', message: 'Submitting application...' })
    try {
      const res = await fetch(`${backend}/api/applications`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error(await res.text())
      setStatus({ type: 'success', message: 'Thank you! Your application has been submitted.' })
      setForm(initialState)
    } catch (err) {
      setStatus({ type: 'error', message: 'Submission failed. Please check required fields and try again.' })
    }
  }

  return (
    <section id="apply" className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="inline-flex px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">Apply Now</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">Online Application</h2>
          <p className="mt-2 text-slate-600">Fill out the form and we’ll reach out with next steps.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-2xl shadow p-6 grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Child's Full Name</label>
              <input name="child_name" value={form.child_name} onChange={handleChange} required className="mt-1 w-full rounded-xl border-slate-300 focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Date of Birth</label>
              <input type="date" name="dob" value={form.dob} onChange={handleChange} required className="mt-1 w-full rounded-xl border-slate-300 focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Gender</label>
              <select name="gender" value={form.gender} onChange={handleChange} className="mt-1 w-full rounded-xl border-slate-300 focus:border-indigo-500 focus:ring-indigo-500">
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Non-binary</option>
                <option>Prefer not to say</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Program</label>
              <select name="program" value={form.program} onChange={handleChange} required className="mt-1 w-full rounded-xl border-slate-300 focus:border-indigo-500 focus:ring-indigo-500">
                <option>Nursery</option>
                <option>Pre-K</option>
                <option>Kindergarten</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Start Term</label>
              <select name="start_term" value={form.start_term} onChange={handleChange} required className="mt-1 w-full rounded-xl border-slate-300 focus:border-indigo-500 focus:ring-indigo-500">
                <option>Fall</option>
                <option>Winter</option>
                <option>Spring</option>
                <option>Summer</option>
              </select>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Parent/Guardian Name</label>
              <input name="parent_name" value={form.parent_name} onChange={handleChange} required className="mt-1 w-full rounded-xl border-slate-300 focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-1 w-full rounded-xl border-slate-300 focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Phone</label>
              <input name="phone" value={form.phone} onChange={handleChange} required className="mt-1 w-full rounded-xl border-slate-300 focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Address</label>
              <input name="address" value={form.address} onChange={handleChange} className="mt-1 w-full rounded-xl border-slate-300 focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">Additional Notes</label>
            <textarea name="message" value={form.message} onChange={handleChange} rows={4} className="mt-1 w-full rounded-xl border-slate-300 focus:border-indigo-500 focus:ring-indigo-500"></textarea>
          </div>

          <label className="flex items-start gap-3 text-slate-700 text-sm">
            <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} required className="mt-1 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
            I consent to the school storing my information for the purposes of admissions.
          </label>

          <div className="flex items-center gap-3">
            <button disabled={status.type==='loading'} className="inline-flex items-center rounded-full bg-indigo-600 text-white px-6 py-3 font-semibold shadow hover:bg-indigo-500 disabled:opacity-60">Submit Application</button>
            {status.type !== 'idle' && (
              <span className={`text-sm ${status.type==='success' ? 'text-emerald-600' : status.type==='error' ? 'text-rose-600' : 'text-slate-600'}`}>{status.message}</span>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
