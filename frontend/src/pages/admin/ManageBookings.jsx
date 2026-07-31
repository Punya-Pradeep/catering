import { useState, useEffect } from "react";
import { apiRequest } from "../../services/api";
import { CheckCircle, XCircle, Clock } from "lucide-react";

const authHeader = () => ({
  Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))?.token}`,
});

const statusStyles = {
  pending: "bg-yellow-100 text-yellow-700",
  confirmed: "bg-green-100 text-green-700",
  completed: "bg-blue-100 text-blue-700",
  cancelled: "bg-red-100 text-red-500",
};

const FILTERS = ["all", "pending", "confirmed", "completed", "cancelled"];

function ManageBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [updating, setUpdating] = useState(null);

  useEffect(() => {
    apiRequest("/admin/bookings", { headers: authHeader() })
      .then(setBookings)
      .finally(() => setLoading(false));
  }, []);

  const updateStatus = async (id, status) => {
    setUpdating(id + status);
    await apiRequest(`/bookings/${id}/status`, {
      method: "PATCH",
      headers: authHeader(),
      body: JSON.stringify({ status }),
    });
    setBookings((prev) => prev.map((b) => b._id === id ? { ...b, status } : b));
    setUpdating(null);
  };

  const filtered = filter === "all" ? bookings : bookings.filter((b) => b.status === filter);
  const pendingCount = bookings.filter((b) => b.status === "pending").length;

  return (
    <div className="p-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Manage Bookings</h1>
          <p className="text-gray-400 text-sm mt-1">{bookings.length} bookings total</p>
        </div>
        {pendingCount > 0 && (
          <div className="flex items-center gap-2 bg-yellow-50 border border-yellow-200 text-yellow-700 text-sm font-medium px-4 py-2 rounded-xl">
            <Clock size={15} />
            {pendingCount} pending approval
          </div>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {FILTERS.map((f) => (
          <button key={f} onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium capitalize transition ${filter === f ? "bg-orange-400 text-white" : "bg-white border border-gray-200 text-gray-500 hover:border-orange-300"}`}>
            {f}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="text-gray-400">Loading...</p>
      ) : filtered.length === 0 ? (
        <p className="text-gray-400 text-center py-16">No bookings found.</p>
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
              {filtered.map((b) => (
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
                    {b.status === "pending" ? (
                      <div className="flex gap-2">
                        <button onClick={() => updateStatus(b._id, "confirmed")}
                          disabled={updating === b._id + "confirmed"}
                          className="flex items-center gap-1 bg-green-50 hover:bg-green-100 text-green-600 text-xs font-semibold px-3 py-1.5 rounded-lg transition disabled:opacity-50">
                          <CheckCircle size={13} /> Approve
                        </button>
                        <button onClick={() => updateStatus(b._id, "cancelled")}
                          disabled={updating === b._id + "cancelled"}
                          className="flex items-center gap-1 bg-red-50 hover:bg-red-100 text-red-500 text-xs font-semibold px-3 py-1.5 rounded-lg transition disabled:opacity-50">
                          <XCircle size={13} /> Reject
                        </button>
                      </div>
                    ) : (
                      <select value={b.status} onChange={(e) => updateStatus(b._id, e.target.value)}
                        className="text-xs border border-gray-200 rounded-lg px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-orange-300">
                        {["pending", "confirmed", "completed", "cancelled"].map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    )}
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
