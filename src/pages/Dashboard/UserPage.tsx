import React, { useState } from 'react';
import UsersTable from '../../component/dashboard/Table';
import Input from '../../component/form/Input';
import { AiOutlineClose } from 'react-icons/ai';

export default function UserPage() {
  // 🧠 Track if modal is open or closed
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="mt-3 py-3 px-3 bg-[#F7F7F7] rounded-md relative">
      {/* Header */}
      <div className="flex justify-between mx-6">
        <div>
          <h1 className="px-2 py-2 text-3xl font-family-playfair bg-gradient-to-r from-lime-600 to-green-300 bg-clip-text text-transparent font-semibold">
            Users
          </h1>
        </div>

        <div className="flex gap-2">
          {/* Open Modal */}
          <button
            onClick={() => setShowForm(true)}
            className="bg-gradient-to-r from-lime-400 to-green-500 rounded-lg px-8 py-2 text-white font-medium shadow-md hover:opacity-90 transition cursor-pointer"
          >
            + Add User
          </button>

          <button className="rounded-lg px-8 py-2 text-black font-medium shadow-md hover:opacity-90 transition cursor-pointer bg-white">
            Download
          </button>
        </div>
      </div>

      {/* Users Table */}
      <div className="py-5">
        <UsersTable />
      </div>

      {/* 🧾 Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-gray-400/60 bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black transition"
            >
              <AiOutlineClose size={22} />
            </button>

            <h2 className="text-2xl font-semibold mb-6 text-center font-family-playfair text-black">
              Add New User
            </h2>

            <form className="space-y-4">
              <Input type="text" placeholder="First Name" />
              <Input type="text" placeholder="Last Name" />
              <Input type="email" placeholder="Email Address" />
              <Input type="password" placeholder="Password" />

              <div className="flex justify-center pt-3">
                <button className="bg-linear-to-r from-lime-400 to-green-500 text-white px-8 py-2 rounded-lg font-medium shadow-md hover:opacity-90 transition cursor-pointer">
                  Add User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
