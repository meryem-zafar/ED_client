import React from 'react'
import { MapPin, ArrowRight, Sun, Users } from 'lucide-react'
import { CITIES } from '../data/mockData'

export default function CitiesPage({ onSelectEntity }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10 pb-16">
      
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Major Student Cities & Visual Galleries
        </h1>
        <p className="text-sm text-slate-400 max-w-2xl">
          Explore student cities across Central Asia and Europe with photos of campus streets, shopping malls, student housing, and living expenses.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {CITIES.map(city => (
          <div
            key={city.id}
            onClick={() => onSelectEntity('city', city.id)}
            className="glass-card rounded-3xl overflow-hidden cursor-pointer group border border-slate-800 space-y-4"
          >
            <div className="h-56 relative overflow-hidden">
              <img src={city.heroImage} alt={city.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-xs font-bold text-amber-400 bg-slate-900/80 px-3 py-1 rounded-full border border-slate-700">
                  {city.countryName}
                </span>
                <h2 className="text-2xl font-extrabold text-white mt-1">{city.name}</h2>
              </div>
            </div>

            <div className="p-6 space-y-4 pt-0">
              <p className="text-xs text-slate-300 line-clamp-2">
                {city.overview}
              </p>

              <div className="grid grid-cols-2 gap-2 bg-slate-900/80 p-3 rounded-xl text-xs">
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase">Population</span>
                  <span className="font-bold text-white">{city.population}</span>
                </div>
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase">Climate</span>
                  <span className="font-semibold text-cyan-300">{city.climate}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 text-xs font-bold text-amber-400 group-hover:translate-x-1 transition-transform">
                <span>View Full City Gallery & Guide</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
