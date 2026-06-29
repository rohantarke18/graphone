'use client'
import React from 'react'

const investors = [
  { name: 'a16z', logo: '/a16z.png' },
  { name: 'Sequoia', logo: '/sequoia.png' },
  { name: 'Lightspeed', logo: '/lightspeed.png' },
  { name: 'Khosla Ventures', logo: '/khoslaventures.png' },
  { name: 'Accel', logo: '/accel.png' },
  { name: 'General Catalyst', logo: '/generalcatalyst.png' },
]

export default function TrendingInvestors() {
  return (
    <section id="trending-investors" className="py-7 border-b border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2.5">
          <span className="section-number">01</span>
          <h2 className="text-[15px] font-bold text-gray-900">Trending Investors</h2>
        </div>
      </div>

      {/* Grid layout removes the scrollbar and shows all in one shot */}
      <div className="grid grid-cols-6 gap-4 items-center justify-items-center">
        {investors.map((inv, i) => (
          <div
            key={i}
            className="w-full aspect-square flex items-center justify-center transition-all duration-200 hover:scale-105"
          >
            <img 
              src={inv.logo} 
              alt={inv.name} 
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  )
}