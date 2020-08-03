import {
  FETCH_PRODUCT,
  FILTER_PRODUCTS_BY_SIZE,
  ORDER_BY_PRICE,
} from "../actions/actionTypes";

const initialState = { items: [], filteredItems: [], size: "", sort: "" };

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCT:
      return { ...state, items: action.payload, filteredItems: action.payload };
    // console.log("productReducer", state);

    case FILTER_PRODUCTS_BY_SIZE:
      return {
        ...state,
        filteredItems: action.payload.items,
        size: action.payload.size,
      };
    // console.log("productReducer", state);

    case ORDER_BY_PRICE:
      return {
        ...state,
        filteredItems: action.payload.items,
        sort: action.payload.sort,
      };
    // console.log("productReducer", action.payload.sort);

    default:
      return state;
  }
}
