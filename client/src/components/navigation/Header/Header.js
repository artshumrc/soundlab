import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// components
import NavBar from './NavBar';

// actions
import { authActions } from '../../../modules/auth';

const _Header = ({ dispatchToggleAuthModal, loggedIn, dispatchToggleLogout }) => (
	<div>
		<NavBar
			toggleAuthModal={dispatchToggleAuthModal}
			loggedIn={loggedIn}
			logout={dispatchToggleLogout}
		/>
	</div>
);

_Header.propTypes = {
	dispatchToggleAuthModal: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	loggedIn: state.auth.userId ? true : false,
});

const mapDispatchToProps = dispatch => ({
	dispatchToggleAuthModal: () => {
		dispatch(authActions.toggleAuthModal());
	},
	dispatchToggleLogout: () => {
		dispatch(authActions.toggleLogout());
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(_Header);
