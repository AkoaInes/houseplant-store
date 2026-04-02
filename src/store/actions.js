import { ADD_TO_CART, INCREASE_QTY, DECREASE_QTY, DELETE_ITEM } from "./actionTypes.js";

export const addToCart  = (plant) => ({ type: ADD_TO_CART,  plant });
export const increaseQty = (id)   => ({ type: INCREASE_QTY, id });
export const decreaseQty = (id)   => ({ type: DECREASE_QTY, id });
export const deleteItem  = (id)   => ({ type: DELETE_ITEM,  id });
