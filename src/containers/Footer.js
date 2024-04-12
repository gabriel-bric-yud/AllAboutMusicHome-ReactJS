import React from 'react';
import './Footer.css'

function Footer() {
  return(
    <div className = "fixedFooter">
      <div className = "maxFooter">
        <div className = 'address'>
          <a href = "https://maps.app.goo.gl/iRYiVKHdG7XyHLDV6" >8928 Waltham Woods Road, Baltimore, Maryland 21234</a>
        </div>
        <div id = "phoneNumber">
          410-665-6600
        </div>
      </div>  
    </div>
  )
}

export default Footer;