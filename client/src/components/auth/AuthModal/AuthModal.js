import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Modal from '../../common/modal/Modal';

// auth types:
import ModalLogin from '../ModalLogin';
import ModalSignup from '../ModalSignup';

// actions
import { toggleAuthModal, changeAuthMode, setUser } from '../../../actions/auth';


const ESCAPE_KEY = 27;


class _AuthModal extends React.Component {

	static propTypes = {
		showAuthModal: PropTypes.bool,
		authMode: PropTypes.string,
		dispatchToggleAuthModal: PropTypes.func.isRequired,
		dispachChangeAuthMode: PropTypes.func.isRequired,
		dispachSetUser: PropTypes.func.isRequired,
	};

	static defaultProps = {
		showAuthModal: false,
		authMode: 'login'
	};

	constructor(props) {
		super(props);

		// methods:
		this._handleKeyDown = this._handleKeyDown.bind(this);
	}

	componentWillMount() {
		document.addEventListener('keydown', this._handleKeyDown);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this._handleKeyDown);
	}

	_handleKeyDown(event) {
		const { dispatchToggleAuthModal } = this.props;
		if (event.keyCode === ESCAPE_KEY) dispatchToggleAuthModal();
	}

	render() {
		const { showAuthModal, dispatchToggleAuthModal, authMode, dispachChangeAuthMode, dispachSetUser } = this.props;

		return (
			<Modal
				show={showAuthModal}
				closeModal={dispatchToggleAuthModal}
			>
				<div>
					{authMode === 'login' ? 
						<ModalLogin
							onRegisterClick={dispachChangeAuthMode.bind(null, 'signup')}
							setUser={dispachSetUser}
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
	showAuthModal: state.auth.showAuthModal,
});

const mapDispatchToProps = dispatch => ({
	dispachChangeAuthMode: (mode) => {
		dispatch(changeAuthMode(mode));
	},
	dispachSetUser: (userObject) => {
		dispatch(setUser(userObject));
	},
	dispatchToggleAuthModal: () => {
		dispatch(toggleAuthModal());
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(_AuthModal);
