import { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";

const info = [
  { icon: Mail, label: "Email", value: "hello@caterease.com" },
  { icon: Phone, label: "Phone", value: "8547548973" },
  { icon: MapPin, label: "Location", value: "Kochi, Kerala, India" },
];

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div>
      <section className="relative h-64 flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80" alt="contact" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl font-extrabold">Get in Touch</h1>
          <p className="mt-3 text-gray-300">We'd love to hear from you. Let's plan something amazing together.</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2 space-y-5">
            <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
            <p className="text-gray-500 text-sm leading-relaxed">Reach out to us through any of the channels below and we'll get back to you within 24 hours.</p>
            {info.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-orange-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{label}</p>
                  <p className="text-gray-800 font-medium text-sm mt-0.5">{value}</p>
                </div>
              </div>
            ))}
            {/* <div className="rounded-2xl overflow-hidden h-44 shadow-md mt-4">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80" alt="office" className="w-full h-full object-cover" />
            </div> */}
          </div>

          <div className="md:col-span-3 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <CheckCircle size={56} className="text-green-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900">Message Sent!</h3>
                <p className="text-gray-500 text-sm mt-2">We'll get back to you within 24 hours.</p>
                <button onClick={() => setSent(false)} className="mt-6 text-sm text-orange-400 font-semibold hover:underline">
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1.5">Full Name</label>
                      <input placeholder="" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-300" required />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1.5">Email Address</label>
                      <input type="email" placeholder="you@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-300" required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">Subject</label>
                    <input placeholder="How can we help?" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-300" required />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">Message</label>
                    <textarea rows={5} placeholder="Tell us about your event..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 resize-none" required />
                  </div>
                  <button type="submit" className="w-full bg-orange-400 hover:bg-orange-500 text-white py-3 rounded-xl font-semibold text-sm transition">
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
