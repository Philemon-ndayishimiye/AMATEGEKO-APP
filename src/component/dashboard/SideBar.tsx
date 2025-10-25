

import { 
  MdDashboard, 
  MdPeople,  
  MdPhotoLibrary, 
} from 'react-icons/md';
import { Link } from 'react-router-dom';
export default function SideBar() {
  const navItems = [
    { to: '/dashboard/dashboardpage', label: 'Dashboard', icon: <MdDashboard className="mr-3 text-xl shrink-0" /> },
    { to: '/dashboard/users', label: 'Users', icon: <MdPeople className="mr-3 text-xl shrink-0" /> },
    { to: '/dashboard/course', label: 'Courses', icon: <MdPhotoLibrary className="mr-3 text-xl shrink-0" /> },
     { to: '/dashboard/test', label: 'Test', icon: <MdPhotoLibrary className="mr-3 text-xl shrink-0" /> },
  ];

  return (
    <div className="w-64 h-screen bg-[#F7F7F7] text-black rounded-md  flex flex-col">
      <div className="flex items-center gap-2 py-11 px-5">
        <h1 className="bg-linear-to-r from-lime-400 to-green-500 px-2 py-1 rounded-md text-2xl">
          🚦
        </h1>
        <h2 className="pt-1 font-semibold font-family-playfair cursor-pointer text-lg sm:text-xl">
          Traffic Academy
        </h2>
      </div>

      <h1 className="py-3 font-family-poppins pl-7 font-semibold">Menu</h1>
      <nav className="flex-1">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            className="flex items-center px-4 py-4 cursor-pointer hover:bg-white hover:text-primary-color transition-all duration-200 group"
          >
            <span className="text-gray-600 group-hover:text-lime-400 transition-colors text-[20px]">
              {item.icon}
            </span>
            <span className="text-[17px] font-medium text-black group-hover:text-primary-color transition-colors">
              {item.label}
            </span>
          </Link>
        ))}
      </nav>
    </div>
    
  );
}
