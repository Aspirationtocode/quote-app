import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { render } from 'react-dom';
import App from './src/containers/App';
import './styles/';

const rootElement = document.getElementById('root');

const rootComponent = (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={App} />
			<Route exact path="/d" component={App} />
		</Switch>
	</BrowserRouter>
);

render(rootComponent, rootElement);

if (module.hot) {
	module.hot.accept();
}
