import React from "react";  
import {Link} from "react-router-dom";
import Dropdown from "./Dropdown";

function RightHeader() {
  return (
    <div className = "rightHead">
      <Dropdown />
    </div>
  )
}

export default RightHeader;