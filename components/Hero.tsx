'use client'
import React, { useRef, useState } from 'react'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2   // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2   // -1 to 1
    setMouse({ x, y })
  }

  // Each card has its own parallax "depth" multiplier
  const cards = [
    { depth: 12 },  // sparkle  - top left
    { depth: 18 },  // gear     - top right
    { depth: 8  },  // search   - center (biggest, moves least)
    { depth: 20 },  // waveform - bottom right
  ]

  const transform = (depth: number) =>
    hovered
      ? `translate(${mouse.x * depth}px, ${mouse.y * depth}px)`
      : 'translate(0px, 0px)'

  const categories = [
    { icon: '🤖', label: 'AI Agents' },
    { icon: '💻', label: 'AI Coding' },
    { icon: '🔍', label: 'AI Search' },
    { icon: '🎬', label: 'AI Video' },
    { icon: '🎙️', label: 'AI Voice' },
    { icon: '🏗️', label: 'AI Infrastructure' },
    { icon: '···', label: 'More', isMore: true },
  ]

  return (
    <section className="bg-white pt-10 pb-6 border-b border-gray-100 relative overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="flex items-start justify-between gap-8">
          {/* Left */}
          <div className="flex-1 max-w-[520px]">
            {/* Badge */}
            <span className="inline-block bg-[#fff0f6] text-[#f43f8e] text-[11px] font-semibold px-3 py-1 rounded-md mb-4 tracking-wide uppercase">
              AI COMPANIES
            </span>

            <h1 className="text-[38px] font-black text-gray-900 leading-[1.1] tracking-tight mb-4">
              Discover the world's<br />
              most innovative<br />
              AI companies
            </h1>

            <p className="text-[14px] text-gray-500 leading-relaxed mb-6 max-w-[400px]">
              Explore AI startups, unicorns, frontier labs, and emerging<br />
              companies shaping the future of artificial intelligence.
            </p>

            {/* Search bar */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 flex-1 max-w-[380px]">
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="#9ca3af" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                </svg>
                <span className="text-gray-400 text-[13px]">Search companies, categories, founders, investors...</span>
              </div>
              <button className="w-9 h-9 bg-[#f43f8e] rounded-lg flex items-center justify-center hover:bg-[#e11d6b] transition-colors flex-shrink-0">
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2.5">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                </svg>
              </button>
            </div>

            {/* Category pills */}
            <div className="flex items-center flex-wrap gap-2">
              {categories.map((cat, i) => (
                <button
                  key={i}
                  className="flex items-center gap-1.5 text-[12px] text-gray-600 bg-white border border-gray-200 hover:border-gray-300 rounded-full px-3 py-1 font-medium transition-colors"
                >
                  {!cat.isMore && <span className="text-[12px]">{cat.icon}</span>}
                  <span>{cat.label}</span>
                  {cat.isMore && (
                    <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right: floating app icons with mouse parallax */}
          <div
            ref={containerRef}
            className="hidden lg:block relative w-[340px] h-[240px] flex-shrink-0 cursor-none"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => { setHovered(false); setMouse({ x: 0, y: 0 }) }}
          >
            {/* Ambient dot decorations — they move more than the cards */}
            <div
              className="absolute top-2 right-16 w-2.5 h-2.5 rounded-full bg-[#f97316] opacity-80"
              style={{ transform: transform(28), transition: 'transform 0.25s ease-out' }}
            />
            <div
              className="absolute top-12 right-4 w-2 h-2 rounded-full bg-[#8b5cf6]"
              style={{ transform: transform(32), transition: 'transform 0.25s ease-out' }}
            />
            <div
              className="absolute bottom-8 right-20 w-2 h-2 rounded-full bg-[#f43f8e]"
              style={{ transform: transform(24), transition: 'transform 0.25s ease-out' }}
            />
            <div
              className="absolute bottom-4 left-8 w-2.5 h-2.5 rounded-full bg-[#f97316]"
              style={{ transform: transform(22), transition: 'transform 0.25s ease-out' }}
            />

            {/* Sparkle card - top left */}
            <div
              className="absolute top-4 left-8 w-[72px] h-[72px] bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center"
              style={{ transform: transform(cards[0].depth), transition: 'transform 0.2s ease-out', willChange: 'transform' }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L13.09 8.26L19 6L14.74 10.91L21 12L14.74 13.09L19 18L13.09 15.74L12 22L10.91 15.74L5 18L9.26 13.09L3 12L9.26 10.91L5 6L10.91 8.26L12 2Z" fill="url(#g1)" stroke="none"/>
                <defs>
                  <linearGradient id="g1" x1="3" y1="2" x2="21" y2="22" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#a855f7"/><stop offset="1" stopColor="#ec4899"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Gear card - top right */}
            <div
              className="absolute top-0 right-8 w-[68px] h-[68px] bg-white rounded-2xl shadow-md border border-gray-100 flex items-center justify-center"
              style={{ transform: transform(cards[1].depth), transition: 'transform 0.18s ease-out', willChange: 'transform' }}
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="url(#g2)" strokeWidth="1.5"/>
                <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" stroke="url(#g2)" strokeWidth="1.5"/>
                <defs>
                  <linearGradient id="g2" x1="2" y1="2" x2="22" y2="22">
                    <stop stopColor="#f97316"/><stop offset="1" stopColor="#ef4444"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Search card - center large (moves least = feels heaviest/closest) */}
            <div
              className="absolute top-[60px] left-[80px] w-[110px] h-[110px] bg-white rounded-3xl shadow-xl border border-gray-100 flex items-center justify-center"
              style={{ transform: transform(cards[2].depth), transition: 'transform 0.3s ease-out', willChange: 'transform' }}
            >
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="8" stroke="url(#g3)" strokeWidth="2"/>
                <path d="m21 21-4.35-4.35" stroke="url(#g3)" strokeWidth="2" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="g3" x1="3" y1="3" x2="21" y2="21">
                    <stop stopColor="#818cf8"/><stop offset="1" stopColor="#c084fc"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Waveform card - bottom right */}
            <div
              className="absolute bottom-6 right-4 w-[78px] h-[78px] bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center"
              style={{ transform: transform(cards[3].depth), transition: 'transform 0.22s ease-out', willChange: 'transform' }}
            >
              <svg width="36" height="28" viewBox="0 0 36 28" fill="none">
                <rect x="0" y="10" width="4" height="8" rx="2" fill="url(#g4)"/>
                <rect x="6" y="4" width="4" height="20" rx="2" fill="url(#g4)"/>
                <rect x="12" y="0" width="4" height="28" rx="2" fill="url(#g4)"/>
                <rect x="18" y="6" width="4" height="16" rx="2" fill="url(#g4)"/>
                <rect x="24" y="10" width="4" height="8" rx="2" fill="url(#g4)"/>
                <rect x="30" y="8" width="4" height="12" rx="2" fill="url(#g4)"/>
                <defs>
                  <linearGradient id="g4" x1="0" y1="0" x2="36" y2="28">
                    <stop stopColor="#06b6d4"/><stop offset="1" stopColor="#3b82f6"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
