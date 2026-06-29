'use client'
import React from 'react'

const startups = [
  {
    name: '', // Text removed
    cat: '',  // Text removed
    desc: '', // Text removed
    year: '',
    size: '',
    image: '/glean.png', // Ensure this matches your file name exactly
    gridClass: 'col-span-6',
    ptClass: 'pt-6',
    imgObjClass: 'object-cover object-center',
    isImageButton: true, // Flag to handle custom layout for this card
  },
  {
    name: 'Reka',
    cat: 'AI Research',
    desc: 'Building multimodal AI models.',
    year: '2023',
    size: '11-50',
    image: '/reka.png',
    gridClass: 'col-span-3',
    ptClass: 'pt-[106px]',
    imgObjClass: 'object-cover object-center',
  },
  {
    name: 'Hugging Face',
    cat: 'AI Infrastructure',
    desc: 'The AI community building the future.',
    year: '2016',
    size: '20-500',
    image: '/huggingface.png',
    gridClass: 'col-span-3',
    ptClass: 'pt-[106px]',
    imgObjClass: 'object-contain object-left-top p-5 scale-[1.3] origin-top-left',
  },
  {
    name: 'Mistral AI',
    cat: 'AI Models',
    desc: 'Frontier AI models for every builder.',
    year: '2023',
    size: '51-200',
    image: '/mistralai.png',
    gridClass: 'col-span-4',
    ptClass: 'pt-[106px]',
    imgObjClass: 'object-cover object-center',
  },
]

export default function EmergingStartups() {
  return (
    <section className="py-7 border-b border-gray-100 max-w-[1200px] mx-auto px-4 select-none">
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-start gap-2.5">
          <span className="w-5 h-5 rounded-full bg-pink-100 text-pink-500 text-[11px] font-bold flex items-center justify-center mt-0.5">3</span>
          <div>
            <h2 className="text-[15px] font-bold text-gray-900 tracking-tight">Emerging AI Startups to Watch</h2>
            <p className="text-[12px] text-gray-400 mt-0.5">Promising early-stage companies gaining real traction.</p>
          </div>
        </div>
        <a href="#" className="text-[12px] text-gray-900 font-bold hover:underline transition-all">View all</a>
      </div>

      <div className="grid grid-cols-12 gap-3.5 w-full items-stretch">
        {startups.map((s, i) => (
          <div
            key={i}
            className={`${s.gridClass} ${s.ptClass} rounded-2xl border border-gray-100/80 cursor-pointer group relative overflow-hidden flex flex-col justify-start px-5 pb-5 min-h-[185px] bg-white transition-all duration-300 hover:scale-[1.015] hover:shadow-[0_10px_20px_-8px_rgba(0,0,0,0.04)]`}
          >
            <img 
              src={s.image} 
              alt={s.name}
              className={`absolute inset-0 w-full h-full pointer-events-none transition-transform duration-500 group-hover:scale-[1.02] ${s.imgObjClass}`}
            />

            {!s.isImageButton && (
              <div className="relative z-10 flex flex-col justify-between h-full w-full pointer-events-none">
                <div>
                  <h3 className="text-[14px] font-bold text-gray-950 tracking-tight leading-none">{s.name}</h3>
                  <p className="text-[11px] text-gray-400 font-medium tracking-wide mt-1 mb-2">{s.cat}</p>
                  <p className="text-[12px] text-gray-500 font-medium leading-[1.4] max-w-[240px]">{s.desc}</p>
                </div>
                <div className="flex items-center gap-1.5 mt-3 pt-0.5">
                  <span className="text-[11px] text-gray-400 font-semibold">{s.year}</span>
                  <span className="text-gray-300 text-[10px]">•</span>
                  <span className="text-[11px] text-gray-400 font-medium">{s.size}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}