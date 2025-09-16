// src/Veg.jsx
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "./Store";
import { toast } from "react-toastify";
import { lettersAnimation } from "./animation";
import CountdownTimer from "./CountdownTimer"; // ✅ correct import
import "./Veg.css";

function Veg() {
  const vegItems = useSelector((state) => state.products.Veg || []);
  const dispatch = useDispatch();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6; // 2 rows × 3 cards
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = vegItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(vegItems.length / itemsPerPage);

  useEffect(() => {
    lettersAnimation("Welcome to Veg Page!", 4000);
  }, []);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    toast.dismiss();
    toast.success(`🥦 ${item.name} added to cart!`, {
      autoClose: 1000,
      hideProgressBar: true,
      pauseOnHover: false,
      draggable: false,
    });
  };

  return (
    <div
      className="veg-page"
      style={{ background: "linear-gradient(135deg,#a8e6cf,#dcedc1,#ffd3b6)" }}
    >
      <h1 className="veg-title">🥦 ROYALFOOD :: Veg Page</h1>

      <div className="veg-container">
        <div
          className="veg-row"
          style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}
        >
          {currentItems.map((item, index) => (
            <div
              className="veg-col"
              key={item.id || index} // fallback key
              style={{ flex: "1 1 calc(25% - 20px)" }}
            >
              <div
                className={`veg-card ${
                  hoveredCard === (item.id || index) ? "hovered" : ""
                }`}
                onMouseEnter={() => setHoveredCard(item.id || index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="veg-img"
                  style={{ height: "200px", objectFit: "cover" }}
                />

                <div className="veg-card-body">
                  <h5 className="veg-card-title text-success">{item.name}</h5>
                  <p className="veg-card-price">₹{item.price} /kg</p>
                  <p className="veg-card-desc">{item.description}</p>

                  {/* ✅ Countdown Timer */}
                  {item?.saleEnd && (
                    <div className="veg-sale-timer">
                      <CountdownTimer endTime={item.saleEnd} />
                    </div>
                  )}

                  <button
                    className="veg-btn btn-success"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
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

export default Veg;
