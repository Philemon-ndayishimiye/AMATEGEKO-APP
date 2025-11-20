import { Link } from "react-router-dom";
import { FiArrowUp } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-lime-200 text-gray-800 py-10 px-[12%] font-family-poppins">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">

        {/* LEFT LOGO / ICON */}
        <div className="flex flex-col items-start gap-3">
          <div className="grid grid-cols-3 gap-2">
             <h1 className="bg-linear-to-r from-lime-400 to-green-500 px-2 py-1 rounded-md text-5xl">
          🚦
        </h1>
           
          </div>
          <h2 className="text-2xl font-semibold">Traffic Academy</h2>
        </div>

        {/* CENTER LINKS */}
        <div className="flex flex-col md:flex-row gap-16">
          <div>
            <h3 className="font-semibold mb-2">About Us</h3>
            <ul className="space-y-1 text-sm">
              <li><Link to="/">Mission</Link></li>
              <li><Link to="/">Team</Link></li>
              <li><Link to="/">Newsletter</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Support</h3>
            <ul className="space-y-1 text-sm">
              <li><Link to="/">Contact</Link></li>
              <li><Link to="/">Refund Policy</Link></li>
              <li><Link to="/">FAQ's</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Social</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">YouTube</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-400 mt-10 pt-4 flex justify-between items-center text-sm">
        <p>© ClosetNow. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <Link to="/terms" className="hover:underline">Terms of Service</Link>
          <a href="#top" className="flex items-center gap-1 hover:text-green-600 transition">
            Back to top <FiArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}
