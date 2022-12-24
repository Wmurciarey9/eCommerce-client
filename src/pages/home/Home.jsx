import React from "react";
import { Announcement } from "../../components/announcement/Announcement";
import { Categories } from "../../components/categories/Categories";
import { Footer } from "../../components/footer/Footer";
import { Navbar } from "../../components/navbar/Navbar";
import { Products } from "../../components/products/Products";
import { Slider } from "../../components/slider/Slider";
import "./home.scss";

export const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <h1 className="sectionTitle">FEATURED PRODUCTS</h1>
      <Products />
      <Footer />
    </div>
  );
};
