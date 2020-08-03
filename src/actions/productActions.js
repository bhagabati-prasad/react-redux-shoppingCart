import {
  FETCH_PRODUCT,
  FILTER_PRODUCTS_BY_SIZE,
  ORDER_BY_PRICE,
} from "./actionTypes";

export const fetchProduct = () => (dispatch) => {
  fetch("http://localhost:5000/products")
    .then((res) => res.json())
    .then((data) => {
      return dispatch({ type: FETCH_PRODUCT, payload: data });
      //   console.log("data", data);
    });
};

export const filterProducts = (products, size) => (dispatch) => {
  return dispatch({
    type: FILTER_PRODUCTS_BY_SIZE,
    payload: {
      size: size,
      items:
        size === ""
          ? products
          : products.filter(
              (a) => a.availableSizes.indexOf(size.toUpperCase()) >= 0
            ),
    },
  });
};

export const sortProducts = (items, sort) => (dispatch) => {
  const products = items.slice();
  if (sort !== "") {
    products.sort((a, b) =>
      sort === "lowest"
        ? a.price > b.price
          ? 1
          : -1
        : a.price < b.price
        ? 1
        : -1
    );
    // console.log("products", products);
  } else {
    products.sort((a, b) => (a.id > b.id ? 1 : -1));
  }

  return dispatch({
    type: ORDER_BY_PRICE,
    payload: {
      sort: sort,
      items: products,
    },
  });
  // console.log("sort by price", products);
};
