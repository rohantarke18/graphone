'use client'
import React, { useRef, useState } from 'react'

const floatingCards = [
  { name: 'a16z', sub: 'Andreessen Horowitz', top: '8%', left: '52%', w: '160px', size: 'lg' },
  { name: 'SEQUOIA', sub: 'Sequoia Capital', top: '28%', left: '44%', w: '155px', size: 'md' },
  { name: 'Lightspeed', sub: 'Lightspeed Venture Partners', top: '10%', left: '74%', w: '170px', size: 'md' },
  { name: 'General Catalyst', sub: 'General Catalyst', top: '48%', left: '48%', w: '155px', size: 'sm' },
  { name: 'Accel', sub: 'Accel Partners', top: '28%', left: '76%', w: '145px', size: 'md' },
  { name: 'Khosla Ventures', sub: 'Khosla Ventures', top: '66%', left: '52%', w: '160px', size: 'md' },
]

const depths = [14, 10, 18, 8, 16, 12]

const popularSearches = ['AI Agents', 'Seed Investors', 'Series A', 'YC Backers', 'India', 'OpenAI Portfolio']

export default function InvestorsHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    setMouse({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
    })
  }

  const transform = (depth: number) =>
    hovered ? `translate(${mouse.x * depth}px, ${mouse.y * depth}px)` : 'translate(0,0)'

  return (
    <section className="bg-white pt-10 pb-6 border-b border-gray-100 relative overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="flex items-start justify-between gap-8">
          {/* Left */}
          <div className="flex-1 max-w-[480px]">
            <h1 className="text-[38px] font-black text-gray-900 leading-[1.1] tracking-tight mb-4">
              Discover Investors<br />Building the AI Economy
            </h1>
            <p className="text-[14px] text-gray-500 leading-relaxed mb-6 max-w-[380px]">
              Find VCs, angels, operators, corporate funds and emerging managers backing the next generation of AI companies.
            </p>

            {/* Search */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2.5 flex-1 max-w-[360px] shadow-sm">
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="#9ca3af" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                </svg>
                <span className="text-gray-400 text-[13px]">Search investors, funds, firms...</span>
              </div>
              <button className="w-9 h-9 bg-[#f43f8e] rounded-lg flex items-center justify-center hover:bg-[#e11d6b] transition-colors flex-shrink-0">
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2.5">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                </svg>
              </button>
            </div>

            {/* Popular searches */}
            <div>
              <p className="text-[11px] text-gray-400 font-medium mb-2">Popular searches</p>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((s, i) => (
                  <button key={i} className="text-[12px] text-gray-600 bg-gray-50 border border-gray-200 hover:border-gray-300 rounded-full px-3 py-1 font-medium transition-colors">
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: floating investor cards */}
          <div
            ref={containerRef}
            className="hidden lg:block relative flex-shrink-0"
            style={{ width: '460px', height: '260px' }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => { setHovered(false); setMouse({ x: 0, y: 0 }) }}
          >
            {/* Pink/purple ambient glow */}
            <div className="absolute top-[30%] left-[40%] w-[200px] h-[200px] rounded-full bg-[#f43f8e] opacity-10 blur-3xl pointer-events-none" />
            <div className="absolute top-[10%] right-[10%] w-[120px] h-[120px] rounded-full bg-[#8b5cf6] opacity-10 blur-2xl pointer-events-none" />

            {/* Dots */}
            <div className="absolute top-[5%] left-[48%] w-2 h-2 rounded-full bg-[#f43f8e] opacity-60" style={{ transform: transform(26), transition: 'transform 0.2s ease-out' }} />
            <div className="absolute top-[35%] right-[5%] w-2 h-2 rounded-full bg-[#8b5cf6]" style={{ transform: transform(30), transition: 'transform 0.2s ease-out' }} />
            <div className="absolute bottom-[20%] left-[42%] w-2.5 h-2.5 rounded-full bg-[#f43f8e] opacity-50" style={{ transform: transform(22), transition: 'transform 0.2s ease-out' }} />
            <div className="absolute bottom-[5%] right-[25%] w-1.5 h-1.5 rounded-full bg-[#06b6d4]" style={{ transform: transform(28), transition: 'transform 0.2s ease-out' }} />

            {/* Investor cards */}
            {floatingCards.map((card, i) => (
              <div
                key={i}
                className="absolute bg-white rounded-xl shadow-md border border-gray-100 px-3 py-2.5 cursor-default hover:shadow-lg transition-shadow"
                style={{
                  top: card.top,
                  left: card.left,
                  width: card.w,
                  transform: transform(depths[i]),
                  transition: 'transform 0.22s ease-out, box-shadow 0.2s',
                  willChange: 'transform',
                }}
              >
                <div className="text-[13px] font-bold text-gray-900">{card.name}</div>
                <div className="text-[11px] text-gray-400 mt-0.5">{card.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}