import React from "react";
import { useSelector } from "react-redux";

function Header({ currentPage, onNavigate }) {
  const cartItems = useSelector((state) => state.cart);
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <div className="logo">
        🌿 <span>Leafy</span>
      </div>

      <nav className="nav">
        <a
          className={currentPage === "landing" ? "active" : ""}
          onClick={() => onNavigate("landing")}
        >
          Home
        </a>
        <a
          className={currentPage === "shop" ? "active" : ""}
          onClick={() => onNavigate("shop")}
        >
          Shop
        </a>
        <a
          className={currentPage === "cart" ? "active" : ""}
          onClick={() => onNavigate("cart")}
        >
          Cart
        </a>
      </nav>

      <button className="cart-btn" onClick={() => onNavigate("cart")}>
        🛒 Cart
        <span className="cart-count">{totalCount}</span>
      </button>
    </header>
  );
}

export default Header;
