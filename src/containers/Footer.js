import React from "react";
import "./Footer.css"

function Footer() {
  return(
    <div className="fixedFooter">
      <div className="maxFooter">
        <div className="address">
          <a href="https://maps.app.goo.gl/iRYiVKHdG7XyHLDV6" >8928 Waltham Woods Road, Baltimore, Maryland 21234</a>
        </div>
        <a id="phoneNumber" href="tel:410-665-6600">
          410-665-6600
        </a>
      </div>
    </div>
  )
}

export default Footer;
