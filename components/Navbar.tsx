'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const links = [
    { label: 'Companies', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Investors', href: '/investors' },
    { label: 'Funding', href: '/funding' },
    { label: 'Jobs', href: '/jobs' },
    { label: 'News', href: '/news' },
  ]

  return (
    <nav className="border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="max-w-[1100px] mx-auto px-4 flex items-center h-[52px] gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-7 h-7 rounded-full bg-[#f43f8e] flex items-center justify-center">
            <span className="text-white font-bold text-sm">G</span>
          </div>
          <span className="font-bold text-[15px] text-gray-900 tracking-tight">graphone</span>
        </Link>

        {/* Search */}
        <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 flex-1 max-w-[320px]">
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#9ca3af" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <span className="text-gray-400 text-[13px]">Search companies, founders, products...</span>
        </div>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-5 ml-2">
          {links.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13.5px] font-medium transition-colors ${
                  active
                    ? 'font-semibold text-[#f43f8e] border-b-2 border-[#f43f8e] pb-[2px]'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3 ml-auto flex-shrink-0">
          <a href="#" className="text-[13.5px] text-gray-600 hover:text-gray-900 font-medium">Log in</a>
          <button className="bg-[#f43f8e] text-white text-[13px] font-semibold px-4 py-[6px] rounded-md hover:bg-[#e11d6b] transition-colors">
            Sign up
          </button>
          <button className="flex flex-col gap-1 p-1">
            <span className="block w-4 h-[1.5px] bg-gray-600"></span>
            <span className="block w-4 h-[1.5px] bg-gray-600"></span>
            <span className="block w-4 h-[1.5px] bg-gray-600"></span>
          </button>
        </div>
      </div>
    </nav>
  )
}