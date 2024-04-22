import { addToCart } from "./actions";
import { removeToCart } from "./actions";
import { v4 as uuid } from "uuid";

export const addToCartThunk = (product) => (dispatch) => {
  const list = JSON.parse(localStorage.getItem("cart")) || [];

  const newList = [...list, { ...product, id: uuid() }];
  localStorage.setItem("cart", JSON.stringify(newList));

  dispatch(addToCart(product));
};

export const removeToCartThunk = (product) => (dispatch) => {
  const list = JSON.parse(localStorage.getItem("cart")) || [];
  localStorage.removeItem("cart")

  const removeItem = list.filter((item) => item.id !== product.id);
  console.log("removeItem ", removeItem);

  localStorage.setItem("cart", JSON.stringify(removeItem));

  dispatch(removeToCart(removeItem));
};
