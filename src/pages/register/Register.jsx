import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import clemnLogo from "../../components/images/clemn-logo.png";
import "./register.scss";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = async (e) => {
    e.preventDefault();

    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);
    try {
      await axios.post("auth/register", { email, username, password });
      navigate("/login");
    } catch (err) {}
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <Link to={`/`}>
            <Tippy content="Home">
              <img className="logo" src={clemnLogo} alt="" />
            </Tippy>
          </Link>

          <Link to={`/login`}>
            <button className="loginButton">Sing In</button>
          </Link>
        </div>
      </div>
      <div className="box">
        <h1>CREATE AN ACCOUNT</h1>

        <p>
          By creating an account, I consent to the processing of my personal information data in
          accordance with the <b>PRIVACY POLICY</b>
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="username" placeholder="username" ref={usernameRef} />
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Start Now
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
