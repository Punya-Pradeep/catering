import { Link } from "react-router-dom";
import { CalendarCheck, UtensilsCrossed, LayoutDashboard, Star, Users, Award } from "lucide-react";

const features = [
  { icon: CalendarCheck, title: "Easy Planning", desc: "Browse, select, and book events with just a few clicks from anywhere." },
  { icon: UtensilsCrossed, title: "Premium Catering", desc: "Choose from a variety of curated catering packages for any occasion." },
  { icon: LayoutDashboard, title: "Hassle-Free", desc: "Manage all your bookings and vendors from one central dashboard." },
];

const stats = [
  { icon: CalendarCheck, value: "500+", label: "Events Hosted" },
  { icon: Users, value: "10k+", label: "Happy Customers" },
  { icon: Star, value: "98%", label: "Satisfaction Rate" },
  { icon: Award, value: "50+", label: "Trusted Vendors" },
];

const categories = [
  { label: "Weddings", img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&q=80" },
  { label: "Corporate", img: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&q=80" },
  { label: "Birthdays", img: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&q=80" },
  { label: "Festivals", img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&q=80" },
];

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[88vh] flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1555244162-803834f70033?w=1600&q=80" alt="hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Create <span className="text-orange-400">Unforgettable</span> Events
          </h1>
          {/* <p className="mt-5 text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
            Plan your events, discover premium catering packages, and manage everything seamlessly from one platform.
          </p> */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/events" className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-full font-semibold text-sm shadow-lg shadow-orange-400/20 transition">
              Explore Events
            </Link>
            <Link to="/catering" className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-3 rounded-full font-semibold text-sm backdrop-blur transition">
              View Catering
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      {/* <section className="bg-orange-400/80 py-10">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label}>
              <Icon size={24} className="mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-extrabold">{value}</p>
              <p className="text-sm opacity-80 mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose CaterEase?</h2>
            <p className="text-gray-500 mt-3 max-w-lg mx-auto">Everything you need to plan and execute a perfect event, all in one place.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group p-8 rounded-2xl border border-gray-300 hover:border-orange-300 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-orange-400 transition-colors">
                  <Icon size={22} className="text-orange-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{title}</h3>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Category</h2>
            <p className="text-gray-500 mt-3">Find the perfect event type for your celebration.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {categories.map(({ label, img }) => (
              <Link to="/events" key={label} className="group relative rounded-2xl overflow-hidden h-52 shadow-md hover:shadow-xl transition-shadow">
                <img src={img} alt={label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="absolute bottom-4 left-0 right-0 text-center text-white font-bold text-lg">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80" alt="cta" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 text-center px-4">
          <h2 className="text-4xl font-extrabold text-white">Ready to Plan Your Event?</h2>
          <p className="text-gray-300 mt-4 max-w-md mx-auto">Join thousands of happy customers who trust CaterEase for their special moments.</p>
          {/* <Link to="/register" className="inline-block mt-8 bg-orange-400 hover:bg-orange-500 text-white px-10 py-3.5 rounded-full font-semibold shadow-lg shadow-orange-400/20 transition">
            
          </Link> */}
        </div>
      </section>
    </div>
  );
}

export default Home;
