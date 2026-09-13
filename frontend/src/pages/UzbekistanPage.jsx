import React from 'react'
import CountryDetailPage from './CountryDetailPage'

export default function UzbekistanPage({ onNavigate, onSelectEntity }) {
  return (
    <CountryDetailPage
      countryId="uzbekistan"
      onNavigate={onNavigate}
      onSelectEntity={onSelectEntity}
      onBack={() => onNavigate('countries')}
    />
  )
}
