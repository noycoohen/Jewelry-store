import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

export function AddProducts() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //console.log(errors);
  const onSubmit = async (data) => {
    const token = localStorage.getItem("token");
    // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkFkbWluQGV4YW1wbGUuY29tIiwiaWQiOiI2NWQ3ODU4MWIzZmMxZTc5MjNhMTcxOTkiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MDg2MjM0MTl9.O778M7s0DMqU8RGiB8Q7LyV9SkiIjUy5jFuiqv_Emrw";

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/products",
        {
          title: data.title,
          description: data.description,
          image: {
            url: data.image,
            alt: data.alt,
          },
          price: data.price,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!token) {
        toast.error("You are not authorized");
      }
      const addedProduct = await response.data;
      toast.success(`Product "${addedProduct.title}" added successfully!`);
      reset();
    } catch (error) {
      toast.error(
        `Failed to add product: ${
          error.response ? error.response.data.message : error.message
        }`
      );
    }
  };
  return (
    <Container
      maxWidth="lg"
      sx={{ textAlign: "center", mt: "3rem", minHeight: "700px" }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
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
            maxLength: {
              value: 50,
              message: "Max length is 50",
            },
          })}
          label="Title"
          type="text"
          variant="standard"
        />
        {errors.title?.message}

        <TextField
          {...register("price", {
            required: "This is required",
            minLength: {
              value: 2,
              message: "Min length is 2",
            },
          })}
          label="Price"
          type="number"
          variant="standard"
        />
        {errors.price?.message}
        <TextField
          {...register("description", {
            required: "This is required",
            minLength: {
              value: 2,
              message: "Min length is 2",
            },
            maxLength: {
              value: 1024,
              message: "Max length is 1024",
            },
          })}
          label="Description"
          type="text"
          variant="standard"
        />
        {errors.description?.message}
        <TextField
          {...register("image", {
            required: "This is required",
            minLength: {
              value: 14,
              message: "Min length is 14",
            },
            maxLength: {
              value: 256,
              message: "Max length is 256",
            },
          })}
          label="Image"
          type="text"
          variant="standard"
        />
        {errors.image?.message}

        <TextField
          {...register("alt", {
            required: "This is required",
            minLength: {
              value: 2,
              message: "Min length is 2",
            },
            maxLength: {
              value: 256,
              message: "Max length is 256",
            },
          })}
          label="Alt"
          type="text"
          variant="standard"
        />
        {errors.title?.message}

        <button type="submit">Add product</button>
      </Box>
    </Container>
  );
}
