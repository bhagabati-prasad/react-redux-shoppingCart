import React, { useState } from "react";
import "./App.css";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className='container'>
        <header className='bg-info text-white p-2'>
          <h4>React + Redux Shopping Cart</h4>
        </header>
        <div className='row'>
          <div className='col-md-9 col-12'>
            {/* <h3>Product list</h3> */}
            {/* <hr /> */}
            <Filter />
            <hr />
            <Products />
          </div>
          <div className='col-md-3 col-12'>
            <h3>Cart</h3>
            <hr />
            <Cart />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
