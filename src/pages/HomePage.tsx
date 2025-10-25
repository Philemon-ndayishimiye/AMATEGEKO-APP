import { Header } from "../components/header"
import { HeroSection } from "../components/hero-section"
import { FeaturesSection } from "../components/features-section"
import { StatsSection } from "../components/stats-section"
import { RoadmapSection } from "../components/roadmap-section"
import { CTASection } from "../components/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <RoadmapSection />
      <CTASection />
    </div>
  )
}
