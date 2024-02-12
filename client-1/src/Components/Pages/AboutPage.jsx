import React from "react";
import Container from "@mui/material/Container";
import { Grid, Typography } from "@mui/material";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const AboutPage = () => {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{ textAlign: "center", mt: "3rem", height: "1200px" }}
      >
        <h1>ABOUT US</h1>
        <Grid>
          <Typography fontSize={"28px"}>
            She-ra jewelry is an all women, for women jewelry boutique. A home
            for dainty gold jewelry, that intertwine with each other and leave
            taste for more – designed by the designer Shira Gabay. Our style is
            a clean, simple nostalgic line with a hint of vintage. All this
            magic is crafted by hand in a workshop within Neve Tzedek, in small
            quantities, with great care for a high level of finish, and
            attention to every detail.
          </Typography>
        </Grid>
        <ImageList
          sx={{
            width: 1200,
            height: 450,
            justifyContent: "center",
          }}
          variant="quilted"
          cols={4}
          rowHeight={200}
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                {...srcset(item.img, 200, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Grid>
          <Typography fontSize={"28px"}>
            She-ra jewelry is an all women, for women jewelry boutique. A home
            for dainty gold jewelry, that intertwine with each other and leave
            taste for more – designed by the designer Shira Gabay. Our style is
            a clean, simple nostalgic line with a hint of vintage. All this
            magic is crafted by hand in a workshop within Neve Tzedek, in small
            quantities, with great care for a high level of finish, and
            attention to every detail.
          </Typography>
        </Grid>
      </Container>
    </>
  );
};
const itemData = [
  {
    img: "https://cdn.cashcow.co.il/images/f6d1a3fd-1ae0-49cf-9f5b-5ee602c6e721_500.jpg",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://cdn.cashcow.co.il/images/f6d1a3fd-1ae0-49cf-9f5b-5ee602c6e721_500.jpg",
    title: "Burger",
    rows: 2,
    cols: 2,
  },
];

export default AboutPage;
