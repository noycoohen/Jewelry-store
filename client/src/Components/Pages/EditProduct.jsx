import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

export function EditProduct() {
  const params = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/products/${params.productId}`)
      .then((res) => {
        reset({
          title: res.data.title,
          price: res.data.price,
          description: res.data.description,
          image: res.data.image.url,
          alt: res.data.image.alt,
        });
      });
  }, [params.productId, reset]);

  const onSubmit = async (data) => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.put(
        `http://localhost:8080/api/v1/products/${params.productId}`,
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
      toast.success(`Product "${addedProduct.title}" Updated successfully!`);
    } catch (error) {
      toast.error(
        `Failed to update product: ${
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
        <h1>Edit Product</h1>
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
          InputLabelProps={{
            shrink: true,
          }}
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
          InputLabelProps={{
            shrink: true,
          }}
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
          InputLabelProps={{
            shrink: true,
          }}
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
          InputLabelProps={{
            shrink: true,
          }}
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
          InputLabelProps={{
            shrink: true,
          }}
        />
        {errors.title?.message}

        <button type="submit">Update product</button>
      </Box>
    </Container>
  );
}
