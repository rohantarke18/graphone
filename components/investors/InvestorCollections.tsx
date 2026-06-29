'use client'
import React from 'react'

const collections = [
  { title: 'Investors Backing AI Agents', count: '124 Investors', image: '/investorbacking.png', featured: true },
  { title: 'Investors Backing Indian AI Startups', count: '96 Investors', image: '/gatewayofindia.png' },
  { title: 'Top Seed Investors', count: '214 Investors', image: '/topseedinvestor.png' },
  { title: 'Operator Angels', count: '178 Investors', image: '/operatorangels.png' },
  { title: 'OpenAI Alumni Investors', count: '85 Investors', image: '/openaialumni.png' },
  { title: 'Enterprise AI Investors', count: '64 Investors', image: '/enterpriseaiinvestor.png' },
]

export default function InvestorCollections() {
  return (
    <section className="py-7 border-b border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2.5">
          <span className="section-number">02</span>
          <h2 className="text-[15px] font-bold text-gray-900">Investor Collections</h2>
        </div>
      </div>

      {/* Grid: 4 columns. The featured card spans 2 columns. Others are 1. */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[220px]">
        {collections.map((col, i) => (
          <div
            key={i}
            className={`group relative overflow-hidden rounded-3xl cursor-pointer hover:scale-[1.01] transition-all duration-300 
              ${col.featured ? 'lg:col-span-2' : 'lg:col-span-1'} 
              bg-gray-200`}
          >
            {/* Background Image */}
            <img 
              src={col.image} 
              alt={col.title} 
              className="absolute inset-0 w-full h-full object-cover" 
            />
            
            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            
            {/* Content */}
            <div className="absolute bottom-6 left-6 z-10">
              <h3 className="text-white font-bold text-[16px] leading-tight mb-1">{col.title}</h3>
              <p className="text-gray-300 text-[12px]">{col.count}</p>
            </div>

            <div className="absolute bottom-6 right-6 z-10 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
              →
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}