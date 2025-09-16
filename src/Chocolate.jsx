// src/Chocolate.jsx
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "./Store";
import { toast } from "react-toastify"; // only toast
import { lettersAnimation } from "./animation"; // keep only lettersAnimation
import "./Veg.css"; // reuse Veg.css styling

function Chocolate() {
  const chocolateItems = useSelector((state) => state.products.Chocolate || []);
  const dispatch = useDispatch();
  const [hoveredCard, setHoveredCard] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // show 6 chocolates (2 rows × 3 cards)

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = chocolateItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(chocolateItems.length / itemsPerPage);

  useEffect(() => {
    lettersAnimation("🍫 Welcome to Chocolate Page!", 4000);
  }, []);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    toast.dismiss();
    toast.success(`🍫 ${item.name} added to cart!`, {
      autoClose: 1000,
      hideProgressBar: true,
      pauseOnHover: false,
      draggable: false,
    });
  };

  return (
    <div
      className="chocolate-page"
      style={{ background: "linear-gradient(135deg,#ffdde1,#ee9ca7,#ffb6b9)" }}
    >
      <h1 className="veg-title">🍫 ROYALFOOD :: Chocolate Page</h1>

      <div className="veg-container">
        <div
          className="veg-row"
          style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}
        >
          {currentItems.map((item) => (
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
                  <h5 className="veg-card-title text-danger">{item.name}</h5>
                  <p className="veg-card-price">₹{item.price}</p>
                  <p className="veg-card-desc">{item.description}</p>
                  <button
                    className="veg-btn btn-danger"
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

export default Chocolate;
