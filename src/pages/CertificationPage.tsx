import { Header } from "../components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, Download, Share2, CheckCircle2 } from "lucide-react"

export default function CertificationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Your Certification</h1>
              <p className="text-xl text-muted-foreground">Track your progress and earn official certificates</p>
            </div>

            {/* Certificate Preview */}
            <Card className="border-2 border-accent mb-8">
              <CardContent className="p-8 md:p-12">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 mx-auto rounded-full bg-accent/20 flex items-center justify-center">
                    <Award className="w-12 h-12 text-accent" />
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-2">Certificate of Completion</h2>
                    <p className="text-muted-foreground">Traffic Law Mastery Program</p>
                  </div>

                  <div className="py-6 border-y border-border">
                    <p className="text-lg text-muted-foreground mb-2">This certifies that</p>
                    <p className="text-3xl font-bold text-primary mb-2">John Doe</p>
                    <p className="text-muted-foreground">
                      has successfully completed all modules and demonstrated proficiency in traffic laws
                    </p>
                  </div>

                  <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
                    <div>
                      <div className="font-semibold text-foreground">Issue Date</div>
                      <div>January 24, 2025</div>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Certificate ID</div>
                      <div>TLA-2025-001234</div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button className="flex-1">
                      <Download className="mr-2 w-4 h-4" />
                      Download Certificate
                    </Button>
                    <Button variant="outline" className="flex-1 bg-transparent">
                      <Share2 className="mr-2 w-4 h-4" />
                      Share on LinkedIn
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Progress Overview */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Completed Modules</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span className="text-foreground">Traffic Signs & Signals</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span className="text-foreground">Right of Way Rules</span>
                  </div>
                  <div className="flex items-center gap-3 opacity-50">
                    <div className="w-5 h-5 rounded-full border-2 border-muted-foreground" />
                    <span className="text-muted-foreground">Speed Limits & Regulations</span>
                  </div>
                  <div className="flex items-center gap-3 opacity-50">
                    <div className="w-5 h-5 rounded-full border-2 border-muted-foreground" />
                    <span className="text-muted-foreground">Parking & Stopping Rules</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Your Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Overall Progress</span>
                    <span className="text-2xl font-bold text-primary">29%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Quiz Average</span>
                    <span className="text-2xl font-bold text-accent">92%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Time Invested</span>
                    <span className="text-2xl font-bold text-foreground">3.5h</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
