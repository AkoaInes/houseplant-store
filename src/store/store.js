import { createStore } from "redux";
import cartReducer from "./reducer.js";

const store = createStore(
  cartReducer,
  // Enable Redux DevTools Extension if available
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

export default store;
