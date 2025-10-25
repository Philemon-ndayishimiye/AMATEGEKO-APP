//import Input from "../component/form/Input";
import Navigation from "../component/landing/Navigation";

export default function SignUp() {
  return (
    <div>
        <div>
            <Navigation/>
        </div>

        <div className="py-7 mx-[10%] grid grid-cols-2 gap-6">
            <div className=" py-5 px-5 border border-gray-100 rounded-xl h-[470px] shadow-md">
                 <h1 className="text-3xl text-center font-bold font-family-playfair bg-linear-to-r from-lime-700 to-green-300 py-2 text-transparent bg-clip-text">Create Your Account</h1>
                 <h3 className="text-center font-family-poppins font-semibold text-[13px]">Start Your Journey To mastering Traffic rules </h3>

                 <div>
                    <form className="flex flex-col gap-2" action="">
                        {/* <Input />  */}
                    </form>
                 </div>
            </div>
            <div className="border border-gray-100 rounded-xl h-[470px] shadow-md"></div>
        </div>
    </div>
  )
}
