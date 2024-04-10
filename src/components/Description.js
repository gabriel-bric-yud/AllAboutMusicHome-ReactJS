import React from 'react'

function Description(props) {
  return (
    <p className= "bannerTxt" style = {{fontSize: [props.txtSize],  fontWeight: [props.txtWeight], backgroundImage: [props.bgImage]}}>
      {props.txtPre} <span style = {{color: [props.highlightColor]}}>{props.highlightTxt}</span>{props.txtPost}
    </p>
  )
}

export default Description