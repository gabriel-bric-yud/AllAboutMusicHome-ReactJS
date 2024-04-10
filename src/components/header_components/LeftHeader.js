import React from 'react';
import {Link} from 'react-router-dom';

function LeftHeader() {
  return(
    <div className = "leftHead">
      <Link to="/">
        <div className = "logo"></div>
      </Link>
      <div className = "headerTag">Great Music Begins Here!</div>
    </div>
  )
}

export default LeftHeader;