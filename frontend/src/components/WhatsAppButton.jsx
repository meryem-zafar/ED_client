import React from 'react'
import { MessageCircle } from 'lucide-react'
import { BRAND_INFO } from '../data/mockData'

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${BRAND_INFO.whatsapp}?text=${encodeURIComponent(
    'Hello ED-WISE CONSULTANCY, I am interested in Study Abroad counseling and university admission details.'
  )}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float fixed bottom-6 right-6 z-50 group flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-4 py-3 rounded-full shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 transform hover:scale-105"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        <MessageCircle className="w-6 h-6 fill-current stroke-emerald-500 stroke-2" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full" />
      </div>
      <span className="hidden sm:inline text-sm">Chat on WhatsApp</span>
    </a>
  )
}
