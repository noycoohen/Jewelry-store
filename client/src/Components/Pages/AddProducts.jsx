import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export function AddProducts() {
  return (
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
      <h1>Add New Item</h1>
      <div>
        <TextField id="title" label="Title" variant="standard" />

        <TextField
          id="standard-search"
          label="Price"
          type="number"
          variant="standard"
        />
        <TextField
          id="standard-search"
          label="Description"
          type="text"
          variant="standard"
        />
        <TextField
          id="standard-search"
          label="Image"
          type="file"
          variant="standard"
        />
      </div>
    </Box>
  );
}
