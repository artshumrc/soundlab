import 'es6-shim';

import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import dotenv from 'dotenv';

import Root from './containers/Root';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

dotenv.config();

const store = configureStore();

injectTapEventPlugin();

ReactDOM.render(
	<Root store={store} history={{}} />,
	document.getElementById('root')
);

registerServiceWorker();
