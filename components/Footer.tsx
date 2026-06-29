'use client'
import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full bg-white py-6 select-none">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Main Card Wrapper styled exactly like the screenshot */}
        <div 
          className="w-full rounded-[22px] border border-pink-100/60 px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            background: 'linear-gradient(103deg, #fff5f8 0%, #fffbfd 50%, #fff6f9 100%)'
          }}
        >
          {/* Left Contents Group */}
          <div className="flex items-center gap-3.5 flex-shrink-0 w-full md:w-auto">
            {/* Custom Circular Logo Badge */}
            <div className="w-[38px] h-[38px] rounded-2xl bg-[#ff2e74] flex items-center justify-center shadow-[0_3px_10px_rgba(255,46,116,0.2)] flex-shrink-0">
              <span className="text-white font-extrabold text-[17px] tracking-tight transform -translate-y-[0.5px]">g</span>
            </div>
            <div>
              <h3 className="text-[#0f172a] font-bold text-[14.5px] tracking-tight leading-tight">
                Be the first to discover what's next in AI
              </h3>
              <p className="text-[#94a3b8] font-medium text-[12px] mt-0.5">
                Join thousands of builders, investors and researchers.
              </p>
            </div>
          </div>

          {/* Right Input & Action Button Area */}
          <div className="flex items-center bg-white border border-gray-100 rounded-full pl-4 pr-1.5 py-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] w-full md:w-[380px] justify-between focus-within:border-pink-200/80 transition-all">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent text-gray-800 placeholder-gray-400 text-[13px] font-medium outline-none w-full pr-3"
            />
            <button 
              type="button"
              className="bg-[#ff2e74] text-white text-[12.5px] font-bold px-5 py-2 rounded-full hover:bg-[#e62263] transition-colors whitespace-nowrap shadow-[0_2px_6px_rgba(255,46,116,0.15)]"
            >
              Get updates
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}