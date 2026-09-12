import React, { useState } from 'react'
import {
  ArrowRight,
  Building2,
  Check,
  Coins,
  MapPin,
  MessageSquare,
  Play,
  Users,
  X,
  GraduationCap,
  Sparkles,
  ExternalLink
} from 'lucide-react'
import { COUNTRIES, CITIES, UNIVERSITIES } from '../data/mockData'

export default function KyrgyzstanSpecialPage({ onNavigate, onSelectEntity }) {
  const [activeTab, setActiveTab] = useState('Overview')
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)

  const tabs = ['Overview', 'Cities', 'Universities', 'Admission', 'Visa', 'Cost of Living', 'Gallery', 'Contact']
  const country = COUNTRIES.find((c) => c.id === 'kyrgyzstan') || COUNTRIES[0]
  const bishkek = CITIES.find((c) => c.id === 'bishkek') || CITIES[0]
  const kyrgyzUniversities = UNIVERSITIES.filter((u) => u.countryId === 'kyrgyzstan')

  const galleryImages = [
    { url: 'https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=1200&q=80', caption: 'Ala-Archa National Park & Mountain Range' },
    { url: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1200&q=80', caption: 'Issyk-Kul Alpine Lake' },
    { url: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1200&q=80', caption: 'Historical Central Asian Architecture' },
    { url: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80', caption: 'Medical Campus & Clinical Facilities' }
  ]

  const majorCities = [
    {
      id: 'bishkek',
      name: 'Bishkek',
      subtitle: 'Capital',
      image: bishkek.heroImage || 'https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=800&q=80',
      action: () => onNavigate('bishkek-city')
    },
    {
      id: 'osh',
      name: 'Osh',
      subtitle: 'Second largest city',
      image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=800&q=80',
      action: () => onNavigate('cities')
    },
    {
      id: 'karakol',
      name: 'Karakol',
      subtitle: 'Popular student city',
      image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=800&q=80',
      action: () => onNavigate('cities')
    }
  ]

  const handleTabClick = (tab) => {
    setActiveTab(tab)
    if (tab === 'Cities') {
      const el = document.getElementById('major-cities-section')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else if (tab === 'Universities') {
      onNavigate('universities')
    } else if (tab === 'Admission' || tab === 'Visa') {
      onNavigate('visa')
    } else if (tab === 'Gallery') {
      setIsGalleryOpen(true)
    } else if (tab === 'Contact') {
      onNavigate('contact')
    }
  }

  return (
    <div className="kyrgyzstan-page bg-[#f4f8fc] text-[#18324d] pb-16">
      {/* 1. Hero Banner Matching Mockup */}
      <section className="relative mx-auto max-w-7xl px-4 pt-2 sm:px-6">
        <div className="relative min-h-[360px] sm:min-h-[440px] overflow-hidden rounded-[1.5rem] bg-[#071e3d] shadow-xl">
          {/* Background Mountain Lake Photo */}
          <img
            src="https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=1800&q=85"
            alt="Kyrgyzstan Mountains & Lake"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,25,58,0.92)_0%,rgba(5,25,58,0.72)_50%,rgba(5,25,58,0.4)_100%)]" />

          {/* Hero Content Container */}
          <div className="relative flex min-h-[360px] sm:min-h-[440px] flex-col justify-between p-6 sm:p-10 lg:flex-row lg:items-center">
            {/* Left Column: Title, Subtitle, Red Emblem, Watch Video Button */}
            <div className="max-w-xl">
              <div className="flex items-center gap-4">
                {/* Red Flag Badge with Kyrgyz Sun */}
                <div className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl bg-[#e11d48] p-2.5 shadow-lg ring-2 ring-white/30">
                  <img src="/flags/kg.svg" alt="Kyrgyzstan Emblem" className="h-full w-full object-contain" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">Kyrgyzstan</h1>
                  <p className="mt-1 text-xs sm:text-sm font-medium text-blue-100/90">
                    Land of Mountains and Opportunities
                  </p>
                </div>
              </div>

              {/* Watch Video Button */}
              <div className="mt-7">
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="group inline-flex items-center gap-2 rounded-xl bg-[#0767d8] hover:bg-blue-600 px-5 py-3 text-xs font-bold text-white shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#0767d8]">
                    <Play className="h-2.5 w-2.5 fill-current ml-0.5" />
                  </div>
                  <span>Watch Country Video</span>
                </button>
              </div>
            </div>

            {/* Right Column: 3-Photo Collage Card matching mockup */}
            <div className="mt-6 hidden lg:flex flex-col gap-2.5 shrink-0">
              <div className="h-24 w-52 overflow-hidden rounded-xl border-2 border-white/80 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=500&q=80"
                  alt="Kyrgyzstan Nature"
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex gap-2.5">
                <div className="h-20 w-[6.1rem] overflow-hidden rounded-xl border-2 border-white/80 shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=300&q=80"
                    alt="Kyrgyzstan Heritage"
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="h-20 w-[6.1rem] overflow-hidden rounded-xl border-2 border-white/80 shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=300&q=80"
                    alt="Kyrgyzstan Campus"
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sub-Navigation Tabs & Main White Card Container matching mockup */}
      <section className="mx-auto max-w-7xl px-4 pt-6 sm:px-6">
        <div className="rounded-[1.75rem] border border-[#dce8f3] bg-white p-6 sm:p-8 md:p-10 shadow-[0_8px_30px_rgba(27,77,120,0.06)]">
          {/* Horizontal Tabs with active underline */}
          <div className="flex border-b border-[#e2e8f0] overflow-x-auto text-xs sm:text-sm font-bold scrollbar-none gap-6 pb-0">
            {tabs.map((tab) => {
              const isActive = activeTab === tab
              return (
                <button
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  className={`pb-3.5 transition-all whitespace-nowrap cursor-pointer border-b-2 font-bold ${
                    isActive
                      ? 'border-[#0767d8] text-[#0767d8]'
                      : 'border-transparent text-[#64748b] hover:text-[#18324d]'
                  }`}
                >
                  {tab}
                </button>
              )
            })}
          </div>

          {/* 3. About Kyrgyzstan Section */}
          <div className="pt-8">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#18324d] tracking-tight">About Kyrgyzstan</h2>
            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#526c83]">
              Kyrgyzstan is a beautiful Central Asian country known for its stunning mountains, rich culture and
              friendly people. It offers affordable tuition fees, modern universities and a safe environment for
              international students.
            </p>

            {/* 4 Fact Cards in a Row matching mockup */}
            <div className="mt-6 grid grid-cols-2 gap-3.5 sm:grid-cols-4 sm:gap-4">
              {/* Capital */}
              <div className="flex items-center gap-3 rounded-xl border border-[#e2e8f0] bg-[#f8fbfe] p-3.5 sm:p-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#e7f2fd] text-[#0767d8]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-medium text-[#7890a5]">Capital</p>
                  <p className="truncate text-xs sm:text-sm font-bold text-[#18324d]">Bishkek</p>
                </div>
              </div>

              {/* Language */}
              <div className="flex items-center gap-3 rounded-xl border border-[#e2e8f0] bg-[#f8fbfe] p-3.5 sm:p-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#e7f2fd] text-[#0767d8]">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-medium text-[#7890a5]">Language</p>
                  <p className="truncate text-xs sm:text-sm font-bold text-[#18324d]">Kyrgyz, Russian</p>
                </div>
              </div>

              {/* Currency */}
              <div className="flex items-center gap-3 rounded-xl border border-[#e2e8f0] bg-[#f8fbfe] p-3.5 sm:p-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#e7f2fd] text-[#0767d8]">
                  <Coins className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-medium text-[#7890a5]">Currency</p>
                  <p className="truncate text-xs sm:text-sm font-bold text-[#18324d]">Kyrgyzstani Som (KGS)</p>
                </div>
              </div>

              {/* Population */}
              <div className="flex items-center gap-3 rounded-xl border border-[#e2e8f0] bg-[#f8fbfe] p-3.5 sm:p-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#e7f2fd] text-[#0767d8]">
                  <Users className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-medium text-[#7890a5]">Population</p>
                  <p className="truncate text-xs sm:text-sm font-bold text-[#18324d]">6.8 Million (approx)</p>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Why Study in Kyrgyzstan? Section matching mockup */}
          <div className="pt-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
              {/* Left Column: Why Study Points */}
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#18324d] tracking-tight">
                  Why Study in Kyrgyzstan?
                </h3>
                <ul className="mt-5 space-y-4">
                  {[
                    'Affordable tuition fees and living costs',
                    'Recognized medical universities',
                    'Safe and student-friendly environment',
                    'Rich culture and natural beauty'
                  ].map((point) => (
                    <li key={point} className="flex items-center gap-3 text-xs sm:text-sm font-bold text-[#18324d]">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                        <Check className="h-3.5 w-3.5 stroke-[3]" />
                      </div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Landscape Photo with View Gallery Button */}
              <div className="relative h-60 sm:h-72 overflow-hidden rounded-2xl shadow-md group">
                <img
                  src="https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=1000&q=80"
                  alt="Kyrgyzstan Mountain Panorama"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <button
                  onClick={() => setIsGalleryOpen(true)}
                  className="absolute bottom-4 right-4 rounded-lg bg-[#0767d8] hover:bg-blue-600 px-4 py-2 text-xs font-bold text-white shadow-lg transition-all hover:scale-105 cursor-pointer"
                >
                  View Gallery
                </button>
              </div>
            </div>
          </div>

          {/* 5. Major Cities Section matching mockup */}
          <div id="major-cities-section" className="pt-14">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg sm:text-xl font-extrabold text-[#18324d] tracking-tight">Major Cities</h3>
              <button
                onClick={() => onNavigate('cities')}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#0767d8] hover:text-blue-700 transition-colors cursor-pointer"
              >
                <span>View All</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {majorCities.map((city) => (
                <div
                  key={city.id}
                  onClick={city.action}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white shadow-[0_4px_16px_rgba(27,77,120,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#a3c9f8] hover:shadow-[0_12px_28px_rgba(7,103,216,0.12)] cursor-pointer"
                >
                  <div className="relative h-40 overflow-hidden bg-slate-100">
                    <img
                      src={city.image}
                      alt={city.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex items-center justify-between p-4 sm:p-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#e7f2fd] text-[#0767d8]">
                        <Building2 className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#18324d] group-hover:text-[#0767d8] transition-colors">
                          {city.name}
                        </h4>
                        <p className="text-[11px] text-[#7890a5]">{city.subtitle}</p>
                      </div>
                    </div>
                    <div className="text-[#0767d8] transition-transform duration-200 group-hover:translate-x-1">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 6. Bottom CTA Banner matching mockup */}
          <div className="mt-12 overflow-hidden rounded-2xl bg-[linear-gradient(90deg,rgba(15,23,60,0.96)_0%,rgba(30,27,75,0.92)_50%,rgba(15,23,60,0.96)_100%)] p-6 sm:p-8 md:p-10 text-white shadow-xl">
            <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
                  Ready to Study in Kyrgyzstan?
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-blue-100/85">
                  Apply available scholarships and build your future.
                </p>
              </div>
              <button
                onClick={() => onNavigate('apply')}
                className="shrink-0 rounded-xl bg-linear-to-r from-[#6366f1] to-[#4f46e5] hover:from-[#4f46e5] hover:to-[#4338ca] px-7 py-3 text-xs sm:text-sm font-bold text-white shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-xs">
          <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-[#09254d] p-6 text-white shadow-2xl">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 text-slate-300 hover:text-white cursor-pointer"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
            <h3 className="text-lg font-bold">Discover Kyrgyzstan — Student Experience</h3>
            <p className="mt-1 text-xs text-blue-200">Take a virtual walk through universities, Bishkek city life, and scenic mountains.</p>
            <div className="mt-4 relative aspect-video w-full overflow-hidden rounded-xl bg-black">
              <iframe
                className="h-full w-full"
                src="https://www.youtube-nocookie.com/embed/2v_b2p5a86A?autoplay=1"
                title="Study in Kyrgyzstan Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* Gallery Modal */}
      {isGalleryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-xs">
          <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-[#09254d] p-6 text-white shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <h3 className="text-lg font-bold">Kyrgyzstan Photo Gallery</h3>
                <p className="text-xs text-blue-200">Campuses, alpine lakes, and modern student amenities</p>
              </div>
              <button
                onClick={() => setIsGalleryOpen(false)}
                className="text-slate-300 hover:text-white cursor-pointer"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {galleryImages.map((img, i) => (
                <div key={i} className="overflow-hidden rounded-xl border border-white/10 bg-slate-900/50">
                  <img src={img.url} alt={img.caption} className="h-48 w-full object-cover" />
                  <p className="p-3 text-xs text-slate-200 font-medium">{img.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

