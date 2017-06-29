import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import Routes from '../components/routes';
import DevTools from './DevTools';

const Root = ({store, history}) => (
	<Provider store={store}>
		<div>
			<BrowserRouter>
				{Routes}
			</BrowserRouter>
			{/*<DevTools />*/}
		</div>
	</Provider>
);

Root.propTypes = {
	store: PropTypes.shape({/* TODO: update */}).isRequired,
	history: PropTypes.shape({/* TODO: update */}).isRequired,
};

export default Root;
