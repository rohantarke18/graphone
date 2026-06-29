import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrendingCompanies from '@/components/TrendingCompanies'
import FastestGrowing from '@/components/FastestGrowing'
import EmergingStartups from '@/components/EmergingStartups'
import BrowseByCategory from '@/components/BrowseByCategory'
import ThreeColumnLists from '@/components/ThreeColumnLists'
import AIUnicorns from '@/components/AIUnicorns'
import FrontierLabs from '@/components/FrontierLabs'
import OpenSourceLeaders from '@/components/OpenSourceLeaders'
import CuratedCollections from '@/components/CuratedCollections'
import BottomSections from '@/components/BottomSections'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      <div className="max-w-[1100px] mx-auto px-4">
        <TrendingCompanies />
        <FastestGrowing />
        <EmergingStartups />
        <BrowseByCategory />
        <ThreeColumnLists />
        <AIUnicorns />
      </div>
      <FrontierLabs />
      <OpenSourceLeaders />
      <div className="max-w-[1100px] mx-auto px-4">
        <CuratedCollections />
        <BottomSections />
      </div>
      <Footer />
    </main>
  )
}
