import React from "react";
import "./footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <div className="logo">
          <h1>CLEMN</h1>
        </div>
        <div className="description">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="socialContainer">
          <div className="socialIcon">
            <FacebookIcon />
          </div>
          <div className="socialIcon">
            <InstagramIcon />
          </div>
        </div>
      </div>
      <div className="center">
        <div className="title">
          <h2>Important</h2>
        </div>
        <div className="list">
          <span>My Orders</span>
          <span>Frequently Asked</span>
          <span>Help Center</span>
          <span>Report a Bug</span>
          <span>Gift Cards</span>
          <span>Advertise with us</span>
        </div>
      </div>
      <div className="right">
        <div className="title">
          <h2>Contact Us</h2>
        </div>
        <div className="contactItem">
          <LocationOnIcon style={{ marginRight: "10px" }} />
          City, Country & business address
        </div>
        <div className="contactItem">
          {" "}
          <LocalPhoneIcon style={{ marginRight: "10px" }} />
          +57 123 456 7890
        </div>
        <div className="contactItem">
          <EmailIcon style={{ marginRight: "10px" }} />
          wmurciarey9@gmail.com
        </div>
      </div>
    </div>
  );
};
