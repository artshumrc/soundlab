import 'es6-shim';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';

import Root from './containers/Root';
import configureStore from './store/configureStore';
import { loginJWT } from './lib/auth'; // eslint-disable-line

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
injectTapEventPlugin();

window.soundManager.setup({debugMode: false});

ReactDOM.render(
	<AppContainer>
		<Root store={store} history={history} />
	</AppContainer>,
  document.getElementById('root')
)

if (module.hot) {
	module.hot.accept('./containers/Root', () => {
		const NextRoot = require('./containers/Root').default
		ReactDOM.render(
			<AppContainer>
				<NextRoot store={store} history={history} />
			</AppContainer>,
      document.getElementById('root')
    )
	})
}
