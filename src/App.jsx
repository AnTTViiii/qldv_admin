import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Booking from "./pages/Booking";
import Tickets from "./pages/Tickets";
import AddTicket from "./pages/AddTicket";
import EditTicket from "./pages/EditTicket";
import Admin from "./pages/Admin";
import { useSelector } from "react-redux";

function App() {
  const { isAuthed } = useSelector((state) => state.auth);
  const admin = isAuthed ? JSON.parse(localStorage.getItem('admin')) : [];

  return (
    <BrowserRouter>
      <Routes>
        {isAuthed && admin != null ? (
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="booking" element={<Booking />} />
            <Route path="tickets" element={<Tickets />} />
            <Route path="new-ticket" element={<AddTicket />} />
            <Route path="edit-ticket/*" element={<EditTicket />} />
            <Route path="admin" element={<Admin />} />
            <Route path="*" element={<Dashboard />} />
          </Route>
        ) : (
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="*" element={<Login />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
