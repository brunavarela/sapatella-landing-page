import { ADD_CART, REMOVE_CART } from "./actionTypes";

const defaultState = JSON.parse(localStorage.getItem("cart")) || [];

const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CART:
      const { product } = action;
      return [...state, product];

   case REMOVE_CART:
      const { newCart } = action;
      return newCart

    default:
      return state;
  }
};

export default cartReducer;
