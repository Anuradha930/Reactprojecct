// src/Milk.jsx
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "./Store";
import { toast } from "react-toastify";
import { lettersAnimation } from "./animation";
import "./Veg.css"; // Reuse Veg.css for consistency

function Milk() {
  const milkItems = useSelector((state) => state.products.Milk || []);
  const dispatch = useDispatch();
  const [hoveredCard, setHoveredCard] = useState(null);

  // ✅ Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // ✅ Price Filter
  const [priceFilter, setPriceFilter] = useState(null);

  // ✅ Filter logic
  const filteredItems = milkItems.filter((item) => {
    if (priceFilter === "below50") return item.price < 50;
    if (priceFilter === "above60") return item.price > 60;
    return true;
  });

  // ✅ Pagination after filtering
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  useEffect(() => {
    lettersAnimation("Welcome to Milk Page!", 5000);
  }, []);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    toast.dismiss();
    toast.success(`🥛 ${item.name} added to cart!`, {
      autoClose: 1000,
      hideProgressBar: true,
      pauseOnHover: false,
      draggable: false,
    });
  };

  // ✅ Handle checkbox toggle
  const handleCheckboxChange = (filter) => {
    if (priceFilter === filter) {
      setPriceFilter(null); // uncheck if clicked again
    } else {
      setPriceFilter(filter);
      setCurrentPage(1); // reset to page 1 when filter changes
    }
  };

  return (
    <div
      className="veg-page"
      style={{
        background: "linear-gradient(135deg,#a8e6cf,#dcedc1,#ffd3b6)",
      }}
    >
      <h1 className="veg-title">🥛 ROYALFOOD :: Milk Page</h1>

      {/* ✅ Price Filter Section */}
      <div
        className="filter-section"
        style={{ margin: "10px 0", display: "flex", gap: "20px" }}
      >
        <label>
          <input
            type="checkbox"
            checked={priceFilter === "below50"}
            onChange={() => handleCheckboxChange("below50")}
          />
          Show items below ₹50
        </label>

        <label>
          <input
            type="checkbox"
            checked={priceFilter === "above60"}
            onChange={() => handleCheckboxChange("above60")}
          />
          Show items above ₹60
        </label>
      </div>

      {/* ✅ Items Grid */}
      <div className="veg-container">
        <div
          className="veg-row"
          style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}
        >
          {currentItems.length > 0 ? (
            currentItems.map((item) => (
              <div
                className="veg-col"
                key={item.id}
                style={{ flex: "1 1 calc(25% - 20px)" }}
              >
                <div
                  className={`veg-card ${
                    hoveredCard === item.id ? "hovered" : ""
                  }`}
                  onMouseEnter={() => setHoveredCard(item.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="veg-img"
                    style={{ height: "200px", objectFit: "cover" }}
                  />

                  <div className="veg-card-body">
                    <h5 className="veg-card-title text-primary">{item.name}</h5>
                    <p className="veg-card-price">₹{item.price} /ltr</p>
                    <p className="veg-card-desc">{item.description}</p>
                    <button
                      className="veg-btn btn-primary"
                      onClick={() => handleAddToCart(item)}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p
              style={{
                textAlign: "center",
                width: "100%",
                color: "red",
              }}
            >
              ❌ No items found for this filter.
            </p>
          )}
        </div>

        {/* ✅ Pagination */}
        {totalPages > 1 && (
          <div className="veg-pagination">
            <button
              className="page-btn"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx}
                className={`page-btn ${
                  currentPage === idx + 1 ? "active" : ""
                }`}
                onClick={() => setCurrentPage(idx + 1)}
              >
                {idx + 1}
              </button>
            ))}
            <button
              className="page-btn"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Milk;
