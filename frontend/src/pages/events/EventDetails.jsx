import { useParams, Link } from "react-router-dom";
import { MapPin, ArrowRight, ArrowLeft } from "lucide-react";

const allEvents = [
  { _id: "1", name: "Wedding Events", description: "Complete wedding event management with premium catering and decor.", location: "Kerala", fullDesc: "Our wedding event service covers everything from venue decoration to multi-course catering. We work with top vendors to ensure your special day is flawless and unforgettable.", price: "From ₹50,000", duration: "1–3 Days", guests: "Up to 500" },
  { _id: "2", name: "Birthday Parties", description: "Make your birthday celebrations special with custom packages.", location: "Kochi", fullDesc: "Celebrate your birthday in style with our custom packages. We handle the cake, buffet, decorations, and entertainment so you can focus on enjoying your day.", price: "From ₹10,000", duration: "Half / Full Day", guests: "Up to 200" },
  { _id: "3", name: "Corporate Events", description: "Professional corporate event planning and catering services.", location: "Thrissur", fullDesc: "From team lunches to large conferences, our corporate event packages include professional catering, AV setup, and seamless coordination.", price: "From ₹20,000", duration: "Half / Full Day", guests: "Up to 300" },
  { _id: "4", name: "Anniversary", description: "Elegant anniversary celebrations tailored to your love story.", location: "Kerala", fullDesc: "Mark your milestone with an elegant celebration. We curate intimate dinners or grand parties with personalized touches that reflect your journey together.", price: "From ₹15,000", duration: "1 Day", guests: "Up to 150" },
  { _id: "5", name: "Festivals", description: "Festive celebrations with traditional cuisine and entertainment.", location: "Kochi", fullDesc: "Celebrate festivals with authentic regional cuisine, traditional decor, and live entertainment. We bring the spirit of every festival to life.", price: "From ₹8,000", duration: "1–2 Days", guests: "Up to 400" },
  { _id: "6", name: "Baby Showers", description: "Welcome your little one in style with our curated packages.", location: "Thrissur", fullDesc: "Our baby shower packages include themed decorations, custom cakes, and a curated menu to make the occasion warm and memorable for the family.", price: "From ₹8,000", duration: "Half Day", guests: "Up to 100" },
];

const eventImages = {
  "1": "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&q=80",
  "2": "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=1200&q=80",
  "3": "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80",
  "4": "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=80",
  "5": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200&q=80",
  "6": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
};

function EventDetails() {
  const { id } = useParams();
  const event = allEvents.find((e) => e._id === id);

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-400">
        <p className="text-xl font-semibold">Event not found.</p>
        <Link to="/events" className="mt-4 text-orange-400 font-semibold flex items-center gap-1.5 hover:gap-3 transition-all">
          <ArrowLeft size={16} /> Back to Events
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="relative h-72 overflow-hidden">
        <img src={eventImages[event._id]} alt={event.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 h-full flex flex-col justify-end px-6 pb-8 max-w-6xl mx-auto">
          <Link to="/events" className="text-white/70 hover:text-white flex items-center gap-1.5 text-sm mb-3 transition-colors w-fit">
            <ArrowLeft size={15} /> Back to Events
          </Link>
          <h1 className="text-4xl font-extrabold text-white">{event.name}</h1>
          <div className="flex items-center gap-1.5 mt-2 text-gray-300 text-sm">
            <MapPin size={14} /> {event.location}
          </div>
        </div>
      </div>

      <section className="py-14 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-3">About this Event</h2>
              <p className="text-gray-500 leading-relaxed">{event.fullDesc}</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4">What's Included</h2>
              <ul className="space-y-2 text-gray-500 text-sm">
                {["Professional event coordination", "Premium catering service", "Venue decoration & setup", "Dedicated support team", "Post-event cleanup"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-5">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Event Details</h3>
              <div className="space-y-3 text-sm">
                {[
                  { label: "Starting Price", value: event.price },
                  { label: "Duration", value: event.duration },
                  { label: "Guest Capacity", value: event.guests },
                  { label: "Location", value: event.location },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between">
                    <span className="text-gray-400">{label}</span>
                    <span className="font-semibold text-gray-800">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              to="/catering"
              className="flex items-center justify-center gap-2 w-full bg-orange-400 hover:bg-orange-500 text-white py-3 rounded-xl font-semibold transition"
            >
              View Packages <ArrowRight size={16} />
            </Link>

            <Link
              to={`/book-event/${event._id}`}
              className="flex items-center justify-center gap-2 w-full border-2 border-orange-400 text-orange-400 hover:bg-orange-50 py-3 rounded-xl font-semibold transition"
            >
              Book This Event
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EventDetails;
