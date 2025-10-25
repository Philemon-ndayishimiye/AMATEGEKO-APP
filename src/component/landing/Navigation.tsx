import { Link } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { MdLanguage } from "react-icons/md";
import LanguageSelector from "./LanguageSelector";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="px-[12%] py-5 font-family-poppins flex justify-between items-center shadow-md shadow-gray-100 relative">

      {/* LEFT SECTION */}
      <div className="flex items-center gap-2">
        <h1 className="bg-linear-to-r from-lime-400 to-green-500 px-2 py-1 rounded-md text-2xl">
          🚦
        </h1>
        <h2 className="pt-1 font-semibold cursor-pointer text-lg sm:text-xl">
          Traffic Academy
        </h2>
      </div>

      {/* MIDDLE SECTION (Links) */}
      <div className="hidden md:flex gap-10 font-semibold">
        <Link to="/">Home</Link>
        <Link to="/login">Learn</Link>
        <Link to="/login">Test</Link>
      </div>

      {/* RIGHT SECTION (Buttons) */}
      <div className="hidden md:flex gap-3 font-semibold items-center">
        <div className="text-2xl cursor-pointer">
           <LanguageSelector
          onSelectLanguage={(lang) =>
            console.log("Language selected:", lang.label)
          }
        />
        </div>
        {/* <Link to="/">Sign In</Link> */}
        <div className="bg-linear-to-r from-lime-400 to-green-500 px-3 py-1 rounded-lg text-white hover:opacity-90 transition">
          <Link to="/getstarted">Get Started</Link>
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
          {/* Links in the middle */}
          <div className="flex flex-col gap-3  text-center ">
            <Link  to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Learn
            </Link>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Test
            </Link>
          </div>

          {/* Buttons on bottom */}
          <div className="flex flex-col gap-3 items-start pt-3">
            <Link to="/getstarted" onClick={() => setMenuOpen(false)}>
              Sign In
            </Link>
            <div className="">
           < MdLanguage className=""/>
            </div>
              
            
            <div className="bg-linear-to-r from-lime-400 to-green-500 px-4 py-1 rounded-lg text-white hover:opacity-90 transition">
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
