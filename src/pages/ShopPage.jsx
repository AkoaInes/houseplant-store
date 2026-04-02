import React from "react";
import PlantCard from "../components/PlantCard.jsx";
import plants from "../data/plants.js";

function ShopPage() {
  // Get unique categories from plants data
  const categories = [...new Set(plants.map((p) => p.category))];

  return (
    <div className="shop-page">
      <div className="shop-header">
        <h1>Our Collection</h1>
        <p>Handpicked houseplants for every space and skill level</p>
      </div>

      {categories.map((category) => (
        <div className="category-section" key={category}>
          <h2 className="category-title">{category}</h2>
          <div className="plants-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShopPage;
