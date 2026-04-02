import React from "react";

function LandingPage({ onNavigate }) {
  return (
    <section className="landing">
      <div className="landing-content">
        <p className="landing-tag">🌱 Premium Houseplants</p>
        <h1 className="landing-title">
          Bring <em>Nature</em>
          <br />
          Into Your Home
        </h1>
        <p className="landing-desc">
          Discover our curated collection of beautiful houseplants. Hand-selected
          for quality, delivered with care — because every home deserves a little
          green.
        </p>
        <button className="btn-primary" onClick={() => onNavigate("shop")}>
          Get Started →
        </button>
      </div>
    </section>
  );
}

export default LandingPage;
