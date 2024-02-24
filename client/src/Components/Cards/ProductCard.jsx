import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
import { MdOutlineEdit } from "react-icons/md";
import { getUserType } from "../../Services/users/users";

export default function ProductCard(props) {
  const userType = getUserType();
  return (
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
          {props.price + "$"}
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: "space-between" }}>
        <Link href={`/product/${props.id}`} underline="none">
          <Button size="small" color="warning">
            SHOP NOW
          </Button>
        </Link>
        {userType === "admin" ? (
          <MdOutlineEdit style={{ cursor: "pointer" }} />
        ) : undefined}
      </CardActions>
    </Card>
  );
}
