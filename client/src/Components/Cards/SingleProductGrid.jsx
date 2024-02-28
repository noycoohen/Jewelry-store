import React, { useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { CartContext } from "../../Contexts/CartProvider";
import { Container } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";

export function SingleProductGrid({ product }) {
  const { addToCart } = useContext(CartContext);
  const token = localStorage.getItem("token");

  const [isFavorited, setIsFavorited] = useState(product.like);

  useEffect(() => {
    setIsFavorited(product.like);
  }, [product.like]);

  const toggleFavorite = () => {
    axios
      .patch(
        `http://localhost:8080/api/v1/products/${product._id}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setIsFavorited(!isFavorited);
        toast.success(
          isFavorited
            ? "Removed from your favorites"
            : "Added to your favorites"
        );
      })
      .catch((error) => {
        console.error("Failed to update favorite status", error);
      });
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
          {isFavorited ? (
            <IoIosHeart
              onClick={toggleFavorite}
              style={{ color: "red", cursor: "pointer" }}
            />
          ) : (
            <IoIosHeartEmpty
              onClick={toggleFavorite}
              style={{ cursor: "pointer" }}
            />
          )}

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
