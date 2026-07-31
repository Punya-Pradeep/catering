import { Link } from "react-router-dom";
import { CalendarDays, MapPin, Users, ArrowRight } from "lucide-react";

const mockBookings = [
  { _id: "b1", event: "Wedding Events", date: "2025-08-15", guests: 200, location: "Kerala", status: "Confirmed" },
  { _id: "b2", event: "Corporate Events", date: "2025-07-20", guests: 80, location: "Thrissur", status: "Pending" },
  { _id: "b3", event: "Birthday Parties", date: "2025-06-10", guests: 50, location: "Kochi", status: "Completed" },
];

const statusStyles = {
  Confirmed: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Completed: "bg-gray-100 text-gray-500",
  Cancelled: "bg-red-100 text-red-500",
};

function MyBookings() {
  return (
    <div>
      <section className="relative h-48 flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80" alt="bookings" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl font-extrabold">My Bookings</h1>
          <p className="mt-2 text-gray-300 text-sm">Track and manage all your event bookings.</p>
        </div>
      </section>

      <section className="py-12 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4">
          {mockBookings.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <p className="text-lg font-semibold">No bookings yet.</p>
              <Link to="/events" className="mt-4 inline-flex items-center gap-1.5 text-orange-400 font-semibold hover:gap-3 transition-all">
                Explore Events <ArrowRight size={15} />
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {mockBookings.map((b) => (
                <div key={b._id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <h3 className="font-bold text-gray-900">{b.event}</h3>
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${statusStyles[b.status]}`}>{b.status}</span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1.5"><CalendarDays size={13} /> {b.date}</span>
                      <span className="flex items-center gap-1.5"><MapPin size={13} /> {b.location}</span>
                      <span className="flex items-center gap-1.5"><Users size={13} /> {b.guests} guests</span>
                    </div>
                  </div>
                  <Link to={`/booking/${b._id}`}
                    className="shrink-0 flex items-center gap-1.5 text-sm text-orange-400 font-semibold hover:gap-2.5 transition-all">
                    View Details <ArrowRight size={15} />
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default MyBookings;
