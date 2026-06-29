'use client'
import React from 'react'

const winners = [
  {
    company: 'OpenAI',
    backers: ['Microsoft', 'Thrive Capital', 'Khosla Ventures', 'Founders Fund'],
  },
  {
    company: 'Anthropic',
    backers: ['Google Ventures', 'Spark Capital', 'Manto Ventures'],
  },
  {
    company: 'Perplexity',
    backers: ['ello', 'Databricks Ventures', 'NEA', 'IVP'],
  },
]

const themes = [
  { icon: '🤖', label: 'AI Agents', count: '2,734 Investors', color: '#8b5cf6' },
  { icon: '💻', label: 'AI Coding', count: '158 Investors', color: '#6366f1' },
  { icon: '🏗️', label: 'AI Infrastructure', count: '188 Investors', color: '#3b82f6' },
  { icon: '⚡', label: 'Developer Tools', count: '143 Investors', color: '#06b6d4' },
  { icon: '🤖', label: 'Robotics', count: '62 Investors', color: '#10b981' },
  { icon: '🏥', label: 'Healthcare AI', count: '107 Investors', color: '#f43f8e' },
  { icon: '🛡️', label: 'Defense AI', count: '53 Investors', color: '#6b7280' },
  { icon: '🎬', label: 'Video AI', count: '81 Investors', color: '#f97316' },
]

export default function InvestorsBacking() {
  return (
    <section className="py-7 border-b border-gray-100">
      <div className="flex gap-10">
        {/* Left: Investors Backing Winners */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2.5">
              <span className="section-number-outline">5</span>
              <h2 className="text-[14px] font-bold text-gray-900">Investors Backing Winners</h2>
            </div>
            <a href="#" className="text-[12px] text-gray-400 hover:text-gray-700 font-medium flex items-center gap-1">
              View all <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {winners.map((w, i) => (
              <div key={i}>
                <div className="text-[14px] font-bold text-gray-900 mb-2">{w.company}</div>
                <div className="text-[10px] text-gray-400 font-medium mb-2">Backed by</div>
                <div className="flex flex-col gap-1.5">
                  {w.backers.map((b, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded bg-gray-100 flex items-center justify-center text-[9px] font-bold text-gray-500 flex-shrink-0">
                        {b[0]}
                      </div>
                      <span className="text-[11px] text-gray-600">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Capital Themes */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2.5">
              <span className="section-number-outline">6</span>
              <h2 className="text-[14px] font-bold text-gray-900">Capital Themes</h2>
            </div>
            <a href="#" className="text-[12px] text-gray-400 hover:text-gray-700 font-medium flex items-center gap-1">
              View all <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {themes.map((t, i) => (
              <div key={i} className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                <span className="text-base flex-shrink-0">{t.icon}</span>
                <div>
                  <div className="text-[11px] font-semibold text-gray-800 leading-tight">{t.label}</div>
                  <div className="text-[10px] text-gray-400">{t.count}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}