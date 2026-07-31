import { useState, useEffect } from "react";
import { apiRequest } from "../../services/api";

const authHeader = () => ({
  Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))?.token}`,
});

const roleStyles = {
  admin: "bg-purple-100 text-purple-600",
  customer: "bg-blue-100 text-blue-600",
  vendor: "bg-orange-100 text-orange-500",
};

function ManageUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiRequest("/admin/users", { headers: authHeader() })
      .then(setUsers)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Manage Users</h1>
        <p className="text-gray-400 text-sm mt-1">{users.length} users registered</p>
      </div>

      {loading ? (
        <p className="text-gray-400">Loading...</p>
      ) : users.length === 0 ? (
        <p className="text-gray-400 text-center py-16">No users found.</p>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                {["Name", "Email", "Phone", "Role", "Joined"].map((h) => (
                  <th key={h} className="text-left px-5 py-3.5 text-xs font-semibold text-gray-400 uppercase tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {users.map((u) => (
                <tr key={u._id} className="hover:bg-gray-50 transition">
                  <td className="px-5 py-4 font-medium text-gray-800">{u.name}</td>
                  <td className="px-5 py-4 text-gray-500">{u.email}</td>
                  <td className="px-5 py-4 text-gray-500">{u.phone || "—"}</td>
                  <td className="px-5 py-4">
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${roleStyles[u.role]}`}>
                      {u.role}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-gray-400">{new Date(u.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ManageUsers;
