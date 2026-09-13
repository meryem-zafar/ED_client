import React from 'react'
import CountryDetailPage from './CountryDetailPage'

export default function KyrgyzstanSpecialPage({ onNavigate, onSelectEntity }) {
  return (
    <CountryDetailPage
      countryId="kyrgyzstan"
      onNavigate={onNavigate}
      onSelectEntity={onSelectEntity}
      onBack={() => onNavigate('countries')}
    />
  )
}


