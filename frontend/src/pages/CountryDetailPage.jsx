import React from 'react'
import { MapPin, CheckCircle2, ShieldCheck, ArrowRight, ArrowLeft, ExternalLink, Building2 } from 'lucide-react'
import { COUNTRIES, UNIVERSITIES } from '../data/mockData'
import VerificationBadge from '../components/VerificationBadge'

export default function CountryDetailPage({ countryId, onNavigate, onSelectEntity, onBack }) {
  const country = COUNTRIES.find(c => c.id === countryId) || COUNTRIES[0]
  const countryUniversities = UNIVERSITIES.filter(u => u.countryId === country.id)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10 pb-16">
      
      <button 
        onClick={onBack || (() => onNavigate('countries'))}
        className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors cursor-pointer bg-slate-900 px-3.5 py-2 rounded-xl border border-slate-800"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Destinations</span>
      </button>

      {/* Hero Banner */}
      <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
        <div className="h-80 sm:h-96 relative">
          <img src={country.heroImage} alt={country.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
          
          <div className="absolute top-6 left-6 flex items-center gap-3">
            {country.flagSvg ? (
              <img src={country.flagSvg} alt="" className="w-10 h-7 object-cover rounded shadow-md ring-1 ring-white/20" />
            ) : (
              <span className="text-3xl">{country.flag}</span>
            )}
            <span className="bg-slate-900/80 text-amber-400 border border-slate-700 text-xs font-bold px-3 py-1 rounded-full uppercase">
              {country.region}
            </span>
          </div>

          <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
                Study in {country.name}
              </h1>
              <p className="text-sm text-slate-200">
                {country.tagline}
              </p>
            </div>
            <VerificationBadge lastVerified={country.lastVerified} officialLink={country.sourceLink} />
          </div>
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-2 space-y-8">
          <div className="glass-panel p-6 rounded-2xl space-y-4">
            <h2 className="text-xl font-bold text-white">Country Overview</h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {country.overview}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">Why Study in {country.name}?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {country.whyStudy.map((reason, i) => (
                <div key={i} className="glass-card p-4 rounded-xl flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-200">{reason}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl space-y-4">
            <h2 className="text-xl font-bold text-white">Admission Requirements</h2>
            <ul className="space-y-2 text-xs text-slate-300">
              {country.requirements.map((req, i) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4 sticky top-24">
            <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-3">Key Information</h3>
            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">Capital City:</span>
                <span className="font-semibold text-white">{country.capital}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">Tuition Range:</span>
                <span className="font-bold text-amber-400">{country.tuitionRange}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">Living Cost:</span>
                <span className="font-semibold text-slate-200">{country.livingCostMonthly}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">Part-Time Work:</span>
                <span className="font-semibold text-emerald-400">{country.partTimeWork}</span>
              </div>
            </div>

            <button
              onClick={() => onNavigate('apply')}
              className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold py-3.5 rounded-xl text-xs uppercase cursor-pointer"
            >
              Apply for {country.name} 2026
            </button>
          </div>
        </div>

      </div>

    </div>
  )
}
