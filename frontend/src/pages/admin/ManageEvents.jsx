import { useState, useEffect } from "react";
import { Plus, Trash2, X } from "lucide-react";
import { apiRequest } from "../../services/api";

const authHeader = () => ({
  Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))?.token}`,
});

const empty = { name: "", description: "", location: "", date: "", category: "", price: "" };

function ManageEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState(empty);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const fetchEvents = () =>
    apiRequest("/events").then(setEvents).finally(() => setLoading(false));

  useEffect(() => { fetchEvents(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      await apiRequest("/events", {
        method: "POST",
        headers: authHeader(),
        body: JSON.stringify({ ...form, price: Number(form.price) }),
      });
      setShowModal(false);
      setForm(empty);
      fetchEvents();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this event?")) return;
    await apiRequest(`/events/${id}`, { method: "DELETE", headers: authHeader() });
    setEvents((prev) => prev.filter((e) => e._id !== id));
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Manage Events</h1>
          <p className="text-gray-400 text-sm mt-1">{events.length} events total</p>
        </div>
        <button onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-orange-400 hover:bg-orange-500 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition">
          <Plus size={16} /> Add Event
        </button>
      </div>

      {loading ? (
        <p className="text-gray-400">Loading...</p>
      ) : events.length === 0 ? (
        <p className="text-gray-400 text-center py-16">No events yet. Add one!</p>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                {["Name", "Category", "Location", "Date", "Price", ""].map((h) => (
                  <th key={h} className="text-left px-5 py-3.5 text-xs font-semibold text-gray-400 uppercase tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {events.map((e) => (
                <tr key={e._id} className="hover:bg-gray-50 transition">
                  <td className="px-5 py-4 font-medium text-gray-800">{e.name}</td>
                  <td className="px-5 py-4 text-gray-500">{e.category}</td>
                  <td className="px-5 py-4 text-gray-500">{e.location}</td>
                  <td className="px-5 py-4 text-gray-500">{new Date(e.date).toLocaleDateString()}</td>
                  <td className="px-5 py-4 text-orange-400 font-semibold">₹{e.price?.toLocaleString()}</td>
                  <td className="px-5 py-4">
                    <button onClick={() => handleDelete(e._id)} className="text-gray-300 hover:text-red-400 transition">
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900">Add New Event</h2>
              <button onClick={() => setShowModal(false)}><X size={20} className="text-gray-400" /></button>
            </div>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { name: "name", placeholder: "Event Name" },
                { name: "location", placeholder: "Location" },
                { name: "category", placeholder: "Category (e.g. Wedding)" },
                { name: "price", placeholder: "Price (₹)", type: "number" },
                { name: "date", placeholder: "Date", type: "date" },
              ].map(({ name, placeholder, type = "text" }) => (
                <input key={name} name={name} type={type} placeholder={placeholder} required
                  value={form[name]} onChange={(e) => setForm({ ...form, [name]: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300" />
              ))}
              <textarea name="description" placeholder="Description" required rows={3}
                value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 resize-none" />
              <button type="submit" disabled={saving}
                className="w-full bg-orange-400 hover:bg-orange-500 text-white py-3 rounded-xl font-semibold text-sm transition disabled:opacity-60">
                {saving ? "Saving..." : "Create Event"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ManageEvents;
