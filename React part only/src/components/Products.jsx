import React from "react";
// import util from "../util";

function Products(props) {
  const { products, handleAddToCart } = props;
  return (
    <div className='row'>
      {products.map((product) => {
        return (
          <div className='col-md-4 col-12' key={product.id}>
            <div className='item bg-light text-center p-3 m-2 rounded shadow-sm'>
              <a
                href={`#${product.id}`}
                className='text-decoration-none'
                onClick={() => handleAddToCart(product)}
              >
                <img
                  src={`/products/${product.sku}_2.jpg`}
                  alt={`${product.title} img`}
                  className='img-fluid'
                />
                <p className='my-2 text-dark font-weight-bold'>
                  {product.title}
                </p>
              </a>
              <div className='d-flex justify-content-around align-items-center'>
                {/* <h5>{util.formatCurrency(product.price)}</h5> */}
                <h5 className='m-0'>${product.price}</h5>
                <button
                  className='btn btn-info'
                  onClick={(e) => handleAddToCart(e, product)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
