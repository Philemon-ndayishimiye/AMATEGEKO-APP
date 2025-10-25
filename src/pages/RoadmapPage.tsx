import { Header } from "../components/header"
import { RoadmapSection } from "../components/roadmap-section"

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Your Learning Journey</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Follow our comprehensive roadmap to master traffic laws and earn your certification.
            </p>
          </div>
        </div>
        <RoadmapSection />
      </div>
    </div>
  )
}
