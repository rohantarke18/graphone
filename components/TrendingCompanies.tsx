'use client'
import React from 'react'
import Link from 'next/link'

const topThree = [
  { num: '01', name: 'OpenAI', category: 'AI Coding', desc: 'Building advanced AI models.', trending: 'Trending #1', views: '15.2K views', bg: 'linear-gradient(135deg, #160c2e 0%, #24144e 100%)', image: '/cursor.png', href: '/company/openai' },
  { num: '02', name: 'Perplexity', category: 'AI Search', desc: 'AI search engine for real-time answers.', trending: 'Trending #2', views: '12.3K views', bg: 'linear-gradient(135deg, #030f1e 0%, #061933 100%)', image: '/perplexity.png', href: null },
  { num: '03', name: 'Midjourney', category: 'AI Image', desc: 'Stunning images from natural language.', trending: 'Trending #3', views: '9.7K views', bg: 'linear-gradient(135deg, #160726 0%, #501d50 100%)', image: '/midjourney.png', href: null },
]

const sideTwo = [
  { num: '04', name: 'Runway', category: 'AI Video', views: '7.3K views', image: '/runway.png' },
  { num: '05', name: 'Synthesia', category: 'AI Video', views: '6.1K views', image: '/synthesia.png' },
]

export default function TrendingCompanies() {
  return (
    <section className="py-7 border-b border-gray-100 max-w-[1200px] mx-auto px-4 select-none">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2.5">
          <span className="w-5 h-5 rounded-full bg-pink-100 text-pink-500 text-[11px] font-bold flex items-center justify-center">1</span>
          <div>
            <h2 className="text-[15px] font-bold text-gray-900 tracking-tight">Trending AI Companies</h2>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        {/* Left Side: 3 Big Cards */}
        <div className="col-span-12 lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-4">
          {topThree.map((c, i) => {
            const card = (
              <div key={i} className="rounded-2xl cursor-pointer hover:scale-[1.02] transition-all duration-300 overflow-hidden relative flex flex-col justify-between p-5 min-h-[230px] w-full" style={{ background: c.bg }}>
                <img src={c.image} alt={c.name} className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-screen" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center text-[10px] text-gray-300 border border-gray-600 w-5 h-5 rounded-full mb-3">{c.num}</div>
                  <h3 className="text-xl font-bold text-white">{c.name}</h3>
                  <p className="text-[11px] text-gray-400 mb-2">{c.category}</p>
                  <p className="text-[12px] text-gray-300 max-w-[150px]">{c.desc}</p>
                </div>
                <div className="relative z-10 flex items-center justify-between mt-4">
                  <span className="text-[10px] font-bold text-white bg-white/10 px-2 py-1 rounded-full">🔥 {c.trending}</span>
                  <span className="text-[11px] text-gray-400">{c.views}</span>
                </div>
              </div>
            )
            return c.href ? <Link key={i} href={c.href} className="block">{card}</Link> : <div key={i}>{card}</div>
          })}
        </div>

        {/* Right Side: 2 Small Cards */}
        <div className="col-span-12 lg:col-span-3 flex flex-col gap-4">
          {sideTwo.map((c, i) => (
            <div key={i} className="rounded-2xl border border-gray-100 bg-white p-5 flex items-center justify-between min-h-[110px] hover:shadow-lg transition-all">
              <div className="flex items-center gap-4">
                <span className="text-[11px] font-bold bg-gray-950 text-white px-2 py-0.5 rounded-md">{c.num}</span>
                <div>
                  <h3 className="font-bold text-sm">{c.name}</h3>
                  <p className="text-[11px] text-gray-400">{c.category} • {c.views}</p>
                </div>
              </div>
              <img src={c.image} alt={c.name} className="w-10 h-10 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}