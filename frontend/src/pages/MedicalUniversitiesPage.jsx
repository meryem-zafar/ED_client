import React, { useState } from 'react'
import { Stethoscope, ShieldCheck, CheckCircle2, ArrowRight, Building2, MapPin, ExternalLink } from 'lucide-react'
import { UNIVERSITIES, COUNTRIES } from '../data/mockData'
import VerificationBadge from '../components/VerificationBadge'

export default function MedicalUniversitiesPage({ onNavigate, onSelectEntity }) {
  const medicalUniversities = UNIVERSITIES.filter(u => u.medicalFocus)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10 pb-16">
      
      {/* Header Banner */}
      <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-rose-500/30 bg-gradient-to-r from-slate-900 via-rose-950/20 to-slate-900 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-bold uppercase">
          <Stethoscope className="w-4 h-4 text-rose-400" />
          <span>Specialized Medical Directory</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
          Medical (MBBS / MD) Programs Abroad
        </h1>
        <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
          Comprehensive directory of English-medium Medical Universities in Central Asia (Kyrgyzstan, Uzbekistan, Kazakhstan) and Europe with verified WHO, WFME & PMC/PMDC listing parameters.
        </p>
      </div>

      {/* Licensing Authority Notice */}
      <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl space-y-3">
        <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
          <ShieldCheck className="w-5 h-5" />
          <span>Medical Degree Recognition Governance</span>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          All institutions listed below are indexed in the World Directory of Medical Schools (WDOMS). 
          Students must verify license eligibility rules (such as NLE in Pakistan, USMLE in USA, or PLAB in UK) with their national medical commission prior to enrollment.
        </p>
      </div>

      {/* Directory Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {medicalUniversities.map(uni => (
          <div key={uni.id} className="glass-card p-6 rounded-2xl space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img src={uni.logo} alt="" className="w-12 h-12 rounded-xl bg-slate-800 p-1 border border-slate-700 object-cover" />
                  <div>
                    <h3 className="text-base font-bold text-white">{uni.name}</h3>
                    <div className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-rose-400" />
                      <span>{uni.city}, {uni.countryName}</span>
                    </div>
                  </div>
                </div>
                <VerificationBadge lastVerified={uni.lastVerified} officialLink={uni.officialWebsite} compact />
              </div>

              <div className="grid grid-cols-3 gap-2 bg-slate-900/80 p-3 rounded-xl border border-slate-800 text-xs">
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase">Tuition Fee</span>
                  <span className="font-bold text-amber-300">{uni.tuitionFee}</span>
                </div>
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase">Hostel Fee</span>
                  <span className="font-semibold text-slate-200">{uni.hostelFee}</span>
                </div>
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase">Duration</span>
                  <span className="font-semibold text-emerald-400">{uni.duration}</span>
                </div>
              </div>

              <p className="text-xs text-slate-300 line-clamp-2">
                {uni.overview}
              </p>
            </div>

            <div className="flex justify-between items-center pt-3 border-t border-slate-800">
              <button
                onClick={() => onNavigate('apply')}
                className="text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 px-4 py-2 rounded-xl transition-all cursor-pointer"
              >
                Apply for MBBS
              </button>

              <button
                onClick={() => onSelectEntity('university', uni.id)}
                className="text-xs font-bold text-amber-400 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>View Full Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
