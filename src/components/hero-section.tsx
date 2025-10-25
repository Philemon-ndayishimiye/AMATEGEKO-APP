import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { Link } from "react-router-dom"
import { GridBackground } from "./grid-background"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <GridBackground />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col items-center justify-center min-h-screen py-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-8 animate-fade-in backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-foreground">Master Traffic Laws with Confidence</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 animate-fade-in-up text-balance tracking-tight leading-[1.1]">
              Learn traffic laws
              <br />
              <span className="text-primary ">the smart way</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-12 animate-fade-in-up text-pretty leading-relaxed max-w-2xl mx-auto">
              Interactive lessons, real-world scenarios, and comprehensive testing to help you become a confident,
              law-abiding driver.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
              <Button
                size="lg"
                className="text-lg px-10 h-14 rounded-full group shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <Link to="/signup">
                  Start learning
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-10 h-14 rounded-full backdrop-blur-sm  bg-transparent"
                asChild
              >
                <Link to="/quiz">
                  <Play className="mr-2 w-5 h-5" />
                  Take a quiz
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-16 mt-16 border-t border-border">
            <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-colors">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-3">500+</div>
              <div className="text-base text-muted-foreground">Practice questions</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-colors">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-3">98%</div>
              <div className="text-base text-muted-foreground">Pass rate</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-colors">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-3">10K+</div>
              <div className="text-base text-muted-foreground">Certified users</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
