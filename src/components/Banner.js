import React from 'react';
import './Banner.css'
import Description from './Description';

function Banner(props) {
  return (
    <div  className= "banner" style = {{alignItems: "center", backgroundColor: [props.bgColor], backgroundImage: [props.bgImage]}}>
      <div className= "graphic graphic1" style = {{backgroundImage: `url(${props.graphic1})`, display: [props.graphicDisplay]}}></div>
      <Description textSize = {props.txtSize} txtWeight = {props.txtWeight} bgImage = {props.bgImage} txtPre = {props.txtPre} highlightColor = {props.highlightColor} highlightTxt = {props.highlightTxt} txtSize = {props.txtSize} />
      <div className= "graphic graphic2" style = {{backgroundImage: `url(${props.graphic2})`, display: [props.graphicDisplay]}}></div>
    </div>
  )
}

export default Banner;