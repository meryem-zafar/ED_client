import React from 'react'
import { FileText, ShieldCheck, CheckCircle2, Globe, Clock, ExternalLink } from 'lucide-react'
import { COUNTRIES } from '../data/mockData'
import VerificationBadge from '../components/VerificationBadge'

export default function VisaInfoPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10 pb-16">
      
      <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-slate-900 via-cyan-950/20 to-slate-900 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-bold uppercase">
          <FileText className="w-4 h-4 text-cyan-400" />
          <span>Student Visa Guidance</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
          Destination Student Visa Rules & Process
        </h1>
        <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
          Step-by-step visa invitations, embassy processing procedures, and mandatory document checklists for Kyrgyzstan, Uzbekistan, Germany, UK, and Europe.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {COUNTRIES.map(country => (
          <div key={country.id} className="glass-card p-6 rounded-2xl space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                {country.flagSvg ? (
                  <img src={country.flagSvg} alt="" className="w-7 h-5 object-cover rounded-[3px] shadow-xs" />
                ) : (
                  <span className="text-2xl">{country.flag}</span>
                )}
                <h3 className="text-lg font-bold text-white">{country.name} Student Visa</h3>
              </div>
              <VerificationBadge lastVerified={country.lastVerified} officialLink={country.sourceLink} compact />
            </div>

            <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/80 p-3 rounded-xl border border-slate-800">
              {country.visaGuidance}
            </p>

            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Required Document Checklist</h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {country.requirements.map((req, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
