'use client'
import React from 'react'

const collections = [
  { name: 'OpenAI Alumni Startups.', image: '/11.1.png' },
  { name: 'YC AI Startups', image: '/11.2.png' },
  { name: 'AI Agent Leaders', image: '/11.3.png' },
  { name: 'AI Infrastructure Leaders', image: '/11.4.png' },
  { name: 'Most Funded AI Startups', image: '/11.5.png' },
]

export default function CuratedCollections() {
  return (
    <section className="py-7 border-b border-gray-100 max-w-[1200px] mx-auto px-4 select-none w-full">
      
      {/* Section Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-2.5">
          <span className="w-5 h-5 rounded-full bg-pink-100 text-pink-500 text-[11px] font-bold flex items-center justify-center mt-0.5">11</span>
          <div>
            <h2 className="text-[15px] font-bold text-gray-900 tracking-tight">Curated Collections</h2>
            <p className="text-[12px] text-gray-400 mt-0.5">Handpicked lists for faster discovery.</p>
          </div>
        </div>
        
        {/* Navigation Action Control Badge */}
        <button className="w-6 h-6 border border-gray-100 rounded-full flex items-center justify-center bg-white shadow-sm hover:bg-gray-50 transition-colors">
          <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="#111827" strokeWidth="3">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* 5-Column Non-Cropping Row Wrapper Track */}
      <div className="flex items-center gap-3 w-full overflow-x-auto pb-1 scrollbar-none no-scrollbar">
        {collections.map((col, i) => (
          <div
            key={i}
            className="flex-1 min-w-[170px] max-w-[224px] rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_-6px_rgba(0,0,0,0.15)]"
          >
            {/* Uncropped, Aspect-Preserved Image Asset */}
            <img 
              src={col.image} 
              alt={col.name}
              className="w-full h-auto object-contain block pointer-events-none transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        ))}
      </div>
    </section>
  )
}