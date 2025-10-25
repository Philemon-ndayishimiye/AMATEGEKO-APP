import { Link, useNavigate } from "react-router-dom";
import Input from "../component/form/Input";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Button from "../component/form/Button";
//import Navigation from "../component/landing/Navigation";

export default function Login() {
    const navigate = useNavigate();
      const goBack = () => {
    navigate(-1); // go back to previous page
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
        Login In To Traffic Academy
      </h1>
      <h3 className="text-center font-family-poppins font-semibold pt-3 text-[13px]">
        Acess Your Courses And Continue Learning 
      </h3>

      <div className="py-7">
        <form className="flex flex-col gap-7" action="">
          <Input placeholder="Email" type="email" />
          <div className="grid grid-cols-1 gap-2">
            <Input placeholder="Password" type="password" />
            
          </div>

          <div className="mx-[50px] py-2">
            <Button label="Sign In" />
            <h2 className="pt-9 font-semibold text-[15px]">
              I don't  Have an Account?{" "}
              <span className="text-lime-400">
                <Link to="/getstarted">Register Here</Link>
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
