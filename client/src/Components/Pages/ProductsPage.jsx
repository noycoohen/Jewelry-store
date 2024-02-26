import React, { useEffect, useState } from "react";
import { ProductsGrid } from "../Cards/ProductsGrid";
import axios from "axios";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const token = localStorage.getItem("token");
  const handleDelete = (productId) => {
    axios
      .delete(`http://localhost:8080/api/v1/products/${productId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const newProducts = products.filter(
          (product) => product._id !== productId
        );

        setProducts(newProducts);
      });
  };

  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/products").then((response) => {
      setProducts(response.data);
    });
  }, []);
  return (
    <>
      <h1>JEWERLY</h1>
      <ProductsGrid products={products} onDelete={handleDelete} />
    </>
  );
};

export default ProductsPage;
