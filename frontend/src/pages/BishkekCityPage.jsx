import React, { useState } from 'react'
import { MapPin, Building2, Stethoscope, Camera, ShoppingBag, Sun, Users, Play, MessageCircle, ArrowRight } from 'lucide-react'
import { CITIES, UNIVERSITIES, BRAND_INFO } from '../data/mockData'
import PageHero from '../components/PageHero'

export default function BishkekCityPage({ onNavigate, onSelectEntity }) {
  const [activeTab, setActiveTab] = useState('Overview')

  const subTabs = ['Overview', 'Universities', 'Medical Universities', 'Tourist Places', 'Malls', 'Restaurants', 'Gallery', 'Student Life']
  const bishkek = CITIES.find(c => c.id === 'bishkek') || CITIES[0]
  const bishkekUniversities = UNIVERSITIES.filter(u => u.city === 'Bishkek')

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10 pb-16 text-white relative">
      
      <PageHero image={bishkek.heroImage} eyebrow="Study in Kyrgyzstan" title="Bishkek" description="Capital City of Kyrgyzstan" action="Watch Video" onAction={() => alert('Launching Bishkek City Video Tour...')} />

      {/* SUB-TABS NAV BAR - MATCHING SCREEN 4 */}
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

      {/* MAIN CONTENT GRID - MATCHING SCREEN 4 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left 8 Cols */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* City Overview */}
          <div className="bg-[#1C2541] border border-slate-800 p-6 rounded-3xl space-y-3">
            <h2 className="text-xl font-extrabold text-white">City Overview</h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Bishkek is the capital and largest city of Kyrgyzstan, known for its beautiful parks, modern infrastructure, and friendly atmosphere. It is a popular destination for international students.
            </p>
          </div>

          {/* Photo Gallery Grid */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white">Photo Gallery</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {bishkek.gallery.map((img, idx) => (
                <div key={idx} className="rounded-2xl overflow-hidden h-32 border border-slate-800 group relative">
                  <img src={img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Medical Universities Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Medical Universities</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {bishkekUniversities.map(uni => (
                <div key={uni.id} className="bg-[#1C2541] border border-slate-800 p-5 rounded-2xl space-y-3">
                  <div className="flex items-center gap-3">
                    <img src={uni.logo} alt="" className="w-10 h-10 rounded-xl bg-[#0B132B] p-1 border border-slate-700 object-cover" />
                    <div>
                      <h4 className="text-xs font-bold text-white">{uni.name}</h4>
                      <div className="text-[10px] text-slate-400">{uni.tuitionFee}</div>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectEntity('university', uni.id)}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 rounded-xl text-xs uppercase cursor-pointer"
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Places in Bishkek */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white">Popular Places in Bishkek</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {['Ala-Too Square', 'Burana Tower', 'Victory Square', 'Osh Bazaar'].map((place, i) => (
                <div key={i} className="bg-[#1C2541] border border-slate-800 p-3 rounded-2xl text-center text-xs font-bold text-slate-200">
                  🏛️ {place}
                </div>
              ))}
            </div>
          </div>

          {/* Student-Friendly Areas */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white">Student-Friendly Areas</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {['Tugolbai Ata', 'Jal', 'Microdistrict', 'Ala-Too'].map((area, i) => (
                <div key={i} className="bg-[#1C2541] border border-slate-800 p-3 rounded-2xl text-center text-xs font-bold text-cyan-300">
                  📍 {area}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right 4 Cols: Quick Facts & Accommodation */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Quick Facts Card */}
          <div className="bg-[#1C2541] border border-slate-800 p-6 rounded-3xl space-y-4">
            <h3 className="text-base font-extrabold text-white border-b border-slate-800 pb-3">Quick Facts</h3>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">Population:</span>
                <span className="font-bold text-white">1.1 Million</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">Climate:</span>
                <span className="font-semibold text-slate-200">Continental</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">Temperature:</span>
                <span className="font-bold text-cyan-400">-5°C to 30°C</span>
              </div>
            </div>
          </div>

          {/* Accommodation Card */}
          <div className="bg-[#1C2541] border border-slate-800 p-6 rounded-3xl space-y-4">
            <h3 className="text-base font-extrabold text-white border-b border-slate-800 pb-3">Accommodation</h3>
            <div className="text-xs text-slate-300 space-y-1">
              <div className="font-bold text-white">Hostels & Apartments</div>
              <div className="text-amber-400 font-bold text-sm">$50 - $150 / month</div>
            </div>

            <button
              onClick={() => onNavigate('apply')}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-extrabold py-3 rounded-2xl text-xs uppercase cursor-pointer"
            >
              View Options
            </button>
          </div>

        </div>

      </div>

    </div>
  )
}
