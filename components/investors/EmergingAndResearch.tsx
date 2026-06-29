'use client'
import React from 'react'

const emerging = [
  { name: 'Theory', stage: 'Early stage, AI first', logo: 'T', bg: '#111827' },
  { name: 'Conviction', stage: 'Seed to A, AI startups', logo: 'C', bg: '#1e3a8a' },
  { name: 'Radical', stage: 'Pre-seed to seed stage', logo: 'X', bg: '#111827' },
  { name: 'NFDG', stage: 'Airbnb fund, ATP', logo: 'W', bg: '#374151' },
  { name: 'South Park', stage: 'Operator led investments', logo: 'SP', bg: '#1e293b' },
]

const research = [
  { title: "AI Investors Zone", year: '2026', emoji: '📊' },
  { title: 'Who Leads Most Seed Rounds?', year: '2026', emoji: '🌱' },
  { title: 'The Rise of Operator Angels', year: '2026', emoji: '👤' },
  { title: 'State of AI Venture Capital', year: '2026', emoji: '💰' },
  { title: 'AI Capital Flows Report', year: '2026', emoji: '📈' },
]

export default function EmergingAndResearch() {
  return (
    <section className="py-7 border-b border-gray-100">
      <div className="flex gap-10">
        {/* Left: Emerging Investors */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2.5">
              <span className="section-number-outline">7</span>
              <h2 className="text-[14px] font-bold text-gray-900">Emerging Investors</h2>
            </div>
            <a href="#" className="text-[12px] text-gray-400 hover:text-gray-700 font-medium flex items-center gap-1">
              View all <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

          <div className="flex gap-3 items-start">
            {emerging.map((e, i) => (
              <div key={i} className="flex-1 cursor-pointer hover:scale-105 transition-transform">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-[12px] font-bold text-white mb-2"
                  style={{ background: e.bg }}
                >
                  {e.logo}
                </div>
                <div className="text-[12px] font-semibold text-gray-900">{e.name}</div>
                <div className="text-[10.5px] text-gray-400 mt-0.5 leading-tight">{e.stage}</div>
              </div>
            ))}

            {/* Scroll arrow */}
            <div className="flex items-center pt-3">
              <button className="w-7 h-7 border border-gray-200 rounded-full flex items-center justify-center bg-white hover:bg-gray-50">
                <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="#6b7280" strokeWidth="2.5">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right: Investor Research */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2.5">
              <span className="section-number-outline">8</span>
              <h2 className="text-[14px] font-bold text-gray-900">Investor Research</h2>
            </div>
            <a href="#" className="text-[12px] text-gray-400 hover:text-gray-700 font-medium flex items-center gap-1">
              View all <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

          <div className="flex gap-2">
            {research.map((r, i) => (
              <div
                key={i}
                className="flex-1 bg-gray-50 border border-gray-100 rounded-xl p-3 cursor-pointer hover:border-gray-200 hover:bg-gray-100 transition-all"
              >
                <div className="text-2xl mb-2">{r.emoji}</div>
                <div className="text-[11px] font-semibold text-gray-800 leading-tight mb-1">{r.title}</div>
                <div className="text-[10px] text-gray-400">{r.year}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}