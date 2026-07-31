import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { loginUser } from "../../services/authService";
import { ShieldCheck } from "lucide-react";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const data = await loginUser({ email, password });
      const userData = { ...data.user, token: data.token };
      if (userData.role !== "admin") {
        setError("Access denied. Admins only.");
        return;
      }
      login(userData);
      navigate("/admin");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md px-4">
        <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-700">
          <div className="flex flex-col items-center mb-8">
            <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center mb-4">
              <ShieldCheck size={28} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">Admin Portal</h1>
            <p className="text-gray-400 text-sm mt-1">CaterEase Administration</p>
          </div>

          {error && (
            <p className="text-red-400 text-sm mb-4 text-center bg-red-900/30 py-2 rounded-lg">{error}</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1.5">Admin Email</label>
              <input
                type="email"
                placeholder="admin@caterease.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="new-email"
                className="w-full bg-gray-700 border border-gray-600 text-white placeholder-gray-500 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1.5">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
                className="w-full bg-gray-700 border border-gray-600 text-white placeholder-gray-500 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold text-sm transition mt-2 disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign In as Admin"}
            </button>
          </form>

          <p className="text-center text-gray-500 text-xs mt-6">
            Not an admin?{" "}
            <a href="/login" className="text-orange-400 hover:underline">Go to user login</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
