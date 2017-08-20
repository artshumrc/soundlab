import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Modal from '../Modal';

// auth types:
import Login from '../Login';
// import ModalSignup from '../ModalSignup';

// actions
import { toggleAuthModal, changeAuthMode, setUser, login } from '../../redux/actions';


const ESCAPE_KEY = 27;


class _AuthModal extends React.Component {

	static propTypes = {
		showAuthModal: PropTypes.bool,
		authMode: PropTypes.string,
		dispatchToggleAuthModal: PropTypes.func.isRequired,
		dispachChangeAuthMode: PropTypes.func.isRequired,
		dispatchLogin: PropTypes.func.isRequired,
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
		const { showAuthModal, dispatchToggleAuthModal, authMode, dispachChangeAuthMode, dispatchLogin } = this.props;

		return (
			<Modal
				show={showAuthModal}
				closeModal={dispatchToggleAuthModal}
			>
				<div>
					{authMode === 'login' ? 
						<Login
							onRegisterClick={dispachChangeAuthMode.bind(null, 'signup')}
							login={dispatchLogin}
						/>
					: null}

					{/* authMode === 'signup' ? 
						<ModalSignup />
					: null */}
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
	dispachChangeAuthMode: (mode) => {
		dispatch(changeAuthMode(mode));
	},
	dispatchLogin: (username, password) => {
		dispatch(login(ownProps.loginMethod, username, password));
	},
	dispachSetUser: (userObject) => {
		dispatch(setUser(userObject));
		dispatch(toggleAuthModal(false));
	},
	dispatchToggleAuthModal: () => {
		dispatch(toggleAuthModal());
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(_AuthModal);
