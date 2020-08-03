import React from "react";

function Cart(props) {
  const { cartItems, handleRemoveFromCart } = props;
  return (
    <>
      <div className='alert alert-info'>
        {cartItems.length === 0 ? (
          "Cart is empty!"
        ) : (
          <div>You have {cartItems.length} items in cart</div>
        )}
      </div>
      {cartItems.length > 0 ? (
        <div>
          <ul>
            {cartItems.map((item, indx) => (
              <li key={indx}>
                <b>{item.title}</b>
                <div className='d-flex justify-content-between align-items-center'>
                  <p>
                    ${item.price} x {item.count} = ${item.price * item.count}
                  </p>
                  <button
                    className='btn-sm btn-warning'
                    onClick={() => handleRemoveFromCart(item)}
                  >
                    &times;
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <hr />
          <p>
            <b>Total Price: </b>$
            {cartItems.reduce((a, c) => a + c.price * c.count, 0)}
          </p>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Cart;
