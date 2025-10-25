import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { value: "500+", label: "Practice Questions", description: "Comprehensive question bank" },
  { value: "98%", label: "Pass Rate", description: "Students who complete our program" },
  { value: "10K+", label: "Certified Users", description: "Successfully certified learners" },
  { value: "4.9/5", label: "User Rating", description: "Average satisfaction score" },
]

export function StatsSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="border-border bg-card text-center">
              <CardContent className="p-8">
                <div className="text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
