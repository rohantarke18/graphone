'use client'
import React from 'react'

const nodes = [
  { label: 'Investor', icon: '👤', color: '#f43f8e' },
  { label: 'Founder', icon: '🧑‍💻', color: '#8b5cf6' },
  { label: 'Company', icon: '🏢', color: '#6366f1' },
  { label: 'Funding Round', icon: '💰', color: '#06b6d4' },
  { label: 'Product', icon: '📦', color: '#10b981' },
]

export default function CapitalGraph() {
  return (
    <section className="bg-[#0a0a0f] py-10 my-0">
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-[18px] h-[18px] rounded-full border border-gray-600 text-[10px] font-semibold text-gray-400">9</span>
            <span className="text-[11px] text-gray-500 font-medium">Explore the Capital Graph</span>
          </div>
          <button className="text-gray-500 hover:text-gray-300">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        <div className="flex items-center justify-between gap-8">
          <div className="max-w-[320px]">
            <h2 className="text-[28px] font-black text-white leading-tight mb-3">
              Visualize How Capital Moves in the AI Economy
            </h2>
            <p className="text-[13px] text-gray-400 leading-relaxed mb-6">
              Explore the relationships between investors, founders, companies, funding rounds and products.
            </p>
            <button className="bg-[#f43f8e] text-white text-[13px] font-bold px-5 py-2.5 rounded-lg hover:bg-[#e11d6b] transition-colors flex items-center gap-2">
              Explore Capital Graph
              <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>

          {/* Flow diagram */}
          <div className="flex-1 flex items-center justify-center">
            <div className="flex items-center gap-2">
              {nodes.map((node, i) => (
                <React.Fragment key={i}>
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg"
                      style={{ background: `${node.color}22`, border: `2px solid ${node.color}55` }}
                    >
                      {node.icon}
                    </div>
                    <span className="text-[11px] text-gray-400 font-medium text-center whitespace-nowrap">{node.label}</span>
                  </div>
                  {i < nodes.length - 1 && (
                    <div className="flex items-center mb-5">
                      <div className="w-8 h-[1px] bg-gradient-to-r from-gray-600 to-gray-500"></div>
                      <svg width="8" height="8" fill="#6b7280" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="#6b7280" strokeWidth="2" fill="none"/>
                      </svg>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}