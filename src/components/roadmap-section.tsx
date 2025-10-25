import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Circle, Lock, Award, BookOpen, Clock } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

const roadmapSteps = [
  {
    id: 1,
    title: "Traffic Signs & Signals",
    description: "Learn all standard traffic signs, signals, and road markings",
    lessons: 12,
    duration: "2 hours",
    status: "completed" as const,
  },
  {
    id: 2,
    title: "Right of Way Rules",
    description: "Master intersection rules, pedestrian rights, and priority situations",
    lessons: 10,
    duration: "1.5 hours",
    status: "completed" as const,
  },
  {
    id: 3,
    title: "Speed Limits & Regulations",
    description: "Understand speed limits, zones, and when to adjust your speed",
    lessons: 8,
    duration: "1 hour",
    status: "current" as const,
  },
  {
    id: 4,
    title: "Parking & Stopping Rules",
    description: "Learn legal parking, stopping restrictions, and special zones",
    lessons: 9,
    duration: "1.5 hours",
    status: "locked" as const,
  },
  {
    id: 5,
    title: "Highway & Freeway Laws",
    description: "Master highway driving, merging, lane changes, and exits",
    lessons: 11,
    duration: "2 hours",
    status: "locked" as const,
  },
  {
    id: 6,
    title: "Special Situations",
    description: "Handle emergencies, weather conditions, and unusual scenarios",
    lessons: 10,
    duration: "1.5 hours",
    status: "locked" as const,
  },
  {
    id: 7,
    title: "Final Certification",
    description: "Complete the comprehensive exam and earn your certificate",
    lessons: 1,
    duration: "1 hour",
    status: "locked" as const,
    isCertification: true,
  },
]

export function RoadmapSection() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-muted/20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">Your Learning Roadmap</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Follow our structured path from beginner to certified expert. Track your progress and unlock new modules as
            you advance.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical progress line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-border hidden lg:block" />
            <div
              className="absolute left-8 top-0 w-1 bg-primary hidden lg:block transition-all duration-1000"
              style={{ height: "29%" }}
            />

            <div className="space-y-6">
              {roadmapSteps.map((step) => {
                const isCompleted = step.status === "completed"
                const isCurrent = step.status === "current"
                const isLocked = step.status === "locked"
                const isHovered = hoveredStep === step.id

                return (
                  <div
                    key={step.id}
                    className="road-step relative"
                    onMouseEnter={() => setHoveredStep(step.id)}
                    onMouseLeave={() => setHoveredStep(null)}
                  >
                    <div className="flex items-start gap-6 lg:gap-8">
                      {/* Status indicator */}
                      <div className="flex-shrink-0 relative z-10">
                        <div
                          className={`
                          w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300
                          ${isCompleted ? "bg-accent text-accent-foreground shadow-lg" : ""}
                          ${isCurrent ? "bg-primary text-primary-foreground pulse-current" : ""}
                          ${isLocked ? "bg-muted text-muted-foreground" : ""}
                          ${step.isCertification ? "bg-gradient-to-br from-accent to-primary text-white" : ""}
                        `}
                        >
                          {isCompleted && <CheckCircle2 className="w-8 h-8" />}
                          {isCurrent && <Circle className="w-8 h-8" />}
                          {isLocked && !step.isCertification && <Lock className="w-8 h-8" />}
                          {step.isCertification && <Award className="w-8 h-8" />}
                        </div>
                      </div>

                      {/* Content card */}
                      <Card
                        className={`
                          flex-1 border-2 transition-all duration-300
                          ${isCompleted ? "border-accent/30 bg-accent/5" : ""}
                          ${isCurrent ? "border-primary bg-primary/5 shadow-xl" : ""}
                          ${isLocked ? "border-border bg-card opacity-70" : ""}
                          ${isHovered && !isLocked ? "shadow-2xl scale-[1.02] -translate-y-1" : ""}
                          ${step.isCertification ? "border-accent bg-gradient-to-br from-accent/10 to-primary/10" : ""}
                        `}
                      >
                        <CardContent className="p-8">
                          <div className="flex items-start justify-between gap-4 mb-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-3">
                                <span className="text-sm font-bold text-muted-foreground px-3 py-1 rounded-full bg-muted">
                                  Step {step.id}
                                </span>
                                {step.isCertification && (
                                  <span className="text-sm font-bold text-accent px-3 py-1 rounded-full bg-accent/20">
                                    Certification
                                  </span>
                                )}
                              </div>
                              <h3 className="text-3xl font-bold text-foreground mb-3">{step.title}</h3>
                              <p className="text-muted-foreground text-lg leading-relaxed mb-6">{step.description}</p>

                              <div className="flex flex-wrap items-center gap-6 mb-6">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                  <BookOpen className="w-5 h-5" />
                                  <span className="font-medium">
                                    {step.lessons} {step.lessons === 1 ? "Exam" : "Lessons"}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                  <Clock className="w-5 h-5" />
                                  <span className="font-medium">{step.duration}</span>
                                </div>
                              </div>

                              {/* Action button */}
                              {!isLocked && (
                                <Button
                                  size="lg"
                                  variant={isCurrent ? "default" : "outline"}
                                  className="rounded-full"
                                  asChild
                                >
                                  <Link to={`/learn/${step.id}`}>
                                    {isCompleted ? "Review Module" : isCurrent ? "Continue Learning" : "Start Module"}
                                  </Link>
                                </Button>
                              )}
                              {isLocked && (
                                <Button size="lg" variant="ghost" disabled className="rounded-full">
                                  <Lock className="mr-2 w-4 h-4" />
                                  Complete previous steps to unlock
                                </Button>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Progress summary */}
          <div className="mt-16">
            <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 shadow-xl">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Your Progress</h3>
                    <p className="text-muted-foreground text-lg">
                      2 of 7 modules completed • Keep going to earn your certification!
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-6xl font-bold text-primary mb-2">29%</div>
                    <div className="text-sm text-muted-foreground">Complete</div>
                  </div>
                </div>
                <div className="w-full h-4 bg-muted rounded-full overflow-hidden mt-6">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                    style={{ width: "29%" }}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
