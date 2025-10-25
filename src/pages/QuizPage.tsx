import { QuizInterface } from "../components/quiz-interface"
import { Header } from "../components/header"

export default function QuizPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <QuizInterface />
      </div>
    </div>
  )
}
