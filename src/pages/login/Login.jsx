import React, { useState } from "react";
import "./login.scss";
import { login } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import clemnLogo from "../../components/images/logoTransparent.png";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import { Link } from "react-router-dom";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <Link to={`/`}>
            <Tippy content="Home">
              <img className="logo" src={clemnLogo} alt="" />
            </Tippy>
          </Link>
        </div>
      </div>
      <div className="box">
        <form action="">
          <div className="title">
            <h1>SING IN</h1>
          </div>
          <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
          <input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleClick} disabled={isFetching}>
            LOGIN
          </button>
          {error && <span>Something went wrong...</span>}
          <a href="">FORGOT PASSWORD</a>
          <a href="">CREATE A NEW ACCOUNT</a>
        </form>
      </div>
    </div>
  );
};
