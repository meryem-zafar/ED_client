import React, { useState } from 'react'
import { ArrowRight, Award, BookOpen, CheckCircle2, ChevronRight, FileText, Globe, GraduationCap, Headphones, MessageCircle, Plane, Search, Star } from 'lucide-react'
import { BRAND_INFO, COUNTRIES, TESTIMONIALS, UNIVERSITIES } from '../data/mockData'
import geminiHeroImage from '../assets/Gemini_Generated_Image_kv1txakv1txakv1t (1).jfif'

const heroImage = geminiHeroImage
const applicationSteps = [
  {
    number: '1',
    title: '1. Search',
    text: 'Find your dream country and program',
    icon: Search
  },
  {
    number: '2',
    title: '2. Apply',
    text: 'Submit your application online',
    icon: FileText
  },
  {
    number: '3',
    title: '3. Get Offer',
    text: 'Receive your university admission',
    icon: Award
  },
  {
    number: '4',
    title: '4. Fly',
    text: 'Start your global journey',
    icon: Plane
  }
]

function TestimonialCard({ testimonial }) {
  return <article className="w-[280px] shrink-0 rounded-xl border border-[#dce8f3] bg-white p-4 shadow-[0_8px_25px_rgba(27,77,120,0.07)] sm:w-[330px]">
    <div className="flex items-center gap-3"><img className="h-10 w-10 rounded-full object-cover" src={testimonial.image} alt={testimonial.name} /><div className="min-w-0"><div className="flex items-center gap-1"><p className="truncate text-sm font-bold">{testimonial.name}</p><CheckCircle2 className="h-3.5 w-3.5 shrink-0 fill-[#0767d8] text-white" /></div><p className="truncate text-[11px] text-[#7890a5]">{testimonial.destination}</p></div></div>
    <p className="mt-4 line-clamp-3 text-xs leading-5 text-[#526c83]">{testimonial.quote}</p><div className="mt-3 flex gap-0.5 text-[#f5a623]">{[0, 1, 2, 3, 4].map((star) => <Star key={star} className="h-3.5 w-3.5 fill-current" />)}</div>
  </article>
}

function Testimonials() {
  const cards = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS]
  return <section className="overflow-hidden bg-[#f4f8fc] py-16"><div className="mx-auto mb-8 max-w-7xl px-4 sm:px-6"><p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0767d8]">Real journeys</p><h2 className="text-2xl font-extrabold sm:text-3xl">Student Testimonials</h2></div><div className="overflow-hidden"><div className="home-marquee flex w-max gap-4 px-4 pb-4">{cards.map((item, index) => <TestimonialCard key={`a-${item.id}-${index}`} testimonial={item} />)}</div><div className="home-marquee home-marquee-reverse flex w-max gap-4 px-4">{[...cards].reverse().map((item, index) => <TestimonialCard key={`b-${item.id}-${index}`} testimonial={item} />)}</div></div></section>
}

export default function HomePage({ onNavigate, onSelectEntity }) {
  const [searchTab, setSearchTab] = useState('country')
  const [selectedCountry, setSelectedCountry] = useState('')
  const [selectedCity, setSelectedCity] = useState('')
  const [selectedProgram, setSelectedProgram] = useState('')
  const submitSearch = (event) => { event.preventDefault(); if (selectedCountry === 'kyrgyzstan') onNavigate('kyrgyzstan-special'); else if (selectedCountry === 'uzbekistan') onNavigate('uzbekistan'); else if (selectedCountry) onSelectEntity('country', selectedCountry); else onNavigate(searchTab === 'university' ? 'universities' : 'countries') }
  const openCountry = (country) => { if (country.id === 'kyrgyzstan') onNavigate('kyrgyzstan-special'); else if (country.id === 'uzbekistan') onNavigate('uzbekistan'); else onSelectEntity('country', country.id) }

  return <div className="home-page bg-[#f4f8fc] text-[#18324d]">
    <section className="relative mx-auto max-w-[1440px] px-4 pt-2 sm:px-6">
      <div className="relative min-h-[430px] overflow-hidden rounded-[1.25rem] bg-[#092c5c] shadow-[0_18px_50px_rgba(9,44,92,0.2)] sm:min-h-[500px]">
        <img src={heroImage} alt="Students exploring a new country" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,31,67,0.92)_0%,rgba(5,31,67,0.62)_42%,rgba(5,31,67,0.08)_100%)]" />
        <div className="relative flex min-h-[430px] items-center px-6 py-16 sm:min-h-[500px] sm:px-12 lg:px-16">
          <div className="max-w-xl text-white">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#9de7ff]">Your global education partner</p>
            <h1 className="text-4xl font-extrabold leading-[1.08] sm:text-6xl">
              Your Gateway to<br /><span className="text-[#55d4f7]">Study Abroad</span> <Plane className="inline h-9 w-9 -rotate-45 sm:h-12 sm:w-12" />
            </h1>
            <p className="mt-5 max-w-md text-sm leading-6 text-blue-50 sm:text-base">
              Explore top universities, discover new cultures, and build your global future with ED-WISE CONSULTANCY.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <button onClick={() => onNavigate('universities')} className="rounded-lg bg-[#0767d8] px-5 py-3 text-xs font-extrabold text-white cursor-pointer">Explore Programs</button>
              <button onClick={() => onNavigate('apply')} className="rounded-lg border border-white/40 bg-white/10 px-5 py-3 text-xs font-extrabold text-white cursor-pointer">Start your application</button>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar Card */}
      <div className="relative z-10 mx-3 -mt-12 rounded-xl border border-[#dce8f3] bg-white p-4 shadow-[0_14px_35px_rgba(27,77,120,0.14)] sm:mx-8 sm:p-5">
        <div className="mb-4 flex flex-wrap items-center gap-2 border-b border-[#e8f0f7] pb-3">
          <span className="mr-2 text-xs font-extrabold">Search by</span>
          {['country', 'university', 'program'].map((tab) => (
            <button key={tab} onClick={() => setSearchTab(tab)} className={`rounded-md px-4 py-2 text-xs font-bold capitalize cursor-pointer ${searchTab === tab ? 'bg-[#0767d8] text-white' : 'bg-[#f1f6fb] text-[#60758a]'}`}>{tab}</button>
          ))}
        </div>
        <form onSubmit={submitSearch} className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          <select value={selectedCountry} onChange={(event) => setSelectedCountry(event.target.value)} className="rounded-lg border border-[#dce8f3] bg-[#f8fbfe] px-3 py-3 text-xs font-semibold" aria-label="Select country">
            <option value="">Select Country</option>
            {COUNTRIES.map((country) => <option key={country.id} value={country.id}>{country.name}</option>)}
          </select>
          <select value={selectedCity} onChange={(event) => setSelectedCity(event.target.value)} className="rounded-lg border border-[#dce8f3] bg-[#f8fbfe] px-3 py-3 text-xs font-semibold" aria-label="Select city">
            <option value="">Select City</option>
            <option>Bishkek</option>
            <option>Tashkent</option>
            <option>Samarkand</option>
            <option>Almaty</option>
          </select>
          <select value={selectedProgram} onChange={(event) => setSelectedProgram(event.target.value)} className="rounded-lg border border-[#dce8f3] bg-[#f8fbfe] px-3 py-3 text-xs font-semibold" aria-label="Select program">
            <option value="">Select Program</option>
            <option value="mbbs">Medicine / MBBS / MD</option>
            <option value="engineering">Engineering & IT</option>
            <option value="phd">PhD Research</option>
          </select>
          <button type="submit" className="flex items-center justify-center gap-2 rounded-lg bg-[#0767d8] px-4 py-3 text-xs font-extrabold text-white cursor-pointer hover:bg-blue-700 transition-colors">
            <Search className="h-4 w-4" /> Search
          </button>
        </form>
      </div>

      {/* Stats Highlights Banner matching mockup */}
      <div className="relative z-10 mx-3 mt-4 rounded-xl border border-white/10 bg-[#092c5c] p-4 text-white shadow-md sm:mx-8 sm:p-5">
        <div className="grid grid-cols-2 gap-4 divide-y divide-white/10 sm:grid-cols-4 sm:divide-y-0 sm:divide-x sm:divide-white/15">
          <div className="flex items-center justify-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-[#55d4f7]">
              <Globe className="h-5 w-5" />
            </div>
            <div className="text-left">
              <p className="text-sm font-extrabold sm:text-base">100+</p>
              <p className="text-[11px] font-medium text-blue-200">Countries</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 pt-3 sm:pt-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-[#55d4f7]">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div className="text-left">
              <p className="text-sm font-extrabold sm:text-base">500+</p>
              <p className="text-[11px] font-medium text-blue-200">Universities</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 pt-3 sm:pt-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-[#55d4f7]">
              <BookOpen className="h-5 w-5" />
            </div>
            <div className="text-left">
              <p className="text-sm font-extrabold sm:text-base">10,000+</p>
              <p className="text-[11px] font-medium text-blue-200">Programs</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 pt-3 sm:pt-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-[#55d4f7]">
              <Headphones className="h-5 w-5" />
            </div>
            <div className="text-left">
              <p className="text-sm font-extrabold sm:text-base">Global Support</p>
              <p className="text-[11px] font-medium text-blue-200">24/7 Assistance</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Popular Countries Section matching mockup */}
    <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-extrabold tracking-tight text-[#18324d] sm:text-2xl">Popular Countries</h2>
        <button
          onClick={() => onNavigate('countries')}
          className="group inline-flex items-center gap-1.5 text-xs font-bold text-[#0767d8] transition-colors hover:text-blue-700 cursor-pointer"
        >
          <span>View All</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
        </button>
      </div>
      <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {COUNTRIES.slice(0, 12).map((country) => (
          <button
            key={country.id}
            onClick={() => openCountry(country)}
            className="group relative flex flex-col items-center justify-center rounded-2xl border border-[#dce8f3] bg-white px-3 py-5 text-center shadow-[0_4px_16px_rgba(27,77,120,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#a3c9f8] hover:shadow-[0_12px_28px_rgba(7,103,216,0.12)] cursor-pointer"
          >
            <div className="relative mb-2.5 flex items-center justify-center">
              <img
                src={country.flagSvg}
                alt={`${country.name} flag`}
                className="h-7 w-11 rounded-[4px] object-cover shadow-[0_1px_4px_rgba(0,0,0,0.12)] ring-1 ring-black/10 transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <span className="block max-w-full truncate text-xs font-bold text-[#18324d] transition-colors group-hover:text-[#0767d8]">
              {country.shortName || country.name}
            </span>
            <span className="mt-1 inline-flex items-center gap-1 text-[11px] font-semibold text-[#0767d8] opacity-85 transition-opacity group-hover:opacity-100">
              <span>Explore</span>
              <ArrowRight className="h-2.5 w-2.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
          </button>
        ))}
      </div>
    </section>
    <section className="mx-auto max-w-7xl px-4 pt-14 sm:px-6"><div className="mb-5 flex justify-between"><h2 className="text-xl font-extrabold sm:text-2xl">Featured Universities</h2><button onClick={() => onNavigate('universities')} className="text-xs font-bold text-[#0767d8]">View All <ArrowRight className="inline h-3 w-3" /></button></div><div className="grid gap-4 md:grid-cols-3">{UNIVERSITIES.slice(0, 3).map((university) => <button key={university.id} onClick={() => onSelectEntity('university', university.id)} className="group overflow-hidden rounded-xl border border-[#dce8f3] bg-white text-left shadow-[0_8px_25px_rgba(27,77,120,0.06)]"><div className="relative h-40 overflow-hidden"><img src={university.heroImage} alt={university.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /><span className="absolute bottom-3 left-3 rounded bg-white/95 px-2 py-1 text-[10px] font-bold text-[#0767d8]">{university.countryName}</span></div><div className="p-4"><h3 className="truncate text-sm font-extrabold">{university.name}</h3><p className="mt-1 text-xs text-[#7890a5]">{university.city} · {university.tuitionFee}</p><span className="mt-4 inline-flex items-center gap-1 text-[11px] font-bold text-[#0767d8]">View Details <ArrowRight className="h-3 w-3" /></span></div></button>)}</div></section>
    <section className="mx-auto max-w-7xl px-4 pt-14 sm:px-6"><div className="relative overflow-hidden rounded-xl bg-[#092c5c] px-6 py-10 text-white shadow-lg sm:px-10"><img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80" alt="Students celebrating their studies" className="absolute inset-0 h-full w-full object-cover opacity-40" /><div className="relative max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9de7ff]">Scholarship opportunities</p><h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">Dreams Don&apos;t Have Borders</h2><p className="mt-2 text-sm text-blue-50">Get up to 50% scholarships on selected universities across Central Asia and Europe.</p><button onClick={() => onNavigate('scholarships')} className="mt-5 rounded-lg bg-[#f5a623] px-5 py-3 text-xs font-extrabold">Explore Scholarships <ArrowRight className="ml-1 inline h-3 w-3" /></button></div></div></section>
    <Testimonials />
    {/* Application Process Section matching mockup */}
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <div className="mb-6">
        <h2 className="text-xl font-extrabold tracking-tight text-[#18324d] sm:text-2xl">Application Process</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {applicationSteps.map((step, index) => {
          const Icon = step.icon
          return (
            <div
              key={step.number}
              className="group relative flex flex-col justify-between rounded-2xl border border-[#e2e8f0] bg-white p-5 sm:p-6 shadow-[0_4px_16px_rgba(27,77,120,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_12px_28px_rgba(27,77,120,0.08)]"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0767d8] text-white shadow-sm shadow-blue-500/25 transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-5 w-5" />
                </div>
                {index < applicationSteps.length - 1 && (
                  <div className="hidden lg:flex items-center text-slate-300 pr-1">
                    <ChevronRight className="h-4 w-4" />
                  </div>
                )}
              </div>
              <div>
                <h3 className="mt-4 text-sm font-bold text-[#18324d] sm:text-base">{step.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-[#64748b]">{step.text}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>

    {/* WhatsApp CTA Section matching mockup */}
    <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
      <div className="relative overflow-hidden rounded-2xl shadow-xl">
        <img
          src="https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=1600&q=80"
          alt="Scenic Mountain Destination"
          className="absolute inset-0 h-full w-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,24,56,0.94)_0%,rgba(6,36,80,0.85)_50%,rgba(4,24,56,0.92)_100%)]" />

        <div className="relative z-10 flex flex-col items-start justify-between gap-5 px-6 py-7 sm:px-10 sm:py-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl lg:text-3xl">
              Need Help? Chat with us on WhatsApp
            </h2>
            <p className="mt-1 text-xs font-medium text-blue-100/90 sm:text-sm">
              Get instant support for your study abroad journey!
            </p>
          </div>
          <a
            href={`https://wa.me/${BRAND_INFO.whatsapp}?text=${encodeURIComponent('Hello ED-WISE CONSULTANCY, I am interested in Study Abroad counseling.')}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2.5 rounded-xl bg-[#25d366] hover:bg-[#20bd5a] px-5 py-3 text-xs font-bold text-white shadow-[0_6px_20px_rgba(37,211,102,0.35)] transition-all hover:scale-105 active:scale-95 cursor-pointer sm:text-sm"
          >
            <MessageCircle className="h-4 w-4 fill-current sm:h-5 sm:w-5" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  </div>
}
