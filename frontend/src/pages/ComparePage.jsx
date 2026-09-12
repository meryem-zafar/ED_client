import React, { useState } from 'react'
import { Scale, Check, X, Plus, Trash2 } from 'lucide-react'
import { COUNTRIES } from '../data/mockData'
import PageHero from '../components/PageHero'

export default function ComparePage({ onNavigate }) {
  const [selectedCountryIds, setSelectedCountryIds] = useState(['kyrgyzstan', 'uzbekistan', 'kazakhstan'])

  const addCountry = (id) => {
    if (selectedCountryIds.length < 4 && !selectedCountryIds.includes(id)) {
      setSelectedCountryIds([...selectedCountryIds, id])
    }
  }

  const removeCountry = (id) => {
    if (selectedCountryIds.length > 1) {
      setSelectedCountryIds(selectedCountryIds.filter(cId => cId !== id))
    }
  }

  const selectedCountries = selectedCountryIds.map(id => COUNTRIES.find(c => c.id === id)).filter(Boolean)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8 pb-16 text-white">
      
      <PageHero image="https://images.unsplash.com/photo-1521292270410-a8c4d71674ac?auto=format&fit=crop&w=1800&q=85" eyebrow="Choose with confidence" title="Compare Countries" description="Find the best destination for your future using clear, verified information." />

      {/* Selector Pills matching Screen 6 */}
      <div className="flex flex-wrap items-center gap-3 bg-[#1C2541] p-4 rounded-3xl border border-slate-800">
        <span className="text-xs font-bold text-slate-300">Compare up to 4 countries:</span>
        {selectedCountries.map(c => (
          <div key={c.id} className="flex items-center gap-2 bg-blue-600 text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-md">
            <span>{c.flag} {c.name}</span>
            {selectedCountryIds.length > 1 && (
              <button onClick={() => removeCountry(c.id)} className="text-slate-200 hover:text-white">
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        ))}

        {selectedCountryIds.length < 4 && (
          <select
            onChange={(e) => { if (e.target.value) addCountry(e.target.value); e.target.value = ''; }}
            className="bg-[#0B132B] text-amber-400 border border-slate-700 text-xs font-bold px-3.5 py-1.5 rounded-full cursor-pointer focus:outline-none"
          >
            <option value="" className="bg-[#0B132B]">+ Add Country</option>
            {COUNTRIES.filter(c => !selectedCountryIds.includes(c.id)).map(c => (
              <option key={c.id} value={c.id} className="bg-[#0B132B]">{c.flag} {c.name}</option>
            ))}
          </select>
        )}
      </div>

      {/* Comparison Table matching Screen 6 */}
      <div className="bg-[#1C2541] rounded-3xl overflow-x-auto border border-slate-800 shadow-2xl">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="border-b border-slate-800 bg-[#0B132B]">
              <th className="p-4 text-xs font-bold text-slate-400 uppercase w-48">Parameter</th>
              {selectedCountries.map(c => (
                <th key={c.id} className="p-4 text-sm font-extrabold text-white text-center">
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-2xl">{c.flag}</span>
                    <span className="text-blue-400">{c.name}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 text-xs text-slate-300">
            <tr>
              <td className="p-4 font-bold text-white bg-[#0B132B]/50">Tuition Fee</td>
              {selectedCountries.map(c => (
                <td key={c.id} className="p-4 text-center font-bold text-amber-400">{c.tuitionRange}</td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-bold text-white bg-[#0B132B]/50">Living Cost (per month)</td>
              {selectedCountries.map(c => (
                <td key={c.id} className="p-4 text-center font-semibold text-slate-200">{c.livingCostMonthly}</td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-bold text-white bg-[#0B132B]/50">Visa Difficulty</td>
              {selectedCountries.map(c => (
                <td key={c.id} className="p-4 text-center font-semibold text-emerald-400">Medium</td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-bold text-white bg-[#0B132B]/50">Admission Requirements</td>
              {selectedCountries.map(c => (
                <td key={c.id} className="p-4 text-center text-[11px]">High School / Direct Track</td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-bold text-white bg-[#0B132B]/50">Medicine Programs</td>
              {selectedCountries.map(c => (
                <td key={c.id} className="p-4 text-center font-bold text-emerald-400">{c.medicalFocus ? 'Yes' : 'Available'}</td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-bold text-white bg-[#0B132B]/50">Engineering Programs</td>
              {selectedCountries.map(c => (
                <td key={c.id} className="p-4 text-center text-slate-300">Yes</td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-bold text-white bg-[#0B132B]/50">IT/CS Programs</td>
              {selectedCountries.map(c => (
                <td key={c.id} className="p-4 text-center text-slate-300">Yes</td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-bold text-white bg-[#0B132B]/50">Part-Time Work</td>
              {selectedCountries.map(c => (
                <td key={c.id} className="p-4 text-center">{c.partTimeWork}</td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-bold text-white bg-[#0B132B]/50">Weather</td>
              {selectedCountries.map(c => (
                <td key={c.id} className="p-4 text-center text-slate-300">Continental</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <div className="text-center pt-2">
        <button
          onClick={() => onNavigate('apply')}
          className="bg-blue-600 hover:bg-blue-500 text-white font-extrabold px-8 py-3.5 rounded-full text-xs uppercase shadow-lg shadow-blue-600/30 cursor-pointer"
        >
          View Detailed Comparison Report
        </button>
      </div>

    </div>
  )
}
