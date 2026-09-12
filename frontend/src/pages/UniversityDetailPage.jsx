import React, { useState } from 'react'
import { MapPin, Star, Globe, Send, CheckCircle2, FileText, ArrowLeft, ExternalLink } from 'lucide-react'
import { UNIVERSITIES } from '../data/mockData'
import PageHero from '../components/PageHero'

export default function UniversityDetailPage({ universityId, onNavigate, onBack }) {
  const [activeTab, setActiveTab] = useState('Overview')
  const [programTab, setProgramTab] = useState('Medicine')

  const university = UNIVERSITIES.find(u => u.id === universityId) || UNIVERSITIES[0]

  const subTabs = ['Overview', 'Programs', 'Admission', 'Tuition', 'Hostel', 'Gallery', 'Contact']
  const programCategories = ['Medicine', 'Engineering', 'Business', 'Computer Science', 'Social Sciences']

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10 pb-16 text-white">
      
      {/* Back Button */}
      <button 
        onClick={onBack || (() => onNavigate('universities'))}
        className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white cursor-pointer bg-[#1C2541] px-3.5 py-2 rounded-xl border border-slate-800"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Directory</span>
      </button>

      <PageHero image={university.heroImage} eyebrow={`${university.city}, ${university.countryName}`} title={university.name} description="Verified university profile, programs, tuition and admission guidance." action="Apply Now" onAction={() => onNavigate('apply')} />

      {/* SUB-TABS NAV BAR - MATCHING SCREEN 5 */}
      <div className="flex border-b border-slate-800 space-x-2 overflow-x-auto text-xs font-bold pb-2">
        {subTabs.map(t => (
          <button
            key={t}
            onClick={() => setActiveTab(t)}
            className={`px-4 py-2 rounded-full transition-all cursor-pointer whitespace-nowrap ${
              activeTab === t
                ? 'bg-blue-600 text-white'
                : 'bg-[#1C2541] text-slate-300 hover:bg-slate-800'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* MAIN LAYOUT GRID - MATCHING SCREEN 5 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left 8 Columns */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* About University */}
          <div className="bg-[#1C2541] border border-slate-800 p-6 rounded-3xl space-y-3">
            <h2 className="text-xl font-extrabold text-white">About University</h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {university.overview}
            </p>
          </div>

          {/* Programs & Degrees */}
          <div className="space-y-4">
            <h2 className="text-xl font-extrabold text-white">Programs & Degrees</h2>
            
            {/* Category Filter Pills */}
            <div className="flex gap-2 overflow-x-auto pb-1 text-xs">
              {programCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setProgramTab(cat)}
                  className={`px-3.5 py-1.5 rounded-full font-semibold transition-all cursor-pointer ${
                    programTab === cat ? 'bg-blue-600 text-white' : 'bg-[#1C2541] text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Program Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {university.programs.map((prog, idx) => (
                <div key={idx} className="bg-[#1C2541] border border-slate-800 p-5 rounded-2xl space-y-3 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white">{prog.name}</h4>
                    <div className="text-xs text-slate-400 mt-1">{prog.duration} • {prog.language}</div>
                  </div>
                  <button
                    onClick={() => onNavigate('apply')}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 rounded-xl text-xs uppercase cursor-pointer"
                  >
                    See Details
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Fee Structure Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-[#1C2541] border border-slate-800 p-4 rounded-2xl space-y-1">
              <span className="text-[10px] text-slate-400 font-bold uppercase">Tuition Fee</span>
              <div className="text-base font-extrabold text-amber-400">{university.tuitionFee}</div>
            </div>
            <div className="bg-[#1C2541] border border-slate-800 p-4 rounded-2xl space-y-1">
              <span className="text-[10px] text-slate-400 font-bold uppercase">Hostel Fee</span>
              <div className="text-base font-bold text-slate-200">{university.hostelFee}</div>
            </div>
            <div className="bg-[#1C2541] border border-slate-800 p-4 rounded-2xl space-y-1">
              <span className="text-[10px] text-slate-400 font-bold uppercase">Application Fee</span>
              <div className="text-base font-bold text-slate-200">{university.applicationFee}</div>
            </div>
          </div>

          {/* Buttons: Visit Official Website & Apply Now */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={university.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#1C2541] hover:bg-slate-800 text-white font-bold py-3.5 rounded-2xl text-xs text-center border border-slate-700 flex items-center justify-center gap-2"
            >
              <Globe className="w-4 h-4 text-cyan-400" />
              <span>Visit Official Website</span>
            </a>

            <button
              onClick={() => onNavigate('apply')}
              className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-extrabold py-3.5 rounded-2xl text-xs uppercase cursor-pointer shadow-lg shadow-blue-600/30"
            >
              Apply Now
            </button>
          </div>

        </div>

        {/* Right 4 Columns: Quick Facts */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-[#1C2541] border border-slate-800 p-6 rounded-3xl space-y-4">
            <h3 className="text-base font-extrabold text-white border-b border-slate-800 pb-3">Quick Facts</h3>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">Established:</span>
                <span className="font-bold text-white">{university.established}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">Ranking:</span>
                <span className="font-semibold text-cyan-300">{university.ranking}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">Type:</span>
                <span className="font-semibold text-slate-200">{university.type}</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Disclaimer */}
      <div className="text-center text-[11px] text-slate-400 pt-4 border-t border-slate-800">
        Fees, admission requirements and visa policies may change. Please verify the latest information with the university or relevant embassy before applying.
      </div>

    </div>
  )
}
