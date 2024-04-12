import React from 'react'
import Banner from './Banner';
import NorthPlaza from '../Images/northPlaza.jpg'

function LocationBanner(props) {
  return (
    <a className = "locationBanner" href="https://maps.app.goo.gl/iRYiVKHdG7XyHLDV6" style = {{backgroundColor: [props.bgColor]}}>
      <Banner bgColor = "transparent" txtPre = {"All About Music is located in "} highlightTxt = {"North Plaza Shopping Center"} highlightColor = {"deepskyblue"} 
        txtPost = {" in Parkville, Maryland."} graphicDisplay= "none" bgImage = "none" />
      <i className ="material-icons" style={{color:"red", backgroundImage: `url(${NorthPlaza})`, width: "100px", height: "100px", backgroundSize: "cover", backgroundRepeat: "no-repeat", marginLeft: "10px"}}>&#xe55f;</i>
    </a>

  )
}

export default LocationBanner;