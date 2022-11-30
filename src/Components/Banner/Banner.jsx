import "./Banner.css";
import React from "react";
import bannerImg from '../../Assets/header.png'

function Banner() {
  return (
    <div className="banner">
      <h1 className="title_banner">Banner</h1>
      <div className="conteneur_img_banner">
        <img src={bannerImg} alt="image banner" className="img_banner" />
      </div>
    </div>
  );
};

export default Banner;
