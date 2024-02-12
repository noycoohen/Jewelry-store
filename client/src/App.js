import { useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Menu/Navbar";
import Footer from "./Components/Pages/Footer";
import RouterH from "./Components/Router/Router";

function App() {
  useEffect(() => {
    document.title = "Jewerly Store";
  }, []);
  const userType = "guest";
  return (
    <>
      <Navbar userType={userType} />
      <RouterH />
      <Footer />
    </>
  );
}

export default App;
