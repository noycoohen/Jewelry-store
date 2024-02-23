import { useEffect } from "react";
import React from "react";
import "./App.css";
import Navbar from "./Components/Menu/Navbar";
import Footer from "./Components/Pages/Footer";
import RouterH from "./Components/Router/Router";
import { CartProvider } from "./Contexts/CartProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getUserInfo, getUserType } from "./Services/users/users";

function App() {
  useEffect(() => {
    document.title = "Jewerly Store";
  }, []);
  console.log(getUserInfo());
  const userType = getUserType();
  return (
    <>
      <CartProvider>
        <ToastContainer />
        <Navbar userType={userType} />
        <RouterH />
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
