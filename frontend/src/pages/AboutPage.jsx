import React from 'react'
import { BRAND_INFO } from '../data/mockData'
import { MapPin, Phone, Mail, Award, CheckCircle2, ShieldCheck, Users } from 'lucide-react'
import Logo from '../components/Logo'
import PageHero from '../components/PageHero'

export default function AboutPage({ onNavigate }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12 pb-16">
      
      <PageHero image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1800&q=85" eyebrow="Your trusted education partner" title="About ED-WISE CONSULTANCY" description={`${BRAND_INFO.subtitle}. Dedicated to empowering international students through verified education data and direct university placements.`} />

      {/* Mission & Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 rounded-2xl space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">Factual Integrity</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            We do not invent university fees, rankings, or visa rules. Every institutional profile links directly to official government and university websites.
          </p>
        </div>

        <div className="glass-card p-6 rounded-2xl space-y-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
            <MapPin className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">Bishkek Headquarters</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Headquartered in Bishkek, Kyrgyzstan, our team provides on-ground support, airport reception, hostel allotment, and university enrollment assistance.
          </p>
        </div>

        <div className="glass-card p-6 rounded-2xl space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
            <Users className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">Leadership Excellence</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Led by **CEO {BRAND_INFO.ceo}**, our consultancy has placed over 3,500 students in premier medical and engineering faculties across Central Asia & Europe.
          </p>
        </div>
      </div>

      {/* Executive Contact Card */}
      <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-6">
        <h2 className="text-2xl font-bold text-white">Official Business Reference & Contact Card</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-300">
          <div className="space-y-2">
            <div className="font-bold text-amber-400 text-sm">ED-WISE CONSULTANCY</div>
            <div>CEO: <span className="text-white font-semibold">{BRAND_INFO.ceo}</span></div>
            <div>Headquarters: <span className="text-white font-semibold">{BRAND_INFO.headquarters}</span></div>
            <div>Email: <span className="text-white font-semibold">{BRAND_INFO.email}</span></div>
          </div>
          <div className="space-y-2">
            <div>Bishkek Phone: <span className="text-amber-300 font-semibold">{BRAND_INFO.phones[0]}</span></div>
            <div>Pakistan Helpline: <span className="text-cyan-300 font-semibold">{BRAND_INFO.phones[1]}</span></div>
            <div>WhatsApp Direct: <span className="text-emerald-400 font-semibold">+{BRAND_INFO.whatsapp}</span></div>
            <div>Operating Hours: {BRAND_INFO.operatingHours}</div>
          </div>
        </div>
      </div>

    </div>
  )
}
