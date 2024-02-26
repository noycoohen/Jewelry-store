import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
import { MdOutlineEdit } from "react-icons/md";
import { getUserType } from "../../Services/users/users";
import { GoTrash } from "react-icons/go";
import { useNavigate } from "react-router-dom";

export default function ProductCard(props) {
  const nav = useNavigate();
  const handleEdit = () => {
    nav(`/crm/edit/${props.id}`);
  };
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
          <div>
            <MdOutlineEdit
              style={{ cursor: "pointer", marginRight: "10px" }}
              onClick={handleEdit}
            />
            <GoTrash
              style={{ cursor: "pointer" }}
              onClick={() => {
                props.onDelete(props.id);
              }}
            />
          </div>
        ) : undefined}
      </CardActions>
    </Card>
  );
}
