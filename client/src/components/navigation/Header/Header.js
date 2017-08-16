import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// components
import NavBar from './NavBar';
import AuthModal from '../../auth/AuthModal';

// actions
import { toggleAuthModal } from '../../../actions/auth';

const _Header = ({ showAuthModal, onToggleAuthModal }) => (
	<div>
		<NavBar
			onToggleAuthModal={onToggleAuthModal}
		/>
		<AuthModal
			showAuthModal={showAuthModal}
			toggleAuthModal={onToggleAuthModal}
		/>
	</div>
);

_Header.propTypes = {
	showAuthModal: PropTypes.bool.isRequired,
	onToggleAuthModal: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	showAuthModal: state.auth.showAuthModal,
});

const mapDispatchToProps = dispatch => ({
	onToggleAuthModal: () => {
		dispatch(toggleAuthModal());
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(_Header);
