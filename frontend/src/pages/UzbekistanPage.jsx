import React, { useState } from 'react'
import { MapPin, Building2, Stethoscope, ArrowRight, ShieldCheck, Camera, Sparkles } from 'lucide-react'
import { COUNTRIES, UNIVERSITIES, CITIES } from '../data/mockData'
import VerificationBadge from '../components/VerificationBadge'
import PageHero from '../components/PageHero'

export default function UzbekistanPage({ onNavigate, onSelectEntity }) {
  const country = COUNTRIES.find(c => c.id === 'uzbekistan')
  const uzbCities = CITIES.filter(c => c.countryId === 'uzbekistan')
  const uzbUniversities = UNIVERSITIES.filter(u => u.countryId === 'uzbekistan')

  const [selectedCityTab, setSelectedCityTab] = useState('tashkent')

  const activeCity = uzbCities.find(c => c.id === selectedCityTab) || uzbCities[0]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12 pb-16">
      
      <PageHero image={country.heroImage} eyebrow={`${country.flag} Silk Road destination hub`} title="Uzbekistan" description="Tashkent, Bukhara and Samarkand: world-class medical academies, rich cultural heritage and low living expenses." />

      {/* City Selector Tabs */}
      <div className="flex border-b border-slate-800 space-x-2 overflow-x-auto text-xs font-bold pb-2">
        {uzbCities.map(city => (
          <button
            key={city.id}
            onClick={() => setSelectedCityTab(city.id)}
            className={`px-4 py-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
              selectedCityTab === city.id
                ? 'bg-cyan-600 text-white shadow-lg'
                : 'bg-slate-800/60 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>{city.name}</span>
          </button>
        ))}
      </div>

      {/* ACTIVE CITY GALLERY & DETAILS */}
      {activeCity && (
        <div className="space-y-8 animate-fadeIn">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <span>{activeCity.name} City & Student Environment</span>
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {activeCity.overview}
              </p>
              
              <div className="grid grid-cols-2 gap-4 bg-slate-900 border border-slate-800 p-4 rounded-xl text-xs">
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase">Population</span>
                  <span className="font-bold text-white">{activeCity.population}</span>
                </div>
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase">Climate</span>
                  <span className="font-semibold text-cyan-300">{activeCity.climate}</span>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Top Sights & Attractions</h4>
                <div className="flex flex-wrap gap-2">
                  {activeCity.attractions.map((att, i) => (
                    <span key={i} className="text-xs bg-slate-800 text-slate-300 px-3 py-1 rounded-full border border-slate-700">
                      🏛️ {att}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* City Image Gallery Stack */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Camera className="w-3.5 h-3.5 text-cyan-400" />
                <span>{activeCity.name} Photo Gallery</span>
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {activeCity.gallery.map((img, idx) => (
                  <div key={idx} className="rounded-xl overflow-hidden h-40 border border-slate-800 group relative">
                    <img src={img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-70" />
                    <div className="absolute bottom-2 left-3 text-[11px] font-semibold text-white">
                      {activeCity.name} Landmark #{idx + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Universities in Uzbekistan */}
          <div className="pt-6 border-t border-slate-800 space-y-4">
            <h3 className="text-xl font-bold text-white">Universities in Uzbekistan</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {uzbUniversities.map(uni => (
                <div key={uni.id} className="glass-card p-5 rounded-2xl space-y-3">
                  <div className="flex items-center gap-3">
                    <img src={uni.logo} alt="" className="w-10 h-10 rounded-lg bg-slate-800 p-1 border border-slate-700 object-cover" />
                    <div>
                      <h4 className="text-sm font-bold text-white">{uni.name}</h4>
                      <div className="text-[11px] text-slate-400">{uni.city}, Uzbekistan • {uni.tuitionFee}</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <VerificationBadge lastVerified={uni.lastVerified} officialLink={uni.officialWebsite} compact />
                    <button
                      onClick={() => onSelectEntity('university', uni.id)}
                      className="text-xs font-bold text-cyan-400 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>View Profile</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

    </div>
  )
}
