import React from 'react';
import {Link} from 'react-router-dom';
import Description from './Description';
import './Card.css'

function Card(props) {
   return (
    <Link className = "wrapper" to={props.redirect}>
      <div className= "imageContainer" >
        <div className = "cardImage" to={props.redirect} style = {{backgroundImage: `url(${props.bgImage})`,  backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundColor: "white", backgroundPosition: "bottom" }}>
          <div className= "imageTitle">{props.cardTitle}</div>
        </div>
      </div>

      <div  className= "sideContainer">
        <div className = "sideButton" to={props.redirect} >
          {props.cardTitle}
        </div>
        <Description highlightTxt = {props.highlightTxt} txtPost = {props.txtPost} />
      </div>
    </Link>
  )
}


export default Card;
