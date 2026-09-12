import React, { useState, useEffect, useRef } from 'react'
import { Search, X, MapPin, Building2, Stethoscope, ArrowRight } from 'lucide-react'
import { COUNTRIES, UNIVERSITIES, CITIES } from '../data/mockData'

export default function SearchModal({ isOpen, onClose, onSelectResult }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
    } else {
      setQuery('')
    }
  }, [isOpen])

  if (!isOpen) return null

  const filteredCountries = COUNTRIES.filter(c => 
    c.name.toLowerCase().includes(query.toLowerCase()) || 
    c.region.toLowerCase().includes(query.toLowerCase())
  )

  const filteredUniversities = UNIVERSITIES.filter(u => 
    u.name.toLowerCase().includes(query.toLowerCase()) || 
    u.city.toLowerCase().includes(query.toLowerCase()) ||
    u.countryName.toLowerCase().includes(query.toLowerCase())
  )

  const filteredCities = CITIES.filter(c => 
    c.name.toLowerCase().includes(query.toLowerCase()) || 
    c.countryName.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[80vh]">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-800 flex items-center gap-3 bg-slate-900/90">
          <Search className="w-5 h-5 text-amber-400 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search destination country, city (Bishkek, Tashkent...), or university (KSMU)..."
            className="w-full bg-transparent text-white placeholder-slate-400 focus:outline-none text-sm font-medium"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-slate-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          )}
          <button onClick={onClose} className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700">
            Esc
          </button>
        </div>

        {/* Results Body */}
        <div className="p-4 overflow-y-auto space-y-6 flex-1">
          {query.trim() === '' ? (
            <div className="text-center py-8">
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-3">Popular Searches</p>
              <div className="flex flex-wrap justify-center gap-2">
                {['Kyrgyzstan MBBS', 'Bishkek', 'KSMU', 'Uzbekistan', 'Tashkent Medical', 'Germany Free Tuition', 'PhD AI'].map(tag => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="text-xs bg-slate-800/80 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded-full border border-slate-700/80 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <>
              {/* Countries */}
              {filteredCountries.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    Countries ({filteredCountries.length})
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {filteredCountries.map(c => (
                      <div
                        key={c.id}
                        onClick={() => { onSelectResult('country', c.id); onClose(); }}
                        className="p-3 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 rounded-xl cursor-pointer flex items-center justify-between transition-all group"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-xl">{c.flag}</span>
                          <div>
                            <div className="text-sm font-bold text-white group-hover:text-amber-400">{c.name}</div>
                            <div className="text-[11px] text-slate-400">{c.region} • {c.tuitionRange}</div>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-400" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Universities */}
              {filteredUniversities.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-amber-400" />
                    Universities ({filteredUniversities.length})
                  </h4>
                  <div className="space-y-2">
                    {filteredUniversities.map(u => (
                      <div
                        key={u.id}
                        onClick={() => { onSelectResult('university', u.id); onClose(); }}
                        className="p-3 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 rounded-xl cursor-pointer flex items-center justify-between transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-slate-700 overflow-hidden flex-shrink-0 border border-slate-600">
                            <img src={u.logo} alt="" className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-white group-hover:text-amber-400">{u.name}</div>
                            <div className="text-[11px] text-slate-400">{u.city}, {u.countryName} • {u.tuitionFee}</div>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-400" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Cities */}
              {filteredCities.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    Cities ({filteredCities.length})
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {filteredCities.map(city => (
                      <div
                        key={city.id}
                        onClick={() => { onSelectResult('city', city.id); onClose(); }}
                        className="p-3 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 rounded-xl cursor-pointer flex items-center justify-between transition-all group"
                      >
                        <div>
                          <div className="text-sm font-bold text-white group-hover:text-emerald-400">{city.name}</div>
                          <div className="text-[11px] text-slate-400">{city.countryName}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-400" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {filteredCountries.length === 0 && filteredUniversities.length === 0 && filteredCities.length === 0 && (
                <div className="text-center py-10 text-slate-400 text-sm">
                  No matching results found for "<span className="text-white">{query}</span>".
                </div>
              )}
            </>
          )}
        </div>

      </div>
    </div>
  )
}
