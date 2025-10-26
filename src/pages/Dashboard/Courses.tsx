import { useState } from "react";
import InputFunc from "../../component/dashboard/InputText";
//import SelectFunc from "../../component/dashboard/Select";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai"; 
import Button from "../../component/form/Button";

export default function Courses() {
  const [showModal, setShowModal] = useState(false);

  // ✅ Form state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [contents, setContents] = useState([""]); // Start with one content input

  // ✅ Error handling
  const [error, setError] = useState("");

  // ✅ Add new content input
  const handleAddContent = () => {
    setContents([...contents, ""]);
  };

  // ✅ Handle change for specific content index
  const handleContentChange = (index:number, value:string) => {
    const updatedContents = [...contents];
    updatedContents[index] = value;
    setContents(updatedContents);
  };

  // ✅ Handle form submission
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation
    if (!title || !description || !category || !subcategory) {
      setError("Please fill in all required fields.");
      return;
    }

    if (contents.some((c) => !c.trim())) {
      setError("Please fill in all content fields.");
      return;
    }

    setError(""); // Clear error

    // ✅ Combine all form data
    const formData = {
      title,
      description,
      category,
      subcategory,
      contents, // This is an array
    };

    console.log("Form Data Submitted:", formData);

    // You could now send formData to your backend API here
    // axios.post('/api/courses', formData)

    // Reset form & close modal
    setShowModal(false);
    setTitle("");
    setDescription("");
    setCategory("");
    setSubcategory("");
    setContents([""]);
  };

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

      {/* ✅ Modal Section */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-500/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 relative scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">

            <button
              onClick={() => setShowModal(false)}
              className="absolute cursor-pointer top-4 right-4 text-gray-500 hover:text-black transition"
            >
              <AiOutlineClose size={22} />
            </button>

            <h2 className="text-2xl font-semibold mb-6 text-center font-family-playfair text-black">
              Add New Course
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Title */}
              <InputFunc
                type="text"
                placeholder="Course Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              {/* Description */}
              <InputFunc
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

              {/* Category + Subcategory */}
              <div className="flex gap-3">
              <InputFunc
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />

               <InputFunc
                type="text"
                placeholder="Sub Category"
                value={subcategory}
                onChange={(e) => setSubcategory(e.target.value)}
              />
              </div>

              {/* Dynamic Course Content */}
              <div className="space-y-2">
                <label className="block font-medium">Course Contents:</label>

                {contents.map((content, index) => (
                  <InputFunc
                    key={index}
                    type="text"
                    placeholder={`Content ${index + 1}`}
                    value={content}
                    onChange={(e) =>
                      handleContentChange(index, e.target.value)
                    }
                  />
                ))}

                {/* ✅ Add Button */}
                <button
                  type="button"
                  onClick={handleAddContent}
                  className="flex items-center text-green-600 hover:text-green-800 transition text-sm font-medium mt-2 cursor-pointer"
                >
                  <AiOutlinePlus className="mr-1" /> Add More Content
                </button>
              </div>

              {/* Error Message */}
              {error && (
                <p className="text-red-600 text-center text-sm pt-2">
                  {error}
                </p>
              )}

              {/* Submit */}
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
