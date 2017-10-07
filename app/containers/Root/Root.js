import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider } from 'react-apollo';
import { Router } from 'react-router';
import { CookiesProvider } from 'react-cookie';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import routes from '../../routes';
import client from '../../middleware/apolloClient';

// auth
import AuthModal from '../../modules/auth';
import { login, register, logout, verifyToken } from '../../lib/auth';

const Root = ({ store, history }) => (
	<ApolloProvider
		client={client}
		store={store}
	>
		<MuiThemeProvider>
			<CookiesProvider>
				<div>
					<Router history={history} routes={routes} />
					<AuthModal
						loginMethod={login}
						signupMethod={register}
						logoutMethod={logout}
						getUserFromServer={verifyToken}
					/>
				</div>
			</CookiesProvider>
		</MuiThemeProvider>
	</ApolloProvider>
);

Root.propTypes = {
	store: PropTypes.shape({/* TODO: update */}).isRequired,
	history: PropTypes.shape({/* TODO: update */}).isRequired,
};

export default Root;
