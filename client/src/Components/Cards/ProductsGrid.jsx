import React from "react";
import ProductCard from "./ProductCard";
import { Grid } from "@mui/material";

export const ProductsGrid = ({ products, onDelete }) => {
  return (
    <Grid
      container
      spacing={6}
      justifyContent={"center"}
      marginTop={20}
      marginBottom={40}
    >
      {products.map((product) => (
        <Grid key={product._id} item sx={3}>
          <ProductCard
            id={product._id}
            image={product.image?.url}
            title={product.title}
            description={product.description}
            price={product.price}
            onDelete={onDelete}
          />
        </Grid>
      ))}
    </Grid>
  );
};
