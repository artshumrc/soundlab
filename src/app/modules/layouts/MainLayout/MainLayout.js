import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';

// actions
import { setUser } from '../../../modules/auth/actions';

// components
import Header from '../../navigation/Header';
import Footer from '../../navigation/Footer';

import styles from './MainLayout.scss';


@CSSModules(styles, {allowMultiple: true})
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
				<div className={styles.wavesContainer}>
					<img src="/images/wave1.png" />
				</div>
				<div className={styles.containerContent}>
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
