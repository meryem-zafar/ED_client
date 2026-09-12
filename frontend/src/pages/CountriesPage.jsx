import React, { useState } from 'react'
import { Search, ArrowRight } from 'lucide-react'
import { COUNTRIES } from '../data/mockData'

export default function CountriesPage({ onSelectEntity, onNavigate }) {
  const [selectedRegion, setSelectedRegion] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const regions = ['All', 'Central Asia', 'Europe', 'North America', 'Australia']

  const filteredCountries = COUNTRIES.filter((c) => {
    const matchesRegion = selectedRegion === 'All' || (c.region && c.region.includes(selectedRegion))
    const query = searchQuery.toLowerCase().trim()
    const matchesSearch =
      !query ||
      c.name.toLowerCase().includes(query) ||
      (c.shortName && c.shortName.toLowerCase().includes(query)) ||
      (c.tagline && c.tagline.toLowerCase().includes(query))
    return matchesRegion && matchesSearch
  })

  const openCountry = (country) => {
    if (country.id === 'kyrgyzstan') onNavigate('kyrgyzstan-special')
    else if (country.id === 'uzbekistan') onNavigate('uzbekistan')
    else onSelectEntity('country', country.id)
  }

  return (
    <div className="explore-countries-page bg-[#f4f8fc] text-[#18324d]">
      {/* Hero Banner matching mockup */}
      <section className="relative overflow-hidden bg-[#071e3d]">
        <img
          src="https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=1800&q=85"
          alt="Scenic Mountain Destinations"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,25,58,0.72)_0%,rgba(5,25,58,0.88)_100%)]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 pt-14 pb-20 sm:px-6 sm:pt-16 sm:pb-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Explore Countries
            </h1>
            <p className="mt-3 text-sm font-medium text-blue-100 sm:text-base">
              Discover the best study destinations for your future.
            </p>

            {/* Floating In-Hero Search Bar matching mockup */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 flex w-full max-w-xl items-center overflow-hidden rounded-xl border border-white/20 bg-white shadow-xl sm:rounded-2xl"
            >
              <div className="flex flex-1 items-center px-3.5 sm:px-4">
                <Search className="h-4 w-4 shrink-0 text-[#0767d8] mr-2.5 sm:mr-3" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for a country..."
                  className="w-full bg-transparent py-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-none sm:text-sm"
                />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center bg-[#0767d8] px-4 py-3 text-white transition-colors hover:bg-blue-700 sm:px-5 cursor-pointer"
                aria-label="Search"
              >
                <Search className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Main Content Card Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 -mt-8 pb-20">
        <div className="rounded-[1.75rem] sm:rounded-[2.25rem] border border-[#dce8f3] bg-white p-5 sm:p-8 md:p-10 shadow-[0_8px_30px_rgba(27,77,120,0.08)]">
          {/* Region Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {regions.map((reg) => {
              const isActive = selectedRegion === reg
              return (
                <button
                  key={reg}
                  onClick={() => setSelectedRegion(reg)}
                  className={`rounded-full px-5 py-2 text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#5b58eb] text-white shadow-md shadow-indigo-500/25'
                      : 'border border-[#dce8f3] bg-[#f8fbfe] text-[#475569] hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {reg}
                </button>
              )
            })}
          </div>

          {/* 3-Column Country Cards Grid matching mockup */}
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
            {filteredCountries.map((country) => (
              <div
                key={country.id}
                onClick={() => openCountry(country)}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white shadow-[0_4px_16px_rgba(27,77,120,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#a3c9f8] hover:shadow-[0_14px_32px_rgba(7,103,216,0.12)] cursor-pointer"
              >
                {/* Photo Banner with subtle glass indicator */}
                <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-100">
                  <img
                    src={country.heroImage}
                    alt={country.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />
                </div>

                {/* Lower Card Bar */}
                <div className="flex items-center justify-between p-4 sm:p-5">
                  <div className="flex items-center gap-3.5 min-w-0">
                    {/* Circular Flag Icon */}
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-slate-50 shadow-xs ring-1 ring-black/5">
                      <img
                        src={country.flagSvg}
                        alt={`${country.name} flag`}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    {/* Title & Explore Link */}
                    <div className="min-w-0">
                      <h3 className="truncate text-sm sm:text-base font-bold text-[#18324d] transition-colors group-hover:text-[#0767d8]">
                        {country.shortName || country.name}
                      </h3>
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0767d8]">
                        <span>Explore</span>
                        <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>

                  {/* Far Right Arrow Button */}
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#0767d8] transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty Search Fallback */}
          {filteredCountries.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-base font-bold text-[#18324d]">No countries found matching your search.</p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedRegion('All')
                }}
                className="mt-3 text-xs font-bold text-[#0767d8] hover:underline cursor-pointer"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
