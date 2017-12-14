import React from 'react';
import { connect } from 'react-redux';

import { logoutMethod } from '../../../../lib/auth';
import { logout } from '../../../auth/actions';


class LogoutContainer extends React.Component {

	componentDidMount() {
		this.props.dispatchLogout();
	}

	render() {
		return (<div />);
	}
}

const mapStateToProps = state => ({
	userId: state.auth.userId,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	dispatchLogout: () => {
		dispatch(logout(logoutMethod));
	},
});


export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(LogoutContainer);
