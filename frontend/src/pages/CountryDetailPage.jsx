import React, { useState } from 'react'
import {
  ArrowRight,
  ArrowLeft,
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
  ExternalLink,
  Phone,
  ShieldCheck,
  Calendar,
  FileCheck,
  DollarSign,
  ChevronRight,
  Image as ImageIcon,
  Video,
  Clock,
  Compass,
  Award,
  CheckCircle2
} from 'lucide-react'
import { COUNTRIES, UNIVERSITIES, BRAND_INFO } from '../data/mockData'
import { getCountryVideos } from '../data/countryVideos'

export default function CountryDetailPage({ countryId, onNavigate, onSelectEntity, onBack }) {
  const country = COUNTRIES.find((c) => c.id === countryId) || COUNTRIES[0]
  const countryUniversities = UNIVERSITIES.filter((u) => u.countryId === country.id)
  const majorCities = country.majorCitiesData || []
  const galleryPhotos = country.gallery || []
  const videos = getCountryVideos(country.id)

  const [activeTab, setActiveTab] = useState('Overview')
  const [activeVideoIndex, setActiveVideoIndex] = useState(0)
  const activeVideo = videos[activeVideoIndex] || videos[0]
  const [videoCategoryFilter, setVideoCategoryFilter] = useState('All')
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState(null)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', phone: '', program: 'MBBS / General Medicine', question: '' })
  const [isFastApplyOpen, setIsFastApplyOpen] = useState(false)
  const [fastApplySubmitted, setFastApplySubmitted] = useState(false)
  const [fastApplyData, setFastApplyData] = useState({
    name: '',
    phone: '',
    program: 'MBBS / General Medicine',
    education: 'FSc Pre-Medical / High School'
  })

  const tabs = ['Overview', 'Videos', 'Cities', 'Universities', 'Admission', 'Visa', 'Cost of Living', 'Gallery', 'Contact']

  const handleCityClick = (cityId) => {
    if (cityId === 'bishkek' && onNavigate) {
      onNavigate('bishkek-city')
    } else {
      setActiveTab('Cities')
    }
  }

  const handleInquirySubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({ name: '', phone: '', program: 'MBBS / General Medicine', question: '' })
    }, 4000)
  }

  return (
    <div className="country-master-page bg-[#f4f8fc] text-[#18324d] pb-16">
      {/* Top Back Navigation Button */}
      <div className="mx-auto max-w-7xl px-4 pt-2 pb-3 sm:px-6 flex items-center justify-between">
        <button
          onClick={onBack || (() => onNavigate('countries'))}
          className="inline-flex items-center gap-2 text-xs font-bold text-[#47607a] hover:text-[#0767d8] transition-colors cursor-pointer bg-white px-3.5 py-2 rounded-xl border border-[#dce8f3] shadow-xs"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Destinations</span>
        </button>

        <div className="text-xs font-semibold text-[#64748b] hidden sm:flex items-center gap-1.5">
          <span>Destinations</span>
          <ChevronRight className="h-3 w-3" />
          <span className="text-[#0767d8] font-bold">{country.name}</span>
        </div>
      </div>

      {/* 1. Hero Banner Matching Mockup Exactly */}
      <section className="relative mx-auto max-w-7xl px-4 pt-1 sm:px-6">
        <div className="relative min-h-[360px] sm:min-h-[440px] overflow-hidden rounded-[1.75rem] bg-[#071e3d] shadow-xl">
          {/* Panoramic Landscape Background */}
          <img
            src={country.heroImage}
            alt={country.name}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,25,58,0.92)_0%,rgba(5,25,58,0.72)_50%,rgba(5,25,58,0.4)_100%)]" />

          {/* Hero Content Container */}
          <div className="relative flex min-h-[360px] sm:min-h-[440px] flex-col justify-between p-6 sm:p-10 lg:flex-row lg:items-center">
            {/* Left Column: Flag Badge, Title, Tagline, Watch Video Button */}
            <div className="max-w-xl">
              <div className="flex items-center gap-4">
                {/* Crisp Local SVG Flag in Colored Emblem Box */}
                <div className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl bg-[#e11d48] p-2.5 shadow-lg ring-2 ring-white/30">
                  <img
                    src={country.flagSvg || `/flags/${country.flagCode}.svg`}
                    alt={`${country.name} Flag`}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">{country.name}</h1>
                  <p className="mt-1 text-xs sm:text-sm font-medium text-blue-100/90">
                    {country.tagline}
                  </p>
                </div>
              </div>

              {/* Watch Video Button */}
              <div className="mt-7 flex items-center gap-3">
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="group inline-flex items-center gap-2 rounded-xl bg-[#0767d8] hover:bg-blue-600 px-5 py-3 text-xs font-bold text-white shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#0767d8]">
                    <Play className="h-2.5 w-2.5 fill-current ml-0.5" />
                  </div>
                  <span>Watch Country Video</span>
                </button>

                <span className="hidden sm:inline-block rounded-lg bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-blue-100 border border-white/20">
                  {country.region}
                </span>
              </div>
            </div>

            {/* Right Column: 3-Photo Collage Card Matching Mockup */}
            {country.collagePhotos && country.collagePhotos.length >= 3 && (
              <div className="mt-6 hidden lg:flex flex-col gap-2.5 shrink-0">
                <div className="h-24 w-52 overflow-hidden rounded-xl border-2 border-white/80 shadow-md">
                  <img
                    src={country.collagePhotos[0]}
                    alt={`${country.name} Highlight 1`}
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex gap-2.5">
                  <div className="h-20 w-[6.1rem] overflow-hidden rounded-xl border-2 border-white/80 shadow-md">
                    <img
                      src={country.collagePhotos[1]}
                      alt={`${country.name} Highlight 2`}
                      className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="h-20 w-[6.1rem] overflow-hidden rounded-xl border-2 border-white/80 shadow-md">
                    <img
                      src={country.collagePhotos[2]}
                      alt={`${country.name} Highlight 3`}
                      className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 2. Sub-Navigation Tabs & Main White Card Container */}
      <section className="mx-auto max-w-7xl px-4 pt-6 sm:px-6">
        <div className="rounded-[1.75rem] border border-[#dce8f3] bg-white p-6 sm:p-8 md:p-10 shadow-[0_8px_30px_rgba(27,77,120,0.06)]">
          {/* Horizontal Tabs with active underline */}
          <div className="flex border-b border-[#e2e8f0] overflow-x-auto text-xs sm:text-sm font-bold scrollbar-none gap-6 pb-0">
            {tabs.map((tab) => {
              const isActive = activeTab === tab
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3.5 transition-all whitespace-nowrap cursor-pointer border-b-2 font-bold flex items-center gap-1.5 ${
                    isActive
                      ? 'border-[#0767d8] text-[#0767d8]'
                      : 'border-transparent text-[#64748b] hover:text-[#18324d]'
                  }`}
                >
                  {tab === 'Videos' && <Play className="h-3 w-3 fill-current text-rose-500" />}
                  <span>{tab}</span>
                  {tab === 'Videos' && (
                    <span className="text-[10px] bg-rose-100 text-rose-600 px-1.5 py-0.5 rounded-full font-extrabold">
                      2-Min
                    </span>
                  )}
                </button>
              )
            })}
          </div>

          {/* =========================================================================
              TAB 1: OVERVIEW (Exact mockup layout)
             ========================================================================= */}
          {activeTab === 'Overview' && (
            <div className="pt-8 space-y-12 animate-fadeIn">
              {/* About Section */}
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#18324d] tracking-tight">
                  About {country.name}
                </h2>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#526c83]">
                  {country.overview}
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
                      <p className="truncate text-xs sm:text-sm font-bold text-[#18324d]">{country.capital}</p>
                    </div>
                  </div>

                  {/* Language */}
                  <div className="flex items-center gap-3 rounded-xl border border-[#e2e8f0] bg-[#f8fbfe] p-3.5 sm:p-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#e7f2fd] text-[#0767d8]">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-medium text-[#7890a5]">Language</p>
                      <p className="truncate text-xs sm:text-sm font-bold text-[#18324d]">{country.language || 'English, Local'}</p>
                    </div>
                  </div>

                  {/* Currency */}
                  <div className="flex items-center gap-3 rounded-xl border border-[#e2e8f0] bg-[#f8fbfe] p-3.5 sm:p-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#e7f2fd] text-[#0767d8]">
                      <Coins className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-medium text-[#7890a5]">Currency</p>
                      <p className="truncate text-xs sm:text-sm font-bold text-[#18324d]">{country.currency}</p>
                    </div>
                  </div>

                  {/* Population */}
                  <div className="flex items-center gap-3 rounded-xl border border-[#e2e8f0] bg-[#f8fbfe] p-3.5 sm:p-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#e7f2fd] text-[#0767d8]">
                      <Users className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-medium text-[#7890a5]">Population</p>
                      <p className="truncate text-xs sm:text-sm font-bold text-[#18324d]">{country.population || 'Multi-Million'}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Study Section */}
              <div className="pt-2">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
                  {/* Left Column: Why Study Points with Green Checkmarks */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#18324d] tracking-tight">
                      Why Study in {country.name}?
                    </h3>
                    <ul className="mt-5 space-y-4">
                      {country.whyStudy.map((point) => (
                        <li key={point} className="flex items-start gap-3 text-xs sm:text-sm font-bold text-[#18324d]">
                          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mt-0.5">
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
                      src={country.heroImage}
                      alt={`${country.name} Landscape`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <button
                      onClick={() => setActiveTab('Gallery')}
                      className="absolute bottom-4 right-4 rounded-lg bg-[#0767d8] hover:bg-blue-600 px-4 py-2 text-xs font-bold text-white shadow-lg transition-all hover:scale-105 cursor-pointer"
                    >
                      View Gallery
                    </button>
                  </div>
                </div>
              </div>

              {/* =========================================================================
                  VIDEO SECTION: 2-Min Country Tour & University Admissions Guide
                 ========================================================================= */}
              <div className="pt-2">
                <div className="rounded-3xl border border-[#dce8f3] bg-[#f8fbfe] p-5 sm:p-7 shadow-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 text-[#0767d8] px-3 py-1 text-xs font-extrabold uppercase tracking-wider mb-2">
                        <Play className="h-3 w-3 fill-current text-rose-500" />
                        <span>2-Min Virtual Tour & Admissions Video</span>
                      </div>
                      <h3 className="text-lg sm:text-2xl font-extrabold text-[#18324d] tracking-tight">
                        Experience {country.name}: Country Tour & University Admissions
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-[#526c83]">
                        Watch our 2-minute country lifestyle tour, university admission walkthroughs, and clinical campus facilities before applying.
                      </p>
                    </div>

                    <button
                      onClick={() => setActiveTab('Videos')}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0767d8] hover:text-blue-700 transition-colors cursor-pointer shrink-0 self-start sm:self-auto bg-white px-4 py-2.5 rounded-xl border border-[#dce8f3] shadow-xs"
                    >
                      <Video className="h-4 w-4" />
                      <span>Explore All Videos ({videos.length})</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    {/* Left 7 cols: Active Player & Details */}
                    <div className="lg:col-span-7 space-y-4">
                      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-lg border border-[#cbd5e1]">
                        <iframe
                          className="h-full w-full"
                          src={`https://www.youtube-nocookie.com/embed/${activeVideo.id}?rel=0`}
                          title={activeVideo.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>

                      {/* Video Info & CTAs */}
                      <div className="rounded-2xl bg-white p-4 sm:p-5 border border-[#e2e8f0] shadow-xs space-y-3">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-extrabold bg-[#e7f2fd] text-[#0767d8] px-2.5 py-1 rounded-lg">
                              {activeVideo.category}
                            </span>
                            <span className="text-[11px] font-bold bg-amber-50 text-amber-700 px-2.5 py-1 rounded-lg flex items-center gap-1 border border-amber-200">
                              <Clock className="h-3 w-3" />
                              {activeVideo.duration}
                            </span>
                            <span className="text-[10px] font-bold bg-emerald-50 text-emerald-700 px-2 py-1 rounded-lg border border-emerald-200">
                              {activeVideo.quality}
                            </span>
                          </div>

                          {activeVideo.author && (
                            <span className="text-xs font-semibold text-[#64748b]">
                              By: {activeVideo.author}
                            </span>
                          )}
                        </div>

                        <h4 className="text-base sm:text-lg font-bold text-[#18324d] leading-snug">
                          {activeVideo.title}
                        </h4>

                        <p className="text-xs text-[#526c83] leading-relaxed">
                          {activeVideo.description}
                        </p>

                        {/* Action Buttons: Apply & WhatsApp */}
                        <div className="pt-2 border-t border-[#edf2f7] flex flex-wrap items-center justify-between gap-3">
                          <div className="flex items-center gap-2.5 flex-wrap">
                            <button
                              onClick={() => setIsFastApplyOpen(true)}
                              className="inline-flex items-center gap-2 rounded-xl bg-[#0767d8] hover:bg-blue-600 text-white px-5 py-2.5 text-xs font-bold shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
                            >
                              <GraduationCap className="h-4 w-4" />
                              <span>Apply for Admission</span>
                              <ArrowRight className="h-3.5 w-3.5" />
                            </button>

                            <a
                              href={`https://wa.me/${BRAND_INFO.whatsapp}?text=${encodeURIComponent(
                                `Hello ED-WISE, I am interested in admission for ${country.name}. I watched your video "${activeVideo.title}". Please guide me.`
                              )}`}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1.5 rounded-xl border border-emerald-600/30 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 px-4 py-2.5 text-xs font-bold transition-all cursor-pointer"
                            >
                              <Phone className="h-3.5 w-3.5" />
                              <span>Ask on WhatsApp</span>
                            </a>
                          </div>

                          <button
                            onClick={() => setActiveTab('Admission')}
                            className="text-xs font-bold text-[#47607a] hover:text-[#0767d8] inline-flex items-center gap-1 cursor-pointer"
                          >
                            <span>View Requirements</span>
                            <ChevronRight className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Right 5 cols: Video Playlist Selector */}
                    <div className="lg:col-span-5 space-y-3">
                      <div className="flex items-center justify-between pb-1">
                        <span className="text-xs font-bold text-[#18324d] uppercase tracking-wider">
                          Video Playlist ({videos.length})
                        </span>
                        <span className="text-[11px] font-medium text-[#64748b]">
                          Click to play
                        </span>
                      </div>

                      <div className="space-y-2.5">
                        {videos.map((vid, idx) => {
                          const isSelected = idx === activeVideoIndex
                          return (
                            <div
                              key={vid.id}
                              onClick={() => setActiveVideoIndex(idx)}
                              className={`group flex items-start gap-3 p-3 rounded-2xl border transition-all cursor-pointer ${
                                isSelected
                                  ? 'border-[#0767d8] bg-white shadow-md ring-2 ring-[#0767d8]/15'
                                  : 'border-[#e2e8f0] bg-white/70 hover:bg-white hover:border-[#cbd5e1]'
                              }`}
                            >
                              {/* Thumbnail with overlay play */}
                              <div className="relative w-28 sm:w-32 h-20 shrink-0 rounded-xl overflow-hidden bg-slate-900">
                                <img
                                  src={`https://img.youtube.com/vi/${vid.id}/mqdefault.jpg`}
                                  alt={vid.title}
                                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                                  loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                                  <div className={`flex h-7 w-7 items-center justify-center rounded-full text-white shadow-md ${
                                    isSelected ? 'bg-[#0767d8]' : 'bg-black/60 group-hover:bg-[#0767d8]'
                                  }`}>
                                    <Play className="h-3 w-3 fill-current ml-0.5" />
                                  </div>
                                </div>
                                <span className="absolute bottom-1 right-1 text-[9px] font-bold bg-black/80 text-white px-1.5 py-0.5 rounded">
                                  {vid.duration}
                                </span>
                              </div>

                              {/* Card Content */}
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-1.5 mb-1">
                                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                                    isSelected
                                      ? 'bg-blue-100 text-[#0767d8]'
                                      : 'bg-slate-100 text-slate-600'
                                  }`}>
                                    {vid.category}
                                  </span>
                                  {isSelected && (
                                    <span className="text-[10px] font-extrabold text-emerald-600 animate-pulse">
                                      • Now Playing
                                    </span>
                                  )}
                                </div>
                                <h5 className={`text-xs font-bold line-clamp-2 leading-snug transition-colors ${
                                  isSelected ? 'text-[#0767d8]' : 'text-[#18324d] group-hover:text-[#0767d8]'
                                }`}>
                                  {vid.title}
                                </h5>
                                <div className="mt-2 flex items-center justify-between">
                                  <span className="text-[10px] text-[#7890a5]">
                                    {vid.quality}
                                  </span>
                                  <span className="text-[11px] font-bold text-[#0767d8] group-hover:underline">
                                    {isSelected ? 'Watching' : 'Play Video'}
                                  </span>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>

                      {/* Mini Admission Callout inside playlist */}
                      <div className="rounded-2xl border border-blue-200 bg-linear-to-r from-blue-50 to-indigo-50 p-3.5 flex items-center justify-between gap-3">
                        <div>
                          <p className="text-xs font-bold text-[#18324d]">Ready for 2026 Intake?</p>
                          <p className="text-[11px] text-[#526c83]">Guaranteed offer letter in 3-5 days.</p>
                        </div>
                        <button
                          onClick={() => setIsFastApplyOpen(true)}
                          className="shrink-0 text-xs font-bold bg-[#0767d8] text-white px-3.5 py-2 rounded-xl shadow-xs hover:bg-blue-600 cursor-pointer"
                        >
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Major Cities Section */}
              {majorCities.length > 0 && (
                <div className="pt-4">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#18324d] tracking-tight">Major Cities</h3>
                    <button
                      onClick={() => setActiveTab('Cities')}
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
                        onClick={() => handleCityClick(city.id)}
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
              )}

              {/* Bottom CTA Banner */}
              <div className="overflow-hidden rounded-2xl bg-[linear-gradient(90deg,rgba(15,23,60,0.96)_0%,rgba(30,27,75,0.92)_50%,rgba(15,23,60,0.96)_100%)] p-6 sm:p-8 md:p-10 text-white shadow-xl">
                <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
                      Ready to Study in {country.name}?
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
          )}

          {/* =========================================================================
              TAB: VIDEOS (Country Tour 2-Min, University Admission Guides, Campus Tours)
             ========================================================================= */}
          {activeTab === 'Videos' && (
            <div className="pt-8 space-y-10 animate-fadeIn">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 text-[#0767d8] px-3 py-1 text-xs font-extrabold uppercase tracking-wider mb-2">
                    <Play className="h-3 w-3 fill-current text-rose-500" />
                    <span>Official Video Cinema</span>
                  </div>
                  <h2 className="text-xl sm:text-3xl font-extrabold text-[#18324d] tracking-tight">
                    {country.name} Video Hub: 2-Minute Tours & Admissions
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm text-[#526c83] max-w-3xl">
                    Explore high-definition 2-minute country landscape tours, accredited medical and engineering campus walkthroughs, and step-by-step admission requirement tutorials.
                  </p>
                </div>

                <button
                  onClick={() => setIsFastApplyOpen(true)}
                  className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-[#0767d8] hover:bg-blue-600 text-white px-6 py-3 text-xs sm:text-sm font-bold shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <GraduationCap className="h-4 w-4" />
                  <span>Apply for Admission</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              {/* Filter Pills */}
              <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-[#edf2f7]">
                {['All', 'Country Tour (2-Min)', 'University Admissions', 'Campus & Labs', 'Student Life'].map((category) => {
                  const isCatActive = videoCategoryFilter === category
                  const count = category === 'All' ? videos.length : videos.filter((v) => v.category === category).length
                  if (category !== 'All' && count === 0) return null
                  return (
                    <button
                      key={category}
                      onClick={() => setVideoCategoryFilter(category)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                        isCatActive
                          ? 'bg-[#0767d8] text-white shadow-md'
                          : 'bg-[#f1f6fb] text-[#47607a] hover:bg-[#e2edf8]'
                      }`}
                    >
                      <span>{category}</span>
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        isCatActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                      }`}>
                        {count}
                      </span>
                    </button>
                  )
                })}
              </div>

              {/* Main Theater Display */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Cinema Screen (8 cols) */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="relative aspect-video w-full overflow-hidden rounded-3xl bg-black shadow-2xl border-2 border-[#18324d]/10">
                    <iframe
                      className="h-full w-full"
                      src={`https://www.youtube-nocookie.com/embed/${activeVideo.id}?autoplay=1&rel=0`}
                      title={activeVideo.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>

                  <div className="rounded-2xl border border-[#dce8f3] bg-white p-6 shadow-xs space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <span className="rounded-lg bg-[#e7f2fd] px-3 py-1 text-xs font-extrabold text-[#0767d8]">
                          {activeVideo.category}
                        </span>
                        <span className="rounded-lg bg-amber-50 px-2.5 py-1 text-xs font-bold text-amber-700 border border-amber-200 flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {activeVideo.duration}
                        </span>
                        <span className="rounded-lg bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700 border border-emerald-200">
                          {activeVideo.quality}
                        </span>
                      </div>
                      {activeVideo.author && (
                        <span className="text-xs font-semibold text-[#64748b]">
                          Channel / Creator: <span className="text-[#18324d] font-bold">{activeVideo.author}</span>
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#18324d] leading-snug">
                      {activeVideo.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#526c83] leading-relaxed">
                      {activeVideo.description}
                    </p>

                    {/* Prominent Action Bar */}
                    <div className="pt-4 border-t border-[#edf2f7] flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-3 flex-wrap">
                        <button
                          onClick={() => setIsFastApplyOpen(true)}
                          className="inline-flex items-center gap-2 rounded-xl bg-[#0767d8] hover:bg-blue-600 text-white px-6 py-3 text-xs font-bold shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
                        >
                          <GraduationCap className="h-4 w-4" />
                          <span>Apply for Admission in {country.name}</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </button>

                        <a
                          href={`https://wa.me/${BRAND_INFO.whatsapp}?text=${encodeURIComponent(
                            `Hello ED-WISE, I watched the ${country.name} video "${activeVideo.title}". I want to apply for university admission.`
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl border border-emerald-600/30 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 px-5 py-3 text-xs font-bold transition-all cursor-pointer"
                        >
                          <Phone className="h-4 w-4" />
                          <span>Speak to Counselor on WhatsApp</span>
                        </a>
                      </div>

                      <button
                        onClick={() => setActiveTab('Universities')}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0767d8] hover:underline cursor-pointer"
                      >
                        <Building2 className="h-4 w-4" />
                        <span>View {country.name} Universities</span>
                        <ChevronRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Sidebar Playlist (4 cols) */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="rounded-2xl border border-[#dce8f3] bg-[#f8fbfe] p-5 space-y-4 shadow-xs">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-extrabold text-[#18324d] uppercase tracking-wider">
                        Available Videos ({videos.length})
                      </h4>
                      <span className="text-[11px] font-medium text-[#0767d8]">
                        Instant Switch
                      </span>
                    </div>

                    <div className="space-y-3">
                      {videos
                        .filter((v) => videoCategoryFilter === 'All' || v.category === videoCategoryFilter)
                        .map((vid) => {
                          const idx = videos.findIndex((item) => item.id === vid.id)
                          const isSelected = idx === activeVideoIndex
                          return (
                            <div
                              key={vid.id}
                              onClick={() => setActiveVideoIndex(idx)}
                              className={`group flex items-start gap-3 p-3 rounded-2xl border transition-all cursor-pointer ${
                                isSelected
                                  ? 'border-[#0767d8] bg-white shadow-md ring-2 ring-[#0767d8]/20'
                                  : 'border-[#e2e8f0] bg-white/70 hover:bg-white hover:border-[#cbd5e1]'
                              }`}
                            >
                              <div className="relative w-28 h-20 shrink-0 rounded-xl overflow-hidden bg-slate-900">
                                <img
                                  src={`https://img.youtube.com/vi/${vid.id}/mqdefault.jpg`}
                                  alt={vid.title}
                                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                                  loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                                  <div className={`flex h-7 w-7 items-center justify-center rounded-full text-white shadow-md ${
                                    isSelected ? 'bg-[#0767d8]' : 'bg-black/60 group-hover:bg-[#0767d8]'
                                  }`}>
                                    <Play className="h-3 w-3 fill-current ml-0.5" />
                                  </div>
                                </div>
                                <span className="absolute bottom-1 right-1 text-[9px] font-bold bg-black/80 text-white px-1.5 py-0.5 rounded">
                                  {vid.duration}
                                </span>
                              </div>

                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-1.5 mb-1">
                                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                                    isSelected
                                      ? 'bg-blue-100 text-[#0767d8]'
                                      : 'bg-slate-100 text-slate-600'
                                  }`}>
                                    {vid.category}
                                  </span>
                                  {isSelected && (
                                    <span className="text-[10px] font-extrabold text-emerald-600 animate-pulse">
                                      • Playing
                                    </span>
                                  )}
                                </div>
                                <h5 className={`text-xs font-bold line-clamp-2 leading-snug transition-colors ${
                                  isSelected ? 'text-[#0767d8]' : 'text-[#18324d] group-hover:text-[#0767d8]'
                                }`}>
                                  {vid.title}
                                </h5>
                                <div className="mt-2 flex items-center justify-between">
                                  <span className="text-[10px] text-[#7890a5]">
                                    {vid.quality}
                                  </span>
                                  <span className="text-[11px] font-bold text-[#0767d8]">
                                    {isSelected ? 'Now Selected' : 'Play Now'}
                                  </span>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                    </div>
                  </div>

                  {/* Fast Admission Advisory Box */}
                  <div className="rounded-2xl border border-emerald-200 bg-linear-to-br from-emerald-50 to-teal-50 p-5 space-y-3">
                    <div className="flex items-center gap-2 text-emerald-800">
                      <ShieldCheck className="h-5 w-5 text-emerald-600" />
                      <h4 className="text-xs font-bold uppercase tracking-wider">
                        ED-WISE Admission Guarantee
                      </h4>
                    </div>
                    <ul className="space-y-2 text-xs text-[#285346]">
                      <li className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0 stroke-[3]" />
                        <span>Official Ministry admission offer in 3-5 days</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0 stroke-[3]" />
                        <span>No entry test or IELTS mandatory</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0 stroke-[3]" />
                        <span>WHO, WFME & PMDC / ECFMG recognized degrees</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0 stroke-[3]" />
                        <span>Guaranteed express student visa invitation</span>
                      </li>
                    </ul>
                    <button
                      onClick={() => setIsFastApplyOpen(true)}
                      className="w-full rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 text-xs font-bold shadow-sm transition-all cursor-pointer text-center block"
                    >
                      Start Free Admission Evaluation
                    </button>
                  </div>
                </div>
              </div>

              {/* What to Check Before Applying Card */}
              <div className="rounded-3xl border border-[#e2e8f0] bg-white p-6 sm:p-8 shadow-xs">
                <h3 className="text-lg sm:text-xl font-extrabold text-[#18324d] tracking-tight mb-2">
                  What International Students Should Check in Videos Before Applying
                </h3>
                <p className="text-xs sm:text-sm text-[#526c83] mb-6">
                  Here is what our academic counselors advise you to review in the tours above:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    {
                      icon: ShieldCheck,
                      color: 'text-blue-600 bg-blue-50',
                      title: 'Accreditation & License',
                      desc: 'Check that the university is recognized by WHO, WFME, and national health ministries for global practice.'
                    },
                    {
                      icon: Building2,
                      color: 'text-indigo-600 bg-indigo-50',
                      title: 'Clinical Hospital Beds',
                      desc: 'Observe affiliated teaching hospitals, patient flow, and practical simulation laboratories.'
                    },
                    {
                      icon: Users,
                      color: 'text-amber-600 bg-amber-50',
                      title: 'Hostel & Halal Food',
                      desc: 'Ensure student residences offer 24/7 security, heating, Wi-Fi, and convenient halal mess facilities.'
                    },
                    {
                      icon: FileCheck,
                      color: 'text-emerald-600 bg-emerald-50',
                      title: 'English-Medium Faculty',
                      desc: 'Verify that 100% of lectures, practical exams, and textbooks are conducted in the English medium.'
                    }
                  ].map((tip, idx) => {
                    const Icon = tip.icon
                    return (
                      <div key={idx} className="rounded-2xl border border-[#edf2f7] bg-[#f8fbfe] p-5 space-y-2.5">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${tip.color}`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <h4 className="text-sm font-bold text-[#18324d]">{tip.title}</h4>
                        <p className="text-xs text-[#526c83] leading-relaxed">{tip.desc}</p>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Bottom Apply Banner */}
              <div className="overflow-hidden rounded-3xl bg-linear-to-r from-[#071e3d] via-[#09254d] to-[#071e3d] p-6 sm:p-10 text-white shadow-xl">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                  <div className="max-w-2xl">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/20 text-blue-300 px-3 py-1 text-xs font-bold uppercase tracking-wider mb-3">
                      <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                      Direct University Admission 2026
                    </span>
                    <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
                      Ready to take admission in {country.name}?
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-blue-200/90 leading-relaxed">
                      ED-WISE CONSULTANCY provides complete end-to-end support: university selection, direct admission letter, visa invitation, foreign exchange assistance, and airport pickup.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full sm:w-auto">
                    <button
                      onClick={() => setIsFastApplyOpen(true)}
                      className="rounded-xl bg-[#0767d8] hover:bg-blue-600 text-white px-7 py-3.5 text-xs sm:text-sm font-bold shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer text-center"
                    >
                      Apply for Admission Now
                    </button>
                    <button
                      onClick={() => onNavigate('contact')}
                      className="rounded-xl border border-white/25 bg-white/10 hover:bg-white/20 text-white px-6 py-3.5 text-xs sm:text-sm font-bold backdrop-blur-xs transition-all cursor-pointer text-center"
                    >
                      Request Prospectus
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* =========================================================================
              TAB 2: CITIES
             ========================================================================= */}
          {activeTab === 'Cities' && (
            <div className="pt-8 space-y-8 animate-fadeIn">
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#18324d] tracking-tight">
                  Major Educational Cities in {country.name}
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-[#526c83]">
                  Explore top student destinations, cost of living, safe neighborhoods, and university campuses.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {majorCities.map((city) => (
                  <div
                    key={city.id}
                    className="rounded-2xl border border-[#e2e8f0] bg-white overflow-hidden shadow-sm hover:shadow-md transition-all group"
                  >
                    <div className="relative h-48 overflow-hidden bg-slate-100">
                      <img
                        src={city.image}
                        alt={city.name}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-[#0767d8] text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-sm">
                        {city.subtitle}
                      </div>
                    </div>
                    <div className="p-5 space-y-3">
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4 text-[#0767d8]" />
                        <h3 className="text-base font-bold text-[#18324d]">{city.name}</h3>
                      </div>
                      <p className="text-xs text-[#526c83] leading-relaxed">
                        Major academic hub with convenient transit, vibrant international student community, and affordable hostels.
                      </p>
                      <div className="pt-2 border-t border-[#edf2f7] flex items-center justify-between">
                        <button
                          onClick={() => handleCityClick(city.id)}
                          className="text-xs font-bold text-[#0767d8] hover:text-blue-700 inline-flex items-center gap-1 cursor-pointer"
                        >
                          <span>{city.id === 'bishkek' ? 'Explore City Guide' : 'View Universities'}</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                        <span className="text-[11px] text-[#7890a5]">Student Friendly</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* =========================================================================
              TAB 3: UNIVERSITIES
             ========================================================================= */}
          {activeTab === 'Universities' && (
            <div className="pt-8 space-y-8 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#18324d] tracking-tight">
                    Universities & Academies in {country.name}
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm text-[#526c83]">
                    WHO, WFME, and globally recognized institutions accredited for international practice.
                  </p>
                </div>
                <button
                  onClick={() => onNavigate('universities')}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#0767d8] hover:text-blue-700 cursor-pointer self-start sm:self-auto"
                >
                  <span>Explore All Global Universities</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              {countryUniversities.length > 0 ? (
                <div className="space-y-6">
                  {countryUniversities.map((uni) => (
                    <div
                      key={uni.id}
                      className="rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-sm hover:shadow-md transition-all flex flex-col lg:flex-row gap-6"
                    >
                      {/* Left: Uni Photo */}
                      <div className="lg:w-72 shrink-0 h-44 rounded-xl overflow-hidden relative bg-slate-100">
                        <img
                          src={uni.heroImage || uni.photos?.[0]}
                          alt={uni.name}
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute top-3 left-3 bg-[#0767d8] text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                          {uni.type}
                        </div>
                      </div>

                      {/* Middle: Details */}
                      <div className="flex-1 space-y-3">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="text-base sm:text-lg font-bold text-[#18324d]">{uni.name}</h3>
                            <div className="flex items-center gap-3 text-xs text-[#64748b] mt-1">
                              <span className="flex items-center gap-1">
                                <MapPin className="h-3.5 w-3.5 text-[#0767d8]" />
                                {uni.city}, {country.name}
                              </span>
                              <span>•</span>
                              <span>Est. {uni.established}</span>
                              <span>•</span>
                              <span className="text-emerald-600 font-semibold">{uni.ranking}</span>
                            </div>
                          </div>
                        </div>

                        <p className="text-xs text-[#526c83] line-clamp-2 leading-relaxed">
                          {uni.overview}
                        </p>

                        {/* Programs Badges */}
                        <div className="flex flex-wrap gap-2 pt-1">
                          {uni.programs?.map((prog, i) => (
                            <span
                              key={i}
                              className="text-[11px] font-medium bg-[#f1f6fb] text-[#2c5270] px-2.5 py-1 rounded-md border border-[#dbe7f2]"
                            >
                              {prog.name} ({prog.duration})
                            </span>
                          ))}
                        </div>

                        {/* Financial highlights & action */}
                        <div className="pt-3 border-t border-[#edf2f7] flex flex-wrap items-center justify-between gap-3">
                          <div className="flex items-center gap-4 text-xs">
                            <div>
                              <span className="text-[#7890a5] block text-[11px]">Tuition Fee:</span>
                              <span className="font-bold text-[#0767d8] text-sm">{uni.tuitionFee}</span>
                            </div>
                            <div className="hidden sm:block">
                              <span className="text-[#7890a5] block text-[11px]">Hostel:</span>
                              <span className="font-semibold text-[#18324d]">{uni.hostelFee}</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            {onSelectEntity && (
                              <button
                                onClick={() => onSelectEntity('university', uni.id)}
                                className="px-4 py-2 rounded-xl text-xs font-bold border border-[#0767d8] text-[#0767d8] hover:bg-blue-50 cursor-pointer"
                              >
                                View Details
                              </button>
                            )}
                            <button
                              onClick={() => onNavigate('apply')}
                              className="px-5 py-2 rounded-xl text-xs font-bold bg-[#0767d8] hover:bg-blue-600 text-white shadow-sm cursor-pointer"
                            >
                              Apply Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl border border-dashed border-[#cbd5e1] p-10 text-center space-y-4 bg-[#f8fbfe]">
                  <GraduationCap className="h-12 w-12 text-[#0767d8] mx-auto opacity-70" />
                  <h3 className="text-base font-bold text-[#18324d]">
                    Official University Intake Open for {country.name}
                  </h3>
                  <p className="text-xs text-[#526c83] max-w-md mx-auto">
                    ED-WISE CONSULTANCY partners directly with accredited institutions across {country.name}. Contact our admissions office for the full institutional roster.
                  </p>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="rounded-xl bg-[#0767d8] text-white px-5 py-2.5 text-xs font-bold shadow-md cursor-pointer hover:bg-blue-600"
                  >
                    Request University Prospectus
                  </button>
                </div>
              )}
            </div>
          )}

          {/* =========================================================================
              TAB 4: ADMISSION
             ========================================================================= */}
          {activeTab === 'Admission' && (
            <div className="pt-8 space-y-10 animate-fadeIn">
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#18324d] tracking-tight">
                  Admission Process & Eligibility for {country.name}
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-[#526c83]">
                  A transparent, step-by-step roadmap from initial document evaluation to guaranteed university admission.
                </p>
              </div>

              {/* 4 Steps Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    step: '01',
                    title: 'Document Submission',
                    desc: 'Submit scanned FSc Pre-Medical / High School marksheet and valid passport copy.'
                  },
                  {
                    step: '02',
                    title: 'Eligibility Check',
                    desc: 'Our academic counselors evaluate your grades against university admission criteria.'
                  },
                  {
                    step: '03',
                    title: 'Official Offer Letter',
                    desc: 'Receive official provisional admission letter from the university in 3-5 working days.'
                  },
                  {
                    step: '04',
                    title: 'Visa & Fly',
                    desc: 'Government invitation issued, express student visa stamped, and departure coordinated.'
                  }
                ].map((s) => (
                  <div key={s.step} className="rounded-2xl border border-[#e2e8f0] bg-[#f8fbfe] p-5 space-y-2">
                    <span className="text-2xl font-black text-[#0767d8]">{s.step}</span>
                    <h3 className="text-sm font-bold text-[#18324d]">{s.title}</h3>
                    <p className="text-xs text-[#526c83] leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>

              {/* Watch Admission Video Guide Callout */}
              <div className="rounded-2xl border border-blue-200 bg-linear-to-r from-blue-50 via-[#f0f7ff] to-indigo-50 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#0767d8] text-white shadow-md">
                    <Play className="h-5 w-5 fill-current ml-0.5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-extrabold bg-blue-100 text-[#0767d8] px-2 py-0.5 rounded">
                        ADMISSION VIDEO GUIDE
                      </span>
                      <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded">
                        Step-by-Step
                      </span>
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-[#18324d] mt-1">
                      Watch: How to Take Admission in {country.name} Universities
                    </h4>
                    <p className="text-xs text-[#526c83] mt-0.5">
                      Visual guide on documents, eligibility evaluation, ministry approval & visa arrival.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      const admIndex = videos.findIndex(v => v.category === 'University Admissions');
                      if (admIndex >= 0) setActiveVideoIndex(admIndex);
                      setActiveTab('Videos');
                    }}
                    className="flex-1 sm:flex-initial rounded-xl bg-[#0767d8] hover:bg-blue-600 text-white px-4 py-2.5 text-xs font-bold shadow-xs cursor-pointer text-center"
                  >
                    Watch Admission Video
                  </button>
                  <button
                    onClick={() => setIsFastApplyOpen(true)}
                    className="flex-1 sm:flex-initial rounded-xl bg-white border border-[#0767d8] text-[#0767d8] hover:bg-blue-50 px-4 py-2.5 text-xs font-bold cursor-pointer text-center"
                  >
                    Apply Now
                  </button>
                </div>
              </div>

              {/* Required Documents & Key Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <div className="rounded-2xl border border-[#e2e8f0] p-6 bg-white space-y-4">
                  <h3 className="text-base font-bold text-[#18324d] flex items-center gap-2">
                    <FileCheck className="h-5 w-5 text-[#0767d8]" />
                    <span>Required Documents Checklist</span>
                  </h3>
                  <ul className="space-y-3 text-xs text-[#526c83]">
                    {country.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-[#e2e8f0] p-6 bg-white space-y-4">
                  <h3 className="text-base font-bold text-[#18324d] flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-[#0767d8]" />
                    <span>Intake Cycles & Deadlines</span>
                  </h3>
                  <div className="space-y-3 text-xs">
                    <div className="p-3 rounded-xl bg-[#f1f6fb] border border-[#dbe7f2]">
                      <p className="font-bold text-[#18324d]">Fall Intake (Primary):</p>
                      <p className="text-[#526c83]">Applications open May - October. Classes commence September/October.</p>
                    </div>
                    <div className="p-3 rounded-xl bg-[#f1f6fb] border border-[#dbe7f2]">
                      <p className="font-bold text-[#18324d]">Spring Intake (Secondary):</p>
                      <p className="text-[#526c83]">Applications open November - February. Classes commence February/March.</p>
                    </div>
                  </div>
                  <button
                    onClick={() => onNavigate('apply')}
                    className="w-full mt-2 rounded-xl bg-[#0767d8] hover:bg-blue-600 text-white font-bold py-3 text-xs shadow-md transition-all cursor-pointer"
                  >
                    Start Online Application for {country.name}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* =========================================================================
              TAB 5: VISA
             ========================================================================= */}
          {activeTab === 'Visa' && (
            <div className="pt-8 space-y-8 animate-fadeIn">
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#18324d] tracking-tight">
                  Student Visa Guidance for {country.name}
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-[#526c83]">
                  Official consular regulations, invitation processing, and embassy clearance support.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e2e8f0] bg-[#f8fbfe] p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e7f2fd] text-[#0767d8]">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#18324d]">Official Visa Procedure</h3>
                    <p className="text-xs text-[#7890a5]">Verified via Ministry of Education & Foreign Affairs</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#526c83] leading-relaxed">
                  {country.visaGuidance}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-xl border border-[#e2e8f0] p-4 bg-white">
                  <p className="text-[11px] font-medium text-[#7890a5]">Processing Time</p>
                  <p className="text-sm font-bold text-[#18324d] mt-1">7 - 14 Business Days</p>
                </div>
                <div className="rounded-xl border border-[#e2e8f0] p-4 bg-white">
                  <p className="text-[11px] font-medium text-[#7890a5]">Visa Success Rate</p>
                  <p className="text-sm font-bold text-emerald-600 mt-1">99.2% via ED-WISE</p>
                </div>
                <div className="rounded-xl border border-[#e2e8f0] p-4 bg-white">
                  <p className="text-[11px] font-medium text-[#7890a5]">Airport Reception</p>
                  <p className="text-sm font-bold text-[#18324d] mt-1">Guaranteed in {country.capital}</p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-base font-bold">Need Express Visa Assistance?</h3>
                  <p className="text-xs text-blue-200 mt-0.5">Our consular team handles student invitations directly.</p>
                </div>
                <a
                  href={`https://wa.me/${BRAND_INFO.whatsapp}?text=${encodeURIComponent(`Hello ED-WISE team, I would like visa consultation for studying in ${country.name}.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 font-bold text-xs text-white shadow-md cursor-pointer transition-all"
                >
                  Chat with Visa Counselor
                </a>
              </div>
            </div>
          )}

          {/* =========================================================================
              TAB 6: COST OF LIVING
             ========================================================================= */}
          {activeTab === 'Cost of Living' && (
            <div className="pt-8 space-y-8 animate-fadeIn">
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#18324d] tracking-tight">
                  Estimated Cost of Living in {country.name}
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-[#526c83]">
                  Budget breakdown including student hostel, dining, public transport, and personal expenses.
                </p>
              </div>

              {/* Monthly Overview Card */}
              <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-[#eff6ff] to-[#f8fbfe] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-[#0767d8] uppercase tracking-wider">Average Total Monthly Budget</span>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#18324d] mt-1">{country.livingCostMonthly}</h3>
                  <p className="text-xs text-[#526c83] mt-0.5">Varies slightly depending on city and personal lifestyle.</p>
                </div>
                <div className="rounded-xl bg-white border border-[#dce8f3] px-4 py-3 text-center">
                  <span className="text-[11px] text-[#7890a5] block font-medium">Part-Time Work Rights</span>
                  <span className="text-xs font-bold text-emerald-600">{country.partTimeWork}</span>
                </div>
              </div>

              {/* Itemized Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="rounded-xl border border-[#e2e8f0] p-4 bg-white space-y-1">
                  <span className="text-[11px] font-medium text-[#7890a5]">Student Hostel / Dorm</span>
                  <p className="text-sm font-bold text-[#18324d]">$50 - $120 / month</p>
                  <p className="text-[11px] text-[#526c83]">Furnished with heating & WiFi</p>
                </div>
                <div className="rounded-xl border border-[#e2e8f0] p-4 bg-white space-y-1">
                  <span className="text-[11px] font-medium text-[#7890a5]">Food & Mess (Halal)</span>
                  <p className="text-sm font-bold text-[#18324d]">$80 - $150 / month</p>
                  <p className="text-[11px] text-[#526c83]">Campus dining & local groceries</p>
                </div>
                <div className="rounded-xl border border-[#e2e8f0] p-4 bg-white space-y-1">
                  <span className="text-[11px] font-medium text-[#7890a5]">Local Transportation</span>
                  <p className="text-sm font-bold text-[#18324d]">$10 - $25 / month</p>
                  <p className="text-[11px] text-[#526c83]">Subsidized student cards</p>
                </div>
                <div className="rounded-xl border border-[#e2e8f0] p-4 bg-white space-y-1">
                  <span className="text-[11px] font-medium text-[#7890a5]">Utilities & SIM Card</span>
                  <p className="text-sm font-bold text-[#18324d]">$15 - $30 / month</p>
                  <p className="text-[11px] text-[#526c83]">High-speed mobile data</p>
                </div>
              </div>
            </div>
          )}

          {/* =========================================================================
              TAB 7: GALLERY
             ========================================================================= */}
          {activeTab === 'Gallery' && (
            <div className="pt-8 space-y-8 animate-fadeIn">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#18324d] tracking-tight">
                    {country.name} Photo Gallery
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm text-[#526c83]">
                    Campuses, student accommodations, historic landmarks, and scenic landscapes.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {galleryPhotos.map((photo, i) => (
                  <div
                    key={i}
                    onClick={() => setLightboxImage(photo.url)}
                    className="group relative h-56 rounded-2xl overflow-hidden border border-[#e2e8f0] bg-slate-100 cursor-pointer shadow-sm hover:shadow-md"
                  >
                    <img
                      src={photo.url}
                      alt={photo.caption}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <p className="text-xs font-bold leading-snug">{photo.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* =========================================================================
              TAB 8: CONTACT
             ========================================================================= */}
          {activeTab === 'Contact' && (
            <div className="pt-8 space-y-8 animate-fadeIn">
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#18324d] tracking-tight">
                  Consultation for {country.name}
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-[#526c83]">
                  Speak directly with Dr. Ahmed Bilal and the ED-WISE admission team.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Contact Cards */}
                <div className="space-y-4">
                  <div className="rounded-2xl border border-[#e2e8f0] bg-[#f8fbfe] p-6 space-y-4">
                    <h3 className="text-base font-bold text-[#18324d]">Central Asia & Global Head Office</h3>
                    <div className="space-y-3 text-xs text-[#526c83]">
                      <div className="flex items-center gap-3">
                        <MapPin className="h-4 w-4 text-[#0767d8]" />
                        <span>{BRAND_INFO.headquarters}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="h-4 w-4 text-[#0767d8]" />
                        <span>CEO: {BRAND_INFO.ceo}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-4 w-4 text-[#0767d8]" />
                        <span>{BRAND_INFO.phones.join(' / ')}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MessageSquare className="h-4 w-4 text-[#0767d8]" />
                        <span>{BRAND_INFO.email}</span>
                      </div>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/${BRAND_INFO.whatsapp}?text=${encodeURIComponent(`Hi Dr. Ahmed Bilal, I want guidance regarding studying in ${country.name}.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 text-xs shadow-md transition-all cursor-pointer"
                  >
                    <span>Instant WhatsApp Consultation</span>
                  </a>
                </div>

                {/* Quick Inquiry Form */}
                <div className="rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-sm">
                  <h3 className="text-base font-bold text-[#18324d] mb-4">Send Admission Query</h3>
                  {formSubmitted ? (
                    <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-5 text-center text-emerald-800 text-xs space-y-2">
                      <Check className="h-8 w-8 text-emerald-600 mx-auto" />
                      <p className="font-bold">Inquiry Sent Successfully!</p>
                      <p>Our counselor for {country.name} will contact you via WhatsApp shortly.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleInquirySubmit} className="space-y-3.5">
                      <div>
                        <label className="block text-[11px] font-bold text-[#47607a] mb-1">Student Full Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Ali Ahmed"
                          className="w-full rounded-xl border border-[#dce8f3] bg-[#f8fbfe] px-3.5 py-2.5 text-xs text-[#18324d] focus:border-[#0767d8] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-[#47607a] mb-1">WhatsApp / Phone Number</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+92 300 1234567"
                          className="w-full rounded-xl border border-[#dce8f3] bg-[#f8fbfe] px-3.5 py-2.5 text-xs text-[#18324d] focus:border-[#0767d8] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-[#47607a] mb-1">Program of Interest</label>
                        <select
                          value={formData.program}
                          onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                          className="w-full rounded-xl border border-[#dce8f3] bg-[#f8fbfe] px-3.5 py-2.5 text-xs text-[#18324d] focus:border-[#0767d8] focus:outline-none"
                        >
                          <option>MBBS / General Medicine</option>
                          <option>BDS / Dentistry</option>
                          <option>Computer Science / AI</option>
                          <option>Engineering & Technology</option>
                          <option>Business Administration</option>
                          <option>PhD / Doctoral Studies</option>
                        </select>
                      </div>
                      <button
                        type="submit"
                        className="w-full rounded-xl bg-[#0767d8] hover:bg-blue-600 text-white font-bold py-3 text-xs shadow-md transition-all cursor-pointer mt-2"
                      >
                        Submit Inquiry for {country.name}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Video Modal with Playlist Switcher & Apply Action */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-xs">
          <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-[#071e3d] p-5 sm:p-7 text-white shadow-2xl border border-white/10">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 text-slate-300 hover:text-white cursor-pointer z-10 p-1.5 rounded-full hover:bg-white/10"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="flex flex-wrap items-center gap-2 pr-10 mb-3">
              <span className="text-[10px] font-extrabold uppercase bg-[#0767d8] text-white px-2.5 py-0.5 rounded-md">
                {activeVideo.category}
              </span>
              <span className="text-[10px] font-bold bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-md">
                {activeVideo.duration}
              </span>
              <h3 className="text-base sm:text-xl font-bold truncate">
                {activeVideo.title}
              </h3>
            </div>

            {/* Video switcher tabs inside modal */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none mb-3">
              {videos.map((vid, idx) => (
                <button
                  key={vid.id}
                  onClick={() => setActiveVideoIndex(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
                    idx === activeVideoIndex
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/10 text-blue-100 hover:bg-white/20'
                  }`}
                >
                  <Play className="h-2.5 w-2.5 fill-current" />
                  <span>{vid.category}</span>
                </button>
              ))}
            </div>

            {/* Video Player */}
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-inner">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.id}?autoplay=1&rel=0`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Modal Footer Actions */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs text-blue-200/80 line-clamp-1 max-w-md">
                {activeVideo.description}
              </p>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setIsVideoModalOpen(false)
                    setIsFastApplyOpen(true)
                  }}
                  className="rounded-xl bg-[#0767d8] hover:bg-blue-600 text-white px-5 py-2.5 text-xs font-bold shadow-md cursor-pointer transition-all hover:scale-105"
                >
                  Apply for Admission
                </button>
                <button
                  onClick={() => {
                    setIsVideoModalOpen(false)
                    setActiveTab('Videos')
                  }}
                  className="rounded-xl bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 text-xs font-bold cursor-pointer transition-all"
                >
                  View All Videos
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fast Apply for Admission Modal */}
      {isFastApplyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-xs">
          <div className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white p-6 sm:p-8 text-[#18324d] shadow-2xl animate-fadeIn">
            <button
              onClick={() => {
                setIsFastApplyOpen(false)
                setFastApplySubmitted(false)
              }}
              className="absolute top-4 right-4 text-[#7890a5] hover:text-[#18324d] cursor-pointer p-1 rounded-full hover:bg-slate-100"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            {fastApplySubmitted ? (
              <div className="py-6 text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mx-auto">
                  <Check className="h-8 w-8 stroke-[3]" />
                </div>
                <h3 className="text-xl font-extrabold text-[#18324d]">
                  Admission Application Received!
                </h3>
                <p className="text-xs sm:text-sm text-[#526c83] max-w-sm mx-auto">
                  Thank you, <span className="font-bold text-[#18324d]">{fastApplyData.name}</span>. Our senior admissions counselor for <span className="font-bold text-[#0767d8]">{country.name}</span> will contact your WhatsApp ({fastApplyData.phone}) shortly with the university offer roadmap.
                </p>
                <div className="pt-2">
                  <a
                    href={`https://wa.me/${BRAND_INFO.whatsapp}?text=${encodeURIComponent(
                      `Hi ED-WISE, I just submitted an admission application for ${country.name} (${fastApplyData.program}). My name is ${fastApplyData.name}.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 text-xs font-bold shadow-md transition-all cursor-pointer"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Connect on WhatsApp Instantly</span>
                  </a>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 text-[#0767d8] text-xs font-bold uppercase tracking-wider mb-2">
                  <GraduationCap className="h-4 w-4" />
                  <span>Direct University Admission</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#18324d] tracking-tight">
                  Apply for Admission in {country.name}
                </h3>
                <p className="mt-1 text-xs text-[#526c83]">
                  Submit your details below to receive official eligibility confirmation and fee structure.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    setFastApplySubmitted(true)
                  }}
                  className="mt-5 space-y-3.5"
                >
                  <div>
                    <label className="block text-[11px] font-bold text-[#47607a] mb-1">
                      Student Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Muhammad Usman / Sarah Khan"
                      value={fastApplyData.name}
                      onChange={(e) => setFastApplyData({ ...fastApplyData, name: e.target.value })}
                      className="w-full rounded-xl border border-[#dce8f3] bg-[#f8fbfe] px-3.5 py-2.5 text-xs text-[#18324d] focus:border-[#0767d8] focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#47607a] mb-1">
                      WhatsApp / Mobile Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+92 300 1234567"
                      value={fastApplyData.phone}
                      onChange={(e) => setFastApplyData({ ...fastApplyData, phone: e.target.value })}
                      className="w-full rounded-xl border border-[#dce8f3] bg-[#f8fbfe] px-3.5 py-2.5 text-xs text-[#18324d] focus:border-[#0767d8] focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-[#47607a] mb-1">
                        Program of Interest
                      </label>
                      <select
                        value={fastApplyData.program}
                        onChange={(e) => setFastApplyData({ ...fastApplyData, program: e.target.value })}
                        className="w-full rounded-xl border border-[#dce8f3] bg-[#f8fbfe] px-3 py-2.5 text-xs text-[#18324d] focus:border-[#0767d8] focus:outline-none"
                      >
                        <option>MBBS / General Medicine</option>
                        <option>BDS / Dentistry</option>
                        <option>Pharmacy / Nursing</option>
                        <option>Computer Science & AI</option>
                        <option>Engineering & Tech</option>
                        <option>Business Administration</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-[#47607a] mb-1">
                        Highest Qualification
                      </label>
                      <select
                        value={fastApplyData.education}
                        onChange={(e) => setFastApplyData({ ...fastApplyData, education: e.target.value })}
                        className="w-full rounded-xl border border-[#dce8f3] bg-[#f8fbfe] px-3 py-2.5 text-xs text-[#18324d] focus:border-[#0767d8] focus:outline-none"
                      >
                        <option>FSc Pre-Medical</option>
                        <option>A-Levels / Cambridge</option>
                        <option>High School / 12th Grade</option>
                        <option>Bachelor's Degree</option>
                      </select>
                    </div>
                  </div>

                  <div className="rounded-xl bg-[#e7f2fd]/60 p-3 text-[11px] text-[#2c5270] flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-[#0767d8] shrink-0" />
                    <span>Guaranteed 100% genuine admission support with no hidden agency fees.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-[#0767d8] hover:bg-blue-600 text-white font-bold py-3 text-xs shadow-md transition-all cursor-pointer mt-1"
                  >
                    Submit Admission Application Now
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-xs cursor-pointer"
        >
          <div className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black cursor-pointer z-10"
            >
              <X className="h-5 w-5" />
            </button>
            <img src={lightboxImage} alt="Enlarged view" className="max-h-[85vh] w-auto object-contain rounded-xl" />
          </div>
        </div>
      )}
    </div>
  )
}

