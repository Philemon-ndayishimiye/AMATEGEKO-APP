
import React from 'react';
import { 
  MdDashboard, 
  MdPeople, 
  MdPerson, 
  MdEventSeat,  
  MdPhotoLibrary, 
  MdAccountCircle,
} from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function SideBar() {
    const navItems = [
    { to: '/schoolAdmin/dashboard', label: 'Dashboard', icon: <MdDashboard className="mr-3 text-xl shrink-0" /> },
    { to: '/schoolAdmin/application', label: 'Students', icon: <MdPeople className="mr-3 text-xl shrink-0" /> },
    { to: '/schoolAdmin/schoolProfile', label: 'School Profile', icon: <MdPerson className="mr-3 text-xl shrink-0" /> },
    { to: '/', label: 'Admission Manager', icon: <MdAccountCircle className="mr-3 text-xl shrink-0" /> },
    { to: '/schoolAdmin/seats', label: 'Available Seats', icon: <MdEventSeat className="mr-3 text-xl shrink-0" /> },
    { to: '/SchoolAdmin/gallery', label: 'Facilities', icon: <MdPhotoLibrary className="mr-3 text-xl shrink-0" /> },
    
  ];

  return (

    <div className='fixed w-68 bg-[#F7F7F7] text-black rounded-md h-full flex flex-col bg-'>

     <div className="flex items-center gap-2 py-11 px-5">
        <h1 className="bg-linear-to-r from-lime-400 to-green-500 px-2 py-1 rounded-md text-2xl">
          🚦
        </h1>
        <h2 className="pt-1 font-semibold font-family-playfair cursor-pointer text-lg sm:text-xl">
          Traffic Academy
        </h2>
      </div>
         
         <h1 className='py-3 font-family-poppins pl-7 font-semibold'>Menu</h1>
        <nav className='flex-1'>
        {navItems.map((item, index) => (
          <Link 
            key={index}
            to={item.to}
            className="flex items-center px-4 py-4 cursor-pointer hover:bg-white hover:text-primary-color transition-all duration-200 group"
            // onClick={onClose}
          >
            <span className="text-white group-hover:text-primary-color transition-colors text-[20px]">
              {item.icon}
            </span>
            <span className="text-[17px] font-medium text-gray-300 group-hover:text-primary-color transition-colors">
              {item.label}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  )
}
