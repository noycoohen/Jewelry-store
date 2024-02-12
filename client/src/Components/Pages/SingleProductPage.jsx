import React, { useEffect, useState } from "react";
import axios from "axios";
import ROUTES from "../Router/RouterModel";
import { SingleProductGrid } from "../Cards/SingleProductGrid";
//import ProductCard from "../Cards/ProductCard";

export const SingleProductPage = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get(`/api/product${ROUTES.PRODUCT_ID}.json`).then((response) => {
      setProduct(response.data);
    });
  }, []);
  return (
    <>
      <h1>JEWERLY</h1>
      <SingleProductGrid singleProduct={product} />
    </>
  );
};
