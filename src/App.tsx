import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import QuizPage from "./pages/QuizPage"
import RoadmapPage from "./pages/RoadmapPage"
import CertificationPage from "./pages/CertificationPage"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/roadmap" element={<RoadmapPage />} />
      <Route path="/certification" element={<CertificationPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

    </Routes>
  )
}

export default App
