import homeImg from "../../Services/Images/home1.jpg";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { ProductsGrid } from "../Cards/ProductsGrid";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ROUTES from "../Router/RouterModel";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/products").then((response) => {
      setProducts(response.data);
    });
  }, []);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(ROUTES.PRODUCTS);
  };

  return (
    <div style={{ position: "relative" }}>
      <img
        style={{ width: "100%", height: "auto" }}
        src={homeImg}
        alt="homepage"
      />
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "4vw",
            margin: 0,
            "@media (max-width: 600px)": {
              fontSize: "6vw",
            },
          }}
        >
          JEWERLY SHOP
        </h1>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            marginTop: "20px",
            "@media (max-width: 600px)": {
              marginTop: "10px",
            },
          }}
        >
          <Button
            variant="outlined"
            endIcon={<SendIcon />}
            onClick={handleClick}
          >
            SHOP NOW
          </Button>
        </Stack>
      </div>
      <ProductsGrid products={products.slice(0, 4)} />
    </div>
  );
};

export default HomePage;
