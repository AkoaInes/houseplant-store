import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/actions.js";

function PlantCard({ plant }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const isInCart = cartItems.some((item) => item.id === plant.id);

  const handleAddToCart = () => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="plant-card">
      <div className="plant-img">{plant.emoji}</div>
      <div className="plant-info">
        <div className="plant-name">{plant.name}</div>
        <div className="plant-price">${plant.price.toFixed(2)}</div>
        <button
          className="add-to-cart-btn"
          onClick={handleAddToCart}
          disabled={isInCart}
        >
          {isInCart ? "✓ Added to Cart" : "+ Add to Cart"}
        </button>
      </div>
    </div>
  );
}

export default PlantCard;
