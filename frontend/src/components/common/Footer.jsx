import { Link } from "react-router-dom";
import { UtensilsCrossed, Mail, Phone, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-sm">
      <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-4 gap-10">
        <div>
          <Link to="/" className="flex items-center gap-2 text-white font-extrabold text-lg mb-3">
            <UtensilsCrossed size={20} className="text-orange-400" />
            CaterEase
          </Link>
          <p className="leading-relaxed text-gray-500">Making event planning and catering simple, beautiful, and memorable.</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {[["Events", "/events"], ["Catering", "/catering"], ["Services", "/services"], ["About", "/about"]].map(([label, to]) => (
              <li key={to}><Link to={to} className="hover:text-orange-300 transition">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Account</h4>
          <ul className="space-y-2">
            {[["Login", "/login"], ["Register", "/register"], ["Dashboard", "/dashboard"], ["My Bookings", "/my-bookings"]].map(([label, to]) => (
              <li key={to}><Link to={to} className="hover:text-orange-300 transition">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2"><Mail size={14} className="text-orange-400" /> hello@caterease.com</li>
            <li className="flex items-center gap-2"><Phone size={14} className="text-orange-400" /> +1 (555) 123-4567</li>
            <li className="flex items-center gap-2"><MapPin size={14} className="text-orange-400" /> Kochi, Kerala, India</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 py-5 text-center text-xs text-gray-600">
        &copy; 2026 CaterEase. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
