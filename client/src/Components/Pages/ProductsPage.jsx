import React, { useEffect, useState } from "react";
import { ProductsGrid } from "../Cards/ProductsGrid";
import axios from "axios";

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

        filteredProducts(searchTerm, newProducts);
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
    <>
      <h1>JEWERLY</h1>
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
    </>
  );
};

export default ProductsPage;
