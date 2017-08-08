import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// lib
import muiTheme from '../../../lib/muiTheme';

const ModalChangePwd = React.createClass({

	propTypes: {
		lowered: React.PropTypes.bool,
		closeModal: React.PropTypes.func,
	},

	childContextTypes: {
		muiTheme: React.PropTypes.object.isRequired,
	},

	getChildContext() {
		return { muiTheme: getMuiTheme(muiTheme) };
	},

	componentWillMount() {
		document.addEventListener('keydown', this._handleKeyDown);
	},

	componentWillUnmount() {
		document.removeEventListener('keydown', this._handleKeyDown);
	},

	_handleKeyDown(event) {

		const { closeModal } = this.props;

		if (event.keyCode === 'ESCAPE_KEY') closeModal();
	},

	render() {
		const lowered = this.props.lowered;

		return (
			<div>
				<div
					className={`orpheus-modal-login
					orpheus-modal orpheus-login-signup ${((lowered) ? ' lowered' : '')}`}
				>
					<div
						className="close-modal paper-shadow"
						onClick={this.props.closeModal}
					>
						<i className="mdi mdi-close" />
					</div>
					<div className="modal-inner">
						Add change pwd form
					</div>
				</div>
			</div>
		);
	},
});

export default ModalChangePwd;
