import React, { useState } from "react";
import "./Home.css";

function Home() {
  const foods = [
    { name: "Biryani", image: "/Images/chicken dhumbiryani.jpg", price: 250, description: "Delicious spicy biryani with tender meat." },
    { name: "Sweets", image: "/Images/sweets.jpg", price: 150, description: "Assorted Indian sweets, perfect for desserts." },
    { name: "Dosa", image: "/Images/tiffin.jpeg", price: 120, description: "Crispy and soft dosa served with chutney." },
    { name: "Dinner Platter", image: "/Images/dinner.jpg", price: 350, description: "Complete meal with rice, curry, and sides." },
    { name: "Strawberry Milkshake", image: "/Images/strawberrymilkshake.jpg", price: 100, description: "Refreshing strawberry milkshake." },
    { name: "Pizza", image: "/Images/pizza.jpeg", price: 300, description: "Cheesy pizza loaded with toppings." },
    { name: "Chapathi", image: "/Images/chapathi.jpeg", price: 80, description: "Soft and fresh chapathi." },
    { name: "Noodles", image: "/Images/noodles.jpg", price: 180, description: "Stir-fried noodles with vegetables." },
    { name: "Bake Cake", image: "/Images/bake cake.jpg", price: 200, description: "Moist and delicious baked cake." }
  ];

  const reviews = [
    { name: "Anu Radha", review: "Amazing food and excellent service! Highly recommend." },
    { name: "Rahul Sharma", review: "The taste is just incredible. Will order again!" },
    { name: "Priya Singh", review: "Fresh, hygienic, and absolutely delicious meals." },
    { name: "Karan Mehta", review: "Quick delivery and fantastic packaging. Loved it!" },
    { name: "Sneha Gupta", review: "Perfect blend of traditional and modern flavors. Yum!" }
  ];

  // State for like/dislike counters
  const [reviewStates, setReviewStates] = useState(
    reviews.map(() => ({ likes: 0, dislikes: 0 }))
  );

  const handleLike = (idx) => {
    const newStates = [...reviewStates];
    newStates[idx].likes += 1;
    setReviewStates(newStates);
  };

  const handleDislike = (idx) => {
    const newStates = [...reviewStates];
    newStates[idx].dislikes += 1;
    setReviewStates(newStates);
  };

  return (
    <div className="home-page">
      <div className="container">
        <div className="row align-items-center">
          {/* Left column: About Us */}
          <div className="col-lg-6 mt-4">
            <div className="left-content">
              <h3 className="main-heading text-primary fade-in">
                Royal Food..! <span className="logo-icon">🍴</span>
              </h3>
              <h2 className="fade-in delay-1">The Great Food, Delicious, Tasty...</h2>
              <h2 className="fade-in delay-2">For Some Joy..</h2>
              <p className="content-desc text-capitalize fst-italic text-dark fade-in delay-3">
                <strong>
                  The restaurant offers a delightful journey of flavors, with authentic recipes crafted
                  from the finest ingredients. Our friendly team serves each dish with warmth and charm,
                  making every visit a celebration of taste and hospitality.
                </strong>
              </p>
              <h4 className="text-info text-center mt-4">🍽️ Royal Food – About Us</h4>
              <p>
                At <strong>Royal Food</strong>, we believe that food is not just about taste, it’s about <em>experience, culture, and togetherness</em>.
                Founded with a passion for serving <strong>delicious, hygienic, and authentic meals</strong>, Royal Food brings you a wide variety of dishes prepared with love and care.
              </p>
              <p>
                <strong>Our journey started with a simple idea:</strong><br />
                ✨ “Good food should be accessible to everyone, anytime, anywhere.”
              </p>
              <ul>
                <li>✅ Freshly cooked with high-quality ingredients</li>
                <li>✅ Inspired by traditional recipes and modern flavors</li>
                <li>✅ Affordable without compromising on taste</li>
                <li>✅ Packed with care for your safety and convenience</li>
              </ul>
              <p>
                Whether it’s a family dinner, a quick lunch, or a celebration with friends, <strong>Royal Food</strong> is here to make your moments special.
              </p>
            </div>
          </div>

          {/* Right column carousel */}
          <div className="col-lg-6 mt-4">
            <div id="foodCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {foods.slice(0, 4).map((food, idx) => (
                  <div key={idx} className={`carousel-item ${idx === 0 ? "active" : ""}`}>
                    <img src={food.image} className="d-block w-100 rounded" alt={food.name} />
                    <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
                      <h5>{food.name}</h5>
                      <p>{food.description}</p>
                      <p>Price: ₹{food.price}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#foodCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#foodCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <h2 className="section-title mt-5">Customer Reviews</h2>
        <div className="reviews-section">
          {reviews.map((rev, idx) => (
            <div key={idx} className="review-card glass-card">
              <p>"{rev.review}"</p>
              <h5>- {rev.name}</h5>
              <div className="review-buttons">
                <button className={`like-btn ${reviewStates[idx].likes > 0 ? "active" : ""}`} onClick={() => handleLike(idx)}>👍 {reviewStates[idx].likes}</button>
                <button className={`dislike-btn ${reviewStates[idx].dislikes > 0 ? "active" : ""}`} onClick={() => handleDislike(idx)}>👎 {reviewStates[idx].dislikes}</button>
              </div>
            </div>
          ))}
        </div>

        {/* Continuous Marquee */}
        <div className="marquee-section">
          <div className="marquee-content">
            {[...foods, ...foods].map((food, i) => (
              <div key={i} className="marquee-item">
                <img src={food.image} alt={food.name} />
                <p>{food.name}</p>
                <p>₹{food.price}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
