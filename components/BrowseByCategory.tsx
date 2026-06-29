'use client'
import React from 'react'

const categories = [
  {
    label: 'AI Agents',
    count: '1,246 companies',
    borderColor: 'rgba(168, 85, 247, 0.15)',
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#a855f7" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    label: 'AI Coding',
    count: '865 companies',
    borderColor: 'rgba(16, 185, 129, 0.15)',
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#10b981" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    label: 'AI Search',
    count: '324 companies',
    borderColor: 'rgba(59, 130, 246, 0.15)',
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#3b82f6" strokeWidth="2.5">
        <circle cx="11" cy="11" r="8" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
      </svg>
    )
  },
  {
    label: 'AI Video',
    count: '556 companies',
    borderColor: 'rgba(236, 72, 153, 0.15)',
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#ec4899" strokeWidth="2">
        <rect width="14" height="14" x="2" y="5" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M22 7l-6 5 6 5V7z" />
      </svg>
    )
  },
  {
    label: 'AI Voice',
    count: '412 companies',
    borderColor: 'rgba(249, 115, 22, 0.15)',
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#f97316" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    )
  },
  {
    label: 'AI Infrastructure',
    count: '972 companies',
    borderColor: 'rgba(34, 197, 94, 0.15)',
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#22c55e" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    label: 'Healthcare AI',
    count: '687 companies',
    borderColor: 'rgba(13, 148, 136, 0.15)',
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#0d9488" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    label: 'Robotics',
    count: '396 companies',
    borderColor: 'rgba(234, 179, 8, 0.15)',
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#eab308" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    )
  },
]

export default function BrowseByCategory() {
  return (
    <section className="py-7 border-b border-gray-100 max-w-[1200px] mx-auto px-4 select-none">
      
      {/* Section Header */}
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-start gap-2.5">
          <span className="w-5 h-5 rounded-full bg-pink-100 text-pink-500 text-[11px] font-bold flex items-center justify-center mt-0.5">4</span>
          <div>
            <h2 className="text-[15px] font-bold text-gray-900 tracking-tight">Browse by Category</h2>
            <p className="text-[12px] text-gray-400 mt-0.5">Explore companies by what they're building.</p>
          </div>
        </div>
        
        {/* Modern Nav Chevron Action Trigger */}
        <button className="w-6 h-6 border border-gray-100 rounded-full flex items-center justify-center bg-white shadow-sm hover:bg-gray-50 transition-colors">
          <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="#111827" strokeWidth="3">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Grid Row Track Container */}
      <div className="flex items-stretch gap-3 w-full overflow-x-auto pb-1 scrollbar-none no-scrollbar">
        {categories.map((cat, i) => (
          <div 
            key={i} 
            className="flex-1 min-w-[125px] max-w-[145px] p-4 bg-white border border-gray-100 rounded-2xl cursor-pointer group flex flex-col justify-between transition-all duration-300 hover:border-gray-200 hover:-translate-y-0.5 hover:shadow-[0_6px_16px_-4px_rgba(0,0,0,0.03)]"
          >
            {/* Soft Outlined Graphic Micro Shield Frame */}
            <div 
              className="w-9 h-9 rounded-xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-105 bg-white mb-6"
              style={{ borderColor: cat.borderColor }}
            >
              {cat.icon}
            </div>
            
            {/* Identifiers Group Layout */}
            <div>
              <div className="text-[13px] font-bold text-gray-900 tracking-tight leading-snug transition-colors group-hover:text-gray-800">
                {cat.label}
              </div>
              <div className="text-[11px] text-gray-400 font-medium mt-0.5 whitespace-nowrap">
                {cat.count}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}