import React from "react";
import Nav from '../Nav';
import './footer.css'
import Logo from '../../images/logo.png';

function Footer() {
	return (
		<footer className="footer">
			<div className='footer_wrapper'>
				<a href="/"><img src={Logo} alt="Company" /></a>
				<Nav />
			</div>
			<div className='footer__bottom'>
				<span className='footer__bottom_rights'>© {new Date().getFullYear()} Finsweet | All rights reserved.</span>
				<span className='footer__bottom_social'>
					<a className='twiter' href='#'></a>
					<a className='facebook' href='#'></a>
					<a className='instagram' href='#'></a>
					<a className='linkidin' href='#'></a>
				</span>
			</div>
	</footer>
	);
}

export default Footer;