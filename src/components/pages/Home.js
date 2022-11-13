import React, { useContext, useState } from "react";
import Modal from "../modal/Modal";
import Products2 from "../products2/Products2";
import { ProductContext } from "../products2/Products2"
import ReactTooltip from 'react-tooltip';


function Home() {
	const [modalActive, setModalActive] = useState(false);

	const menu = useContext(ProductContext).slice(0,6)

    function print(){	
		return menu.map((item, index) => {
			return (
				<div key={index} className={item.categories}>
                    <div className={'img_' + item.id}></div>
					<div className="dish">
						<span>{item.name}</span>
						<span>$ {item.price}</span>
					</div>
				</div>
			);
		});
	}

	return (
		
		<div className="page">
			<ReactTooltip />
			<Modal active={modalActive} setActive={setModalActive}>
				<Products2></Products2>
			</Modal>
			<div className='home__header'>
				<div className="home__header_blc">
					<div>
						<h2 className="home__header_title">We serve high quality foods of all kinds.</h2>
						<p className="home__header_article">Edit this text to make it your own. To edit, simply click directly on the text to start adding your own words. You can move the text.</p>
					</div>
					<button className="home__menu_btn btn" onClick={() => setModalActive(true)}>View Menu &#8594;</button>
					<div className="home__header_info">
						<h4 className="title">Opening Times</h4>
						<span className="discription">Sunday to Saturday | 09:00 AM to 11:00 PM</span>
						<h4 className="title">Location</h4>
						<span className="discription">Master canteen, BBSR , Odisha 752054</span>
						<h4 className="title">Call us</h4>
						<span className="discription">+9776462441</span>
					</div>
				</div>
				<div className="home__header_blc img"></div>
			</div>
			<div className="home__about">
				<div className="home__about_article">
					<span className="link">Know more about us</span>
					<h2 className="article__title">We source sustainable & line caught Foods</h2>
					<p className="article__discription">Edit this text to make it your own. To edit, simply click directly on the text to start adding your own words. You can move the text by dragging and dropping the text anywhere on the page. </p>
					<div className="article__feature_wrapper">
						<div className="article__feature">
							<div className="article__feature_title">10+ People</div>
							<div className="article__feature_discription">We are Small Team</div>
							<div className="article__feature_discription">Through True Rich Attended does no end it his mother since favourable.</div>
						</div>
						<div className="article__feature">
							<div className="article__feature_title">2014</div>
							<div className="article__feature_discription">We are From</div>
							<div className="article__feature_discription">Through True Rich Attended does no end it his mother since favourable.</div>
						</div>
						<div className="article__feature">
							<div className="article__feature_title">200k</div>
							<div className="article__feature_discription">We Served</div>
							<div className="article__feature_discription">Through True Rich Attended does no end it his mother since favourable.</div>
						</div>
					</div>
					<button className="home__menu_btn btn" onClick={() => setModalActive(true)}>View Menu &#8594;</button>
				</div>
				<div className="home__about_img">
					<div className="img__left"></div>
					<div className="img__right"></div>
				</div>
			</div>
			<div className="home__serving">
				<div className="home__serving_wrapper">
				<span className="link">What we are serving</span>
					<div className="home__serving_top">
						<h2 className="home__serving_title">We all have to eat, so why not do it beautifully?</h2>
						<p className="home__serving_discription">Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic.. Through True Rich Attended does no end it his mother</p>
					</div>
					<div className="home__serving_bottom">
						<div className="home__serving_block">
							<h3 className="block__title block__cake">Quafe Cake</h3>
							<span className="block__discription">Through True Rich Attended no end it his mother since favourable real had half every him.</span>
							<h3 className="block__title block__coctails">Cocktails</h3>
							<span className="block__discription">Through True Rich Attended no end it his mother since favourable real had half every him.</span>
						</div>
						<div className="home__serving_block">	
							<h3 className="block__title block__coffe">Cofee</h3>
							<span className="block__discription">Through True Rich Attended no end it his mother since favourable real had half every him.</span>
							<h3 className="block__title block__grill">Grill</h3>
							<span className="block__discription">Through True Rich Attended no end it his mother since favourable real had half every him.</span>
						</div>
						<div className="home__serving_block">
							<h3 className="block__title block__burger">Fast Food</h3>
							<span className="block__discription">Through True Rich Attended no end it his mother since favourable real had half every him.</span>
							<h3 className="block__title block__snacks">Snacks</h3>
							<span className="block__discription">Through True Rich Attended no end it his mother since favourable real had half every him.</span>
						</div>
					</div>
				</div>
			</div>
			<div className="home__menu">
				<div className="home__menu_wrapper">
					<span className="link">Our menu</span>
					<div className="home__menu_top">
						<h2 className="home__menu_title">Discover our menu chart</h2>
						<p className="home__menu_discription">Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic.. Through True Rich Attended does no end it his mother</p>
					</div>
				</div>
				<div className="home__menu_wrapper2">
				<div className="home__menu_bottom">
				{print()}
				</div>
				<button className="home__menu_btn btn" onClick={() => setModalActive(true)}>View Menu &#8594;</button>
				</div>
			</div>
			<div className="home__quote">
				<div className="home_quote_left">
					<span className="home__quote_title">"</span>
					<span className="home__quote_article">Edit this text to make it your own. To edit, simply click directly on the text to start adding your own words. You can move the text by dragging and dropping the text</span>
					<div className="home__quote_wrapper">
						<div className="home_quote_autor">
							<div className="autor__wrapper">
								<span className="autor__name">Joheny Andro</span>
								<span className="autor__job">Bhubaneswar, Odisha</span>
							</div>
							
						</div>
						<div className="home__quote_avatar">
							<div className="autor__avatar"></div>
						</div>
					</div>
				</div>
				<div className="home__quote_right video">
					<iframe src="https://www.youtube.com/embed/a1-uPceI4L8?controls=0&rel=0&showinfo=0"></iframe>
				</div>
			</div>
		</div>
	);
}

export default Home;