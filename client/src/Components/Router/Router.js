import { Route, Routes } from "react-router-dom";
import ROUTES from "./RouterModel";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import Login from "../Pages/Login";
import ProductsPage from "../Pages/ProductsPage";
import { AddProducts } from "../Pages/AddProducts";
import { SingleProductPage } from "../Pages/SingleProductPage";
import { CartPage } from "../Pages/CartPage";
import FavoritePage from "../Pages/FavoritePage";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.SIGNIN} element={<Login />} />
      <Route path={ROUTES.PRODUCTS} element={<ProductsPage />} />
      <Route path={ROUTES.CRM} element={<AddProducts />} />
      <Route path={ROUTES.SINGLE_PRODUCT} element={<SingleProductPage />} />
      <Route path={ROUTES.CART} element={<CartPage />} />
      <Route path={ROUTES.FAVPRODUCTS} element={<FavoritePage />} />

      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

export default Router;
