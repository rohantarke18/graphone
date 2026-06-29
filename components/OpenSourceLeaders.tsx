'use client'

import React from 'react'

export default function OpenSourceLeaders() {
  return (
    <section className="py-4 max-w-[1200px] mx-auto px-4 select-none w-full">
      <button 
        type="button"
        onClick={() => console.log('Open Source AI Leaders banner clicked')}
        className="w-full text-left block rounded-[20px] overflow-hidden border border-gray-100/70 bg-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_-6px_rgba(0,0,0,0.08)] focus:outline-none"
      >
        <img 
          src="/opensourceai.png" 
          alt="Open Source AI Leaders Showcase" 
          className="w-full h-auto object-contain block pointer-events-none"
        />
      </button>
    </section>
  )
}