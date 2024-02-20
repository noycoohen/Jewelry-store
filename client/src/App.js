import { useEffect } from "react";
import React from "react";
import "./App.css";
import Navbar from "./Components/Menu/Navbar";
import Footer from "./Components/Pages/Footer";
import RouterH from "./Components/Router/Router";
import {CartProvider} from "./Contexts/CartProvider";

function App() {
  useEffect(() => {
    document.title = "Jewerly Store";
  }, []);
  const userType = "admin";
  return (
    <>
      <CartProvider>
        <Navbar userType={userType} />
        <RouterH />
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
