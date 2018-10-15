import React from 'react';
import PropTypes from 'prop-types';

import './Logout.css';



class Logout extends React.Component {

	static propTypes = {
		logoutMethod: PropTypes.func.isRequired,
	}

	render() {
		const { logoutMethod } = this.props;
		return (
			<div className="at-form">
				<h3>Sign Out</h3>
				<div className="at-pwd-form">
					<p>Are your sure you want to sign out?</p>
					<button
						className="at-btn submit button"
						id="at-btn"
						onClick={logoutMethod}
					>
						Yes
					</button>
				</div>
			</div>
		);
	}
}

export default Logout;
