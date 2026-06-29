'use client'

import React from 'react'

export default function AIUnicorns() {
  return (
    <section className="py-7 border-b border-gray-100 max-w-[1200px] mx-auto px-4 select-none">
      <button 
        type="button"
        onClick={() => console.log('AI Unicorns banner clicked')}
        className="w-full text-left block rounded-2xl overflow-hidden border border-gray-100/80 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.04)] focus:outline-none"
      >
        <img 
          src="/aiunicorns.png" 
          alt="AI Unicorns Showcase" 
          className="w-full h-auto object-cover block pointer-events-none"
        />
      </button>
    </section>
  )
}