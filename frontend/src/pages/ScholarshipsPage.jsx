import React from 'react'
import { Award, Calendar, CheckCircle2, Send, ArrowRight } from 'lucide-react'
import { SCHOLARSHIPS } from '../data/mockData'

export default function ScholarshipsPage({ onNavigate }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10 pb-16">
      
      <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-amber-500/30 bg-gradient-to-r from-slate-900 via-amber-950/20 to-slate-900 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase">
          <Award className="w-4 h-4 text-amber-400" />
          <span>Financial Aid & Grants</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
          International Scholarships & Funding
        </h1>
        <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
          Discover merit grants, automatic entry tuition discounts (such as Cyprus 50% tuition grants), and government funded mobility awards.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SCHOLARSHIPS.map(sch => (
          <div key={sch.id} className="glass-card p-6 rounded-2xl space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                {sch.destinations.join(', ')}
              </div>
              <h3 className="text-lg font-bold text-white">{sch.name}</h3>
              <p className="text-xs text-slate-400">{sch.offeredBy}</p>
              
              <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 space-y-1 text-xs">
                <div className="font-bold text-amber-300">{sch.coverage}</div>
                <div className="text-slate-400 text-[11px]">Eligibility: {sch.eligibility}</div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 space-y-3">
              <div className="flex justify-between text-xs text-slate-400">
                <span>Deadline: {sch.deadline}</span>
              </div>
              <button
                onClick={() => onNavigate('apply')}
                className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-2.5 rounded-xl text-xs uppercase cursor-pointer"
              >
                Apply with Scholarship
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
