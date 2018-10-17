import React, { Component } from 'react';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';

// actions
import { setUser } from '../../../modules/auth/actions';

// components
import Header from '../../navigation/Header';
import Footer from '../../navigation/Footer';

import './MainLayout.css';


class MainLayout extends Component {

	componentDidMount() {
		const token = Cookies.get('token');
		if (token && !this.props.token) {
			this.props.dispatchSetUser({
				username: '',
				token,
			})
		}
	}

	render() {
		return (
			<div styleName="mainContainer">
				<Header />
				<div className="wavesContainer">
					<img src="/images/wave1.png" />
				</div>
				<div className="containerContent">
					{this.props.children}
				</div>
				<Footer />
			</div>
		)
	}
}

const mapStateToProps = state => ({
	token: state.auth.token,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	dispatchSetUser: (userObject) => {
		dispatch(setUser(userObject));
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(MainLayout);
