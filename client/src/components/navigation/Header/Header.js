import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// components
import NavBar from './NavBar';

// actions
import { authActions } from '../../../modules/auth';

const _Header = ({ toggleAuthModal, logout, userId }) => (
	<div>
		<NavBar
			toggleAuthModal={toggleAuthModal}
			userId={userId}
			logout={logout}
		/>
	</div>
);

_Header.propTypes = {
	toggleAuthModal: PropTypes.func.isRequired,
	logout: PropTypes.func.isRequired,

	userId: React.PropTypes.string,
};

_Header.defaultProps = {
	userId : null
};

const mapStateToProps = state => ({
	userId: state.auth.userId,
});

const mapDispatchToProps = dispatch => ({
	toggleAuthModal: (e) => {
		e.preventDefault();
		dispatch(authActions.toggleAuthModal());
	},
	logout: (e) => {
		e.preventDefault();
		dispatch(authActions.toggleAuthModal());
		dispatch(authActions.changeAuthMode('logout'));
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(_Header);
