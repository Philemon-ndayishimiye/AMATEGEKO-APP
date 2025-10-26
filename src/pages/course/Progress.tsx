
export default function Progress() {
  return (
    <div className="my-5 mx-12 ">
        <div className="bg-linear-to-r from-lime-400 to-green-500 px-15 py-3 rounded-lg flex justify-between">

            <div className=" ">
                <h4 className="font-medium font-family-poppins py-1 text-black/50" >Overall Progress</h4>
                <h1 className="font-family-playfair text-3xl font-semibold px-5">30%</h1>
            </div>
            <div>
                 <h4 className="font-medium font-family-poppins py-1 text-black/50" >Completed Course</h4>
                <h1 className="font-family-playfair text-3xl font-semibold px-5">1/6</h1>
            </div>
            <div>
                 <h4 className="font-medium font-family-poppins py-1 text-black/50" >In Progress</h4>
                <h1 className="font-family-playfair text-3xl font-semibold px-1">3 Courses</h1>
            </div>
        </div>
    </div>
  )
}
