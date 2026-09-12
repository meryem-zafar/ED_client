import React from 'react'
import { ArrowRight, Play } from 'lucide-react'
import { Reveal } from './Motion'

export default function PageHero({ image, eyebrow, title, description, action, onAction, compact = false }) {
  return (
    <Reveal direction="up">
      <section className={`page-hero relative overflow-hidden ${compact ? 'page-hero-compact' : ''}`}>
        <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-r from-[#062653]/95 via-[#0b4c91]/65 to-[#062653]/15" />
        <div className="relative z-10 min-h-full max-w-7xl mx-auto px-5 sm:px-8 py-10 sm:py-14 flex items-end">
          <div className="max-w-3xl space-y-3">
            {eyebrow && <div className="text-[10px] uppercase tracking-[0.22em] font-bold text-cyan-200">{eyebrow}</div>}
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">{title}</h1>
            {description && <p className="max-w-2xl text-sm sm:text-base text-blue-50 leading-relaxed">{description}</p>}
            {action && (
              <button onClick={onAction} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-5 py-3 rounded-md text-xs shadow-lg shadow-blue-900/30 transition-all">
                {action === 'Watch Video' ? <Play className="w-4 h-4 fill-current" /> : <ArrowRight className="w-4 h-4" />}
                {action}
              </button>
            )}
          </div>
        </div>
      </section>
    </Reveal>
  )
}
