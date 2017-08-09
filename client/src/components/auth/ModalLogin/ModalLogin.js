import React from 'react';
import Modal from '../../common/modal/Modal';
import OAuthButtons from '../OAuthButtons';
import PWDLoginForm from '../PWDLoginForm';
import './ModalLogin.css';


const ESCAPE_KEY = 27;


class ModalLogin extends React.Component {

	static propTypes = {
		lowered: React.PropTypes.bool,
		closeModal: React.PropTypes.func,
	};

	static defaultProps = {
		lowered: false,
	};

	constructor(props) {
		super(props);

		this.state = {
			errorMsg: '',
			errorSocial: '',
		};

		// methods:
		this._handleKeyDown = this._handleKeyDown.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
		this.handleLoginFacebook = this.handleLoginFacebook.bind(this);
		this.handleLoginGoogle = this.handleLoginGoogle.bind(this);
		this.handleLoginTwitter = this.handleLoginTwitter.bind(this);
	}

	componentWillMount() {
		document.addEventListener('keydown', this._handleKeyDown);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this._handleKeyDown);
	}

	_handleKeyDown(event) {

		const { closeModal } = this.props;

		if (event.keyCode === ESCAPE_KEY) closeModal();
	}

	handleLogin(email, password) {
	}

	handleLoginFacebook() {
	}

	handleLoginGoogle() {
	}

	handleLoginTwitter() {
	}

	render() {
		const { errorSocial, errorMsg } = this.state;

		return (
			<Modal>
				<div className="at-form">
					<div className="at-title">
						<h3>Sign In</h3>
					</div>

					<span className="error-text">
						{errorSocial}
					</span>

					<OAuthButtons
						handleFacebook={this.handleLoginFacebook}
						handleGoogle={this.handleLoginGoogle}
						handleTwitter={this.handleLoginTwitter}
					/>

					<div className="at-sep">
						<strong>OR</strong>
					</div>

					<PWDLoginForm
						login={this.handleLogin}
						errorMsg={errorMsg}
					/>

					<div className="at-signup-link">
						<p>
							Don't have an account? <a href="/sign-up" id="at-signUp" className="at-link at-signup">Register.</a>
						</p>
					</div>
					<div className="at-resend-verification-email-link at-wrap">
						<p>
							Verification email lost? <a href="/send-again" id="at-resend-verification-email" className="at-link at-resend-verification-email">Send again.</a>
						</p>
					</div>
				</div>
			</Modal>
		);
	}
}

export default ModalLogin;
