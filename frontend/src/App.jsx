import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import SearchModal from './components/SearchModal'

import HomePage from './pages/HomePage'
import CountriesPage from './pages/CountriesPage'
import CountryDetailPage from './pages/CountryDetailPage'
import KyrgyzstanSpecialPage from './pages/KyrgyzstanSpecialPage'
import UzbekistanPage from './pages/UzbekistanPage'
import BishkekCityPage from './pages/BishkekCityPage'
import UniversitiesPage from './pages/UniversitiesPage'
import UniversityDetailPage from './pages/UniversityDetailPage'
import MedicalUniversitiesPage from './pages/MedicalUniversitiesPage'
import PhdPage from './pages/PhdPage'
import ScholarshipsPage from './pages/ScholarshipsPage'
import VisaInfoPage from './pages/VisaInfoPage'
import CitiesPage from './pages/CitiesPage'
import ComparePage from './pages/ComparePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ApplyNowPage from './pages/ApplyNowPage'
import AdminDashboardPage from './pages/AdminDashboardPage'

export default function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [selectedEntityId, setSelectedEntityId] = useState(null)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isDark, setIsDark] = useState(() => localStorage.getItem('edwise-theme') === 'dark')

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? 'dark' : 'light'
    localStorage.setItem('edwise-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const handleSelectEntity = (type, id) => {
    setSelectedEntityId(id)
    if (type === 'country') {
      setActiveTab('country-detail')
    } else if (type === 'university') {
      setActiveTab('university-detail')
    } else if (type === 'city') {
      if (id === 'bishkek') setActiveTab('bishkek-city')
      else setActiveTab('uzbekistan')
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const replaceBrokenImage = (event) => {
      const image = event.target
      if (image instanceof HTMLImageElement && image.src && !image.dataset.fallbackApplied) {
        image.dataset.fallbackApplied = 'true'
        image.src = '/image-fallback.svg'
      }
    }

    window.addEventListener('error', replaceBrokenImage, true)
    return () => window.removeEventListener('error', replaceBrokenImage, true)
  }, [])
  const renderCurrentView = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage onNavigate={setActiveTab} onSelectEntity={handleSelectEntity} />
      case 'explore':
      case 'explore-countries':
      case 'countries':
        return <CountriesPage onSelectEntity={handleSelectEntity} onNavigate={setActiveTab} />
      case 'country-detail':
        return <CountryDetailPage countryId={selectedEntityId} onNavigate={setActiveTab} onSelectEntity={handleSelectEntity} onBack={() => setActiveTab('countries')} />
      case 'kyrgyzstan-special':
        return <KyrgyzstanSpecialPage onNavigate={setActiveTab} onSelectEntity={handleSelectEntity} />
      case 'uzbekistan':
        return <UzbekistanPage onNavigate={setActiveTab} onSelectEntity={handleSelectEntity} />
      case 'bishkek-city':
        return <BishkekCityPage onNavigate={setActiveTab} onSelectEntity={handleSelectEntity} />
      case 'universities':
        return <UniversitiesPage onNavigate={setActiveTab} onSelectEntity={handleSelectEntity} />
      case 'university-detail':
        return <UniversityDetailPage universityId={selectedEntityId} onNavigate={setActiveTab} onBack={() => setActiveTab('universities')} />
      case 'medical':
        return <MedicalUniversitiesPage onNavigate={setActiveTab} onSelectEntity={handleSelectEntity} />
      case 'phd':
        return <PhdPage onNavigate={setActiveTab} />
      case 'scholarships':
        return <ScholarshipsPage onNavigate={setActiveTab} />
      case 'visa':
        return <VisaInfoPage />
      case 'cities':
        return <CitiesPage onSelectEntity={handleSelectEntity} />
      case 'compare':
        return <ComparePage onNavigate={setActiveTab} />
      case 'about':
        return <AboutPage onNavigate={setActiveTab} />
      case 'contact':
        return <ContactPage />
      case 'apply':
        return <ApplyNowPage onNavigate={setActiveTab} />
      case 'admin':
        return <AdminDashboardPage />
      default:
        return <HomePage onNavigate={setActiveTab} onSelectEntity={handleSelectEntity} />
    }
  }

  return (
    <div className="app-shell min-h-screen flex flex-col bg-[#f4f8fc] text-slate-800 selection:bg-blue-600 selection:text-white">
      
      {/* Sticky Header & Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenSearch={() => setIsSearchOpen(true)}
        isDark={isDark}
        onToggleTheme={() => setIsDark((current) => !current)}
      />

      {/* Main View Container */}
      <main className="app-main flex-1 py-6 bg-[#f4f8fc]">
        <div key={activeTab} className="page-transition">
          {renderCurrentView()}
        </div>
      </main>

      {/* Sticky WhatsApp Floating CTA */}
      <WhatsAppButton />

      {/* Search Modal Dialog */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectResult={handleSelectEntity}
      />

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />

    </div>
  )
}
