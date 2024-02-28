import homeImg from "../../Services/Images/home1.jpg";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import ROUTES from "../Router/RouterModel";
import "../../Services/style/homePage.css";
import showcaseImage from "../../Services/Images/jewelry-store-showcase-2023-11-27-05-18-34-utc.jpg";

const HomePage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(ROUTES.PRODUCTS);
  };

  const handleClicktoAbout = () => {
    navigate(ROUTES.ABOUT);
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
            "@media (maxWidth: 600px)": {
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
            "@media (maxWidth: 600px)": {
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

      <div className="container-about">
        <div className="text-section">
          <h2>About Us</h2>
          <p>
            We founded Goldie in 2008 out of a shared love for fashion and
            jewelry. The idea behind the store is a carefully selected
            collection of Israeli designers with the selection of jewelry that
            we like the most. The variety is wide and hits every taste and style
            of every age. The shopping experience is personal and suitable for
            each and every one with a mix of different jewelry. Goldie is
            finding a place to pamper yourself and rejuvenate, a gift for
            grandmother and mother, wife and daughter of any other person you
            love! We will be happy to see you in our store
          </p>
          <button className="button" onClick={handleClicktoAbout}>
            Read More
          </button>
        </div>
        <div className="image-section">
          <img src={showcaseImage} alt="about" className="responsive-image" />
        </div>
      </div>
      <div className="container">
        <div className="item">
          <img
            src="https://tzufa.co.il/cdn/shop/collections/7712cb4420724c4e14a597a670a89eac.jpg?v=1623277748&width=2048"
            alt="Necklaces"
          />
          <div className="overlay">
            <div className="text">NECKLACES</div>
            <button className="shop-button" onClick={handleClick}>
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="item">
          <img
            src="https://tzufa.co.il/cdn/shop/files/2f367d6cb88e447cc3900cddd5b3d9bb.jpg?v=1693866621&width=946"
            alt="Rings"
          />
          <div className="overlay">
            <div className="text">RINGS</div>
            <button className="shop-button" onClick={handleClick}>
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="item">
          <img
            src="https://cdn.istores.co.il/image/upload/if_ar_gt_2:1/c_mpad,h_662,w_555/c_fill,h_662,w_555/if_else/c_fill,q_100,w_555/if_end/dpr_2/v1694011466/clients/13987/accf4e50f1777810639bd132089b358bbefd1177.jpg"
            alt="Rings"
          />
          <div className="overlay">
            <div className="text">EARRINGS</div>
            <button className="shop-button" onClick={handleClick}>
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="item">
          <img
            src="https://static.wixstatic.com/media/694d73_4dbbad5729d2449db0c92b7526bf686c~mv2.jpg/v1/fill/w_480,h_651,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/694d73_4dbbad5729d2449db0c92b7526bf686c~mv2.jpg"
            alt="Rings"
          />
          <div className="overlay">
            <div className="text">BRACELETS</div>
            <button className="shop-button" onClick={handleClick}>
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
