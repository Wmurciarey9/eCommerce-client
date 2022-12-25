import "./navbar.scss";
import React, { useContext, useState } from "react";
import clemnLogo from "../images/clemn-logo.png";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useSelector } from "react-redux";

import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <Link to={`/`}>
            <Tippy content="Home">
              <img src={clemnLogo} alt="" />
            </Tippy>
          </Link>
          <div className="searchContainer">
            <input type="text" placeholder="Search" />
            <Search className="searchIcon" />
          </div>
          <div className="language">
            <Tippy content="Language">
              <span>EN</span>
            </Tippy>
          </div>
        </div>
        <div className="right">
          <div className="userControl">
            <Link to={`/register`}>
              <a>REGISTER</a>
            </Link>
            <Link to={`/login`}>
              <a>SIGN IN</a>
            </Link>
          </div>
          <div className="cart">
            <div className="cartIconContainer">
              <Tippy content="Cart">
                <ShoppingCartOutlined />
              </Tippy>
              <span className="topIconBadge">{quantity}</span>
            </div>
          </div>
          <div className="profile navMain">
            <div className="settings">
              <img
                className="navMain"
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt=""
              />
              <button>
                <ArrowDropDownIcon className="icon navMain" />
              </button>
            </div>
            <div className="options navMain">
              <span>
                <LocalOfferOutlinedIcon className="iconSpan" />
                Recent Purchases
              </span>
              <span>
                <HistoryOutlinedIcon className="iconSpan" />
                History
              </span>
              <span>
                <FavoriteBorderOutlinedIcon className="iconSpan" />
                Favorite
              </span>
              <span>
                <Person2OutlinedIcon className="iconSpan" />
                Account
              </span>
              <span>
                <HelpOutlineOutlinedIcon className="iconSpan" />
                Help Center
              </span>
              <span>
                <ExitToAppOutlinedIcon className="iconSpan" />
                Log Out
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
