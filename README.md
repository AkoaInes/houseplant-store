# 🌿 Leafy — Premium Houseplant Store

A React + Redux e-commerce app for buying houseplants.

## Features

- **Landing Page** — Background image, company name, description, and Get Started button
- **Product Listing Page** — 6 houseplants grouped into 3 categories with Add to Cart functionality
- **Shopping Cart Page** — Increase/decrease quantities, delete items, total count & cost, checkout
- **Header** — Shared across all pages with live cart count and navigation

## Tech Stack

- React 18
- Redux + React-Redux
- Vite

## Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
leafy-plant-store/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── index.jsx          # App entry point (Redux Provider)
    ├── index.css          # Global styles
    ├── App.jsx            # Root component + page routing
    ├── data/
    │   └── plants.js      # Plant data array
    ├── store/
    │   ├── actionTypes.js # Redux action type constants
    │   ├── actions.js     # Redux action creators
    │   ├── reducer.js     # Cart reducer
    │   └── store.js       # Redux store creation
    ├── components/
    │   ├── Header.jsx     # Shared header with cart count
    │   ├── PlantCard.jsx  # Individual plant card
    │   └── CartItem.jsx   # Cart item row with controls
    └── pages/
        ├── LandingPage.jsx
        ├── ShopPage.jsx
        └── CartPage.jsx
```
