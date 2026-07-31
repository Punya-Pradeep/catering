import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { UtensilsCrossed } from "lucide-react";

const navLinks = [
  { to: "/events", label: "Events" },
  { to: "/catering", label: "Catering" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const { user, logout } = useAuth();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-10 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-orange-400 font-extrabold text-xl">
          <UtensilsCrossed size={22} />
          CaterEase
        </Link>

        <div className="flex items-center gap-1 text-sm">
          {navLinks.map(({ to, label }) => (
            <Link key={to} to={to}
              className={`px-3 py-1.5 rounded-lg font-medium transition ${pathname === to ? "bg-orange-50 text-orange-400" : "text-gray-600 hover:text-orange-400 hover:bg-orange-50"}`}>
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 text-sm">
          {user ? (
            <>
              <Link to="/dashboard" className="px-3 py-1.5 rounded-lg text-gray-600 hover:text-orange-400 hover:bg-orange-50 font-medium transition">
                Dashboard
              </Link>
              <button onClick={handleLogout} className="px-4 py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:border-orange-300 hover:text-orange-400 font-medium transition">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="px-3 py-1.5 rounded-lg text-gray-600 hover:text-orange-400 font-medium transition">
                Login
              </Link>
              <Link to="/register" className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-1.5 rounded-lg font-semibold shadow-sm transition">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
