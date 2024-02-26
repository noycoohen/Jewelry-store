import React, { useEffect, useState } from "react";
import { ProductsGrid } from "../Cards/ProductsGrid";
import axios from "axios";

const FavoritePage = () => {
  const [products, setProducts] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/products/favorites", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((response) => {
        setProducts(response.data);
      });
  }, [token]);
  return (
    <>
      <h1>JEWERLY</h1>
      <ProductsGrid products={products} />
    </>
  );
};

export default FavoritePage;
