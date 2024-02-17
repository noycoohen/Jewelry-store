import React, { useContext, useState } from "react";
import { CartProductsContext } from "../../App";
import "../../Services/style.css";

export const CartPage = () => {
  const productData = useContext(CartProductsContext);
  const [products, setProducts] = useState(productData);
  const removeProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };
  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className="cart-container">
        {products.map((product) => (
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
        ))}
      </div>
    </div>
  );
};
