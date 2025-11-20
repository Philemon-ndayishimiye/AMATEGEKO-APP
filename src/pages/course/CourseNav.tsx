import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu, FiX } from "react-icons/fi";
import { MdLanguage } from "react-icons/md";
import { FaUserCircle, FaCogs, FaChartLine, FaSignOutAlt } from "react-icons/fa";
import LanguageSelector from '../../component/landing/LanguageSelector'

export default function CourseNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <div className="pl-[12%] pr-0.5 py-5 font-family-poppins flex justify-between items-center shadow-md shadow-gray-100 relative">

      {/* LEFT SECTION */}
      <div className="flex items-center gap-2">
        <h1 className="bg-linear-to-r from-lime-400 to-green-500 px-2 py-1 rounded-md text-2xl">
          🚦
        </h1>
        <h2 className="pt-1 font-semibold cursor-pointer text-lg sm:text-xl">
          Traffic Academy
        </h2>
      </div>

      {/* RIGHT SECTION */}
      <div className="hidden md:flex gap-3 font-semibold items-center">
        <div className="text-2xl cursor-pointer">
          <LanguageSelector 
            onSelectLanguage={(lang) =>
              console.log("Language selected:", lang.label)
            }
          />
        </div>

        {/* USER ICON */}
        <div className="relative ">
          <button 
            onClick={() => setUserMenuOpen(!userMenuOpen)}
            className="flex cursor-pointer items-center gap-1 text-lime-500 hover:text-lime-600 transition"
          >
            <FaUserCircle size={28} />
          </button>

          {/* USER DROPDOWN */}
          {userMenuOpen && (
            <div className="absolute right-0 mt-4 w-50 h-70 bg-white border border-gray-200 rounded-lg shadow-lg z-50 ">
              <Link
                to="/profile"
                className="flex items-center gap-2 px-4 py-4 hover:bg-lime-50 text-gray-700"
              >
                <FaUserCircle className="text-lime-500" /> Profile
              </Link>
              <Link
                to="/settings"
                className="flex items-center gap-2 px-4 py-4 hover:bg-lime-50 text-gray-700"
              >
                <FaCogs className="text-lime-500" /> Settings
              </Link>
              <Link
                to="/progress"
                className="flex items-center gap-2 px-4 py-4 hover:bg-lime-50 text-gray-700"
              >
                <FaChartLine className="text-lime-500" /> Progress
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 w-full px-4 py-5 hover:bg-lime-50 text-gray-700"
              >
                <FaSignOutAlt className="text-lime-500" /> Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* HAMBURGER ICON (Mobile only) */}
      <div
        className="md:hidden text-3xl cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start px-11 py-4 gap-4 font-semibold z-50 md:hidden">
          <div className="flex flex-col gap-3  text-center ">
            <Link to="/" onClick={() => setMenuOpen(false)}>Learn</Link>
            <Link to="/" onClick={() => setMenuOpen(false)}>Test</Link>
          </div>

          <div className="flex flex-col gap-3 items-start pt-3">
            <div className="">
              <MdLanguage />
            </div>
            <div className="bg-linear-to-r from-lime-400 to-green-500 px-4 py-1 rounded-lg text-white hover:opacity-90 transition">
              <Link to="/" onClick={() => setMenuOpen(false)}>Get Started</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
