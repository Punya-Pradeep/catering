import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";

const eventImages = {
  "1": "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80",
  "2": "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&q=80",
  "3": "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80",
  "4": "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80",
  "5": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80",
  "6": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_5ThS1HnjxTwSsHIj7KdbIhYNsXF0Sdom6Yj2EWSzsQ&s=10",
};

const fallback = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80";

function EventCard({ event }) {
  const img = eventImages[event._id] || fallback;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img src={img} alt={event.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
      <div className="p-5">
        <h3 className="font-bold text-gray-900 text-base">{event.name}</h3>
        <p className="text-sm text-gray-500 mt-1.5 leading-relaxed line-clamp-2">{event.description}</p>
        <div className="flex items-center gap-1.5 mt-3 text-xs text-gray-400">
          <MapPin size={13} />
          <span>{event.location}</span>
        </div>
        <Link to={`/events/${event._id}`}
          className="mt-4 flex items-center gap-1.5 text-sm text-orange-400 font-semibold hover:gap-2.5 transition-all">
          View Details <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
}

export default EventCard;
