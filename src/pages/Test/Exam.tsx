import { useState, useEffect } from "react";
import CourseNav from "./ExamNav";

interface Question {
  id: number;
  section: "A" | "B";
  question: string;
  options: string[];
  correctAnswer: string;
}

const quizData: Question[] = [
  // ✅ Section A
  {
    id: 1,
    section: "A",
    question: "Umurongo w’umweru usobanura iki?",
    options: ["Kwambuka", "Guhagarara", "Kwirinda", "Gukomeza"],
    correctAnswer: "Kwambuka",
  },
  {
    id: 2,
    section: "A",
    question: "Iyo itara ry’icyatsi ribonesheje bivuze iki?",
    options: ["Uhagarara", "Wemerewe gukomeza", "Utegereze", "Uhindure icyerekezo"],
    correctAnswer: "Wemerewe gukomeza",
  },
  {
    id: 3,
    section: "A",
    question: "Ni ryari utwaye imodoka wemerewe kuvuga kuri telefoni?",
    options: ["Iyo ukoresheje 'hands-free'", "Igihe cyose", "Iyo uhagaze", "Ntibikunda na rimwe"],
    correctAnswer: "Iyo ukoresheje 'hands-free'",
  },
  // ✅ Section B
  {
    id: 4,
    section: "B",
    question: "Iyo imvura iguye, ni iki kigomba gukorwa?",
    options: ["Kwihuta", "Kugabanya umuvuduko", "Kongera umuvuduko", "Guhagarara aho uri"],
    correctAnswer: "Kugabanya umuvuduko",
  },
  {
    id: 5,
    section: "B",
    question: "Ni iki gikwiye gukora iyo ubona umwana hafi y’umuhanda?",
    options: ["Kuvuza ihoni", "Kugabanya umuvuduko", "Kugenda nk'ibisanzwe", "Kwihuta"],
    correctAnswer: "Kugabanya umuvuduko",
  },
  {
    id: 6,
    section: "B",
    question: "Ni iki gituma umuhanda unyerera ari ikibazo?",
    options: [
      "Abatwara imodoka baruhuka",
      "Impamvu z’imvura gusa",
      "Kugabanya ubwitonzi",
      "Kongera ibyago by’impanuka",
    ],
    correctAnswer: "Kongera ibyago by’impanuka",
  },
];

export default function Exam() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [error, setError] = useState(false);
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300); // 5 min = 300 s

  const question = quizData[current];

  // 🕒 Timer
  useEffect(() => {
    if (finished) return;
    if (timeLeft <= 0) {
      handleFinish();
      return;
    }
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, finished]);

  const handleSelect = (option: string) => {
    setAnswers({ ...answers, [question.id]: option });
    setError(false);
  };

  const handleNext = () => {
    if (!answers[question.id]) {
      setError(true);
      return;
    }
    if (current < quizData.length - 1) {
      setCurrent(current + 1);
    } else {
      handleFinish();
    }
  };

  const handlePrevious = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const handleFinish = () => {
    let correct = 0;
    quizData.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) correct++;
    });
    setScore(correct);
    setFinished(true);
  };

  const handleDownload = () => {
    const txt = `Certificate of Completion\n\nYou scored ${score}/${quizData.length} in the Road Traffic Quiz.`;
    const blob = new Blob([txt], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Traffic_Quiz_Certificate.txt";
    link.click();
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  // ✅ Finish screen
  if (finished) {
    return (
      <div className="bg-[#F7F7F7] h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-semibold text-green-600 mb-4">Warangije Ikizamini </h1>
        <p className="text-lg mb-6">
          Amanota yawe:{" "}
          <span className="font-bold text-green-700">
            {score}/{quizData.length}
          </span>
        </p>
        <button
          onClick={handleDownload}
          className="px-8 py-2 bg-lime-500 text-white rounded-md shadow-md hover:bg-lime-600 transition"
        >
          Download Certificate
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#F7F7F7] h-screen">
      <div>
        <CourseNav />
      </div>

      <div className="py-3 px-3">
        <h1 className="font-semibold text-2xl font-family-playfair text-center py-2.5 text-gray-500">
          IKIZAMINI CYO GUTWARA IBINYABIZIGA
        </h1>
        <p className="text-center text-sm text-red-500 font-medium">
          Igihe gisigaye: {minutes}:{seconds.toString().padStart(2, "0")}
        </p>
      </div>

      <div className="py-3 flex justify-center items-center">
        <div>
          <div className="border border-gray-300 w-[700px] rounded-lg shadow-md px-4 py-4">
            <div>
              <h1 className="font-semibold text-black/90 font-family-playfair py-3">
                {question.question}
              </h1>
            </div>

            <div>
              {question.options.map((opt, idx) => (
                <div
                  key={idx}
                  className={`cursor-pointer my-2 flex items-center rounded-lg gap-2 border py-2 px-3 ${
                    answers[question.id] === opt
                      ? "bg-lime-100 border-lime-500"
                      : "border-gray-200 hover:bg-gray-50"
                  }`}
                  onClick={() => handleSelect(opt)}
                >
                  <input
                    type="radio"
                    checked={answers[question.id] === opt}
                    onChange={() => handleSelect(opt)}
                  />
                  <label>{opt}</label>
                </div>
              ))}
            </div>

            <h1
              className={`text-center text-red-400 py-4 ${
                error ? "block" : "hidden"
              }`}
            >
              Please Select one Answer to Continue
            </h1>
          </div>

          <div className="py-3 px-2 flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={current === 0}
              className={`px-8 py-2 border rounded-xl cursor-pointer ${
                current === 0
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "hover:bg-gray-100"
              }`}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="px-8 py-2 border rounded-xl bg-linear-to-r from-lime-400 to-green-500 text-white font-semibold flex items-center justify-center"
            >
              {current === quizData.length - 1 ? "Finish" : "Next"}
            </button>
          </div>

          <div className="mt-5 flex gap-4 py-4 px-7">
            {quizData.map((q, idx) => (
              <div
                key={q.id}
                className={`rounded-md text-center py-2 px-5 border ${
                  answers[q.id]
                    ? "bg-lime-400 text-white"
                    : idx === current
                    ? "border-lime-400"
                    : ""
                }`}
              >
                {q.id}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
