import CateringPackageCard from "../../components/catering/CateringPackageCard";

const packages = [
  { _id: "1", name: "Wedding Premium", description: "Complete premium wedding catering with multi-course meals.", price: 2500 },
  { _id: "2", name: "Birthday Package", description: "Perfect for birthday events with custom cake and buffet.", price: 500 },
  { _id: "3", name: "Corporate Package", description: "Professional corporate catering for meetings and conferences.", price: 800 },
  { _id: "4", name: "Silver Celebration", description: "Elegant catering for special milestones and anniversaries.", price: 1200 },
  { _id: "5", name: "Festival Feast", description: "Traditional festival catering with authentic regional cuisine.", price: 600 },
  { _id: "6", name: "Gold Premium", description: "Our most luxurious package with live cooking stations.", price: 3500 },
];

function Catering() {
  return (
    <div>
      <section className="relative h-56 flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1555244162-803834f70033?w=1600&q=80" alt="catering" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl font-extrabold">Catering Packages</h1>
          <p className="mt-2 text-gray-300">Premium catering for every occasion and budget.</p>
        </div>
      </section>

      <section className="py-12 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((p) => <CateringPackageCard key={p._id} packageData={p} />)}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Catering;
