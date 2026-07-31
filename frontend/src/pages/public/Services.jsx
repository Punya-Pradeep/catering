import { Link } from "react-router-dom";

const services = [
  { title: "Event Planning", desc: "End-to-end event planning from concept to flawless execution. We handle every detail.", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80" },
  { title: "Premium Catering", desc: "Customizable menus crafted by expert chefs for weddings, corporates, and celebrations.", img: "https://images.unsplash.com/photo-1555244162-803834f70033?w=600&q=80" },
  { title: "Guest Management", desc: "Manage RSVPs, seating arrangements, and guest communications effortlessly.", img: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80" },
  { title: "Entertainment", desc: "Book DJs, live bands, and performers to keep your guests entertained all night.", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&q=80" },
  { title: "Photography", desc: "Professional photography and videography to capture every precious moment.", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80" },
  { title: "Decoration", desc: "Stunning themed decoration and floral design services tailored to your vision.", img: "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=600&q=80" },
];

function Services() {
  return (
    <div>
      <section className="relative h-64 flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80" alt="services" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl font-extrabold">Our Services</h1>
          <p className="mt-3 text-gray-300 max-w-lg mx-auto">Everything you need for a perfect event, under one roof.</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map(({ title, desc, img }) => (
              <div key={title} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 text-lg">{title}</h3>
                  <p className="text-gray-500 text-sm mt-2 leading-relaxed">{desc}</p>
                  <Link to="/events" className="inline-block mt-4 text-sm text-orange-400 font-semibold hover:underline">
                    Learn more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-orange-400/90 py-16 text-center text-white">
        <h2 className="text-3xl font-bold">Ready to get started?</h2>
        <p className="mt-3 text-orange-50 max-w-md mx-auto">Let us help you create an event that your guests will talk about for years.</p>
        <Link to="/register" className="inline-block mt-6 bg-white text-orange-500 font-semibold px-8 py-3 rounded-full hover:bg-orange-50 transition">
          Book Now
        </Link>
      </section>
    </div>
  );
}

export default Services;
