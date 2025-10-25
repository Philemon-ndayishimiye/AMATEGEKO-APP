import { Routes , Route } from "react-router-dom"
import LandingPage from "../pages/LandingPage"
import SignUp from "../pages/SignUp"

export default function AppRoutes() {

  return (
    <div>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/getstarted" element={<SignUp/>}/>
        </Routes>
    </div>
  )
}
