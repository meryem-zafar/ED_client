import React, { useState } from 'react'
import { Search, Menu, X, Moon, Sun } from 'lucide-react'
import Logo from './Logo'

export default function Navbar({ activeTab, setActiveTab, onOpenSearch, isDark, onToggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const primaryNavItems = [
    { id: 'home', label: 'Home' },
    { id: 'countries', label: 'Countries' },
    { id: 'universities', label: 'Universities' },
    { id: 'medical', label: 'Programs' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ]

  const mobileNavItems = [
    ...primaryNavItems,
    { id: 'kyrgyzstan-special', label: 'Kyrgyzstan 🇰🇬' },
    { id: 'uzbekistan', label: 'Uzbekistan 🇺🇿' },
    { id: 'phd', label: 'PhD Programs' },
    { id: 'scholarships', label: 'Scholarships' },
    { id: 'cities', label: 'Cities' },
    { id: 'compare', label: 'Compare' },
  ]

  const handleNavClick = (id) => {
    setActiveTab(id)
    setMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className={`theme-navbar sticky top-0 z-40 border-b shadow-lg transition-colors ${isDark ? 'border-white/10 bg-[#092c5c] text-white shadow-[#092c5c]/15' : 'border-[#dce8f3] bg-white/95 text-[#18324d] shadow-[#1b4d78]/10 backdrop-blur-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-6">
        
        {/* ED-WISE CONSULTANCY brand mark */}
        <button onClick={() => handleNavClick('home')} className="focus:outline-none cursor-pointer">
          <Logo size="sm" />
        </button>

        {/* Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-5">
          {primaryNavItems.map((item) => {
            const isActive = activeTab === item.id || (item.id === 'countries' && (activeTab === 'country-detail' || activeTab === 'explore' || activeTab === 'explore-countries'))
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? isDark ? 'text-[#55d4f7]' : 'text-[#0767d8]'
                    : isDark ? 'text-blue-100 hover:text-white' : 'text-slate-600 hover:text-[#0767d8]'
                }`}
              >
                {item.label}
              </button>
            )
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onToggleTheme}
            className={`theme-toggle rounded-md p-2 transition-colors ${isDark ? 'text-blue-100 hover:bg-[#123b63]' : 'text-[#276187] hover:bg-[#eef5fb]'}`}
            title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => handleNavClick('apply')}
            className="bg-[#0767d8] hover:bg-[#0a78ee] text-white font-extrabold px-5 py-2.5 rounded-md text-xs shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
          >
            Apply Now
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onToggleTheme}
            className={`theme-toggle rounded-lg p-2 ${isDark ? 'bg-[#123b63] text-blue-100' : 'bg-[#eef5fb] text-[#276187]'}`}
            title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button onClick={onOpenSearch} className={`rounded-lg p-2 ${isDark ? 'bg-[#123b63] text-blue-100' : 'bg-[#eef5fb] text-[#276187]'}`}>
            <Search className="w-5 h-5" />
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`rounded-lg p-2 ${isDark ? 'bg-[#123b63] text-blue-100' : 'bg-[#eef5fb] text-[#276187]'}`}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={`space-y-4 border-b px-4 py-6 lg:hidden ${isDark ? 'border-[#1f466d] bg-[#0d2745]' : 'border-[#dce8f3] bg-white'}`}>
          <div className="grid grid-cols-2 gap-2">
            {mobileNavItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`p-2.5 rounded-xl text-xs font-semibold text-left ${
                  activeTab === item.id ? 'bg-blue-600 text-white' : isDark ? 'bg-[#123b63] text-blue-100' : 'bg-[#f4f8fc] text-slate-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => handleNavClick('apply')}
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl text-xs uppercase"
          >
            Apply Now
          </button>
        </div>
      )}
    </header>
  )
}
