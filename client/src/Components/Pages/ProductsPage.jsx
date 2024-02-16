import React, { useEffect, useState } from "react";
import { ProductsGrid } from "../Cards/ProductsGrid";
import axios from "axios";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/products").then((response) => {
      setProducts(response.data);
    });
  }, []);
  return (
    <>
      <h1>JEWERLY</h1>
      <ProductsGrid products={products} />
    </>
  );
};

export default ProductsPage;
