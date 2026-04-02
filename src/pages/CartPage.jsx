import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem.jsx";

function CartPage({ onNavigate }) {
  const cartItems = useSelector((state) => state.cart);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost  = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    alert("Coming Soon! Checkout will be available shortly. 🌿");
  };

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>Your Cart</h1>
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <div className="icon">🌱</div>
          <h3>Your cart is empty</h3>
          <p>Start adding some beautiful plants!</p>
          <button className="btn-secondary" onClick={() => onNavigate("shop")}>
            ← Browse Plants
          </button>
        </div>
      ) : (
        <>
          {/* Summary */}
          <div className="cart-summary">
            <div className="summary-stat">
              <div className="label">Total Plants</div>
              <div className="value">{totalItems}</div>
            </div>
            <div className="summary-stat">
              <div className="label">Total Cost</div>
              <div className="value">${totalCost.toFixed(2)}</div>
            </div>
          </div>

          {/* Cart Items */}
          <div className="cart-items">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          {/* Actions */}
          <div className="cart-actions">
            <button className="btn-secondary" onClick={() => onNavigate("shop")}>
              ← Continue Shopping
            </button>
            <button className="btn-checkout" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
