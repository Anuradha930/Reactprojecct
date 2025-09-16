import React from "react";
import { useParams } from "react-router-dom";

const foods = [
  { name: "Biryani", image: "public/Images.jsx/chicken dhumbiryani.jpg", price: 250, description: "Delicious spicy biryani with tender meat." },
  { name: "Sweets", image: "public/Images.jsx/sweets.jpg", price: 150, description: "Assorted Indian sweets, perfect for desserts." },
  { name: "Dosa", image: "public/Images.jsx/tiffin.jpeg", price: 120, description: "Crispy and soft dosa served with chutney." },
  { name: "Dinner Platter", image: "public/Images.jsx/dinner.jpg", price: 350, description: "Complete meal with rice, curry, and sides." },
  { name: "Strawberry Milkshake", image: "public/Images.jsx/strawberrymilkshake.jpg", price: 100, description: "Refreshing strawberry milkshake." },
  { name: "Pizza", image: "public/Images.jsx/pizza.jpeg", price: 300, description: "Cheesy pizza loaded with toppings." },
  { name: "Chapathi", image: "public/Images.jsx/chapathi.jpeg", price: 80, description: "Soft and fresh chapathi." },
  { name: "Noodles", image: "public/Images.jsx/noodles.jpg", price: 180, description: "Stir-fried noodles with vegetables." },
  { name: "Bake Cake", image: "public/Images.jsx/bake cake.jpg", price: 200, description: "Moist and delicious baked cake." }
];

function ItemDetail() {
  const { itemName } = useParams();
  const item = foods.find((f) => f.name.toLowerCase() === itemName.toLowerCase());

  if (!item) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>❌ Item not found!</h2>;
  }

  return (
    <div className="item-detail" style={{ textAlign: "center", padding: "40px" }}>
      <h1>{item.name}</h1>
      <img src={item.image} alt={item.name} style={{ width: "300px", borderRadius: "12px", margin: "20px 0" }} />
      <p>{item.description}</p>
      <h3>Price: ₹{item.price}</h3>
      <button style={{ padding: "10px 20px", background: "#ff5722", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer" }}>
        🛒 Add to Cart
      </button>
    </div>
  );
}

export default ItemDetail;
