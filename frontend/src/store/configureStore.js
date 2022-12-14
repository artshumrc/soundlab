import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';

import rootReducer from '../reducers';
import client from '../middleware/apolloClient';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (preloadedState) => {
	const store = createStore(
		rootReducer,
		preloadedState,
		composeEnhancers(
			applyMiddleware(thunk, client.middleware(), routerMiddleware(browserHistory)),
		)
	);

	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers').default; // eslint-disable-line global-require
			store.replaceReducer(nextRootReducer);
		});
	}

	return store;
};

export default configureStore;
