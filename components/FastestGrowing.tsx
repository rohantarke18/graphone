'use client'
import React from 'react'

const companies = [
  { name: 'Lovable', cat: 'AI App Builder', image: '/loveable.png' },
  { name: 'Cohere', cat: 'AI Infrastructure', image: '/cohere.png' },
  { name: 'ElevenLabs', cat: 'AI Voice', image: '/elevenlabs.png' },
  { name: 'Pika', cat: 'AI Video', image: '/pika.png' },
  { name: 'Mistral AI', cat: 'AI Models', image: '/mistral.png' },
]

export default function FastestGrowing() {
  return (
    <section className="py-7 border-b border-gray-100 max-w-[1200px] mx-auto px-4 select-none">
      <div className="flex gap-4 items-stretch">
        
        {/* Left Section: Company Cards Layout */}
        <div className="flex-1 flex flex-col justify-between">
          
          {/* Section Header */}
          <div className="flex items-start justify-between mb-5">
            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-pink-100 text-pink-500 text-[11px] font-bold flex items-center justify-center mt-0.5">2</span>
              <div>
                <h2 className="text-[15px] font-bold text-gray-900 tracking-tight">Fastest Growing AI Companies</h2>
                <p className="text-[12px] text-gray-400 mt-0.5">Companies showing strong momentum across key growth signals.</p>
              </div>
            </div>
            <a href="#" className="text-[12px] text-gray-900 font-bold hover:underline transition-all">View all</a>
          </div>

          {/* Cards Row Grid */}
          <div className="flex gap-3 w-full">
            {companies.map((c, i) => (
              <div 
                key={i} 
                className="flex-1 rounded-2xl border border-gray-100/80 cursor-pointer group relative overflow-hidden flex flex-col justify-start px-5 pb-5 pt-[78px] min-h-[185px] bg-white transition-all duration-300 hover:scale-[1.015] hover:shadow-[0_10px_20px_-8px_rgba(0,0,0,0.04)]"
              >
                {/* Background Asset Image */}
                <img 
                  src={c.image} 
                  alt={c.name}
                  className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none transition-transform duration-500 group-hover:scale-[1.02]"
                />

                {/* Text Overlay Layer tightly flush beneath the logo */}
                <div className="relative z-10 pointer-events-none">
                  <h3 className="text-[14px] font-bold text-gray-950 tracking-tight leading-tight">
                    {c.name}
                  </h3>
                  <p className="text-[11px] text-gray-400 font-medium tracking-wide mt-0.5">
                    {c.cat}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section: Promo Callout Panel */}
        <div className="w-[280px] flex-shrink-0 border border-gray-100/80 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden bg-white group transition-all duration-300 hover:scale-[1.015] hover:shadow-[0_10px_20px_-8px_rgba(0,0,0,0.04)]">
          
          {/* Native Asset Image Layer (/explore.png) */}
          <img 
            src="/explore.png" 
            alt="Explore Analytics background chart"
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none transition-transform duration-500 group-hover:scale-[1.02]"
          />

          {/* Marketing Content Copy - Shifted higher with precise alignment thresholds */}
          <div className="relative z-10 pointer-events-none mt-1">
            <h3 className="text-[16px] font-extrabold text-gray-950 leading-[1.3] tracking-tight mb-2 max-w-[170px]">
              Explore tomorrow's market leaders today.
            </h3>
            <p className="text-[12px] text-gray-400 font-medium leading-relaxed max-w-[185px]">
              Discover companies with the highest growth potential across the AI landscape.
            </p>
          </div>

          {/* Action Trigger Button Anchor with explicit margin mapping */}
          <div className="relative z-10 mt-6">
            <button className="w-fit bg-gray-950 text-white text-[12px] font-bold py-2.5 px-4 rounded-xl hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm group/btn">
              Explore Growth Leaders
              <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3" className="transform group-hover/btn:translate-x-0.5 transition-transform">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}