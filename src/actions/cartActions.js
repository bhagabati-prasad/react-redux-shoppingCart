import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

export const addToCart = (items, product) => (dispatch) => {
  const cartItems = items.slice();
  let productAlreadyInCart = false;
  cartItems.forEach((item) => {
    if (item.id === product.id) {
      productAlreadyInCart = true;
      item.count++;
    }
  });
  if (!productAlreadyInCart) {
    cartItems.push({ ...product, count: 1 });
  }
  return dispatch({
    type: ADD_TO_CART,
    payload: {
      cartItems: cartItems,
    },
  });
};

export const removeFromCart = (items, product) => (dispatch) => {
  const cartItems = items.slice().filter((elem) => elem.id !== product.id);
  return dispatch({
    type: REMOVE_FROM_CART,
    payload: {
      cartItems,
    },
  });
};
