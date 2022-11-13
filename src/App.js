import { BrowserRouter as Router } from 'react-router-dom';
import Burger from './components/burger/Burger';

import Header from './components/headers/Header';
import Main from './components/Main';
import Footer from './components/footer/Footer.js';
import Maps from './components/Maps.js'


function App() {
	return (
		<>
			<Router>
				<Burger />
				<Header />
				<Main />
				<Maps />
				<Footer />
			</Router>
		</>
	);
}

export default App;