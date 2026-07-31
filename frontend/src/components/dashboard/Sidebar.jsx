import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import {
  LayoutDashboard, CalendarCheck, UtensilsCrossed,
  BookOpen, Users, BarChart2, LogOut, UtensilsCrossed as Logo,
} from "lucide-react";

const links = [
  { to: "/admin", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/admin/events", icon: CalendarCheck, label: "Events" },
  { to: "/admin/catering", icon: UtensilsCrossed, label: "Catering" },
  { to: "/admin/bookings", icon: BookOpen, label: "Bookings" },
  { to: "/admin/users", icon: Users, label: "Users" },
  { to: "/admin/reports", icon: BarChart2, label: "Reports" },
];

function Sidebar() {
  const { pathname } = useLocation();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => { logout(); navigate("/"); };

  return (
    <aside className="w-60 min-h-screen bg-gray-900 flex flex-col">
      <div className="px-6 py-5 border-b border-gray-800">
        <Link to="/" className="flex items-center gap-2 text-orange-400 font-extrabold text-lg">
          <Logo size={20} /> CaterEase
        </Link>
        <p className="text-xs text-gray-500 mt-0.5">Admin Panel</p>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {links.map(({ to, icon: Icon, label }) => (
          <Link key={to} to={to}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition ${
              pathname === to
                ? "bg-orange-400 text-white"
                : "text-gray-400 hover:bg-gray-800 hover:text-white"
            }`}>
            <Icon size={17} /> {label}
          </Link>
        ))}
      </nav>

      <div className="px-3 py-4 border-t border-gray-800">
        <button onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-400 hover:bg-gray-800 hover:text-white transition w-full">
          <LogOut size={17} /> Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
