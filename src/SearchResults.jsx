// src/SearchResults.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function SearchResults() {
  const { term } = useParams();
  const allProducts = useSelector((state) => [
    ...state.products.Veg,
    ...state.products.NonVeg,
    ...state.products.Drinks,
    ...state.products.Milk,
    ...state.products.Chocolate,
  ]);

  const filtered = allProducts.filter((item) =>
    item.name.toLowerCase().includes(term.toLowerCase())
  );

  return (
    <div className="search-results">
      <h2>Search Results for "{term}"</h2>
      {filtered.length > 0 ? (
        <div className="product-list">
          {filtered.map((item) => (
            <div key={item.id} className="product-card">
              <img src={item.image} alt={item.name} className="product-img" />
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No items found.</p>
      )}
    </div>
  );
}

export default SearchResults;
