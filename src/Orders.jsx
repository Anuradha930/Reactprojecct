import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { deleteOrder } from "./Store"; // Import delete action from your store
import "./Orders.css";

function Orders() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders);
  const auth = useSelector((state) => state.auth);

  // Redirect if not logged in
  useEffect(() => {
    if (!auth.isAuthenticated) {
      navigate("/login"); // Redirect to login if user is not authenticated
    }
  }, [auth.isAuthenticated, navigate]);

  // Local state for ratings
  const [ratings, setRatings] = useState(
    () => orders.map((order) => order.items.map((item) => item.rating || 0))
  );

  const handleRatingClick = (orderIndex, itemIndex, starValue, itemName) => {
    const newRatings = ratings.map((orderRatings, oIdx) =>
      orderRatings.map((r, iIdx) =>
        oIdx === orderIndex && iIdx === itemIndex ? starValue : r
      )
    );
    setRatings(newRatings);

    toast.success(`⭐ You rated ${itemName} ${starValue} star(s)!`, {
      position: "top-center",
      autoClose: 1200,
      hideProgressBar: true,
      pauseOnHover: false,
      draggable: false,
      closeOnClick: true,
      limit: 1,
      theme: "colored",
    });
  };

  const renderStars = (orderIndex, itemIndex, rating, itemName) => {
    return Array.from({ length: 5 }, (_, i) => {
      const starValue = i + 1;
      return (
        <span
          key={i}
          className={`star ${starValue <= rating ? "filled" : ""}`}
          onClick={() =>
            handleRatingClick(orderIndex, itemIndex, starValue, itemName)
          }
        >
          ★
        </span>
      );
    });
  };

  const handleDeleteOrder = (orderId) => {
    dispatch(deleteOrder(orderId));
    toast.success("🗑️ Order deleted successfully!", {
      position: "top-center",
      autoClose: 1200,
      hideProgressBar: true,
      pauseOnHover: false,
      draggable: false,
      closeOnClick: true,
      theme: "colored",
    });
  };

  return (
    <div className="orders-page">
      <div className="orders-header">
        <h1 className="orders-title">📦 My Orders</h1>
        {auth.currentUser && (
          <p className="welcome-msg">
            Welcome, <strong>{auth.currentUser.username}</strong>!
          </p>
        )}
      </div>

      {orders.length === 0 ? (
        <p className="no-orders">No orders placed yet 🚫</p>
      ) : (
        <div className="orders-list">
          {orders.map((purchase, orderIdx) => (
            <div key={purchase.id || orderIdx} className="order-card">
              <div className="order-header">
                <h3>🧾 Order #{orderIdx + 1}</h3>
                <span className="order-status delivered">Delivered</span>
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteOrder(purchase.id)}
                >
                  Delete
                </button>
              </div>
              <p className="order-date">
                <strong>Date:</strong> {purchase.date}
              </p>
              <p className="order-total">
                <strong>Total Amount:</strong> ₹
                {purchase.totalPrice?.toFixed(2) || "0.00"}
              </p>

              <div className="order-items">
                {purchase.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="order-item">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="order-item-img"
                    />
                    <div className="order-item-info">
                      <p className="item-name">{item.name}</p>
                      <p className="item-qty">
                        ₹{item.price} × {item.quantity} = ₹
                        {(item.price * item.quantity).toFixed(2)}
                      </p>
                      <p className="item-rating">
                        {renderStars(
                          orderIdx,
                          itemIdx,
                          ratings[orderIdx][itemIdx],
                          item.name
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      <ToastContainer />
    </div>
  );
}

export default Orders;
