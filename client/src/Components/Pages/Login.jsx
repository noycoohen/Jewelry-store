import React, { useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const nav = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(inputs);

    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    const passwordErrorMessage =
      "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character (@$!%*?&).";

    if (!passwordPattern.test(inputs.password)) {
      toast.error(passwordErrorMessage);
      return;
    }

    const endpoint = isSignup
      ? "http://localhost:8080/api/v1/users"
      : "http://localhost:8080/api/v1/users/login";
    const data = isSignup
      ? inputs
      : { email: inputs.email, password: inputs.password };

    try {
      const response = await axios.post(endpoint, data, {
        headers: { "Content-Type": "application/json" },
      });

      if (isSignup) {
        toast.success(`Welcome ${inputs.name}! Please login.`);
      } else {
        toast.success(`Login successful! Welcome back ${inputs.email}.`);
        localStorage.setItem("token", response.data.token);
        setInputs({ name: "", email: "", password: "" });

        setTimeout(() => {
          nav("/", { replace: true });
          window.location.reload();
        }, 800);
      }
    } catch (error) {
      toast.error(
        `Failed to ${isSignup ? "sign up" : "login"}: ${
          error.response ? error.response.data.message : error.message
        }`
      );
    }
  };

  const resetState = () => {
    setIsSignup(!isSignup);
    setInputs({ name: "", email: "", password: "" });
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ textAlign: "center", mt: "3rem", minHeight: "700px" }}
    >
      <div>
        <form onSubmit={handleSubmit}>
          <Box
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
              ":hover": {
                boxShadow: "10px 10px 20px #ccc",
              },
            }}
          >
            <Typography variant="h2" padding={3} textAlign="center">
              {isSignup ? "Signup" : "Login"}
            </Typography>
            {isSignup && (
              <TextField
                onChange={handleChange}
                name="name"
                value={inputs.name}
                margin="normal"
                type="text"
                variant="outlined"
                placeholder="Name"
              />
            )}
            <TextField
              onChange={handleChange}
              name="email"
              value={inputs.email}
              margin="normal"
              type="email"
              variant="outlined"
              placeholder="Email"
            />
            <TextField
              onChange={handleChange}
              name="password"
              value={inputs.password}
              margin="normal"
              type="password"
              variant="outlined"
              placeholder="Password"
            />
            <Button
              endIcon={
                isSignup ? <HowToRegOutlinedIcon /> : <LoginOutlinedIcon />
              }
              type="submit"
              sx={{ marginTop: 3, borderRadius: 3 }}
              variant="contained"
              color="warning"
            >
              {isSignup ? "Signup" : "Login"}
            </Button>
            <Button
              endIcon={
                isSignup ? <LoginOutlinedIcon /> : <HowToRegOutlinedIcon />
              }
              onClick={resetState}
              sx={{ marginTop: 3, borderRadius: 3 }}
            >
              change to {isSignup ? "Login" : "signup"}
            </Button>
          </Box>
        </form>
      </div>
    </Container>
  );
};

export default Login;
