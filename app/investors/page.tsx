import InvestorsHero from '@/components/investors/InvestorsHero'
import TrendingInvestors from '@/components/investors/TrendingInvestors'
import InvestorCollections from '@/components/investors/InvestorCollections'
import BrowseByType from '@/components/investors/BrowseByType'
import MostActiveInvestors from '@/components/investors/MostActiveInvestors'
import InvestorsBacking from '@/components/investors/InvestorsBacking'
import EmergingAndResearch from '@/components/investors/EmergingAndResearch'
import CapitalGraph from '@/components/investors/CapitalGraph'
import InvestorsFooter from '@/components/investors/InvestorsFooter'

export default function InvestorsPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <InvestorsHero />
      <div className="max-w-[1100px] mx-auto px-4">
        <TrendingInvestors />
        <InvestorCollections />
        <BrowseByType />
        <MostActiveInvestors />
        <InvestorsBacking />
        <EmergingAndResearch />
      </div>
      <CapitalGraph />
      <div className="max-w-[1100px] mx-auto px-4">
        <InvestorsFooter />
      </div>
    </main>
  )
}