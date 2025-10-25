import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Ready to Master Traffic Laws?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Join thousands of learners who have successfully earned their certification. Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="rounded-full text-lg px-8">
              <Link to="/signup">
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-full text-lg px-8 bg-transparent">
              <Link to="/quiz">Try a Sample Quiz</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
