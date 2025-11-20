import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FiBell } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";

export default function ContNav() {
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.clear(); // Clear tokens and user info
    window.location.href = "/login"; // Redirect to home
  };

  return (
    <div className="w-full mx-3 px-2 bg-[#F7F7F7] py-3 flex justify-between items-center">
      
      {/* Search */}
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Search User"
          className="w-full bg-white pl-10 pr-4 py-3 rounded-xl focus:outline-none text-sm border-none"
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
      </div>

      {/* Icons & User */}
      <div className="flex gap-3 items-center relative">
        <div className="rounded-[50%] bg-white px-2 py-1 flex justify-center items-center cursor-pointer">
          <FiBell />
        </div>
        <div className="rounded-[50%] bg-white px-2 py-1 flex justify-center items-center cursor-pointer">
          <AiOutlineMail />
        </div>

        {/* User Info */}
        <div className="relative flex items-center gap-2">
          <div
            className="rounded-[50%] bg-white px-2 py-1 flex justify-center items-center cursor-pointer"
            onClick={() => setUserMenuOpen(!userMenuOpen)}
          >
            <img
              className="w-[30px] h-[30px] rounded-[50%]"
              src="src/assets/celine.jpeg"
              alt="User"
            />
          </div>

          <div className="hidden md:flex flex-col">
            <h2 className="text-[10px]">Philemon Komvuga</h2>
            <p className="text-gray-400 text-[11px]">philos@gmail.com</p>
          </div>

          {/* Dropdown */}
          {userMenuOpen && (
            <div className="absolute top-full right-0 mt-2 w-36 h-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              <button
                
                className="flex items-center gap-2 pt-6 cursor-pointer w-full px-4 py-2 hover:bg-gray-100 text-gray-700"
              >
                <FaUserCircle className="text-lime-500" /> Profile
              </button>
              {/* Optional: Add Profile or Settings */}
              <button onClick={handleLogout} className="flex items-center cursor-pointer gap-2 w-full px-4 py-2 hover:bg-gray-100 text-gray-700">
                
                <FaSignOutAlt className="text-lime-500 " /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
