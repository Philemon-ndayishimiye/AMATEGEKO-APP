
export default function DashboardPage() {
    
  return (
    <div className="mt-3 py-3 px-3 bg-[#F7F7F7]  rounded-md">

        <div className="flex justify-between mx-6">
        <div>
            <h1 className="px-2 py-2 text-3xl font-family-playfair bg-linear-to-r from-lime-600 to-green-300 bg-clip-text text-transparent font-semibold">Dashboard</h1>
            <h4 className="px-2 text-[13px] font-semibold font-family-poppins">Learn , Priortize and Manage your Work Easily</h4>
        </div>
        
        </div>

         <div className="grid grid-cols-4 gap-3 mx-5 py-6">

            <div className="rounded-md bg-white px-2 py-1 border border-none bg-linear-to-r from-lime-400 to-green-500 ">
                <h1 className="py-1 pl-5 font-semibold font-family-playfair text-center text-[17px]">Total Users</h1>
                <h2 className="py-3 text-[20px] font-bold text-gray-900 text-center font-family-poppins ">20k</h2>
                <p className="text-[13px] pl-2 font-family-poppins text-gray-500">Icreased from last month</p>
            </div>
            <div className="rounded-md bg-white px-2 py-1 border border-none hover:bg-linear-to-r from-lime-400 to-green-500">
                <h1 className="py-1 pl-5 font-semibold font-family-playfair text-center text-[17px]">Courses</h1>
                <h2 className="py-3 text-[20px] font-bold text-gray-900 text-center font-family-poppins ">20</h2>
                <p className="text-[13px] pl-2 font-family-poppins text-gray-500">Icreased from last month</p>
            </div>
            <div className="rounded-md px-2 bg-white py-1 border border-none hover:bg-linear-to-r from-lime-400 to-green-500">
                <h1 className="py-1 pl-5 font-semibold font-family-playfair text-center text-[17px]">Tests</h1>
                <h2 className="py-3 text-[20px] font-bold text-gray-900 text-center font-family-poppins ">100k</h2>
                <p className="text-[13px] pl-2 font-family-poppins text-gray-500">Icreased from last month</p>
            </div>
            <div className="rounded-md px-2 bg-white py-1 border border-none hover:bg-linear-to-r from-lime-400 to-green-500">
                <h1 className="py-1 pl-5 font-semibold font-family-playfair text-center text-[17px]">Quizes</h1>
                <h2 className="py-3 text-[20px] font-bold text-gray-900 text-center font-family-poppins ">400</h2>
                <p className="text-[13px] pl-2 font-family-poppins text-gray-500">Icreased from last month</p>
            </div>

         </div>

         <div>
            <h1 className="font-family-playfair text-3xl text-center font-semibold bg-linear-to-r from-lime-700 to-green-300 bg-clip-text text-transparent  py-2 ">Analytics</h1>
         </div>

    </div>
  )
}
