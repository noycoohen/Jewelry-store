import React, { useContext } from "react";
import "../../Services/style.css";
import { CartContext } from "../../Contexts/CartProvider";

export const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className="cart-container">
        {cart.length > 0 ? (
          cart.map((product) => (
            <div key={product.id} className="product-item">
              <img
                src={product.image?.url}
                alt={product.name}
                className="product-image"
              />
              <div className="product-info">
                <div className="product-name">{product.title}</div>
                <div className="product-description">{product.description}</div>
                <p>{product.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(product._id)}
                style={{ marginTop: "10px" }}
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <div className="emptyCart-message">Cart is empty</div>
        )}
      </div>
      <p>Total Price:</p>
    </div>
  );
};
