import { useState, useEffect } from "react";
import { apiRequest } from "../../services/api";

const authHeader = () => ({
  Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))?.token}`,
});

const statusStyles = {
  pending: "bg-yellow-100 text-yellow-700",
  confirmed: "bg-green-100 text-green-700",
  completed: "bg-blue-100 text-blue-700",
  cancelled: "bg-red-100 text-red-500",
};

function ManageBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiRequest("/admin/bookings", { headers: authHeader() })
      .then(setBookings)
      .finally(() => setLoading(false));
  }, []);

  const updateStatus = async (id, status) => {
    await apiRequest(`/bookings/${id}/status`, {
      method: "PATCH",
      headers: authHeader(),
      body: JSON.stringify({ status }),
    });
    setBookings((prev) => prev.map((b) => b._id === id ? { ...b, status } : b));
  };

  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Manage Bookings</h1>
        <p className="text-gray-400 text-sm mt-1">{bookings.length} bookings total</p>
      </div>

      {loading ? (
        <p className="text-gray-400">Loading...</p>
      ) : bookings.length === 0 ? (
        <p className="text-gray-400 text-center py-16">No bookings yet.</p>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                {["Booking ID", "Customer", "Event", "Date", "Guests", "Amount", "Status", "Action"].map((h) => (
                  <th key={h} className="text-left px-5 py-3.5 text-xs font-semibold text-gray-400 uppercase tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {bookings.map((b) => (
                <tr key={b._id} className="hover:bg-gray-50 transition">
                  <td className="px-5 py-4 text-gray-500 font-mono text-xs">{b.bookingId}</td>
                  <td className="px-5 py-4 font-medium text-gray-800">{b.user?.name || "—"}</td>
                  <td className="px-5 py-4 text-gray-600">{b.event?.name || "—"}</td>
                  <td className="px-5 py-4 text-gray-500">{new Date(b.eventDate).toLocaleDateString()}</td>
                  <td className="px-5 py-4 text-gray-500">{b.numberOfGuests}</td>
                  <td className="px-5 py-4 text-orange-400 font-semibold">₹{b.totalAmount?.toLocaleString()}</td>
                  <td className="px-5 py-4">
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${statusStyles[b.status]}`}>
                      {b.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <select value={b.status} onChange={(e) => updateStatus(b._id, e.target.value)}
                      className="text-xs border border-gray-200 rounded-lg px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-orange-300">
                      {["pending", "confirmed", "completed", "cancelled"].map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ManageBookings;
