import { Routes, Route } from "react-router-dom";

import MainLayout from "../components/layout/Mainlayout";
import AdminLayout from "../components/layout/AdminLayout";
import ProtectedRoute from "./ProtectedRoute";
import AdminRoute from "./AdminRoute";

import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Services from "../pages/public/Services";
import Contact from "../pages/public/Contact";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import Events from "../pages/events/Events";
import EventDetails from "../pages/events/EventDetails";

import Catering from "../pages/catering/Catering";
import MenuDetails from "../pages/catering/MenuDetails";

import BookEvent from "../pages/booking/BookEvent";
import MyBookings from "../pages/booking/MyBookings";
import BookingDetails from "../pages/booking/BookingDetails";

import CustomerDashboard from "../pages/customer/CustomerDashboard";

import AdminDashboard from "../pages/admin/AdminDashboard";
import ManageEvents from "../pages/admin/ManageEvents";
import ManageCatering from "../pages/admin/ManageCatering";
import ManageBookings from "../pages/admin/ManageBookings";
import ManageUsers from "../pages/admin/ManageUsers";
import Reports from "../pages/admin/Reports";

function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />

        <Route path="/catering" element={<Catering />} />
        <Route path="/catering/:id" element={<MenuDetails />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Customer Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/book-event/:id" element={<BookEvent />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/booking/:id" element={<BookingDetails />} />
          <Route path="/dashboard" element={<CustomerDashboard />} />
        </Route>
      </Route>

      {/* Admin Routes */}
      <Route element={<AdminRoute />}>
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/events" element={<ManageEvents />} />
          <Route path="/admin/catering" element={<ManageCatering />} />
          <Route path="/admin/bookings" element={<ManageBookings />} />
          <Route path="/admin/users" element={<ManageUsers />} />
          <Route path="/admin/reports" element={<Reports />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRoutes;
