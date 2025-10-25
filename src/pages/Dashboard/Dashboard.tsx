import { Outlet } from "react-router-dom";
import SideBar from "../../component/dashboard/SideBar";
import ContNav from "../../component/dashboard/ContNav";
export default function Dashboard() {
  return (
    <div className="min-h-screen flex mx-4 my-3">
      {/* Sidebar */}
      <SideBar/> {/* fixed width */}

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Top nav */}
        <ContNav />

        {/* Outlet fills remaining space */}
        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
