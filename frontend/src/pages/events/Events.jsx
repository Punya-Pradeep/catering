import { useState } from "react";
import { Search } from "lucide-react";
import EventCard from "../../components/event/EventCard";

const allEvents = [
  { _id: "1", name: "Wedding Events", description: "Complete wedding event management with premium catering and decor.", location: "Kerala" },
  { _id: "2", name: "Birthday Parties", description: "Make your birthday celebrations special with custom packages.", location: "Kochi" },
  { _id: "3", name: "Corporate Events", description: "Professional corporate event planning and catering services.", location: "Thrissur" },
  { _id: "4", name: "Anniversary", description: "Elegant anniversary celebrations tailored to your love story.", location: "Kerala" },
  { _id: "5", name: "Festivals", description: "Festive celebrations with traditional cuisine and entertainment.", location: "Kochi" },
  { _id: "6", name: "Baby Showers", description: "Welcome your little one in style with our curated packages.", location: "Thrissur" },
];

function Events() {
  const [search, setSearch] = useState("");
  const filtered = allEvents.filter((e) => e.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <section className="relative h-56 flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80" alt="events" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl font-extrabold">Explore Events</h1>
          <p className="mt-2 text-gray-300">Find and book the perfect event for every occasion.</p>
        </div>
      </section>

      <section className="py-12 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative max-w-sm mb-8">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search events..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
          </div>

          {filtered.length ? (
            <div className="grid md:grid-cols-3 gap-6">
              {filtered.map((e) => <EventCard key={e._id} event={e} />)}
            </div>
          ) : (
            <div className="text-center py-16 text-gray-400">No events found.</div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Events;
