'use client'
import React from 'react'

const investors = [
  {
    name: 'a16z',
    nameStyle: 'font-black italic text-[18px]',
    portfolio: '120 portfolio companies',
    tags: ['OpenAI', 'CURSOR', 'perplexity'],
    tagsBg: ['bg-gray-100', 'bg-gray-100', 'bg-gray-100'],
    extra: ['Harvey', 'Anyshphere'],
  },
  {
    name: 'SEQUOIA',
    nameStyle: 'font-black text-[16px] tracking-widest',
    portfolio: '98 portfolio companies',
    tags: ['ANTHROPIC', 'Glean', 'Decagon'],
    extra: ['Mercor', 'Pika'],
  },
  {
    name: 'Lightspeed',
    nameStyle: 'font-bold text-[16px]',
    portfolio: '86 portfolio companies',
    tags: ['MISTRAL AI', 'Cohere', 'Gamma'],
    extra: ['Rippling', 'Browserbase'],
  },
  {
    name: 'Accel',
    nameStyle: 'font-black italic text-[18px]',
    portfolio: '72 portfolio companies',
    tags: ['krutrim', 'meesho', 'Shiprocket'],
    extra: ['Kloud', 'Razorpay'],
  },
]

export default function MostActiveInvestors() {
  return (
    <section className="py-7 border-b border-gray-100">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2.5">
          <span className="section-number-outline">4</span>
          <h2 className="text-[15px] font-bold text-gray-900">Most Active Investors</h2>
        </div>
        <a href="#" className="text-[13px] text-gray-400 hover:text-gray-700 font-medium flex items-center gap-1">
          View all
          <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>

      <div className="grid grid-cols-4 gap-5">
        {investors.map((inv, i) => (
          <div key={i} className="border-r border-gray-100 pr-5 last:border-0 last:pr-0">
            <div className={`${inv.nameStyle} text-gray-900 mb-1`}>{inv.name}</div>
            <div className="text-[11px] text-gray-400 mb-3">{inv.portfolio}</div>

            {/* Portfolio tags */}
            <div className="flex flex-wrap gap-1.5 mb-2">
              {inv.tags.map((tag, j) => (
                <span key={j} className="text-[10px] font-medium text-gray-600 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {inv.extra.map((tag, j) => (
                <span key={j} className="text-[10px] font-medium text-gray-600 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-md">
                  {tag}
                </span>
              ))}
            </div>

            <a href="#" className="text-[11px] font-semibold text-gray-700 hover:text-gray-900 flex items-center gap-1">
              View portfolio
              <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}