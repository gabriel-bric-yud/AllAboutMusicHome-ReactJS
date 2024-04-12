import React from 'react';
import LeftHeader from '../components/header_components/LeftHeader';
import CenterHeader from '../components/header_components/CenterHeader'
import RightHeader from '../components/header_components/RightHeader';
import './Header.css'



function Header(props) {
  return (
    <div className = "fixedHeader"> 
      <div className = "maxHeader">
        <LeftHeader />
        <CenterHeader />
        <RightHeader />
      </div>
  </div>
  )
}

export default Header;