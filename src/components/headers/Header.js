import React from "react";
import Nav from '../Nav';
import Logo from '../../images/logo.png';
import './header.css'
import Burger from '../burger/Burger'

function Header() {
	return (
		<header className="header">
			<a className='logo' href="/"><img src={Logo} alt="Company" /></a>
			<Nav />
		</header>
	);
}

export default Header;