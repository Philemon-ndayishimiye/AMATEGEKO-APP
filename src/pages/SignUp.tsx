import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../component/form/Input";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Button from "../component/form/Button";
import { useRegistrationMutation } from "../Api/api/Auth/Auth";

export interface BackendError {
  status?: number;
  data?: {
    message?: string;
    [key: string]: unknown;
  };
  error?: string;
}

export default function SignUp() {
  const [Register, { error, isLoading}] = useRegistrationMutation();
  const navigate = useNavigate();

  //  STATE: to store form data
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  //  STATE: to handle validation errors
  const [errors, setError] = useState("");

  //  Function to go back to home page
  const goBack = () => {
    navigate("/"); // go back to previous page
  };

  //  Function to handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevent page refresh

    // 🧾 Basic Validation
    if (!firstName || !lastName || !email || !password || !passwordConfirm) {
      setError("Please fill in all fields.");
      return;
    }

    // Email format validation (simple regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    //  Password match validation
    if (password !== passwordConfirm) {
      setError("Passwords do not match.");
      return;
    }

    // Clear error if all is valid
    setError("");

    // Combine all form data
    const formData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      password_confirm: passwordConfirm,
    };

    try {
      await Register({
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        password_confirm: passwordConfirm,
      }).unwrap();
    } catch (err) {
      const errorData = err as BackendError;
      console.log(" error Ocurred are:", errorData);

      if (errorData.data?.message) {
        setError(errorData.data.message);
      } else if (errorData.error) {
        setError(errorData.error);
      } else {
        setError("Something went wrong. Please try again.");
      }
    }

    if (errors) {
      return;
    }

     navigate('/login')

    console.log("Form Submitted:", formData);

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setPasswordConfirm("");
    //  Here you can send the data to backend
    // Example: axios.post('/api/register', formData)

    // After successful registration, redirect to login page
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      {/* LEFT SECTION - FORM */}
      <div className="flex flex-col h-full px-4 py-4 bg-white">
        {/* 🔙 Back Arrow */}
        <div className="py-2 px-4 text-lg">
          <AiOutlineArrowLeft className="cursor-pointer" onClick={goBack} />
        </div>

        {/* 📋 Centered Form Container */}
        <div className="flex flex-1 justify-center items-center">
          <div className="w-[530px] border border-gray-300 rounded-xl shadow-lg px-6 py-6 bg-white">
            <h1 className="text-3xl text-center font-bold font-family-playfair bg-linear-to-r from-lime-700 to-green-300 py-5 text-transparent bg-clip-text">
              Create Your Account
            </h1>
            <h3 className="text-center font-family-poppins font-semibold pt-3 text-[13px]">
              Start Your Journey To Mastering Traffic Rules
            </h3>

            <div className="py-7">
              {/* 🧾 FORM */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-7">
                {/* First & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <Input
                    placeholder="First Name"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <Input
                    placeholder="Last Name"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>

                {/* Email */}
                <Input
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                {/* Password & Confirm Password */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <Input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Input
                    placeholder="Confirm Password"
                    type="password"
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                  />
                </div>

                {/* ⚠️ Error Message */}
                {error && (
                  <p className="text-red-500 text-center font-medium">
                    {errors}
                  </p>
                )}

                {/* Submit Button + Link */}
                <div className="mx-auto w-full max-w-sm py-2">
                  <Button
                    label="Register"
                    isLoading={isLoading} //comes from RTK Query mutation
                    loadingLabel="Creating Account..."
                  />
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
        {/* Overlay for dark effect */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
    </div>
  );
}
