// src/Cart.jsx
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
  addOrder,
} from "./Store";
import { useNavigate } from "react-router-dom";
import {
  calculateButtonDiscount,
  calculateTotal,
  getCouponDiscount,
} from "./discountUtils";
import emailjs from "@emailjs/browser";
import QRCode from "react-qr-code";
import Swal from "sweetalert2";
import { balloonsUp } from "./animation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Cart.css";


// ✅ Safe Toast (no duplicates)
const safeToast = (id, type, message, options = {}) => {
  if (!toast.isActive(id)) {
    switch (type) {
      case "success":
        toast.success(message, { toastId: id, ...options });
        break;
      case "error":
        toast.error(message, { toastId: id, ...options });
        break;
      case "warn":
        toast.warn(message, { toastId: id, ...options });
        break;
      default:
        toast.info(message, { toastId: id, ...options });
        break;
    }
  }
};

function Cart() {
  const cartItems = useSelector((state) => state.cart || []);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [buttonDiscount, setButtonDiscount] = useState(0);
  const [couponCode, setCouponCode] = useState("");
  const [couponResult, setCouponResult] = useState({
    isValid: false,
    discountPercent: 0,
    discountAmount: 0,
  });
  const [customerEmail, setCustomerEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const totalPrice = calculateTotal(cartItems);
  const buttonDiscountAmount = calculateButtonDiscount(totalPrice, buttonDiscount);
  const couponDiscountAmount = couponResult.discountAmount || 0;
  const finalPrice = totalPrice - buttonDiscountAmount - couponDiscountAmount;
  const taxRate = 0.1;
  const taxAmount = totalPrice * taxRate;
  const shippingFee = 50;
  const orderId = "ORD" + Math.floor(1000 + Math.random() * 9000);

  // ✅ Toasts for cart actions
  const handleRemove = (id, name) => {
    dispatch(removeFromCart(id));
    safeToast(`remove-${id}`, "error", `❌ ${name} removed from cart`, {
      position: "top-center",
    });
  };

  const handleIncrement = (id, name) => {
    dispatch(incrementQuantity(id));
    safeToast(`inc-${id}`, "info", `➕ Increased ${name}`, {
      position: "top-center",
    });
  };

  const handleDecrement = (id, name) => {
    dispatch(decrementQuantity(id));
    safeToast(`dec-${id}`, "info", `➖ Decreased ${name}`, {
      position: "top-center",
    });
  };

  // ✅ Checkout + Email
  const handleCheckout = () => {
    if (!customerEmail) {
      safeToast("no-email", "warn", "⚠ Please enter your email address!", {
        autoClose: 2000,
        position: "top-center",
      });
      return;
    }

    const templateParams = {
      order_id: orderId,
      orders: cartItems.map((item) => ({
        name: item.name,
        price: (item.price * item.quantity).toFixed(2),
        units: item.quantity,
      })),
      cost: {
        shipping: shippingFee,
        tax: taxAmount.toFixed(2),
        discount: buttonDiscountAmount.toFixed(2),
        total: finalPrice.toFixed(2),
      },
      email: customerEmail,
    };

    Swal.fire({
      icon: "success",
      title: "🎉 Order Placed!",
      html: `
        <p><b>Order ID:</b> ${orderId}</p>
        <p><b>Final Price:</b> ₹${finalPrice.toFixed(2)}</p>
        <p><b>Payment:</b> ${paymentMethod.toUpperCase()}</p>
      `,
      confirmButtonText: "OK",
    }).then(() => {
      balloonsUp(5000);
      safeToast("sending-email", "info", "⏳ Sending order confirmation...", {
        autoClose: 1500,
      });

      emailjs
        .send("service_kkwnu1u", "template_0touf5g", templateParams, "rlheg74-1S8If7mi1")
        .then(() => {
          safeToast("email-sent", "success", "📧 Order details sent!", {
            autoClose: 2000,
          });
          handleCompletePurchase();
          navigate("/signup");
        })
        .catch((error) => {
          safeToast("email-failed", "error", "❌ Email failed!", {
            autoClose: 2500,
          });
          console.error("Email error:", error);
        });
    });
  };

  const handleCompletePurchase = () => {
    const purchaseDetails = {
      date: new Date().toLocaleString(),
      items: [...cartItems],
      totalPrice: totalPrice,
    };
    dispatch(clearCart());
    dispatch(addOrder(purchaseDetails));
  };

  // ✅ Discount toasts
  const applyDiscount = (percent) => {
    setButtonDiscount(percent);
    safeToast(
      `discount-${percent}`,
      "success",
      `🎉 ${percent}% discount applied! You saved ₹${(
        (totalPrice * percent) /
        100
      ).toFixed(2)}`,
      { autoClose: 1200 }
    );
  };

  const applyCoupon = () => {
    const result = getCouponDiscount(couponCode.trim(), totalPrice);
    setCouponResult(result);
    if (result.isValid) {
      safeToast(
        "coupon-valid",
        "success",
        `🎉 Coupon applied! You saved ₹${result.discountAmount.toFixed(2)}`,
        { autoClose: 1200 }
      );
    } else {
      safeToast("coupon-invalid", "error", "❌ Invalid coupon code", {
        autoClose: 2000,
      });
    }
  };

  const resetDiscounts = () => {
    setButtonDiscount(0);
    setCouponResult({ isValid: false, discountPercent: 0, discountAmount: 0 });
    safeToast("reset", "warn", "⚠ All discounts reset", { autoClose: 2000 });
  };

  return (
    <>
      <h1 className="cart-title text-center">🛒 CART ITEMS</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <img src="public/Images/emptyCard.avif" alt="Empty Cart" />
          <h4>Your cart is empty. Start adding some items! 🍔🍕🥤</h4>
        </div>
      ) : (
        <div className="cart-container">
          {/* Cart items list */}
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-info">
                  <strong>{item.name}</strong>
                  <div className="text-muted">₹{item.price} each</div>
                </div>
                <div className="cart-item-actions">
                  <button
                    className="btn-dec"
                    onClick={() => handleDecrement(item.id, item.name)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="btn-inc"
                    onClick={() => handleIncrement(item.id, item.name)}
                  >
                    +
                  </button>
                  <button
                    className="btn-remove"
                    onClick={() => handleRemove(item.id, item.name)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="cart-sidebar">
            <div className="price-details">
              <h4>💰 Price Details</h4>
              <p>Total: ₹{totalPrice.toFixed(2)}</p>
              {buttonDiscount > 0 && (
                <p className="text-success">
                  Button Discount: {buttonDiscount}% (-₹
                  {buttonDiscountAmount.toFixed(2)})
                </p>
              )}
              {couponResult.isValid && (
                <p className="text-success">
                  Coupon Discount: {couponResult.discountPercent}% (-₹
                  {couponDiscountAmount.toFixed(2)})
                </p>
              )}
              <p className="final-price">Final: ₹{finalPrice.toFixed(2)}</p>
            </div>

            {/* Coupon */}
            <div className="coupon-section">
              <input
                type="text"
                placeholder="Enter coupon code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <button className="btn-coupon" onClick={applyCoupon}>
                Apply Coupon
              </button>
            </div>

            {/* Discount buttons */}
            <div className="discount-buttons">
              <button className="btn-discount" onClick={() => applyDiscount(10)}>
                10% Discount
              </button>
              <button className="btn-discount" onClick={() => applyDiscount(20)}>
                20% Discount
              </button>
              <button className="btn-discount" onClick={() => applyDiscount(30)}>
                30% Discount
              </button>
              <button className="btn-reset" onClick={resetDiscounts}>
                Reset
              </button>
            </div>

            {/* Payment */}
            <div className="payment-method">
              <h5>Select Payment Method</h5>
              <button className="btn-payment" onClick={() => setPaymentMethod("qr")}>
                QR Code
              </button>
              <button className="btn-payment" onClick={() => setPaymentMethod("card")}>
                Card
              </button>
            </div>

            {/* Email */}
            <div className="email-section">
              <label>📧 Enter your Email</label>
              <input
                type="email"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
              />
            </div>

            <button className="checkout-btn" onClick={handleCheckout}>
              Purchase & Checkout
            </button>

            {/* QR */}
            {paymentMethod === "qr" && (
              <div className="qr-section">
                <h4>Scan QR to pay ₹{finalPrice.toFixed(2)}</h4>
                <QRCode
                  value={`upi://pay?pa=9391271915-3@ybl&pn=RoyalFood&am=${finalPrice.toFixed(
                    2
                  )}&cu=INR`}
                  size={150}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
