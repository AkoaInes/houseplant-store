import React from "react";
import { useDispatch } from "react-redux";
import { increaseQty, decreaseQty, deleteItem } from "../store/actions.js";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <div className="cart-item-img">{item.emoji}</div>

      <div className="cart-item-info">
        <div className="cart-item-name">{item.name}</div>
        <div className="cart-item-price">${item.price.toFixed(2)} each</div>
      </div>

      <div className="cart-item-controls">
        <button className="qty-btn" onClick={() => dispatch(decreaseQty(item.id))}>
          −
        </button>
        <span className="qty-display">{item.quantity}</span>
        <button className="qty-btn" onClick={() => dispatch(increaseQty(item.id))}>
          +
        </button>
        <button className="delete-btn" onClick={() => dispatch(deleteItem(item.id))}>
          🗑 Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
