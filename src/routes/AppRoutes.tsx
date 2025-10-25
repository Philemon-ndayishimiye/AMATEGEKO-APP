import { Routes , Route } from "react-router-dom"
import LandingPage from "../pages/LandingPage"
import SignUp from "../pages/SignUp"
import Login from "../pages/Login"

export default function AppRoutes() {

  return (
    <div>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/getstarted" element={<SignUp/>}/>
            <Route path="/Login" element={<Login/>}/>
        </Routes>
    </div>
  )
}
