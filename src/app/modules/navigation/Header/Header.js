import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// components
import NavBar from './NavBar';

// actions
import { authActions } from '../../../modules/auth';

const _Header = ({ toggleAuthModal, token }) => (
	<div>
		<NavBar
			toggleAuthModal={toggleAuthModal}
			token={token}
		/>
	</div>
);

_Header.propTypes = {
	toggleAuthModal: PropTypes.func.isRequired,
	token: PropTypes.string,
};

_Header.defaultProps = {
	token: null
};

const mapStateToProps = state => ({
	token: state.auth.token,
});

const mapDispatchToProps = dispatch => ({
	toggleAuthModal: (e) => {
		e.preventDefault();
		dispatch(authActions.toggleAuthModal());
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(_Header);
