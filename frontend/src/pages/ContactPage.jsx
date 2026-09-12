import React, { useState } from 'react'
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageCircle } from 'lucide-react'
import { BRAND_INFO } from '../data/mockData'
import { submitInquiry } from '../lib/supabase'
import PageHero from '../components/PageHero'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    const res = await submitInquiry(formData)
    if (res.success) {
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12 pb-16">
      
      <PageHero image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=85" eyebrow="We are here to help" title="Contact ED-WISE CONSULTANCY" description="Get in touch with our Bishkek head office or regional Pakistani counseling team for admissions, visas and fee verification." />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Contact Form */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
          <h2 className="text-xl font-bold text-white">Send Us an Inquiry</h2>

          {status === 'success' && (
            <div className="p-4 rounded-xl bg-emerald-950 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span>Thank you! Your inquiry has been logged. Our Bishkek team will contact you shortly.</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block text-slate-400 mb-1 font-semibold">Full Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your full name"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-amber-400"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-400 mb-1 font-semibold">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@domain.com"
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-1 font-semibold">Phone / WhatsApp Number</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+92 300 1234567"
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-400 mb-1 font-semibold">Subject / Country of Interest</label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="e.g. Kyrgyzstan MBBS / Bishkek Hostel Query"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-slate-400 mb-1 font-semibold">Your Message</label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Details about your academic qualifications, CGPA/FSc marks, and target intake date..."
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-amber-400"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg cursor-pointer transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>{status === 'submitting' ? 'Submitting Inquiry...' : 'Submit Inquiry'}</span>
            </button>
          </form>
        </div>

        {/* Office Details & Interactive Map Simulation */}
        <div className="space-y-6">
          <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-4">
            <h3 className="text-xl font-bold text-white">Head Office Details</h3>
            
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Location:</span> Bishkek city, Kyrgyzstan
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-white">Bishkek Phone:</span> {BRAND_INFO.phones[0]}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-white">Pakistan Phone:</span> {BRAND_INFO.phones[1]}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-white">Email:</span> {BRAND_INFO.email}
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/${BRAND_INFO.whatsapp}?text=${encodeURIComponent('Hello ED-WISE CONSULTANCY, I am inquiring from the website contact page.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-2 transition-all block text-center"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Instant Chat on WhatsApp</span>
            </a>
          </div>

          {/* Map Simulation */}
          <div className="rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 h-64 relative flex items-center justify-center">
            <img src="https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=800&q=80" alt="" className="w-full h-full object-cover opacity-50" />
            <div className="absolute inset-0 bg-slate-950/60" />
            <div className="relative z-10 text-center space-y-2 p-4">
              <MapPin className="w-8 h-8 text-amber-400 mx-auto animate-bounce" />
              <h4 className="text-base font-bold text-white">ED-WISE CONSULTANCY HQ</h4>
              <p className="text-xs text-slate-300">Bishkek City, Kyrgyzstan</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}
