import { useState, useEffect } from "react";
import { apiRequest } from "../../services/api";
import { IndianRupee, BookOpen, Users, CalendarCheck } from "lucide-react";

const authHeader = () => ({
  Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))?.token}`,
});

function Reports() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiRequest("/admin/dashboard", { headers: authHeader() })
      .then(setStats)
      .finally(() => setLoading(false));
  }, []);

  const cards = stats ? [
    { icon: IndianRupee, label: "Total Revenue", value: `₹${stats.revenue?.toLocaleString()}`, sub: "From confirmed & completed bookings", color: "text-yellow-500 bg-yellow-50" },
    { icon: BookOpen, label: "Total Bookings", value: stats.bookings, sub: "All time bookings", color: "text-green-500 bg-green-50" },
    { icon: CalendarCheck, label: "Total Events", value: stats.events, sub: "Active events on platform", color: "text-orange-400 bg-orange-50" },
    { icon: Users, label: "Total Users", value: stats.users, sub: "Registered customers", color: "text-blue-500 bg-blue-50" },
  ] : [];

  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
        <p className="text-gray-400 text-sm mt-1">Platform performance overview.</p>
      </div>

      {loading ? (
        <p className="text-gray-400">Loading...</p>
      ) : (
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {cards.map(({ icon: Icon, label, value, sub, color }) => (
            <div key={label} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${color}`}>
                <Icon size={22} />
              </div>
              <p className="text-3xl font-bold text-gray-900">{value}</p>
              <p className="text-sm font-semibold text-gray-700 mt-1">{label}</p>
              <p className="text-xs text-gray-400 mt-0.5">{sub}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Reports;
