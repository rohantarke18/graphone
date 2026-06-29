'use client'
import React from 'react'

export default function InvestorsFooter() {
  return (
    <section className="py-5 border-b border-gray-100">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="section-number-outline">10</span>
          <div>
            <span className="text-[14px] font-bold text-gray-900">Join the GraphOne Investor Network</span>
            <span className="text-[13px] text-gray-400 ml-4">Unlock better opportunities. Build what's next.</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" className="text-[13px] text-gray-600 font-medium hover:text-gray-900">Log in</a>
          <button className="bg-[#f43f8e] text-white text-[13px] font-semibold px-4 py-2 rounded-lg hover:bg-[#e11d6b] transition-colors">
            Sign up for free
          </button>
        </div>
      </div>
    </section>
  )
}