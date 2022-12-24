import React from "react";
import "./product.scss";
import { Link } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export const Product = ({ item }) => {
  return (
    <div className="product">
      <img src={item.img} alt="" />

      <div className="infoContainer">
        <div className="icon">
          <ShoppingCartOutlinedIcon />
        </div>
        <div className="icon">
          <Link to={`/product/${item._id}`} className="link">
            <SearchOutlinedIcon />
          </Link>
        </div>
        <div className="icon">
          <FavoriteBorderOutlinedIcon />
        </div>
        <div className="price">
          <p>${item.price}</p>
        </div>
      </div>
    </div>
  );
};
