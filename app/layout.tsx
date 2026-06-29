import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GraphOne - Discover AI Companies',
  description: 'Explore AI startups, unicorns, frontier labs, and emerging companies',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
