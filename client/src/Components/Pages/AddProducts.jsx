import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import { useForm } from "react-hook-form";

export function AddProducts() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  return (
    <Container
      maxWidth="lg"
      sx={{ textAlign: "center", mt: "3rem", minHeight: "700px" }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
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
        <TextField
          {...register("title", {
            required: "This is required",
            minLength: {
              value: 4,
              message: "Min length is 4",
            },
          })}
          label="Title"
          variant="standard"
        />
        {errors.title?.message}

        <TextField
          {...register("price", { required: "This is required" })}
          label="Price"
          type="number"
          variant="standard"
        />
        {errors.price?.message}
        <TextField
          {...register("description", { required: "This is required" })}
          label="Description"
          type="text"
          variant="standard"
        />
        {errors.description?.message}
        <TextField
          {...register("image", { required: "This is required" })}
          label="Image"
          type="text"
          variant="standard"
        />
        {errors.image?.message}

        <button type="submit">Add product</button>
      </Box>
    </Container>
  );
}
