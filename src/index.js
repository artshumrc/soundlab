import 'es6-shim';

import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import Root from './containers/Root';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { loginJWT } from './lib/auth'; // eslint-disable-line
import { wsClient } from './middleware/apolloClient';  // eslint-disable-line

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
injectTapEventPlugin();

ReactDOM.render(
	<Root store={store} history={history} />,
	document.getElementById('root')
);

registerServiceWorker();
