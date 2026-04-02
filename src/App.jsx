import React, { useState } from "react";
import Header from "./components/Header.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import ShopPage from "./pages/ShopPage.jsx";
import CartPage from "./pages/CartPage.jsx";

function App() {
  const [currentPage, setCurrentPage] = useState("landing");

  const navigate = (page) => setCurrentPage(page);

  return (
    <div className="app">
      <Header currentPage={currentPage} onNavigate={navigate} />

      {currentPage === "landing" && <LandingPage onNavigate={navigate} />}
      {currentPage === "shop"    && <ShopPage />}
      {currentPage === "cart"    && <CartPage onNavigate={navigate} />}
    </div>
  );
}

export default App;
