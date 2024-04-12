import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Dropdown() {
  useEffect(() => {
    let open = false;
    const dropDownDiv = document.getElementById("myDropdown");
    const dropDownButton = document.getElementById("dropdownBtn");

    window.addEventListener("click", (e) => {
      e.preventDefault();
      if (!e.target.matches("#dropdownBtn")) {
        dropDownDiv.classList.remove("show");
        open = false;
      }
    });

    dropDownButton.addEventListener("click", (e) => {
      e.preventDefault();
      dropDownDiv.classList.toggle("show");
      open = !open;
    });
  }, []);

  return (
    <div className="headerNav dropdown one">
      <button id="dropdownBtn"></button>
      <div id="myDropdown">
        <Link className="dropLink" to="/lessons">Lessons</Link>
        <Link className="dropLink" to="/instruments">Instruments</Link>
        <Link className="dropLink" to="/accessories">Accessories</Link>
        <Link className="dropLink" to="/repair">Repair</Link>
        <Link className="dropLink" to="/rentals">Rentals</Link>
        <Link className="dropLink" to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Dropdown;
