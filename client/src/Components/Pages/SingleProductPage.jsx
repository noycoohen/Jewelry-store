import React, { useEffect, useState } from "react";
import axios from "axios";
import { SingleProductGrid } from "../Cards/SingleProductGrid";
import { useParams } from "react-router-dom";

export const SingleProductPage = () => {
  let params = useParams();

  const [product, setProduct] = useState({});

  const token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/products/${params.productId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setProduct(response.data);
      });
  }, [params.productId, token]);

  return (
    <>
      <h1>JEWERLY</h1>
      <SingleProductGrid product={product} />
    </>
  );
};
