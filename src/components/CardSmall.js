import React from 'react';
import {Link} from 'react-router-dom';
import Description from './Description';
import './CardSmall.css'

function CardSmall(props) {
   return (
    <Link className = "wrapperSmall" to={props.redirect}>
      <div className= "imageContainerSmall" >
        <div className = "cardImageSmall" to={props.redirect} style = {{backgroundImage: `url(${props.bgImage})`,  backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundColor: "white", backgroundPosition: "bottom" }}>
          <div className= "imageTitleSmall">{props.cardTitle}</div>
        </div>
      </div>

      <Description highlightTxt = {props.highlightTxt} txtPost = {props.txtPost} />
      
    </Link>
  )
}


export default CardSmall;
