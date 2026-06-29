'use client'
import React from 'react'

const newCompanies = [
  { name: 'MemGPT', cat: 'AI Memory', emoji: '🧠', bg: '#111827' },
  { name: 'Bria AI', cat: 'AI Video', emoji: '✨', bg: '#6366f1' },
  { name: 'CharacterX', cat: 'AI Chat', emoji: '💬', bg: '#111827' },
  { name: 'Unify', cat: 'AI Infra', emoji: '⚡', bg: '#0f172a' },
  { name: 'Palette', cat: 'AI Design', emoji: '🎨', bg: '#ec4899' },
]

export default function BottomSections() {
  return (
    <section className="py-7 border-b border-gray-100">
      <div className="flex gap-10">
        {/* Left: New on GraphOne */}
        <div className="flex-1">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-start gap-2.5">
              <span className="section-number-outline mt-0.5">12</span>
              <div>
                <h2 className="text-[14px] font-bold text-gray-900">New on GraphOne</h2>
                <p className="text-[11px] text-gray-400 mt-0.5">Recently added companies.</p>
              </div>
            </div>
            <a href="#" className="view-all-link">View all</a>
          </div>
          <div className="flex gap-3">
            {newCompanies.map((c, i) => (
              <div key={i} className="flex-1 cursor-pointer hover:scale-105 transition-transform">
                <div
                  className="h-[56px] rounded-xl flex items-center justify-center text-2xl mb-2"
                  style={{ background: c.bg }}
                >
                  {c.emoji}
                </div>
                <div className="text-[12px] font-semibold text-gray-900">{c.name}</div>
                <div className="text-[10.5px] text-gray-400">{c.cat}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Explore All Companies */}
        <div className="flex-1">
          <div className="flex items-start gap-2.5 mb-4">
            <span className="section-number-outline mt-0.5">13</span>
            <div>
              <h2 className="text-[14px] font-bold text-gray-900">Explore All Companies</h2>
              <p className="text-[11px] text-gray-400 mt-0.5">Find, filter and order the right companies.</p>
            </div>
          </div>

          {/* Filter row */}
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            {['Category', 'Funding Stage', 'Country', 'Team Size', 'More filters'].map((f, i) => (
              <button key={i} className="flex items-center gap-1 border border-gray-200 rounded-lg px-3 py-1.5 text-[12px] text-gray-600 hover:border-gray-300 bg-white transition-colors font-medium">
                {f}
                <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>
            ))}
          </div>

          {/* Sort row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-[12px] text-gray-500">Sort by:</span>
              <button className="flex items-center gap-1 border border-gray-200 rounded-lg px-3 py-1.5 text-[12px] text-gray-600 hover:border-gray-300 bg-white font-medium">
                Trending
                <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>
              {/* View toggles */}
              <button className="w-7 h-7 border border-gray-200 rounded flex items-center justify-center hover:bg-gray-50">
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="#6b7280" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
                </svg>
              </button>
              <button className="w-7 h-7 border border-gray-200 rounded flex items-center justify-center hover:bg-gray-50">
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="#6b7280" strokeWidth="2">
                  <path d="M3 6h18M3 12h18M3 18h18"/>
                </svg>
              </button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-gray-400">92,000+ companies</span>
              <button className="bg-[#f43f8e] text-white text-[12px] font-semibold px-4 py-1.5 rounded-lg hover:bg-[#e11d6b] transition-colors">
                Explore Companies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
