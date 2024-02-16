import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { MdOutlineFavorite } from "react-icons/md";

export function SingleProductGrid({ product }) {
  return (
    <>
      <Card
        sx={{
          maxWidth: 345,
        }}
        key={product.id}
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
            {product.price}
          </Typography>
        </CardContent>
        <CardActions>
          <MdOutlineFavorite />
          <Button size="small" color="warning">
            ADD TO CART
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
