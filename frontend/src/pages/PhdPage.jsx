import React, { useState } from 'react'
import { GraduationCap, ArrowRight, CheckCircle2, Award, BookOpen } from 'lucide-react'
import { PHD_PROGRAMS } from '../data/mockData'
import PageHero from '../components/PageHero'

export default function PhdPage({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('Overview')
  const tabs = ['Overview', 'Programs', 'Universities', 'Requirements', 'Funding', 'Deadlines']

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8 pb-16 text-white">
      
      <PageHero image="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1800&q=85" eyebrow="Research pathways" title="PhD / Research Abroad" description="Advance your knowledge and build your future with verified doctoral opportunities." action="Explore Programs" onAction={() => onNavigate('apply')} />

      {/* Sub-tabs matching Screen 7 */}
      <div className="flex border-b border-slate-800 space-x-2 overflow-x-auto text-xs font-bold pb-2">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full transition-all cursor-pointer whitespace-nowrap ${
              activeTab === tab
                ? 'bg-blue-600 text-white'
                : 'bg-[#1C2541] text-slate-300 hover:bg-slate-800'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left 8 Cols: Available PhD Programs */}
        <div className="lg:col-span-8 space-y-6">
          <h2 className="text-xl font-extrabold text-white">Available PhD Programs</h2>
          
          <div className="space-y-4">
            {PHD_PROGRAMS.map(phd => (
              <div key={phd.id} className="bg-[#1C2541] border border-slate-800 p-5 rounded-3xl space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-base font-bold text-white">{phd.title}</h3>
                    <div className="text-xs text-slate-400 mt-0.5">{phd.university} • {phd.country}</div>
                  </div>
                  <span className="bg-emerald-950 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold px-2.5 py-1 rounded-full">
                    {phd.funding}
                  </span>
                </div>
                <div className="text-xs text-slate-300">Requirements: {phd.requirements}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right 4 Cols: Top Universities, Key Requirements, Funding */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Top Universities */}
          <div className="bg-[#1C2541] border border-slate-800 p-6 rounded-3xl space-y-3">
            <h3 className="text-base font-extrabold text-white border-b border-slate-800 pb-3">Top Universities</h3>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">🏛️ Kyrgyz State Medical Academy</li>
              <li className="flex items-center gap-2">🏛️ Al-Farabi Kazakh National University</li>
              <li className="flex items-center gap-2">🏛️ Tashkent Medical Academy</li>
            </ul>
          </div>

          {/* Key Requirements */}
          <div className="bg-[#1C2541] border border-slate-800 p-6 rounded-3xl space-y-3">
            <h3 className="text-base font-extrabold text-white border-b border-slate-800 pb-3">Key Requirements</h3>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">✓ Master's Degree</li>
              <li className="flex items-center gap-2">✓ Research Proposal</li>
              <li className="flex items-center gap-2">✓ IELTS / English Standard</li>
            </ul>
          </div>

          {/* Funding & Scholarships */}
          <div className="bg-[#1C2541] border border-slate-800 p-6 rounded-3xl space-y-3">
            <h3 className="text-base font-extrabold text-white border-b border-slate-800 pb-3">Funding & Scholarships</h3>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">💰 University Stipends</li>
              <li className="flex items-center gap-2">💰 Teaching Assistantships</li>
              <li className="flex items-center gap-2">💰 Government Funding</li>
            </ul>
          </div>

        </div>

      </div>

      {/* CTA BANNER - MATCHING SCREEN 7 */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-950 border border-blue-500/30 p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
        <div className="space-y-1 text-center sm:text-left">
          <h2 className="text-2xl font-extrabold text-white">Start Your PhD Journey</h2>
          <p className="text-xs text-slate-300">Check available programs and apply now!</p>
        </div>

        <button
          onClick={() => onNavigate('apply')}
          className="bg-blue-600 hover:bg-blue-500 text-white font-extrabold px-8 py-3.5 rounded-full text-xs uppercase cursor-pointer shadow-lg shadow-blue-600/30"
        >
          Explore PhD Programs
        </button>
      </div>

    </div>
  )
}
