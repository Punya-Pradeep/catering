import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CalendarDays, MapPin, Users, Phone, Mail, User } from "lucide-react";

const mockBookings = [
  { _id: "b1", event: "Wedding Events", date: "2025-08-15", guests: 200, location: "Kerala", status: "Confirmed", name: "Arjun Menon", email: "arjun@example.com", phone: "+91 98765 43210", notes: "Please arrange floral decorations." },
  { _id: "b2", event: "Corporate Events", date: "2025-07-20", guests: 80, location: "Thrissur", status: "Pending", name: "Priya Nair", email: "priya@example.com", phone: "+91 91234 56789", notes: "" },
  { _id: "b3", event: "Birthday Parties", date: "2025-06-10", guests: 50, location: "Kochi", status: "Completed", name: "Rahul Das", email: "rahul@example.com", phone: "+91 99887 76655", notes: "Custom chocolate cake required." },
];

const statusStyles = {
  Confirmed: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Completed: "bg-gray-100 text-gray-500",
  Cancelled: "bg-red-100 text-red-500",
};

function BookingDetails() {
  const { id } = useParams();
  const booking = mockBookings.find((b) => b._id === id);

  if (!booking) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-400">
        <p className="text-xl font-semibold">Booking not found.</p>
        <Link to="/my-bookings" className="mt-4 text-orange-400 font-semibold flex items-center gap-1.5 hover:gap-3 transition-all">
          <ArrowLeft size={16} /> Back to My Bookings
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-40 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80" alt="booking" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 h-full flex flex-col justify-end px-6 pb-6 max-w-3xl mx-auto">
          <Link to="/my-bookings" className="text-white/70 hover:text-white flex items-center gap-1.5 text-sm mb-2 transition-colors w-fit">
            <ArrowLeft size={15} /> Back to My Bookings
          </Link>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-extrabold text-white">{booking.event}</h1>
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusStyles[booking.status]}`}>{booking.status}</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12 space-y-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-lg font-bold text-gray-900 mb-5">Booking Information</h2>
          <div className="grid sm:grid-cols-2 gap-5 text-sm">
            {[
              { icon: CalendarDays, label: "Event Date", value: booking.date },
              { icon: MapPin, label: "Location", value: booking.location },
              { icon: Users, label: "Guests", value: `${booking.guests} guests` },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="w-9 h-9 bg-orange-50 rounded-xl flex items-center justify-center shrink-0">
                  <Icon size={16} className="text-orange-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs">{label}</p>
                  <p className="font-semibold text-gray-800 mt-0.5">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-lg font-bold text-gray-900 mb-5">Contact Details</h2>
          <div className="grid sm:grid-cols-2 gap-5 text-sm">
            {[
              { icon: User, label: "Name", value: booking.name },
              { icon: Mail, label: "Email", value: booking.email },
              { icon: Phone, label: "Phone", value: booking.phone },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="w-9 h-9 bg-orange-50 rounded-xl flex items-center justify-center shrink-0">
                  <Icon size={16} className="text-orange-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs">{label}</p>
                  <p className="font-semibold text-gray-800 mt-0.5">{value}</p>
                </div>
              </div>
            ))}
          </div>
          {booking.notes && (
            <div className="mt-5 pt-5 border-t border-gray-100">
              <p className="text-xs text-gray-400 mb-1">Special Requests</p>
              <p className="text-sm text-gray-600">{booking.notes}</p>
            </div>
          )}
        </div>

        <div className="flex gap-3">
          <Link to="/events" className="flex-1 text-center bg-orange-400 hover:bg-orange-500 text-white py-3 rounded-xl font-semibold transition text-sm">
            Book Another Event
          </Link>
          <Link to="/my-bookings" className="flex-1 text-center border border-gray-200 text-gray-600 hover:bg-gray-50 py-3 rounded-xl font-semibold transition text-sm">
            All Bookings
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BookingDetails;
