import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../component/form/Input";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Button from "../component/form/Button";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useLoginMutation } from "../Api/api/Auth/Auth";
import type {BackendError} from "../pages/SignUp"; 


export default function Login() {

  const[Login ,{isLoading} ]=useLoginMutation();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const goBack = () => {
    navigate("/");
  };

  const validateForm = () => {
    const newErrors = { email: "", password: "" };
    let isValid = true;

    if (!email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (!validateForm()) return;

  try {
    const data = await Login({ email, password }).unwrap();

    // Store tokens and user info in localStorage
    localStorage.setItem("accessToken", data.access);
    localStorage.setItem("refreshToken", data.refresh);
    localStorage.setItem("user", JSON.stringify(data.user));

    // Redirect based on user role
    if (data.user.role === "admin") {
      navigate("/dashboard/dashboardpage");
    } else if (data.user.role === "user") {
      navigate("/learn/ibirebwaniteka");
    } else {
      // fallback if role is unknown
      setErrors({ email: "Unknown user role", password: "" });
    }
  } catch (err) {
    console.error("Login error:", err);

    const errorData = err as BackendError;

    // Display error text
    if (errorData.data?.message) {
      setErrors({
        email:  " Incorrect Email or Password",
        password:  "Incorrect Email or Password",
      });
    } else if (errorData.error) {
      setErrors({ email: "Incorrect email or password", password: "" });
    } else {
      setErrors({ email: "Incorrect email or password.", password: "" });
    }
  }
};

;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      {/* LEFT SECTION - FORM */}
      <div className="flex flex-col h-full px-4 py-4 bg-white">
        <div className="py-2 px-4 text-lg">
          <AiOutlineArrowLeft className="cursor-pointer" onClick={goBack} />
        </div>

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

              <div className="flex items-center justify-center ">
                <span className="text-gray-400 text-sm">or</span>
              </div>
            </div>

            {/* Login Form */}
            <form className="flex flex-col gap-4 mt-2" onSubmit={handleLogin}>
              <Input
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>} */}

              <Input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

              <p className="font-family-poppins text-lime-400 ml-[73%] cursor-pointer">
                Forgot password
              </p>

              <div className="mx-auto w-full max-w-sm py-2">
                <Button label="Sign In" type="submit" isLoading={isLoading} //comes from RTK Query mutation
                    loadingLabel="Creating Account..." />
                <h2 className="pt-9 font-semibold text-[15px] text-center">
                  Don't Have an Account?{" "}
                  <span className="text-lime-400">
                    <Link to="/getstarted">Register Here</Link>
                  </span>
                </h2>

                <h3 className="py-3 text-red-500">{errors.email} {errors.password}</h3>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION - IMAGE */}
      <div className="relative h-screen hidden md:block shadow-md">
        <img
          className="h-full w-full object-cover"
          src="src/assets/trafficRoad.png"
          alt="Traffic Road"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
    </div>
  );
}
