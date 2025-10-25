import { Routes , Route } from "react-router-dom"
import LandingPage from "../pages/LandingPage"
import SignUp from "../pages/SignUp"
import Login from "../pages/Login"
import Dashboard from "../pages/Dashboard/Dashboard"
import DashboardPage from "../pages/Dashboard/DashboardPage"
import UserPage from "../pages/Dashboard/UserPage"
import CoursePage from "../pages/Dashboard/CoursePage"
import TestPage from "../pages/Dashboard/TestPage"



export default function AppRoutes() {

  return (
    <div>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/getstarted" element={<SignUp/>}/>
            <Route path="/Login" element={<Login/>}/>

            {/* Dashboard */}

            <Route path="/dashboard" element={<Dashboard/>}>
             <Route path="dashboardpage" element={<DashboardPage/>}/>
             <Route path="users" element={<UserPage/>}/>
             <Route path="course" element={<CoursePage/>}/>
             <Route path="test" element={<TestPage/>}/>

            </Route>
        </Routes>
    </div>
  )
}
