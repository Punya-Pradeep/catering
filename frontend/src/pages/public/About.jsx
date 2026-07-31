import { Heart, Target, Sparkles } from "lucide-react";

const stats = [
  { value: "500+", label: "Events Hosted" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "50+", label: "Trusted Vendors" },
  { value: "10k+", label: "Happy Customers" },
];

const values = [
  { icon: Heart, title: "Customer First", desc: "Every decision we make is centered around delivering the best experience for our customers." },
  { icon: Target, title: "Precision", desc: "We obsess over the details so your event goes exactly as planned, every single time." },
  { icon: Sparkles, title: "Excellence", desc: "We partner only with the best vendors to ensure premium quality across all services." },
];

// const team = [
//   { name: "Arjun Menon", role: "CEO & Founder", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" },
//   { name: "Priya Nair", role: "Head of Operations", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80" },
//   { name: "Rahul Das", role: "Lead Designer", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80" },
// ];

function About() {
  return (
    <div>
      <section className="relative h-72 flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1600&q=80" alt="about" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl font-extrabold">About CaterEase</h1>
          <p className="mt-3 text-gray-300 max-w-lg mx-auto">We make event planning and catering simple, beautiful, and memorable.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-orange-400 font-semibold text-sm uppercase tracking-widest">Our Story</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Born from a passion for perfect events</h2>
            <p className="text-gray-500 mt-4 leading-relaxed">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut nam, id autem corporis voluptatibus recusandae, placeat aliquid laudantium quidem est fugit tempore eos? Iure voluptate praesentium quidem ad consequatur numquam..
            </p>
            <p className="text-gray-500 mt-3 leading-relaxed">
             lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl h-72">
            <img src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80" alt="story" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* <section className="bg-orange-400/80 py-14">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <p className="text-4xl font-extrabold">{value}</p>
              <p className="text-sm opacity-80 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section> */}

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <Icon size={24} className="text-orange-400" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg">{title}</h3>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Meet the Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map(({ name, role, img }) => (
              <div key={name} className="group">
                <div className="w-28 h-28 rounded-full overflow-hidden mx-auto shadow-lg ring-4 ring-orange-100 group-hover:ring-orange-300 transition-all">
                  <img src={img} alt={name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-gray-900 mt-4">{name}</h3>
                <p className="text-sm text-orange-400 mt-0.5">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default About;
