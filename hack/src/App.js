import React from 'react';

import { Route, Switch } from 'react-router-dom';
import LightBox from './components/lightbox';

function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="/" exact component={LightBox} />
			</Switch>
		</div>
	);
}

export default App;
