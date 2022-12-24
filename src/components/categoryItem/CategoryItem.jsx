import React from "react";
import { Link } from "react-router-dom";
import "./categoryItem.scss";

export const CategoryItem = ({ item }) => {
  return (
    <div className="catItem">
      <Link to={`/products/${item.cat}`}>
        <img src={item.img} alt="" />

        <div className="info">
          <h1 className="title">{item.title}</h1>
          <button>SHOW NOW</button>
        </div>
      </Link>
    </div>
  );
};
