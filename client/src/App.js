import { useEffect } from "react";
import React from "react";
import "./App.css";
import Navbar from "./Components/Menu/Navbar";
import Footer from "./Components/Pages/Footer";
import RouterH from "./Components/Router/Router";
import { products } from "./Services/Context/productsDats";

export const CartProductsContext = React.createContext(products);

function App() {
  useEffect(() => {
    document.title = "Jewerly Store";
  }, []);
  const userType = "admin";
  return (
    <>
      <CartProductsContext.Provider value={products}>
        <Navbar userType={userType} />
        <RouterH />
        <Footer />
      </CartProductsContext.Provider>
    </>
  );
}

export default App;
