import React, { useEffect, useState } from "react";
import { ProductsGrid } from "../Cards/ProductsGrid";
import axios from "axios";
import "../../Services/style/productPage.css";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const token = localStorage.getItem("token");
  const handleDelete = (productId) => {
    axios
      .delete(`http://localhost:8080/api/v1/products/${productId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const newProducts = products.filter(
          (product) => product._id !== productId
        );

        setProducts(newProducts);

        filterProducts(searchTerm, newProducts);
      });
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    filterProducts(value);
  };

  const filterProducts = (searchTerm, productsToFilter = products) => {
    const filtered = productsToFilter.filter(
      (product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/products").then((response) => {
      setProducts(response.data);
      setFilteredProducts(response.data);
    });
  }, []);
  return (
    <div className="container-product">
      <h1>Shop Fashion Diamond Jewelry Styles</h1>
      <h3>
        From diamond rings to diamond necklaces, diamond bracelets, diamond
        earrings, and more, diamond gemstones are a classic way to make a style
        impact.
      </h3>
      <div>
        <input
          type="text"
          placeholder="Search by title ot desc.."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        {filteredProducts.length === 0 && searchTerm !== "" && (
          <div>No such product found</div>
        )}
      </div>
      <ProductsGrid products={filteredProducts} onDelete={handleDelete} />
    </div>
  );
};

export default ProductsPage;
