
import { FaSearch } from "react-icons/fa";
import { FiBell } from "react-icons/fi";
import {AiOutlineMail } from "react-icons/ai";

export default function ContNav() {
  return (
    <div className="w-full mx-3 px-2 bg-[#F7F7F7] py-3 flex justify-between">
         
    <div className="relative w-full max-w-md ">
      <input
        type="text"
        placeholder="Search User"
        className="w-full  bg-white pl-10 pr-4 py-3 rounded-xl focus:outline-none  text-sm border-none "
      />
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
    </div>

    <div className="flex gap-3">
       <div className="rounded-[50%] bg-white px-2 pyp-1 flex justify-center items-center cursor-pointer"><FiBell/></div>
       <div className="rounded-[50%] bg-white px-2 pyp-1 flex justify-center items-center cursor-pointer"><AiOutlineMail/></div>

       <div className="flex ">
        <div  className="rounded-[50%] bg-white px-2 pyp-1 flex justify-center items-center cursor-pointer ">
            <img className="w-[30px] h-[30px] rounded-[50%]" src="src/assets/celine.jpeg" alt="" />
        </div>

        <div>
            <h2 className="text-[10px]">Philemon Komvuga</h2>
            <p className="text-gray-400 text-[11px]">philos@gmail.com</p>
        </div>
       </div>

    </div>
    </div>
  )
}
