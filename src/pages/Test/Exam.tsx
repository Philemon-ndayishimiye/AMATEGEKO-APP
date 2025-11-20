// ✅ NEW IMPORTS
import { useEffect, useState } from "react";
import CourseNav from "./ExamNav";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { useNavigate } from "react-router-dom";

interface Question {
  id: number;
  section: "A" | "B";
  question: string;
  options: string[];
  correctAnswer: string;
}

const quizData: Question[] = [
  // Section A
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
  // Section B
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
  const navigate = useNavigate();

  const [section, setSection] = useState<"A" | "B">("A");
  const [indexInSection, setIndexInSection] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [error, setError] = useState(false);
  const [failed, setFailed] = useState(false);
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);

  // ✅ Timer persistence setup
  const TOTAL_TIME = 300; // 5 minutes
  const [timeLeft, setTimeLeft] = useState(() => {
    const startTime = localStorage.getItem("examStartTime");
    if (startTime) {
      const elapsed = Math.floor((Date.now() - parseInt(startTime)) / 1000);
      const remaining = TOTAL_TIME - elapsed;
      return remaining > 0 ? remaining : 0;
    } else {
      const now = Date.now();
      localStorage.setItem("examStartTime", now.toString());
      return TOTAL_TIME;
    }
  });

  // ✅ Prevent reload (no deprecated warning)
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!finished && !failed) {
        e.preventDefault();
        e.returnValue = ""; // safe and standards-compliant
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [finished, failed]);

  // ✅ Timer effect
  useEffect(() => {
    if (failed || finished) return;
    if (timeLeft <= 0) {
      if (section === "A") submitSectionA();
      else finishExam();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, failed, finished, section]);

  //  Block back navigation after finishing
  useEffect(() => {
const blockBack = () => {
  if (failed || finished) {
    history.pushState(null, "", location.href);
  }
};

    if (failed || finished) {
      history.pushState(null, "", location.href);
      window.addEventListener("popstate", blockBack);
    }
    return () => window.removeEventListener("popstate", blockBack);
  }, [failed, finished]);

  // ✅ Split questions
  const sectionA = quizData.filter((q) => q.section === "A");
  const sectionB = quizData.filter((q) => q.section === "B");
  const currentList = section === "A" ? sectionA : sectionB;
  const question = currentList[indexInSection];

  const handleSelect = (opt: string) => {
    setAnswers((a) => ({ ...a, [question.id]: opt }));
    setError(false);
  };

  const handleNext = () => {
    if (!answers[question.id]) {
      setError(true);
      return;
    }
    setError(false);

    if (indexInSection < currentList.length - 1) {
      setIndexInSection((i) => i + 1);
      return;
    }

    if (section === "A") submitSectionA();
    else finishExam();
  };

  const submitSectionA = () => {
    const correctA = sectionA.reduce(
      (acc, q) => acc + (answers[q.id] === q.correctAnswer ? 1 : 0),
      0
    );
    const required = Math.ceil(sectionA.length * 0.6);
    if (correctA < required) {
      setFailed(true);
      setTimeLeft(0);
      localStorage.removeItem("examStartTime");
      return;
    }

    setSection("B");
    setIndexInSection(0);
  };

  const finishExam = () => {
    const totalCorrect = quizData.reduce(
      (acc, q) => acc + (answers[q.id] === q.correctAnswer ? 1 : 0),
      0
    );
    setScore(totalCorrect);
    setFinished(true);
    setTimeLeft(0);
    localStorage.removeItem("examStartTime");
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  // ✅ Failed screen
  if (failed) {
    return (
      <div className="bg-[#F7F7F7] h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-semibold text-red-600 mb-4">
          Watsinzwe Section A
        </h1>
        <p className="text-lg mb-6">
          Ntabwo wemerewe gukomeza. Ugomba kongera kugerageza.
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => navigate("/learn/ibirebwaniteka")}
            className="px-8 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 transition"
          >
            Subira kwiga
          </button>
        </div>
      </div>
    );
  }

  // ✅ Finished screen
  if (finished) {
    const storedUser = localStorage.getItem("user");
    let firstName = "Student";
    let lastName = "";

    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        firstName = user.first_name || "Student";
        lastName = user.last_name || "";
      } catch (err) {
        console.error("Invalid user data in localStorage:", err);
      }
    }

    const handleLog = () => {
      localStorage.clear();
      navigate("/login");
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-lime-100 via-white to-lime-200 flex flex-col items-center justify-center text-center px-6">
        <div className="w-20 h-20 rounded-full bg-lime-500 flex items-center justify-center mb-6 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-4xl font-extrabold text-lime-700 mb-2 drop-shadow-sm">
          Warangije Ikizamini
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Turagushimi cyane ku kurangiza neza ikizamini cya <br />
          <span className="font-semibold text-lime-600">
            Gutwara IbinyaBiziga
          </span>
        </p>

        <div className="bg-white shadow-lg border border-lime-200 rounded-2xl py-5 px-8 mb-6">
          <p className="text-xl font-medium text-gray-700">Amanota Yawe:</p>
          <p className="text-3xl font-bold text-lime-600 mt-1">
            {score}/{quizData.length}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button
            onClick={() => {
              const doc = new jsPDF({
                orientation: "landscape",
                unit: "pt",
                format: "a4",
              });

              const limeColor = "#84cc16";
              const centerX = doc.internal.pageSize.getWidth() / 2;

              doc.setDrawColor(limeColor);
              doc.setLineWidth(4);
              doc.rect(
                20,
                20,
                doc.internal.pageSize.getWidth() - 40,
                doc.internal.pageSize.getHeight() - 40
              );

              doc.setFont("times", "bold");
              doc.setFontSize(34);
              doc.setTextColor(limeColor);
              doc.text("CERTIFICATE OF ACHIEVEMENT", centerX, 150, {
                align: "center",
              });

              doc.setFont("helvetica", "normal");
              doc.setFontSize(18);
              doc.setTextColor("#333");
              doc.text("This is proudly presented to", centerX, 200, {
                align: "center",
              });

              doc.setFont("times", "bolditalic");
              doc.setFontSize(28);
              doc.setTextColor("#000");
              doc.text(`${firstName} ${lastName}`, centerX, 250, {
                align: "center",
              });

              doc.setFont("helvetica", "normal");
              doc.setFontSize(16);
              doc.setTextColor("#444");
              doc.text(
                `For successfully completing the Driving Test with a score of ${score}/${quizData.length}`,
                centerX,
                310,
                { align: "center" }
              );

              doc.setDrawColor(limeColor);
              doc.setLineWidth(2);
              doc.line(centerX - 100, 320, centerX + 100, 320);

              doc.setFontSize(14);
              doc.text("Issued by: Rwanda Traffic Academy", centerX, 380, {
                align: "center",
              });
              doc.text("Date: " + new Date().toLocaleDateString(), centerX, 400, {
                align: "center",
              });

              doc.save(`Certificate_${firstName + lastName}.pdf`);
            }}
            className="px-8 py-3 bg-lime-500 text-white rounded-xl shadow-md hover:bg-lime-600 hover:scale-105 transform transition-all duration-200"
          >
            Download Certificate
          </button>

          <button
            onClick={handleLog}
            className="px-14 py-3 border border-gray-300 bg-white rounded-xl shadow-sm hover:bg-gray-100 hover:scale-105 transform transition-all duration-200"
          >
            Sohoka
          </button>
        </div>

        <p className="text-gray-500 text-sm mt-10">
          © {new Date().getFullYear()} Rwanda Traffic Academy — All rights
          reserved.
        </p>
      </div>
    );
  }

  // ✅ Main Exam Screen
  return (
    <div className="bg-[#F7F7F7] min-h-screen">
      <CourseNav />
      <div className="py-3 px-3">
        <h1 className="font-semibold text-2xl text-center py-2.5 text-gray-500">
          IKIZAMINI CYO GUTWARA IBINYABIZIGA - Section {section}
        </h1>
        <p className="text-center text-sm text-red-500 font-medium">
          Igihe gisigaye: {minutes}:{seconds.toString().padStart(2, "0")}
        </p>
      </div>

      <div className="py-3 flex justify-center items-start">
        <div>
          <div className="border border-gray-300 w-[700px] rounded-lg shadow-md px-4 py-4 bg-white">
            <h1 className="font-semibold text-black/90 py-3">
              {question.question}
            </h1>

            <div>
              {question.options.map((opt, i) => (
                <label
                  key={i}
                  className={`cursor-pointer my-2 flex items-center rounded-lg gap-2 border py-2 px-3 ${
                    answers[question.id] === opt
                      ? "bg-lime-100 border-lime-500"
                      : "border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="radio"
                    name={`q-${question.id}`}
                    checked={answers[question.id] === opt}
                    onChange={() => handleSelect(opt)}
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>

            {error && (
              <p className="text-center text-red-400 py-4">
                Please select one answer to continue
              </p>
            )}
          </div>

          <div className="py-3 px-2 flex justify-end">
            <button
              onClick={handleNext}
              className="px-8 py-2 border rounded-xl bg-lime-500 text-white font-semibold hover:bg-lime-600"
            >
              {indexInSection === currentList.length - 1
                ? section === "A"
                  ? "Submit Section A"
                  : "Finish"
                : "Next"}
            </button>
          </div>

          <div className="mt-5 flex gap-4 py-4 px-7">
            {currentList.map((q, idx) => (
              <div
                key={q.id}
                className={`rounded-md text-center py-2 px-4 border ${
                  answers[q.id]
                    ? "bg-lime-400 text-white"
                    : idx === indexInSection
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
