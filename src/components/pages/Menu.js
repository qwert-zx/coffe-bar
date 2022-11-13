import React from "react";
import Products2 from "../products2/Products2";


function Menu() {

	return (
		<div className="home__menu">
			<div className="home__menu_wrapper">
				<span className="link">Our menu</span>
				<div className="home__menu_top">
					<h2 className="home__menu_title">Discover our menu chart</h2>
					<p className="home__menu_discription">Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic.. Through True Rich Attended does no end it his mother</p>
				</div>
			</div>
			<div className="home__menu_wrapper2">
			<Products2></Products2>
			</div>
		</div>
	);
}

export default Menu;