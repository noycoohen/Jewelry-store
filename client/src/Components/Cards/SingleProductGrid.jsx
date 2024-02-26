import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IoIosHeartEmpty } from "react-icons/io";
import { CartContext } from "../../Contexts/CartProvider";
import { Container } from "@mui/material";
import axios from "axios";

export function SingleProductGrid({ product }) {
  const { addToCart } = useContext(CartContext);
  const token = localStorage.getItem("token");

  const doLike = () => {
    axios.patch(
      `http://localhost:8080/api/v1/products/${product._id}`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };
  return (
    <Container
      maxWidth="lg"
      sx={{ textAlign: "center", mt: "3rem", minHeight: "700px" }}
    >
      <Card
        sx={{
          maxWidth: 345,
        }}
        key={product._id}
      >
        {
          <CardMedia
            component="img"
            alt="jewelry"
            height="300"
            image={product.image?.url}
          />
        }
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.price + "$"}
          </Typography>
        </CardContent>
        <CardActions>
          <IoIosHeartEmpty onClick={doLike} />

          <Button
            onClick={() => addToCart(product)}
            size="small"
            color="warning"
          >
            ADD TO CART
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
