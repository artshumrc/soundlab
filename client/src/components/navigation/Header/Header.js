import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// components
import NavBar from './NavBar';
import ModalLogin from '../../auth/ModalLogin';

// actions
import { toggleLoginModal } from '../../../actions/header';

const _Header = ({ showLoginModal, onToggleLoginModal }) => (
	<div>
		<NavBar
			onToggleLoginModal={onToggleLoginModal}
		/>
		<ModalLogin
			lowered={showLoginModal}
			closeModal={onToggleLoginModal}
		/>
	</div>
);

_Header.propTypes = {
	showLoginModal: PropTypes.bool.isRequired,
	onToggleLoginModal: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	showLoginModal: state.header.showLoginModal,
});

const mapDispatchToProps = dispatch => ({
	onToggleLoginModal: (show) => {
		dispatch(toggleLoginModal(show));
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(_Header);
