import React from "react";
import Description from "./Description";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="topPhotoContainer">
        <img className="topPhoto" id="poster1" alt="All About Music Mobile Banner" src={ require("../images/posterMobile.jpg")} />
        <img className="topPhoto"  id="poster2" alt="All About Music Store Front" src={require("../images/Storefront2.jpg")} />
      </div>
      <div className="callContainer" >
        <Description highlightTxt="Jump-Start " txtPost="Your Music Journey" bgImage="none" txtColor="white" txtWeight="bold" />
      </div>
    </div>
  )
}

export default Hero;
