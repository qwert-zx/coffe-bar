import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {

    function ScrollToTop() {

      }
    

	return (
      <nav className="nav">
          <ul>
              <li><NavLink exact to="/" end onClick={ScrollToTop}>Home</NavLink></li>
              <li><NavLink to="/menu/" onClick={ScrollToTop}>Menu</NavLink></li>
              <li><NavLink to="/about/" onClick={ScrollToTop}>About Us</NavLink></li>
              <li><NavLink to="/story/" onClick={ScrollToTop}>Our Story</NavLink></li>
              <li><NavLink to="/blog/" onClick={ScrollToTop}>Blog</NavLink></li>
              <li><NavLink to="/contacts/" onClick={ScrollToTop}>Contacts</NavLink></li>
          </ul>
      </nav>
	);
}

export default Nav;
