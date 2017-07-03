import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider } from 'react-apollo';
import {BrowserRouter} from 'react-router-dom';

import Routes from '../components/routes';
import DevTools from './DevTools';

import client from '../middleware/apolloClient';

const Root = ({store, history}) => (
	<ApolloProvider
		client={client}
		store={store}
	>
		<div>
			<BrowserRouter>
				{Routes}
			</BrowserRouter>
			{/*<DevTools />*/}
		</div>
	</ApolloProvider>
);

Root.propTypes = {
	store: PropTypes.shape({/* TODO: update */}).isRequired,
	history: PropTypes.shape({/* TODO: update */}).isRequired,
};

export default Root;
