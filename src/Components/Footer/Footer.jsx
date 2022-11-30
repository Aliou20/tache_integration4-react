import "./Footer.css";
import React from "react";
import { FaFacebookSquare,FaInstagram,FaTwitter,FaPinterest } from "react-icons/fa";
import NavLink from "../NavLink/NavLink";

function Footer() {
  return (
    <div className="footer d-flex justify-content-center align-items-center flex-column">
      <div className="footer_logo ">sunnyside</div>
      <div className="footer_link">
        <NavLink  color="#2C7363" />
        {/* <a href="#about" className="link">About</a>
        <a href="#service" className="link">Service</a>
        <a href="#project" className="link">Projects</a> */}
      </div>
      <div className="footer_media_sociaux">
    
          <FaFacebookSquare className="media_sociaux"/>
          <FaInstagram className="media_sociaux" />
          <FaTwitter className="media_sociaux" />
          <FaPinterest className="media_sociaux" />
        
      </div>
    </div>
  );
};

export default Footer;
