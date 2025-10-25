import { useState } from "react";
import InputFunc from "../../component/dashboard/InputText";
import SelectFunc from "../../component/dashboard/Select";
import { AiOutlineClose } from "react-icons/ai";
import Button from "../../component/form/Button";

export default function CoursePage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="mt-3 py-3 px-3 bg-[#F7F7F7] rounded-md relative">
      <div className="flex justify-between items-center">
        <h1 className="px-2 py-2 text-3xl font-family-playfair bg-linear-to-r from-lime-600 to-green-300 bg-clip-text text-transparent font-semibold">
          Courses
        </h1>

        <button
          onClick={() => setShowModal(true)}
          className="bg-linear-to-r from-lime-400 to-green-500 rounded-lg px-8 py-2 text-white font-medium shadow-md hover:opacity-90 transition cursor-pointer"
        >
          + Add Course
        </button>
      </div>

      <h1 className="text-center text-2xl py-8 font-semibold font-family-playfair">
        List Of Courses
      </h1>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-500/60 bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-lg p-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black transition"
            >
              <AiOutlineClose size={22} />
            </button>

            <h2 className="text-2xl font-semibold mb-6 text-center font-family-playfair text-black">
              Add New Course
            </h2>

            <form className="space-y-4">
              <InputFunc type="text" placeholder="Course Title" />
              <InputFunc type="text" placeholder="Description" />

              <div className="flex gap-3">
                <SelectFunc
                  placeholder="Select Category"
                  options={[
                    { label: "Driving Theory", value: "theory" },
                    { label: "Practical Training", value: "practical" },
                    { label: "Traffic Laws", value: "laws" },
                  ]}
                />
                <SelectFunc
                  placeholder="Select Subcategory"
                  options={[
                    { label: "Beginner", value: "beginner" },
                    { label: "Intermediate", value: "intermediate" },
                    { label: "Advanced", value: "advanced" },
                  ]}
                />
              </div>

              <InputFunc type="text" placeholder="Course Content" />

              <div className="flex justify-center pt-3">
                <Button label="Submit" />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
