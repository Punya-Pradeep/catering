import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function AdminRoute() {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  if (user.role !== "admin") return <Navigate to="/dashboard" />;
  return <Outlet />;
}

export default AdminRoute;
