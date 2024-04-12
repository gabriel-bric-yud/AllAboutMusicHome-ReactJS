import React, { useEffect }  from "react";
import {Link} from 'react-router-dom';

function Dropdown() {
  useEffect(() => {
    return () => {
      let clicked = false
      const dropDownDiv = document.querySelector('.myDropdown')
      const dropDownButton = document.querySelector('.dropdownBtn')
      
      window.addEventListener('click', (e) => {
        if (!e.target.matches('.dropdownBtn')) {
          console.log('hello')
          dropDownDiv.classList.remove('show')
          clicked = false
        }
      })

      dropDownButton.addEventListener('click', (e) => {
        if (clicked === false) {
          e.preventDefault()
          dropDownDiv.classList.add('show')
          clicked = true 
        }
        else {
          dropDownDiv.classList.remove('show')
          clicked = false
        }
        
      })
    }})
  return (
    <div className= "headerNav dropdown one">
      <button className = 'dropdownBtn'></button>
      <div className = "myDropdown">
        <Link className = "dropLink" to="/lessons">Lessons</Link>
        <Link className = "dropLink" to="/instruments">Instruments</Link>
        <Link className = "dropLink" to="/accessories">Accessories</Link>
        <Link className = "dropLink" to="/repair">Repair</Link>
        <Link className = "dropLink" to="/rentals">Rentals</Link>
        <Link className = "dropLink" to="/contact">Contact</Link>              
      </div>
    </div>
  )
}

export default Dropdown;