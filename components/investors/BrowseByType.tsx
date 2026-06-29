'use client'
import React from 'react'

const types = [
  { icon: '🌱', label: 'Seed Investors', count: '1,246 Investors', color: '#10b981' },
  { icon: '📈', label: 'Series A Investors', count: '899 Investors', color: '#6366f1' },
  { icon: '👤', label: 'Angel Investors', count: '2,734 Investors', color: '#8b5cf6' },
  { icon: '🏢', label: 'Corporate Venture Funds', count: '612 Investors', color: '#3b82f6' },
  { icon: '📊', label: 'Late Stage Investors', count: '432 Investors', color: '#f97316' },
  { icon: '👨‍👩‍👧', label: 'Family Offices', count: '218 Investors', color: '#f59e0b' },
]

export default function BrowseByType() {
  return (
    <section className="py-7 border-b border-gray-100">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2.5">
          <span className="section-number-outline">3</span>
          <h2 className="text-[15px] font-bold text-gray-900">Browse by Investor Type</h2>
        </div>
        <button className="w-7 h-7 border border-gray-200 rounded-full flex items-center justify-center bg-white hover:bg-gray-50">
          <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="#6b7280" strokeWidth="2.5">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {types.map((t, i) => (
          <div
            key={i}
            className="flex items-center gap-3 border border-gray-100 rounded-xl px-4 py-3.5 bg-white hover:border-gray-200 hover:shadow-sm cursor-pointer transition-all"
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
              style={{ background: `${t.color}15` }}
            >
              {t.icon}
            </div>
            <div>
              <div className="text-[13px] font-semibold text-gray-900">{t.label}</div>
              <div className="text-[11px] text-gray-400 mt-0.5">{t.count}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}