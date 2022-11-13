import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Story from './pages/Story';
import Blog from "./pages/Blog";
import Contacts from "./pages/Contacts";

function Main() {

	return (
		<main className="main">
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/menu/" element={<Menu />} />
			<Route path="/about/" element={<About />} />
			<Route path="/Story/" element={<Story />} />
			<Route path="/blog/" element={<Blog />} />
			<Route path="/contacts/" element={<Contacts />} />
		</Routes>
		</main>
	);
}

export default Main;