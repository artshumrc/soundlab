import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';


import ModalHead from '../ModalHead';

// auth types:
import LoginContainer from '../../containers/LoginContainer';
import SignupContainer from '../../containers/SignupContainer';

// actions
import { toggleAuthModal, changeAuthMode, setUser, login, logout } from '../../actions';

// login form
import './AuthForms.css';


const ESCAPE_KEY = 27;

// cookies
const cookies = new Cookies();


class _AuthForms extends React.Component {

	static propTypes = {
		dispatchLogin: PropTypes.func.isRequired,
		dispatchSignup: PropTypes.func.isRequired,
		dispatchToggleAuthModal: PropTypes.func.isRequired,
		dispatchChangeAuthMode: PropTypes.func.isRequired,
		showAuthModal: PropTypes.bool,
		authMode: PropTypes.string,
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
		const { getUserFromServer, dispatchSetUser } = this.props;
		if (getUserFromServer) {
			try {
				const user = await getUserFromServer();
				const token = cookies.get('token');

				if (user) {
				 	dispatchSetUser({ token, ...user });
				}
			} catch (err) {
				console.log(err);
				// TODO: Determine why dispatchLogout always called on page load
				// dispatchLogout();
			}
		}
	}

	render() {
		const { showAuthModal, dispatchToggleAuthModal, authMode, dispatchChangeAuthMode, dispatchLogin, dispatchSignup } = this.props;

		return (
			<div className="authForms">
				<ModalHead />
				<div className="formMessage">
					{this.props.formMessage}
				</div>
				{authMode === 'login' ?
					<LoginContainer
						onRegisterClick={dispatchChangeAuthMode.bind(null, 'signup')}
					/>
				: null}
				{authMode === 'signup' ?
					<SignupContainer
						onSigninClick={dispatchChangeAuthMode.bind(null, 'login')}
					/>
				: null}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	authMode: state.auth.authMode,
	showAuthModal: state.auth.showAuthModal,
	formMessage: state.auth.formMessage,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	dispatchToggleAuthModal: (value) => {
		dispatch(toggleAuthModal(value));
	},
	dispatchChangeAuthMode: (mode) => {
		dispatch(changeAuthMode(mode));
	},
	dispatchSetUser: (userObject) => {
		dispatch(setUser(userObject));
		dispatch(toggleAuthModal(false));
	},
	dispatchLogin: data => dispatch(login(ownProps.loginMethod, data)),
	dispatchSignup: data => dispatch(login(ownProps.signupMethod, data)),
	dispatchLogout: () => {
		dispatch(logout(ownProps.logoutMethod));
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(_AuthForms);
