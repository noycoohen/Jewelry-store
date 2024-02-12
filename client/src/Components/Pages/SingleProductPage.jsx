import React, { useEffect, useState } from "react";
import axios from "axios";
import { SingleProductGrid } from "../Cards/SingleProductGrid";
import { useParams } from "react-router-dom";
//import ProductCard from "../Cards/ProductCard";

export const SingleProductPage = () => {
  let params = useParams();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get(`/api/product/${params.productId}.json`).then((response) => {
      setProduct(response.data);
    });
  }, [params.productId]);
  return (
    <>
      <h1>JEWERLY</h1>
      <SingleProductGrid product={product} />
    </>
  );
};
