'use client'
import React from 'react'

const breakout = [
  { emoji: '🦔', name: 'Pika', desc: 'Launched new 1.0 video model', color: '#f59e0b' },
  { emoji: '🧠', name: 'Cognition', desc: 'Closed $175M Series B', color: '#111827' },
  { emoji: '⚡', name: 'Adept', desc: 'Enterprise adoption surged 200%', color: '#6366f1' },
]


const funded = [
  { emoji: 'xAI', name: 'xAI', amount: '$6B Series B', date: 'May 26, 2025', partner: 'xAI', letterBg: '#111827' },
  { emoji: 'DB', name: 'Databricks', amount: '$10B Series J', date: 'May 21, 2025', partner: 'Microsoft', letterBg: '#ef4444' },
  { emoji: 'MA', name: 'Mistral AI', amount: '$640M Series B', date: 'May 20, 2025', partner: 'Lightspeed', letterBg: '#f97316' },
]

const watchList = [
  { emoji: '00', name: 'Deci', desc: 'AI inference platform', subdesc: 'High performance.', letterBg: '#111827' },
  { emoji: 'T', name: 'Typeface', desc: 'AI Marketing platform', subdesc: 'Generative content.', letterBg: '#ef4444' },
  { emoji: 'G', name: 'Granola', desc: 'AI Notetaker.', subdesc: 'For teams.', letterBg: '#10b981' },
]

function ColumnHeader({ num, title, subtitle }: { num: string; title: string; subtitle: string }) {
  return (
    <div className="flex items-start gap-2 mb-4">
      <span
        className="inline-flex items-center justify-center w-[18px] h-[18px] rounded-full border border-gray-300 text-[10px] font-semibold text-gray-600 flex-shrink-0 mt-0.5"
      >
        {num}
      </span>
      <div>
        <div className="text-[13.5px] font-bold text-gray-900">{title}</div>
        <div className="text-[11px] text-gray-400 mt-0.5">{subtitle}</div>
      </div>
    </div>
  )
}

export default function ThreeColumnLists() {
  return (
    <section className="py-7 border-b border-gray-100">
      <div className="grid grid-cols-3 gap-6">
        {/* Breakout Companies */}
        <div className="border-r border-gray-100 pr-6">
          <ColumnHeader num="5" title="Breakout Companies" subtitle="Companies making moves." />
          <div className="flex flex-col gap-1">
            {breakout.map((c, i) => (
              <div key={i} className="flex items-center gap-3 py-3 border-b border-gray-50 cursor-pointer hover:bg-gray-50 rounded-lg px-2 -mx-2 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-lg flex-shrink-0">
                  {c.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] font-semibold text-gray-900">{c.name}</div>
                  <div className="text-[11.5px] text-gray-400 truncate">{c.desc}</div>
                </div>
                <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="#d1d5db" strokeWidth="2.5" className="flex-shrink-0">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </div>
            ))}
          </div>
        </div>

        {/* Recently Funded */}
        <div className="border-r border-gray-100 pr-6">
          <ColumnHeader num="6" title="Recently Funded AI Startups" subtitle="Latest funding announcements." />
          <div className="flex flex-col gap-1">
            {funded.map((c, i) => (
              <div key={i} className="flex items-center gap-3 py-3 border-b border-gray-50 cursor-pointer hover:bg-gray-50 rounded-lg px-2 -mx-2 transition-colors">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0"
                  style={{ background: c.letterBg }}
                >
                  {c.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] font-semibold text-gray-900">{c.name}</div>
                  <div className="text-[11px] text-gray-400">{c.amount}</div>
                  <div className="text-[11px] text-gray-300">{c.date} · {c.partner}</div>
                </div>
                <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="#d1d5db" strokeWidth="2.5" className="flex-shrink-0">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </div>
            ))}
          </div>
        </div>

        {/* Startups to Watch */}
        <div>
          <ColumnHeader num="7" title="Startups to Watch" subtitle="High potential companies to keep an eye on." />
          <div className="flex flex-col gap-1">
            {watchList.map((c, i) => (
              <div key={i} className="flex items-center gap-3 py-3 border-b border-gray-50 cursor-pointer hover:bg-gray-50 rounded-lg px-2 -mx-2 transition-colors">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0"
                  style={{ background: c.letterBg }}
                >
                  {c.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] font-semibold text-gray-900">{c.name}</div>
                  <div className="text-[11.5px] text-gray-400">{c.desc}</div>
                  <div className="text-[11px] text-gray-300">{c.subdesc}</div>
                </div>
                <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="#d1d5db" strokeWidth="2.5" className="flex-shrink-0">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
