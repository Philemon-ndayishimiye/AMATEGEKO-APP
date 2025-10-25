import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, XCircle, ArrowRight, RotateCcw } from "lucide-react"

const quizQuestions = [
  {
    id: 1,
    question: "What does a red octagonal sign indicate?",
    options: ["Yield", "Stop", "Caution", "No Entry"],
    correctAnswer: 1,
    explanation: "A red octagonal (8-sided) sign always means STOP. You must come to a complete stop at the stop line.",
  },
  {
    id: 2,
    question: "When approaching a yellow traffic light, you should:",
    options: [
      "Speed up to get through",
      "Stop if safe to do so",
      "Always stop immediately",
      "Continue at the same speed",
    ],
    correctAnswer: 1,
    explanation: "A yellow light means the signal is about to turn red. You should stop if you can do so safely.",
  },
  {
    id: 3,
    question: "What is the typical speed limit in a residential area?",
    options: ["15 mph", "25 mph", "35 mph", "45 mph"],
    correctAnswer: 1,
    explanation: "Most residential areas have a speed limit of 25 mph unless otherwise posted.",
  },
  {
    id: 4,
    question: "Who has the right of way at a four-way stop?",
    options: [
      "The largest vehicle",
      "The vehicle on the right",
      "The first vehicle to arrive",
      "The vehicle going straight",
    ],
    correctAnswer: 2,
    explanation: "At a four-way stop, the first vehicle to arrive at the intersection has the right of way.",
  },
  {
    id: 5,
    question: "When can you legally pass another vehicle on the right?",
    options: ["Never", "When the vehicle ahead is turning left", "Anytime on a highway", "Only in parking lots"],
    correctAnswer: 1,
    explanation: "You may pass on the right when the vehicle ahead is making or about to make a left turn.",
  },
]

export function QuizInterface() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(new Array(quizQuestions.length).fill(false))
  const [quizComplete, setQuizComplete] = useState(false)

  const question = quizQuestions[currentQuestion]
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100

  const handleAnswerSelect = (index: number) => {
    if (!showResult) {
      setSelectedAnswer(index)
    }
  }

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return

    setShowResult(true)
    const isCorrect = selectedAnswer === question.correctAnswer

    if (isCorrect && !answeredQuestions[currentQuestion]) {
      setScore(score + 1)
    }

    const newAnsweredQuestions = [...answeredQuestions]
    newAnsweredQuestions[currentQuestion] = true
    setAnsweredQuestions(newAnsweredQuestions)
  }

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setQuizComplete(true)
    }
  }

  const handleRestartQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setAnsweredQuestions(new Array(quizQuestions.length).fill(false))
    setQuizComplete(false)
  }

  if (quizComplete) {
    const percentage = (score / quizQuestions.length) * 100
    const passed = percentage >= 80

    return (
      <div className="container mx-auto px-4 py-12">
        <Card className="max-w-2xl mx-auto border-2 border-primary">
          <CardHeader>
            <CardTitle className="text-3xl text-center">Quiz Complete! 🎉</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className="text-6xl font-bold text-primary mb-4">
                {score}/{quizQuestions.length}
              </div>
              <div className="text-2xl text-muted-foreground mb-2">{percentage.toFixed(0)}% Correct</div>
              <div className={`text-lg font-semibold ${passed ? "text-accent" : "text-destructive"}`}>
                {passed ? "✓ Passed! Great job!" : "✗ Keep practicing!"}
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-muted">
                <h3 className="font-semibold mb-2 text-foreground">Performance Breakdown</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Correct Answers:</span>
                    <span className="font-semibold text-accent">{score}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Incorrect Answers:</span>
                    <span className="font-semibold text-destructive">{quizQuestions.length - score}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pass Threshold:</span>
                    <span className="font-semibold text-foreground">80%</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={handleRestartQuiz} className="flex-1 bg-transparent" variant="outline">
                  <RotateCcw className="mr-2 w-4 h-4" />
                  Retake Quiz
                </Button>
                <Button className="flex-1">
                  Continue Learning
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Progress Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-muted-foreground">
              Question {currentQuestion + 1} of {quizQuestions.length}
            </span>
            <span className="text-sm font-medium text-primary">
              Score: {score}/{quizQuestions.length}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="border-2 border-border">
          <CardHeader>
            <CardTitle className="text-2xl text-balance leading-relaxed">{question.question}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Answer Options */}
            <div className="space-y-3">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswer === index
                const isCorrect = index === question.correctAnswer
                const showCorrect = showResult && isCorrect
                const showIncorrect = showResult && isSelected && !isCorrect

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showResult}
                    className={`
                      w-full p-4 rounded-lg border-2 text-left transition-all
                      ${!showResult && !isSelected ? "border-border hover:border-primary hover:bg-primary/5" : ""}
                      ${!showResult && isSelected ? "border-primary bg-primary/10" : ""}
                      ${showCorrect ? "border-accent bg-accent/10" : ""}
                      ${showIncorrect ? "border-destructive bg-destructive/10" : ""}
                      ${showResult ? "cursor-not-allowed" : "cursor-pointer"}
                    `}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-foreground font-medium">{option}</span>
                      {showCorrect && <CheckCircle2 className="w-6 h-6 text-accent" />}
                      {showIncorrect && <XCircle className="w-6 h-6 text-destructive" />}
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Explanation */}
            {showResult && (
              <div
                className={`p-4 rounded-lg ${
                  selectedAnswer === question.correctAnswer
                    ? "bg-accent/10 border-2 border-accent"
                    : "bg-destructive/10 border-2 border-destructive"
                }`}
              >
                <div className="flex items-start gap-2">
                  {selectedAnswer === question.correctAnswer ? (
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  )}
                  <div>
                    <div className="font-semibold text-foreground mb-1">
                      {selectedAnswer === question.correctAnswer ? "Correct!" : "Incorrect"}
                    </div>
                    <div className="text-sm text-muted-foreground leading-relaxed">{question.explanation}</div>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              {!showResult ? (
                <Button onClick={handleSubmitAnswer} disabled={selectedAnswer === null} className="flex-1">
                  Submit Answer
                </Button>
              ) : (
                <Button onClick={handleNextQuestion} className="flex-1">
                  {currentQuestion < quizQuestions.length - 1 ? (
                    <>
                      Next Question
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </>
                  ) : (
                    "View Results"
                  )}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
