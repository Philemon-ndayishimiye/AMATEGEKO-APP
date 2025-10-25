import { BookOpen, Target, Award, TrendingUp, Users, Shield, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: BookOpen,
    title: "Interactive Lessons",
    description:
      "Engaging content with real-world scenarios and visual aids to help you understand traffic laws thoroughly.",
  },
  {
    icon: Target,
    title: "Practice Quizzes",
    description: "Test your knowledge with hundreds of practice questions designed to prepare you for real tests.",
  },
  {
    icon: Award,
    title: "Get Certified",
    description: "Earn official certificates upon completion to showcase your traffic law expertise.",
  },
  {
    icon: TrendingUp,
    title: "Track Progress",
    description: "Monitor your learning journey with detailed analytics and personalized recommendations.",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Join thousands of learners and share experiences in our supportive community.",
  },
  {
    icon: Shield,
    title: "Always Updated",
    description: "Content regularly updated to reflect the latest traffic laws and regulations.",
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    description:
      "Learn in your preferred language with content available in multiple languages for better understanding.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Everything You Need to Master Traffic Laws
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            A comprehensive platform designed to make learning traffic laws intuitive, engaging, and effective.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:border-primary/50 transition-all hover:shadow-lg group">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
