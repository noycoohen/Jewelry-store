import { useEffect } from "react";
import React from "react";
import "./App.css";
import Navbar from "./Components/Menu/Navbar";
import Footer from "./Components/Pages/Footer";
import RouterH from "./Components/Router/Router";
import { CartProvider } from "./Contexts/CartProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useEffect(() => {
    document.title = "Jewerly Store";
  }, []);
  const userType = "guest";
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
