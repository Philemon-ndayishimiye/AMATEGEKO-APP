


export default function UsersTable() {
  const users = Array.from({ length: 5 }, (_, i) => ({
    firstName: `User${i + 1}`,
    lastName: `Last${i + 1}`,
    email: `user${i + 1}@example.com`,
  }));

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 overflow-x-auto">
      <h2 className="text-2xl font-semibold mb-4 text-black">Users List</h2>

      <table className="min-w-full border border-gray-200 text-left text-sm text-gray-700">
        <thead className="bg-linear-to-r from-lime-300 to-green-400 text-white uppercase text-sm">
          <tr>
            <th className="px-4 py-3">First Name</th>
            <th className="px-4 py-3">Last Name</th>
            <th className="px-4 py-3">Email</th>
            <th className="px-4 py-3 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={index}
              className={`border-t border-gray-200 ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-gray-100`}
            >
              <td className="px-4 py-2 font-medium text-black">{user.firstName}</td>
              <td className="px-4 py-2 text-black">{user.lastName}</td>
              <td className="px-4 py-2 text-gray-600">{user.email}</td>
              <td className="px-4 py-2 flex justify-center gap-3">
                <button className="bg-linear-to-r from-lime-400 to-green-500 text-white px-3 py-1 rounded-md hover:opacity-90 transition-all cursor-pointer">
                  Update
                </button>
                <button className="bg-gray-800 text-white px-3 py-1 rounded-md hover:bg-black transition-all cursor-pointer">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
