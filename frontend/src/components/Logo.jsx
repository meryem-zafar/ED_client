import React from 'react'

export default function Logo({ size = 'md', variant = 'full', showText = true, className = '' }) {
  const sizes = {
    sm: { icon: 'w-8 h-8', text: 'text-base', sub: 'text-[9px]' },
    md: { icon: 'w-11 h-11', text: 'text-xl', sub: 'text-[11px]' },
    lg: { icon: 'w-16 h-16', text: 'text-2xl', sub: 'text-xs' },
    xl: { icon: 'w-24 h-24', text: 'text-3xl', sub: 'text-sm' }
  }

  const s = sizes[size] || sizes.md

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* High precision SVG Emblem matching ED-WISE CONSULTANCY logo */}
      <div className={`relative ${s.icon} flex-shrink-0 group cursor-pointer`}>
        <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-md transition-transform duration-300 group-hover:scale-105" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Sunburst Rays at top */}
          <g stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round">
            <line x1="100" y1="22" x2="100" y2="10" />
            <line x1="82" y1="26" x2="74" y2="16" />
            <line x1="118" y1="26" x2="126" y2="16" />
            <line x1="66" y1="35" x2="55" y2="28" />
            <line x1="134" y1="35" x2="145" y2="28" />
            <line x1="55" y1="48" x2="42" y2="44" />
            <line x1="145" y1="48" x2="158" y2="44" />
          </g>

          {/* Shield Outer Frame */}
          <path d="M 35 48 C 35 48, 100 28, 100 28 C 100 28, 165 48, 165 48 C 165 110, 160 160, 100 190 C 40 160, 35 110, 35 48 Z" fill="#1E2B58" stroke="#D4AF37" strokeWidth="4" />

          {/* Book Inner Page - Left (Torch / Education) */}
          <path d="M 45 58 Q 72 52 96 62 L 96 160 Q 72 150 45 156 Z" fill="#2E1C4D" stroke="#93C5FD" strokeWidth="1.5" />

          {/* Book Inner Page - Right (Medical Snake & Bowl) */}
          <path d="M 104 62 Q 128 52 155 58 L 155 156 Q 128 150 104 160 Z" fill="#1E3A8A" stroke="#93C5FD" strokeWidth="1.5" />

          {/* Left Emblem: Torch of Knowledge */}
          <g fill="#F59E0B">
            {/* Flame */}
            <path d="M 70 80 Q 64 92 70 98 Q 76 92 70 80 Z" fill="#F97316" />
            <path d="M 70 84 Q 67 92 70 96 Q 73 92 70 84 Z" fill="#FBBF24" />
            {/* Torch Handle */}
            <path d="M 68 98 L 72 98 L 71 130 L 69 130 Z" fill="#D4AF37" />
            <rect x="66" y="98" width="8" height="3" fill="#D4AF37" rx="1" />
          </g>

          {/* Right Emblem: Bowl of Hygieia & Asclepius Snake (Medical symbol) */}
          <g fill="none" stroke="#F59E0B" strokeWidth="2">
            {/* Cup/Bowl */}
            <path d="M 120 105 C 120 118, 140 118, 140 105 Z" fill="#D4AF37" stroke="#F59E0B" strokeWidth="1" />
            <rect x="127" y="118" width="6" height="12" fill="#D4AF37" />
            <rect x="122" y="130" width="16" height="3" fill="#D4AF37" rx="1" />
            {/* Snake wrapping cup stem */}
            <path d="M 130 90 Q 138 95 130 102 Q 122 108 130 115" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
          </g>

          {/* Ribbon Banner at Bottom */}
          <path d="M 15 170 L 35 160 L 35 188 L 15 178 L 25 169 Z" fill="#1E1B4B" />
          <path d="M 185 170 L 165 160 L 165 188 L 185 178 L 175 169 Z" fill="#1E1B4B" />
          <rect x="30" y="160" width="140" height="28" fill="#1E2B58" stroke="#D4AF37" strokeWidth="2" rx="2" />

          {/* Ribbon Text */}
          <text x="100" y="179" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800" fontFamily="Outfit, sans-serif" letterSpacing="0.4">
            ED-WISE CONSULTANCY
          </text>
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className={`theme-logo-title font-extrabold tracking-tight text-[#123b70] ${s.text}`}>
              ED-WISE CONSULTANCY
            </span>
          </div>
          <span className={`theme-logo-sub text-slate-500 font-medium tracking-wide ${s.sub}`}>
            Study Abroad & International Education
          </span>
        </div>
      )}
    </div>
  )
}
