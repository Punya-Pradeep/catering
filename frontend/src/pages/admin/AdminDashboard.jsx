import { useState, useEffect } from "react";
import { Users, CalendarCheck, UtensilsCrossed, BookOpen, IndianRupee } from "lucide-react";
import { apiRequest } from "../../services/api";

function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("user"))?.token;
    apiRequest("/admin/dashboard", { headers: { Authorization: `Bearer ${token}` } })
      .then(setStats)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const cards = stats ? [
    { icon: Users, label: "Total Users", value: stats.users, color: "bg-blue-50 text-blue-500" },
    { icon: CalendarCheck, label: "Total Events", value: stats.events, color: "bg-orange-50 text-orange-400" },
    { icon: UtensilsCrossed, label: "Catering Packages", value: stats.catering, color: "bg-purple-50 text-purple-500" },
    { icon: BookOpen, label: "Total Bookings", value: stats.bookings, color: "bg-green-50 text-green-500" },
    { icon: IndianRupee, label: "Total Revenue", value: `₹${stats.revenue?.toLocaleString()}`, color: "bg-yellow-50 text-yellow-500" },
  ] : [];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      <p className="text-gray-400 text-sm mt-1">Overview of your platform.</p>

      {loading ? (
        <p className="mt-10 text-gray-400">Loading stats...</p>
      ) : (
        <div className="grid md:grid-cols-3 xl:grid-cols-5 gap-5 mt-8">
          {cards.map(({ icon: Icon, label, value, color }) => (
            <div key={label} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${color}`}>
                <Icon size={20} />
              </div>
              <p className="text-2xl font-bold text-gray-900">{value}</p>
              <p className="text-sm text-gray-400 mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;
