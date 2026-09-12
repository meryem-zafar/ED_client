import React, { useState } from 'react'
import { Send, CheckCircle2, ShieldCheck, User, Mail, Phone, Calendar, Globe, MapPin } from 'lucide-react'
import { submitApplication } from '../lib/supabase'
import PageHero from '../components/PageHero'

export default function ApplyNowPage({ onNavigate }) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    nationality: '',
    address: '',
    targetCountry: 'kyrgyzstan',
    targetUniversity: 'Kyrgyz State Medical Academy (KSMU)',
    program: 'Medicine (MBBS / MD)'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submittedApp, setSubmittedApp] = useState(null)
  const stepTitles = ['Personal Information', 'Academic Background', 'University Preferences', 'Documents & Review']

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    const res = await submitApplication(formData)
    setIsSubmitting(false)
    if (res.success) {
      setSubmittedApp(res.data)
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8 pb-16 text-white">
      
      <PageHero image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1800&q=85" eyebrow="Your next chapter starts here" title="Apply Now" description="Take the first step towards your global future with guided university admission support." compact />

      {/* Step Indicators matching Screen 8 */}
      <div className="flex items-center justify-between bg-[#1C2541] p-3 rounded-2xl border border-slate-800 text-xs font-bold">
        {[
          { step: 1, label: '1. Personal' },
          { step: 2, label: '2. Academic' },
          { step: 3, label: '3. University' },
          { step: 4, label: '4. Documents' }
        ].map(item => (
          <button
            key={item.step}
            onClick={() => setCurrentStep(item.step)}
            className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
              currentStep === item.step ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {submittedApp ? (
        <div className="application-success bg-[#1C2541] p-8 sm:p-12 rounded-3xl border border-emerald-500/40 text-center space-y-6">
          <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto" />
          <h2 className="text-2xl font-extrabold text-white">Application Submitted!</h2>
          <p className="text-xs text-slate-300">Reference ID: {submittedApp.id}</p>
          <button onClick={() => onNavigate('home')} className="bg-blue-600 text-white font-bold px-6 py-3 rounded-full text-xs uppercase">
            Return to Home
          </button>
        </div>
      ) : (
        /* Form View matching Screen 8 fields */
        <form key={currentStep} onSubmit={handleSubmit} className="application-form bg-[#1C2541] p-6 sm:p-10 rounded-3xl border border-slate-800 space-y-6 text-xs">
          
          <h2 className="text-base font-extrabold text-white border-b border-slate-800 pb-3">
            {stepTitles[currentStep - 1]}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-400 mb-1 font-semibold">Full Name *</label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="Enter your full name"
                className="w-full bg-[#0B132B] border border-slate-700 rounded-2xl px-3.5 py-2.5 text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-slate-400 mb-1 font-semibold">Email *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="you@example.com"
                className="w-full bg-[#0B132B] border border-slate-700 rounded-2xl px-3.5 py-2.5 text-white focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-slate-400 mb-1 font-semibold">Phone *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+92 300 1234567"
                className="w-full bg-[#0B132B] border border-slate-700 rounded-2xl px-3.5 py-2.5 text-white"
              />
            </div>

            <div>
              <label className="block text-slate-400 mb-1 font-semibold">Date of Birth</label>
              <input
                type="date"
                value={formData.dob}
                onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                className="w-full bg-[#0B132B] border border-slate-700 rounded-2xl px-3.5 py-2.5 text-white"
              />
            </div>

            <div>
              <label className="block text-slate-400 mb-1 font-semibold">Gender</label>
              <select
                value={formData.gender}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                className="w-full bg-[#0B132B] border border-slate-700 rounded-2xl px-3.5 py-2.5 text-white cursor-pointer"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-400 mb-1 font-semibold">Nationality</label>
              <input
                type="text"
                value={formData.nationality}
                onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
                placeholder="Select Nationality"
                className="w-full bg-[#0B132B] border border-slate-700 rounded-2xl px-3.5 py-2.5 text-white"
              />
            </div>

            <div>
              <label className="block text-slate-400 mb-1 font-semibold">Address</label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder="Enter your address"
                className="w-full bg-[#0B132B] border border-slate-700 rounded-2xl px-3.5 py-2.5 text-white"
              />
            </div>
          </div>

          {/* Action Buttons matching Screen 8 */}
          <div className="flex items-center gap-4 pt-4">
            <button
              type={currentStep === 4 ? 'submit' : 'button'}
              onClick={() => currentStep < 4 && setCurrentStep(currentStep + 1)}
              disabled={isSubmitting}
              className="bg-blue-600 hover:bg-blue-500 text-white font-extrabold px-8 py-3 rounded-full text-xs uppercase shadow-lg shadow-blue-600/30 cursor-pointer"
            >
              {currentStep === 4 ? (isSubmitting ? 'Saving...' : 'Submit Application') : 'Continue'}
            </button>

            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="bg-[#0B132B] hover:bg-slate-800 text-slate-300 border border-slate-700 font-bold px-6 py-3 rounded-full text-xs cursor-pointer"
            >
              Cancel
            </button>
          </div>

          <div className="text-[11px] text-slate-400 flex items-center gap-1.5 pt-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Your information is safe and secure with us.</span>
          </div>
        </form>
      )}

    </div>
  )
}
