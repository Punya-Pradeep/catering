import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { CalendarDays, CheckCircle, Clock } from "lucide-react";

const mockBookings = [
  { _id: "b1", event: "Wedding Events", date: "2025-08-15", guests: 200, location: "Kerala", status: "Confirmed" },
  { _id: "b2", event: "Corporate Events", date: "2025-07-20", guests: 80, location: "Thrissur", status: "Pending" },
  { _id: "b3", event: "Birthday Parties", date: "2025-06-10", guests: 50, location: "Kochi", status: "Completed" },
];

function CustomerDashboard() {
  const { user } = useAuth();

  const upcoming = mockBookings.filter((b) => ["Pending", "Confirmed"].includes(b.status)).length;
  const completed = mockBookings.filter((b) => b.status === "Completed").length;

  const stats = [
    { icon: CalendarDays, label: "Total Bookings", value: mockBookings.length, color: "bg-orange-50 text-orange-400" },
    { icon: Clock, label: "Upcoming Events", value: upcoming, color: "bg-blue-50 text-blue-400" },
    { icon: CheckCircle, label: "Completed Events", value: completed, color: "bg-green-50 text-green-500" },
  ];

  return (
    <div>
      <section className="relative h-48 flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80" alt="dashboard" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl font-extrabold">Welcome, {user?.name || "Customer"}</h1>
          <p className="mt-2 text-gray-300 text-sm">Manage your bookings and explore events.</p>
        </div>
      </section>

      <section className="py-12 bg-gray-50 min-h-screen">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {stats.map(({ icon: Icon, label, value, color }) => (
              <div key={label} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color}`}>
                  <Icon size={22} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">{label}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-0.5">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <Link to="/my-bookings" className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold transition text-sm">
              View My Bookings
            </Link>
            <Link to="/events" className="border-2 border-orange-400 text-orange-400 hover:bg-orange-50 px-6 py-3 rounded-xl font-semibold transition text-sm">
              Explore Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CustomerDashboard;
