
export default function TestPage() {
  return (
     <div className="mt-3 py-3 px-3 bg-[#F7F7F7] rounded-md relative">
      <div className="flex justify-between items-center">
        <h1 className="px-2 py-2 text-3xl font-family-playfair bg-linear-to-r from-lime-600 to-green-300 bg-clip-text text-transparent font-semibold">
          Test
        </h1>

        <button
          className="bg-linear-to-r from-lime-400 to-green-500 rounded-lg px-8 py-2 text-white font-medium shadow-md hover:opacity-90 transition cursor-pointer"
        >
          + Add Test
        </button>
      </div>

      <h1 className="text-center text-2xl py-8 font-semibold font-family-playfair">
        List Of Test
      </h1>

</div>
  )
}
