import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'react-apollo';

// auth types:
import Login from '../../components/Login';
import Signup from '../../components/Signup';

// actions
import { changeAuthMode, setUser, login, logout } from '../../actions';
import { loginUser, register, resetPassword, logoutUser } from '../../lib/auth';


class AuthContainer extends React.Component {
	static propTypes = {
		authMode: PropTypes.string,
	};

	static defaultProps = {
		authMode: 'login'
	};


	render() {
		const {
			authMode, dispatchChangeAuthMode, dispatchLogin, dispatchSignup,
		} = this.props;

		return (
			<div
				style={{
					width: '90%',
					maxWidth: '800px',
					margin: '0 auto',
					textAlign: 'center',
				}}
      >
				{authMode === 'login' ?
					<Login
						onRegisterClick={dispatchChangeAuthMode.bind(null, 'signup')}
						login={dispatchLogin}
					/>
					: null}
				{authMode === 'signup' ?
					<Signup
						onSigninClick={dispatchChangeAuthMode.bind(null, 'login')}
						signup={dispatchSignup}
					/>
					: null}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	authMode: state.auth.authMode,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	dispatchChangeAuthMode: (mode) => {
		dispatch(changeAuthMode(mode));
	},
	dispatchSetUser: async (userObject) => {
		await dispatch(setUser(userObject));
		// Go to commentary requested route instead of toggling modal
		ownProps.router.push('/');
	},
	dispatchLogin: async data => {
		await dispatch(login(loginUser, data));
		// Go to commentary requested route instead of toggling modal
		ownProps.router.push('/');
	},
	dispatchSignup: async data => {
		await dispatch(login(register, data));
		ownProps.router.push('/');
	},
	dispatchReset: async data => {
		await dispatch(login(resetPassword, data));

		// Go to commentary requested route instead of toggling modal
		ownProps.router.push('/');
	},
	dispatchLogout: () => {
		dispatch(logout(logoutUser));
	},
});

export default compose(
	withRouter,
	connect(
  	mapStateToProps,
  	mapDispatchToProps
	),
)(AuthContainer);
