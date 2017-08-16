import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Modal from '../../common/modal/Modal';

// auth types:
import ModalLogin from '../ModalLogin';
import ModalSignup from '../ModalSignup';

// actions
import { changeAuthMode } from '../../../actions/auth';


const ESCAPE_KEY = 27;


class _AuthModal extends React.Component {

	static propTypes = {
		showAuthModal: PropTypes.bool,
		toggleAuthModal: PropTypes.func.isRequired,
		authMode: PropTypes.string,
		dispachChangeAuthMode: PropTypes.func.isRequired,
	};

	static defaultProps = {
		showAuthModal: false,
		authMode: 'login'
	};

	constructor(props) {
		super(props);

		// methods:
		(this: any)._handleKeyDown = this._handleKeyDown.bind(this);
	}

	componentWillMount() {
		document.addEventListener('keydown', this._handleKeyDown);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this._handleKeyDown);
	}

	_handleKeyDown(event) {
		const { toggleAuthModal } = this.props;
		if (event.keyCode === ESCAPE_KEY && toggleAuthModal) toggleAuthModal();
	}

	render() {
		const { showAuthModal, toggleAuthModal, authMode, dispachChangeAuthMode } = this.props;

		return (
			<Modal
				show={showAuthModal}
				closeModal={toggleAuthModal}
			>
				<div>
					{authMode === 'login' ? 
						<ModalLogin
							onRegisterClick={dispachChangeAuthMode.bind(null, 'signup')}
						/>
					: null}

					{authMode === 'signup' ? 
						<ModalSignup />
					: null}
				</div>
			</Modal>
		);
	}
}

const mapStateToProps = state => ({
	authMode: state.auth.authMode,
});

const mapDispatchToProps = dispatch => ({
	dispachChangeAuthMode: (mode) => {
		dispatch(changeAuthMode(mode));
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(_AuthModal);
