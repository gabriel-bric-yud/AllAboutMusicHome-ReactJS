import React from 'react';
import './Hero.css'

function Hero() {
  return (
    <div className = "hero">  
      <div className = "topPhotoContainer">
        <img className = "topPhoto" id = "poster1" alt = "All About Music Mobile Banner" src = { require("../Images/posterMobile.jpg")} />
        <img className = "topPhoto"  id = "poster2" alt = "All About Music Store Front" src = {require("../Images/Storefront2.jpg")} />
      </div>
      <div className = "callToAction">Jump-Start Your Music Journey!</div>
    </div>
  )
}

export default Hero;