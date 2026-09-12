import React from 'react'
import Logo from './Logo'
import { BRAND_INFO } from '../data/mockData'
import { Phone, Mail, MapPin, ShieldCheck, Heart, ArrowUpRight } from 'lucide-react'

export default function Footer({ setActiveTab }) {
  const scrollToTab = (tabId) => {
    setActiveTab(tabId)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      {/* Background glow decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <button onClick={() => scrollToTab('home')} className="text-left focus:outline-none cursor-pointer">
              <Logo size="lg" />
            </button>
            
            <p className="text-sm text-slate-300 leading-relaxed pr-4">
              ED-WISE CONSULTANCY is a premier international education and student decision portal. 
              We specialize in Central Asian destinations—especially medical education (MBBS/MD) in Kyrgyzstan, Uzbekistan, and Kazakhstan—alongside European, UK, and global university pathways.
            </p>

            {/* CEO & Contact Card Highlight */}
            <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Executive Management</span>
                <span className="text-[10px] bg-blue-950 text-cyan-400 px-2 py-0.5 rounded border border-cyan-800/50">Verified Partner</span>
              </div>
              <div className="text-sm font-semibold text-white">CEO: {BRAND_INFO.ceo}</div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-rose-400 flex-shrink-0" />
                <span>Head Office: {BRAND_INFO.headquarters}</span>
              </div>
              <div className="flex flex-col gap-1 text-xs text-slate-300 pt-1">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Bishkek: {BRAND_INFO.phones[0]} | Pak: {BRAND_INFO.phones[1]}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                  <span>{BRAND_INFO.email}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Destinations */}
          <div>
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-2.5">
              Top Destinations
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => scrollToTab('kyrgyzstan-special')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5 cursor-pointer">
                  <span>🇰🇬 Kyrgyzstan (MBBS Focus)</span>
                  <ArrowUpRight className="w-3 h-3 text-amber-400" />
                </button>
              </li>
              <li>
                <button onClick={() => scrollToTab('uzbekistan')} className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 cursor-pointer">
                  <span>🇺🇿 Uzbekistan (Tashkent/Samarkand)</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollToTab('countries')} className="hover:text-white transition-colors cursor-pointer">🇰🇿 Kazakhstan</button>
              </li>
              <li>
                <button onClick={() => scrollToTab('countries')} className="hover:text-white transition-colors cursor-pointer">🇩🇪 Germany (Free Tuition)</button>
              </li>
              <li>
                <button onClick={() => scrollToTab('countries')} className="hover:text-white transition-colors cursor-pointer">🇬🇧 United Kingdom</button>
              </li>
              <li>
                <button onClick={() => scrollToTab('countries')} className="hover:text-white transition-colors cursor-pointer">🇨🇾 Cyprus (50% Grants)</button>
              </li>
              <li>
                <button onClick={() => scrollToTab('countries')} className="hover:text-white transition-colors cursor-pointer">🇹🇷 Turkey</button>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4 border-l-2 border-cyan-500 pl-2.5">
              Portals & Directory
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><button onClick={() => scrollToTab('universities')} className="hover:text-cyan-400 transition-colors cursor-pointer">University Profiles</button></li>
              <li><button onClick={() => scrollToTab('medical')} className="hover:text-amber-400 transition-colors cursor-pointer">Medical MBBS Directory</button></li>
              <li><button onClick={() => scrollToTab('phd')} className="hover:text-cyan-400 transition-colors cursor-pointer">PhD & Research Abroad</button></li>
              <li><button onClick={() => scrollToTab('scholarships')} className="hover:text-cyan-400 transition-colors cursor-pointer">Scholarship Finder</button></li>
              <li><button onClick={() => scrollToTab('cities')} className="hover:text-cyan-400 transition-colors cursor-pointer">City Photo Galleries</button></li>
              <li><button onClick={() => scrollToTab('compare')} className="hover:text-cyan-400 transition-colors cursor-pointer">Country Comparison</button></li>
              <li><button onClick={() => scrollToTab('apply')} className="hover:text-amber-400 font-bold transition-colors cursor-pointer text-amber-300">Online Application Form</button></li>
            </ul>
          </div>

          {/* Governance & Verification Disclaimer */}
          <div>
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4 border-l-2 border-emerald-500 pl-2.5">
              Data Governance
            </h4>
            <div className="space-y-3 text-xs leading-relaxed text-slate-400">
              <div className="flex items-start gap-2 bg-emerald-950/40 border border-emerald-500/20 p-2.5 rounded-lg text-emerald-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Fees, rankings & requirements are verified directly against official university and ministry sources.</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Disclaimer: University fees, admission quotas, medical licensing rules (PMC/PMDC, WHO), and embassy visa regulations are subject to official policy updates. Students are encouraged to confirm final figures with our Bishkek counseling office.
              </p>
              <div className="text-[10px] text-slate-400 pt-1">
                Last Global Audit: {BRAND_INFO.lastVerifiedGlobal}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} <span className="text-white font-bold">{BRAND_INFO.name}</span>. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => scrollToTab('about')} className="hover:text-slate-300 cursor-pointer">About Agency</button>
            <button onClick={() => scrollToTab('contact')} className="hover:text-slate-300 cursor-pointer">Contact HQ</button>
            <button onClick={() => scrollToTab('admin')} className="hover:text-amber-400 cursor-pointer flex items-center gap-1">
              <span>Admin Login</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}
