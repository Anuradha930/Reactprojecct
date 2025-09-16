import React from "react";
import { Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { ToastContainer } from "react-toastify";

// Pages
import Home from "./Home";
import Veg from "./Veg";
import NonVeg from "./NonVeg";
import Drinks from "./Drinks";
import Milk from "./Milk";
import Chocolate from "./Chocolate";
import Cart from "./Cart";
import Orders from "./Orders";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Login from "./Login";
import Signup from "./Signup";
import NotFound from "./NotFound";

// Redux actions
import { logout } from "./Store";

import "./App.css";

function App() {
  const auth = useSelector((state) => state.auth);
  const cartItems = useSelector((state) => state.cart || []);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Search handler
  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.search.value.toLowerCase();
    if (!query) return;

    if (query.includes("veg")) navigate("/veg", { state: { search: query } });
    else if (query.includes("nonveg")) navigate("/nonveg", { state: { search: query } });
    else if (query.includes("drinks")) navigate("/drinks", { state: { search: query } });
    else if (query.includes("milk")) navigate("/milk", { state: { search: query } });
    else if (query.includes("chocolate")) navigate("/chocolate", { state: { search: query } });
    else navigate("/home", { state: { search: query } });
  };

  // Logout with SweetAlert
  const handleLogout = () => {
    Swal.fire({
      icon: "info",
      title: "Logged Out 👋",
      text: "You have been logged out successfully.",
      confirmButtonColor: "#3085d6",
    }).then(() => {
      dispatch(logout());
      navigate("/login");
    });
  };

  return (
    <>
      {/* Navbar */}
      <div className="navbar-container">
        <div className="navbar-row1">
          <div className="logo-section">
            <img src="public/Images.jsx/queen.jpg" alt="Logo" className="logo" />
            <span className="brand">
              <span className="brand-royal">ROYAL</span>
              <span className="brand-food">FOOD</span>
            </span>
          </div>

          <form className="search-bar" onSubmit={handleSearch}>
            <input type="text" name="search" placeholder="🔍 Search..." />
            <button type="submit">Search</button>
          </form>

          <div className="cart-section">
            <Link to="/cart" className="nav-btn">🛒 Cart {cartCount}</Link>
          </div>
        </div>

        <div className="navbar-row2">
          <Link to="/home" className="nav-btn">🏠 Home</Link>
          <Link to="/veg" className="nav-btn">🥗 Veg</Link>
          <Link to="/nonveg" className="nav-btn">🍗 Non-Veg</Link>
          <Link to="/drinks" className="nav-btn">🥤 Drinks</Link>
          <Link to="/milk" className="nav-btn">🥛 Milk</Link>
          <Link to="/chocolate" className="nav-btn">🍫 Chocolate</Link>
          <Link to="/aboutus" className="nav-btn">ℹ️ About Us</Link>
          <Link to="/contactus" className="nav-btn">📞 Contact Us</Link>

          {!auth.isAuthenticated ? (
            <>
              <Link to="/login" className="nav-btn">🔑 Login</Link>
              <Link to="/signup" className="nav-btn">👤➕ Signup</Link>
            </>
          ) : (
            <>
              <Link to="/orders" className="nav-btn">📦 Orders</Link>
              <span className="welcome-msg">Welcome, {auth.currentUser.username}</span>
              <button className="nav-btn logout-btn" onClick={handleLogout}>🚪 Logout</button>
            </>
          )}
        </div>
      </div>

      {/* Page Content */}
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/veg" element={<Veg />} />
          <Route path="/nonveg" element={<NonVeg />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/milk" element={<Milk />} />
          <Route path="/chocolate" element={<Chocolate />} />
          <Route path="/cart" element={<Cart />} />

          {/* Orders route without PrivateRoute wrapper */}
          <Route
            path="/orders"
            element={
              auth.isAuthenticated ? <Orders /> : <Navigate to="/login" />
            }
          />

          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      {/* Footer */}
      <footer className="footer">
        <h1 className="footer-text">© 2025 RoyalFood. All rights reserved.</h1>
        <div className="social-icons">
          <a href="https://www.facebook.com/" className="social-link"><i className="bi bi-facebook"></i></a>
          <a href="https://web.whatsapp.com/" className="social-link"><i className="bi bi-whatsapp"></i></a>
          <a href="https://www.instagram.com/" className="social-link"><i className="bi bi-instagram"></i></a>
          <a href="https://x.com/login" className="social-link"><i className="bi bi-twitter"></i></a>
          <a href="https://in.linkedin.com/" className="social-link"><i className="bi bi-linkedin"></i></a>
          <a href="https://www.youtube.com/" className="social-link"><i className="bi bi-youtube"></i></a>
        </div>
      </footer>

      <ToastContainer />
    </>
  );
}

export default App;
