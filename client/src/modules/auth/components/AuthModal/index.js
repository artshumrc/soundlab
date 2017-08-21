import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Modal from '../Modal';

// auth types:
import Login from '../Login';
import Logout from '../Logout';
// import ModalSignup from '../ModalSignup';

// actions
import { toggleAuthModal, changeAuthMode, setUser, logout } from '../../redux/actions';


const ESCAPE_KEY = 27;


class _AuthModal extends React.Component {

	static propTypes = {
		loginMethod: PropTypes.func.isRequired,
		logoutMethod: PropTypes.func.isRequired,

		showAuthModal: PropTypes.bool,
		authMode: PropTypes.string,
		dispatchToggleAuthModal: PropTypes.func.isRequired,
		dispachChangeAuthMode: PropTypes.func.isRequired,
	};

	static defaultProps = {
		showAuthModal: false,
		authMode: 'login'
	};

	constructor(props) {
		super(props);

		// methods:
		this._handleKeyDown = this._handleKeyDown.bind(this);
		this._initiateUser = this._initiateUser.bind(this);
	}

	componentWillMount() {
		document.addEventListener('keydown', this._handleKeyDown);

		this._initiateUser();
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this._handleKeyDown);
	}

	_handleKeyDown(event) {
		const { dispatchToggleAuthModal } = this.props;
		if (event.keyCode === ESCAPE_KEY) dispatchToggleAuthModal();
	}

	async _initiateUser() {
		const { getUserFromServer, dispachSetUser } = this.props;
		if (getUserFromServer) {
			try {
				const user = await getUserFromServer();
				user.userId = user._id;
				dispachSetUser(user);
			} catch (err) {
				// do nothing
			}
		}
	}

	render() {
		const { showAuthModal, dispatchToggleAuthModal, authMode, dispachChangeAuthMode, loginMethod, logout } = this.props;

		return (
			<Modal
				show={showAuthModal}
				closeModal={dispatchToggleAuthModal}
			>
				<div>
					{authMode === 'login' ? 
						<Login
							onRegisterClick={dispachChangeAuthMode.bind(null, 'signup')}
							loginMethod={loginMethod}
						/>
					: null}

					{/* authMode === 'signup' ? 
						<ModalSignup />
					: null */}

					{authMode === 'logout' ? 
						<Logout
							logoutMethod={logout}
						/>
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

const mapDispatchToProps = (dispatch, ownProps) => ({
	dispatchToggleAuthModal: (value) => {
		dispatch(toggleAuthModal(value));
	},
	dispachChangeAuthMode: (mode) => {
		dispatch(changeAuthMode(mode));
	},
	dispachSetUser: (userObject) => {
		dispatch(setUser(userObject));
		dispatch(toggleAuthModal(false));
	},
	logout: () => {
		dispatch(logout(ownProps.logoutMethod));
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(_AuthModal);
