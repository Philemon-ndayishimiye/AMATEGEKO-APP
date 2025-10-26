import { Routes , Route } from "react-router-dom"
import LandingPage from "../pages/LandingPage"
import SignUp from "../pages/SignUp"
import Login from "../pages/Login"
import Dashboard from "../pages/Dashboard/Dashboard"
import DashboardPage from "../pages/Dashboard/DashboardPage"
import UserPage from "../pages/Dashboard/UserPage"
import Courses from "../pages/Dashboard/Courses"
import TestPage from "../pages/Dashboard/TestPage"
import CoursePage from "../pages/course/CoursePage"
import Ibirebwaniteka from "../pages/Learn/Ibirebwaniteka"
import Exam from "../pages/Test/Exam"



export default function AppRoutes() {

  return (
    <div>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/getstarted" element={<SignUp/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Exam" element={<Exam/>}/>

            {/* Dashboard */}

            <Route path="/dashboard" element={<Dashboard/>}>
             <Route path="dashboardpage" element={<DashboardPage/>}/>
             <Route path="users" element={<UserPage/>}/>
             <Route path="course" element={<Courses/>}/>
             <Route path="test" element={<TestPage/>}/>

            </Route>

            {/* Learn */}

            <Route path="/learn" element={<CoursePage/>}>
              <Route path="ibirebwaniteka" element={<Ibirebwaniteka/>}/>
            </Route>
        </Routes>
    </div>
  )
}
