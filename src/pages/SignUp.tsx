import { Link, useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SignUp() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate('/');
  };
  return (
    <div className="grid grid-cols-2">
      <div className="h-screen flex flex-col px-4">
        {/* Back Arrow */}
        <div className="py-2 px-4 text-lg">
          <AiOutlineArrowLeft className="cursor-pointer" onClick={goBack} />
        </div>

        {/* Centered Form Container */}
        <div className="flex flex-1 justify-center items-center">
          <div className="w-[500px] h-[500px] border border-gray-300  rounded-xl shadow-lg px-6 py-6 bg-white">
            <h1 className="text-3xl text-center font-bold font-family-playfair bg-linear-to-r from-lime-700 to-green-300 py-5 text-transparent bg-clip-text">
              Create Your Account
            </h1>
            <h3 className="text-center font-family-poppins font-semibold pt-3 text-[13px]">
              Start Your Journey To mastering Traffic rules
            </h3>

            <div className="py-7">
              <form className="flex flex-col gap-7" action="">
                <div className="grid grid-cols-2 gap-2">
                  <Input placeholder="First Name" type="text" />
                  <Input placeholder="Last Name" type="text" />
                </div>
                <Input placeholder="Email" type="email" />
                <div className="grid grid-cols-2 gap-2">
                  <Input placeholder="Password" type="password" />
                  <Input placeholder="Confirm Password" type="password" />
                </div>

                <Button className="w-full">
                  Sign Up
                </Button>
                <div className="mx-[50px] py-2">
                  <h2 className="font-semibold text-[15px]">
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


      <div className="relative h-screen shadow-md">
        <img
          className="h-full w-full object-cover"
          src="src/assets/trafficRoad.png"
          alt="image"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>



    </div>
  )
}
