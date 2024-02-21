import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";

export function AddProducts() {
  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <Container
      maxWidth="lg"
      sx={{ textAlign: "center", mt: "3rem", minHeight: "700px" }}
    >
      <Box
        component="form"
        display="flex"
        flexDirection={"column"}
        maxWidth={400}
        alignItems={"center"}
        justifyContent={"center"}
        margin={"auto"}
        marginTop={20}
        padding={3}
        borderRadius={5}
        boxShadow={"5px 5px 10px #ccc"}
        sx={{
          "& .MuiTextField-root": { m: 3, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <h1>Add New Product</h1>
        <form onSubmit={onSubmit}>
          <TextField name="title" label="Title" variant="standard" />

          <TextField
            name="price"
            label="Price"
            type="number"
            variant="standard"
          />
          <TextField
            name="description"
            label="Description"
            type="text"
            variant="standard"
          />
          <TextField
            name="image"
            label="Image"
            type="text"
            variant="standard"
          />

          <button type="submit">Add product</button>
        </form>
      </Box>
    </Container>
  );
}
