import React from 'react'
import { ShieldCheck, ExternalLink } from 'lucide-react'

export default function VerificationBadge({ lastVerified = "Sep 2026", officialLink, compact = false }) {
  return (
    <div className={`inline-flex items-center gap-2 ${compact ? 'px-2 py-1 text-xs' : 'px-3 py-1.5 text-xs'} rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 font-medium backdrop-blur-md shadow-sm`}>
      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 animate-pulse" />
      <span>Verified Data ({lastVerified})</span>
      {officialLink && (
        <a 
          href={officialLink} 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="ml-1 hover:text-white underline flex items-center gap-0.5 text-emerald-400"
          title="Official Source Verification Link"
        >
          <span>Official Site</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      )}
    </div>
  )
}
