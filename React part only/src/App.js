import React, { useState, useEffect } from "react";
import "./App.css";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Cart from "./components/Cart";

function App() {
  const [state, setstate] = useState({
    products: [],
    filteredProducts: [],
    cartItems: [],
  });

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) =>
        setstate({
          products: data,
          filteredProducts: data,
          cartItems: [],
        })
      );
    console.log("Products fetched");
  }, []);

  const handleChangeSort = (e) => {
    setstate({ ...state, sort: e.target.value });
    listProducts();
  };

  const handleChangeSize = (e) => {
    console.log("handleChangeSize");
    setstate({ ...state, size: e.target.value });
    listProducts();
  };

  const listProducts = () => {
    setstate((state) => {
      if (state.sort !== "") {
        state.filteredProducts.sort((a, b) =>
          state.sort === "lowest"
            ? a.price < b.price
              ? 1
              : -1
            : a.price > b.price
            ? 1
            : -1
        );
      } else {
        state.filteredProducts.sort((a, b) => (a.id > b.id ? 1 : -1));
      }
      if (state.size !== "") {
        return {
          products: state.products.filter(
            (a) => a.availableSizes.indexOf(state.size) >= 0
          ),
          ...state,
        };
      }
      return { products: state.filteredProducts, ...state };
    });
  };

  const addToCart = (e, product) => {
    setstate((state) => {
      const cartItems = state.cartItems;
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
      return { ...state, cartItems };
    });
  };

  const handleRemoveCart = (item) => {
    console.log("handleRemoveCart");
    console.log(item);
    setstate((state) => {
      const cartItems = state.cartItems.filter((elem) => elem.id != item.id);
      return { ...state, cartItems };
    });
  };

  return (
    <div className='container'>
      <header className='bg-info text-white p-2'>
        <h4>React + Redux Shopping Cart</h4>
      </header>
      <div className='row'>
        <div className='col-md-9 col-12'>
          {/* <h3>Product list</h3> */}
          {/* <hr /> */}
          <Filter
            size={state.size}
            sort={state.sort}
            handleChangeSize={handleChangeSize}
            handleChangeSort={handleChangeSort}
            count={state.products.length}
          />
          <hr />
          <Products products={state.products} handleAddToCart={addToCart} />
        </div>
        <div className='col-md-3 col-12'>
          <h3>Cart</h3>
          <hr />
          <Cart
            cartItems={state.cartItems}
            handleRemoveFromCart={handleRemoveCart}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
