import { ADD_TO_CART, INCREASE_QTY, DECREASE_QTY, DELETE_ITEM } from "./actionTypes.js";

const initialState = {
  cart: [],
};

function cartReducer(state = initialState, action) {
  switch (action.type) {

    case ADD_TO_CART: {
      // Don't add if already in cart
      const alreadyInCart = state.cart.find((item) => item.id === action.plant.id);
      if (alreadyInCart) return state;
      return {
        ...state,
        cart: [...state.cart, { ...action.plant, quantity: 1 }],
      };
    }

    case INCREASE_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };

    case DECREASE_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.id
            ? { ...item, quantity: Math.max(1, item.quantity - 1) }
            : item
        ),
      };

    case DELETE_ITEM:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.id),
      };

    default:
      return state;
  }
}

export default cartReducer;
