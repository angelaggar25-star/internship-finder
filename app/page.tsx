import HeroSection from '@/components/HeroSection'
import SearchSection from '@/components/SearchSection'
import FeaturedInternships from '@/components/FeaturedInternships'
import HowItWorks from '@/components/HowItWorks'
import StatsSection from '@/components/StatsSection'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <HeroSection />
      <SearchSection />
      <FeaturedInternships />
      <HowItWorks />
      <StatsSection />
      <Testimonials />
      <CTASection />
    </div>
  )
}