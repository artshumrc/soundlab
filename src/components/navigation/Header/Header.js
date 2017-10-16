import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// components
import NavBar from './NavBar';

// actions
import { authActions } from '../../../modules/auth';

const _Header = ({ toggleAuthModal, userId }) => (
	<div>
		<NavBar
			toggleAuthModal={toggleAuthModal}
			userId={userId}
		/>
	</div>
);

_Header.propTypes = {
	toggleAuthModal: PropTypes.func.isRequired,
	userId: PropTypes.string,
};

_Header.defaultProps = {
	userId: null
};

const mapStateToProps = state => ({
	userId: state.auth.userId,
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
