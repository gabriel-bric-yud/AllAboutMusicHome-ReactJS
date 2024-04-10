import React from 'react';
import {Link} from 'react-router-dom';

function CenterHeader() {
  return (
    <div className = "centerHead">
      <div className = "headerNav">
        <Link className = "navLink" to="/lessons">Lessons</Link>
        <Link className = "navLink" to="/instruments">Instruments</Link>
        <Link className = "navLink" to="/accessories">Accessories</Link>
        <Link className = "navLink" to="/repair">Repair</Link>
        <Link className = "navLink" to="/rentals">Rentals</Link>
        <Link className = "navLink" to="/contact">Contact</Link>
      </div>
    </div>
  )
}

export default CenterHeader;