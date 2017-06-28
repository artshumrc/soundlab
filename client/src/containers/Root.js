import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../components/routes';
import DevTools from './DevTools';

const Root = ({ store, history }) => (
	<MuiThemeProvider>
		<Provider store={store}>
			<div>
        <BrowserRouter>
          {Routes}
        </BrowserRouter>
				<DevTools />
			</div>
		</Provider>
	</MuiThemeProvider>
);

Root.propTypes = {
	store: PropTypes.shape({ /* TODO: update */ }).isRequired,
	history: PropTypes.shape({ /* TODO: update */ }).isRequired,
};

export default Root;
