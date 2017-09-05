import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Modal from '../../../../components/common/modal/Modal';

// auth types:
import Login from '../Login';
import Signup from '../Signup';
import Logout from '../Logout';

// actions
import { toggleAuthModal, changeAuthMode, setUser, logout } from '../../redux/actions';


const ESCAPE_KEY = 27;


class _AuthModal extends React.Component {

	static propTypes = {
		loginMethod: PropTypes.func.isRequired,
		signupMethod: PropTypes.func.isRequired,

		showAuthModal: PropTypes.bool,
		authMode: PropTypes.string,
		dispatchToggleAuthModal: PropTypes.func.isRequired,
		dispachChangeAuthMode: PropTypes.func.isRequired,
		dispatchLogout: PropTypes.func.isRequired,
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
		const { dispatchToggleAuthModal, showAuthModal } = this.props;
		if (event.keyCode === ESCAPE_KEY && showAuthModal) dispatchToggleAuthModal();
	}

	async _initiateUser() {
		const { getUserFromServer, dispachSetUser, dispatchLogout } = this.props;
		if (getUserFromServer) {
			try {
				const user = await getUserFromServer();
				user.userId = user._id;
				dispachSetUser(user);
			} catch (err) {
				dispatchLogout();
			}
		}
	}

	render() {
		const { showAuthModal, dispatchToggleAuthModal, authMode, dispachChangeAuthMode, loginMethod, dispatchLogout, signupMethod } = this.props;

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

					{authMode === 'signup' ?
						<Signup
							onSigninClick={dispachChangeAuthMode.bind(null, 'login')}
							signupMethod={signupMethod}
						/>
					: null}

					{authMode === 'logout' ?
						<Logout
							logoutMethod={dispatchLogout}
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
	dispatchLogout: () => {
		dispatch(logout(ownProps.logoutMethod));
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(_AuthModal);
