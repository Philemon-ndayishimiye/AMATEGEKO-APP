import { Link, useNavigate } from "react-router-dom";
import Input from "../component/form/Input";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Button from "../component/form/Button";
// import Navigation from "../component/landing/Navigation";

export default function SignUp() {
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
          <div className="w-[530px]  border border-gray-300 rounded-xl shadow-lg px-6 py-6 bg-white">
            <h1 className="text-3xl text-center font-bold font-family-playfair bg-linear-to-r from-lime-700 to-green-300 py-5 text-transparent bg-clip-text">
              Create Your Account
            </h1>
            <h3 className="text-center font-family-poppins font-semibold pt-3 text-[13px]">
              Start Your Journey To Mastering Traffic Rules
            </h3>

            <div className="py-7">
              <form className="flex flex-col gap-7" action="">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <Input placeholder="First Name" type="text" />
                  <Input placeholder="Last Name" type="text" />
                </div>

                <Input placeholder="Email" type="email" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <Input placeholder="Password" type="password" />
                  <Input placeholder="Confirm Password" type="password" />
                </div>

                <div className="mx-auto w-full max-w-sm py-2">
                  <Button label="Register" />
                  <h2 className="pt-9 font-semibold text-[15px] text-center">
                    Already Have an Account?{" "}
                    <span className="text-lime-400">
                      <Link to="/login">Login Here</Link>
                    </span>
                  </h2>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION - IMAGE (Hidden on small devices) */}
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
