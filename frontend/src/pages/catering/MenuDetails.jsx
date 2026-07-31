import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

const packages = [
  { _id: "1", name: "Wedding Premium", description: "Complete premium wedding catering with multi-course meals.", price: 2500, serves: "Up to 500", courses: "7-Course Meal", cuisine: "Multi-Cuisine", fullDesc: "Our Wedding Premium package is the pinnacle of catering excellence. Featuring a 7-course meal crafted by expert chefs, live cooking stations, and a dedicated service team to ensure every guest is delighted." },
  { _id: "2", name: "Birthday Package", description: "Perfect for birthday events with custom cake and buffet.", price: 500, serves: "Up to 100", courses: "Buffet", cuisine: "Continental", fullDesc: "Make your birthday unforgettable with our curated buffet spread, a custom-designed cake, and cheerful service. Perfect for intimate gatherings and large parties alike." },
  { _id: "3", name: "Corporate Package", description: "Professional corporate catering for meetings and conferences.", price: 800, serves: "Up to 200", courses: "3-Course Meal", cuisine: "Continental", fullDesc: "Impress your clients and colleagues with our professional corporate catering. We offer punctual service, clean presentation, and a menu tailored to your event's schedule." },
  { _id: "4", name: "Silver Celebration", description: "Elegant catering for special milestones and anniversaries.", price: 1200, serves: "Up to 150", courses: "5-Course Meal", cuisine: "Multi-Cuisine", fullDesc: "Celebrate your milestones with elegance. Our Silver Celebration package features a refined 5-course menu, floral table settings, and attentive service for a truly special occasion." },
  { _id: "5", name: "Festival Feast", description: "Traditional festival catering with authentic regional cuisine.", price: 600, serves: "Up to 300", courses: "Buffet", cuisine: "Regional", fullDesc: "Bring the authentic flavors of the festival to your celebration. Our Festival Feast package offers a rich spread of traditional regional dishes prepared by experienced local chefs." },
  { _id: "6", name: "Gold Premium", description: "Our most luxurious package with live cooking stations.", price: 3500, serves: "Up to 600", courses: "Live Stations + 8 Courses", cuisine: "International", fullDesc: "The ultimate luxury catering experience. Gold Premium features live cooking stations, an 8-course international menu, premium tableware, and a dedicated head chef for your event." },
];

const packageImages = {
  "1": "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&q=80",
  "2": "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=1200&q=80",
  "3": "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80",
  "4": "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=80",
  "5": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200&q=80",
  "6": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80",
};

function MenuDetails() {
  const { id } = useParams();
  const pkg = packages.find((p) => p._id === id);

  if (!pkg) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-400">
        <p className="text-xl font-semibold">Package not found.</p>
        <Link to="/catering" className="mt-4 text-orange-400 font-semibold flex items-center gap-1.5 hover:gap-3 transition-all">
          <ArrowLeft size={16} /> Back to Packages
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="relative h-72 overflow-hidden">
        <img src={packageImages[pkg._id]} alt={pkg.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute top-3 right-6 bg-orange-400 text-white text-sm font-bold px-4 py-1.5 rounded-full shadow z-10">
          ${pkg.price}
        </div>
        <div className="relative z-10 h-full flex flex-col justify-end px-6 pb-8 max-w-6xl mx-auto">
          <Link to="/catering" className="text-white/70 hover:text-white flex items-center gap-1.5 text-sm mb-3 transition-colors w-fit">
            <ArrowLeft size={15} /> Back to Packages
          </Link>
          <h1 className="text-4xl font-extrabold text-white">{pkg.name}</h1>
          <p className="text-gray-300 text-sm mt-1">{pkg.description}</p>
        </div>
      </div>

      <section className="py-14 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Package Overview</h2>
              <p className="text-gray-500 leading-relaxed">{pkg.fullDesc}</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4">What's Included</h2>
              <ul className="space-y-2 text-gray-500 text-sm">
                {["Professional chef & service staff", "Premium quality ingredients", "Custom menu planning", "Setup & cleanup", "Dedicated event coordinator"].map((item) => (
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
              <h3 className="font-bold text-gray-900 mb-4">Package Details</h3>
              <div className="space-y-3 text-sm">
                {[
                  { label: "Price", value: `$${pkg.price}` },
                  { label: "Serves", value: pkg.serves },
                  { label: "Courses", value: pkg.courses },
                  { label: "Cuisine", value: pkg.cuisine },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between">
                    <span className="text-gray-400">{label}</span>
                    <span className="font-semibold text-gray-800">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              to={`/book-event/${pkg._id}`}
              className="flex items-center justify-center gap-2 w-full bg-orange-400 hover:bg-orange-500 text-white py-3 rounded-xl font-semibold transition"
            >
              Book This Package <ArrowRight size={16} />
            </Link>

            <Link
              to="/catering"
              className="flex items-center justify-center gap-2 w-full border-2 border-orange-400 text-orange-400 hover:bg-orange-50 py-3 rounded-xl font-semibold transition"
            >
              View All Packages
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MenuDetails;
