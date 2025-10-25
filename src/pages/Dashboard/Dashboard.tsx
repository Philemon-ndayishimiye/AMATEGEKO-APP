import { Outlet } from "react-router-dom";
import SideBar from "../../component/dashboard/SideBar";


export default function Dashboard() {
  return (
    <div className="min-h-screen flex">
        {/* sidebar Always visible */}

        <SideBar/>

        <div>
            {/* nested routes */}
         <Outlet/> 
        </div>

    </div>
  )
}
