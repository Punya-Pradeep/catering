import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, CalendarDays, Users, Phone, Mail, User } from "lucide-react";

function BookEvent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", guests: "", notes: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-5">
            <CalendarDays size={28} className="text-orange-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Booking Confirmed!</h2>
          <p className="text-gray-500 mt-2 text-sm">We've received your booking request. Our team will contact you shortly to confirm the details.</p>
          <div className="mt-6 space-y-3">
            <Link to="/my-bookings" className="block w-full bg-orange-400 hover:bg-orange-500 text-white py-3 rounded-xl font-semibold transition text-sm">
              View My Bookings
            </Link>
            <Link to="/events" className="block w-full border border-gray-200 text-gray-600 hover:bg-gray-50 py-3 rounded-xl font-semibold transition text-sm">
              Back to Events
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-40 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80" alt="book" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 h-full flex flex-col justify-end px-6 pb-6 max-w-3xl mx-auto">
          <Link to="/events" className="text-white/70 hover:text-white flex items-center gap-1.5 text-sm mb-2 transition-colors w-fit">
            <ArrowLeft size={15} /> Back to Events
          </Link>
          <h1 className="text-3xl font-extrabold text-white">Book Your Event</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-lg font-bold text-gray-900 mb-6">Fill in your details</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1.5 flex items-center gap-1.5"><User size={14} /> Full Name</label>
                <input name="name" required value={form.name} onChange={handleChange} placeholder="Your full name"
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1.5 flex items-center gap-1.5"><Mail size={14} /> Email</label>
                <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="your@email.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1.5 flex items-center gap-1.5"><Phone size={14} /> Phone</label>
                <input name="phone" required value={form.phone} onChange={handleChange} placeholder="+91 00000 00000"
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1.5 flex items-center gap-1.5"><CalendarDays size={14} /> Event Date</label>
                <input name="date" type="date" required value={form.date} onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1.5 flex items-center gap-1.5"><Users size={14} /> Number of Guests</label>
                <input name="guests" type="number" min="1" required value={form.guests} onChange={handleChange} placeholder="e.g. 100"
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1.5 block">Special Requests (optional)</label>
              <textarea name="notes" rows={3} value={form.notes} onChange={handleChange} placeholder="Any special requirements or notes..."
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 resize-none" />
            </div>
            <button type="submit" className="w-full bg-orange-400 hover:bg-orange-500 text-white py-3 rounded-xl font-semibold transition text-sm">
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookEvent;
