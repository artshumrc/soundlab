import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'react-apollo';

import { logoutMethod } from '../../../../lib/auth';
import { logout } from '../../../auth/actions';


class LogoutContainer extends React.Component {

	componentDidMount() {
		this.props.dispatchLogout();
		this.props.router.replace('/');
	}

	render() {
		return (<div />);
	}
}

const mapStateToProps = state => ({
	token: state.auth.token,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	dispatchLogout: () => {
		dispatch(logout(logoutMethod));
	},
});


export default compose(
	withRouter,
	connect(
		mapStateToProps,
		mapDispatchToProps,
	),
)(LogoutContainer);
