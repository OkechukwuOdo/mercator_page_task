import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="left-nav">
        <FontAwesomeIcon icon={faBars} />
        <h2>Pavilion</h2>
        <div className="search-nav">
          <FontAwesomeIcon icon={faSearch}/>
        <input type="text" name="search" placeholder="Search" />
        </div>
      </div>

      <div className="right-nav">
        <img src="notification.svg" alt="#" />
        <img src="nicepcs.jpeg" alt="okokjokkkk"  className="profileimg"/>
      </div>
    </nav>
  );
};
export default Navbar;
