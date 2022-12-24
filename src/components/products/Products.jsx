import React, { useEffect, useState } from "react";
import { Product } from "../product/Product";
import axios from "axios";
import "./products.scss";

export const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );

        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) => item[key].includes(value))
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "Newest") {
      setFilteredProducts((prev) => [...prev].sort((a, b) => a.createdAt - b.createdAt));
    } else if (sort === "Price (asc)") {
      setFilteredProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilteredProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  return (
    <div className="products">
      {cat
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products.slice(0, 8).map((item) => <Product item={item} key={item.id} />)}
    </div>
  );
};
