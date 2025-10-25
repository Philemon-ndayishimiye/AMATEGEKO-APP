import { Link, useNavigate } from "react-router-dom";
import Input from "../component/form/Input";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Button from "../component/form/Button";
import { FcGoogle } from "react-icons/fc"; // Google (officially styled multicolor)
import { FaFacebook } from "react-icons/fa"; // Facebook (official blue icon)
// import Navigation from "../component/landing/Navigation";

export default function Login() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/"); // go back to previous page
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      {/* LEFT SECTION - FORM */}
      <div className="flex flex-col h-full px-4 py-4 bg-white">
        {/* Back Arrow */}
        <div className="py-2 px-4 text-lg">
          <AiOutlineArrowLeft className="cursor-pointer" onClick={goBack} />
        </div>

        {/* Centered Form Container */}
        <div className="flex flex-1 justify-center items-center">
          <div className="h-full w-[530px] border border-gray-300 rounded-xl shadow-lg px-6 py-6 bg-white">
            <h1 className="text-3xl text-center font-bold font-family-playfair bg-linear-to-r from-lime-700 to-green-300 py-5 text-transparent bg-clip-text">
              Login to Traffic Academy
            </h1>
            <h3 className="text-center font-family-poppins font-semibold pt-3 text-[13px]">
              Access Your Courses and Continue Learning
            </h3>

            {/* Social Login */}
            <div className="py-4">
              <div className="flex pt-5 gap-3 justify-center items-center flex-wrap">
                <div className="border border-gray-200 rounded-md px-8 py-3 cursor-pointer flex items-center gap-2 hover:bg-gray-50 transition">
                  <FcGoogle className="text-2xl" />
                  <span className="text-sm font-semibold text-gray-700">
                    Google
                  </span>
                </div>
                <div className="border border-gray-200 rounded-md px-8 py-3 cursor-pointer flex items-center gap-2 hover:bg-gray-50 transition text-[#1877F2]">
                  <FaFacebook className="text-2xl" />
                  <span className="text-sm font-semibold">Facebook</span>
                </div>
              </div>

              {/* Divider */}
              <div className="flex items-center justify-center ">
                <span className="text-gray-400 text-sm">or</span>
              </div>
            </div>

            {/* Login Form */}
            <form className="flex flex-col gap-7 mt-2">
              <Input placeholder="Email" type="email" />
              <Input placeholder="Password" type="password" />

              <div className="mx-auto w-full max-w-sm py-2">
                <Button label="Sign In" onClick={()=>navigate('/dashboard')} />
                <h2 className="pt-9 font-semibold text-[15px] text-center">
                  Don't Have an Account?{" "}
                  <span className="text-lime-400">
                    <Link to="/getstarted">Register Here</Link>
                  </span>
                </h2>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION - IMAGE (Hidden on small screens) */}
      <div className="relative h-screen hidden md:block shadow-md">
        <img
          className="h-full w-full object-cover"
          src="src/assets/trafficRoad.png"
          alt="Traffic Road"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
    </div>
  );
}
