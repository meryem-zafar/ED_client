import React, { useState } from 'react'
import { Building2, Search, Filter, MapPin, Stethoscope, ArrowRight } from 'lucide-react'
import { UNIVERSITIES, COUNTRIES } from '../data/mockData'
import VerificationBadge from '../components/VerificationBadge'

export default function UniversitiesPage({ onNavigate, onSelectEntity, initialCountryFilter = '' }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCountry, setSelectedCountry] = useState(initialCountryFilter)
  const [medicalOnly, setMedicalOnly] = useState(false)

  const filteredUniversities = UNIVERSITIES.filter(uni => {
    const matchesSearch = uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          uni.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          uni.countryName.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesCountry = !selectedCountry || uni.countryId === selectedCountry
    const matchesMedical = !medicalOnly || uni.medicalFocus === true

    return matchesSearch && matchesCountry && matchesMedical
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8 pb-16">
      
      {/* Header */}
      <div className="space-y-3 text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          International University Directory
        </h1>
        <p className="text-sm text-slate-400 max-w-2xl">
          Search verified profiles of top medical academies and global universities with official website links and fee disclosures.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          
          {/* Text Search */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search university name, city..."
              className="w-full bg-slate-900 border border-slate-700/80 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-400"
            />
          </div>

          {/* Country Filter */}
          <div>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400 cursor-pointer"
            >
              <option value="">All Countries ({COUNTRIES.length})</option>
              {COUNTRIES.map(c => (
                <option key={c.id} value={c.id}>{c.flag} {c.name}</option>
              ))}
            </select>
          </div>

          {/* Medical Only Checkbox Toggle */}
          <div className="flex items-center gap-2 bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-2 cursor-pointer" onClick={() => setMedicalOnly(!medicalOnly)}>
            <input
              type="checkbox"
              checked={medicalOnly}
              onChange={(e) => setMedicalOnly(e.target.checked)}
              className="rounded text-amber-500 focus:ring-0 cursor-pointer"
            />
            <span className="text-xs text-slate-200 font-semibold select-none flex items-center gap-1.5">
              <Stethoscope className="w-3.5 h-3.5 text-rose-400" />
              <span>Medical / MBBS Institutions Only</span>
            </span>
          </div>

        </div>
      </div>

      {/* Grid Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredUniversities.map(uni => (
          <div
            key={uni.id}
            onClick={() => onSelectEntity('university', uni.id)}
            className="glass-card p-6 rounded-2xl cursor-pointer group space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 overflow-hidden flex-shrink-0 p-1">
                    <img src={uni.logo} alt="" className="w-full h-full object-cover rounded-lg" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">{uni.name}</h3>
                    <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-rose-400" />
                      <span>{uni.city}, {uni.countryName}</span>
                    </div>
                  </div>
                </div>
                <VerificationBadge lastVerified={uni.lastVerified} officialLink={uni.officialWebsite} compact />
              </div>

              <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                {uni.overview}
              </p>

              <div className="grid grid-cols-3 gap-2 bg-slate-900/60 p-3 rounded-xl border border-slate-800 text-xs">
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase">Tuition Fee</span>
                  <span className="font-bold text-amber-300">{uni.tuitionFee}</span>
                </div>
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase">Hostel Fee</span>
                  <span className="font-semibold text-slate-200">{uni.hostelFee}</span>
                </div>
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase">Ranking</span>
                  <span className="font-semibold text-cyan-300">{uni.ranking}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
              <span className="text-xs font-semibold text-slate-300">
                {uni.degreeAwarded}
              </span>
              <span className="text-xs font-bold text-amber-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                <span>View Full Profile</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {filteredUniversities.length === 0 && (
        <div className="text-center py-16 glass-panel rounded-2xl text-slate-400 space-y-2">
          <p className="text-base font-semibold text-white">No universities found matching your filter criteria.</p>
          <button onClick={() => { setSearchQuery(''); setSelectedCountry(''); setMedicalOnly(false); }} className="text-xs text-amber-400 hover:underline">
            Reset Filters
          </button>
        </div>
      )}

    </div>
  )
}
