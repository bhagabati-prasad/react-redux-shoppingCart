import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

export default createStore(
  rootReducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
