import React from 'react';

import { Route, Switch } from 'react-router-dom';
import LightBox from './components/lightbox';
import Tech from './components/Tech';

import './styles/main.css';

function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="/" exact component={LightBox} />
				<Route path="/category" component={Tech} />
			</Switch>
		</div>
	);
}

export default App;
