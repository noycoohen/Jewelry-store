import React, { useContext, useEffect, useState } from "react";
import { CartProductsContext } from "../../App";
import "../../Services/style.css";

export const CartPage = () => {
  const productData = useContext(CartProductsContext);
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("Cart");
    return savedProducts ? JSON.parse(savedProducts) : productData;
  });

  useEffect(() => {
    localStorage.setItem("Cart", JSON.stringify(products));
  }, [products]);

  const removeProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };
  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className="cart-container">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-item">
              <img
                src={product.imageId}
                alt={product.name}
                className="product-image"
              />
              <div className="product-info">
                <div className="product-name">{product.name}</div>
                <div className="product-description">{product.description}</div>
                <p>{product.price}</p>
              </div>
              <button
                onClick={() => removeProduct(product.id)}
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
