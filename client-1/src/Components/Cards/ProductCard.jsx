import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
import ROUTES from "../Router/RouterModel";

export default function ProductCard(props) {
  return (
    <Link href={`/product${ROUTES.PRODUCT_ID}`} underline="none">
      <Card
        sx={{
          maxWidth: 345,
        }}
        key={props.id}
      >
        <CardMedia
          component="img"
          alt="jewelry"
          height="300"
          image={props.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="warning">
            SHOP NOW
          </Button>
        </CardActions>
      </Card>
    </Link>
  );
}
