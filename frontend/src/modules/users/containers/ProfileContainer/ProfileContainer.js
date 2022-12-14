import React from 'react';
import { compose } from 'react-apollo';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';

import { userSoundsQuery } from '../../graphql/queries/users';
import Profile from '../../components/Profile';

const cookies = new Cookies();


class ProfileContainer extends React.Component {
	componentDidMount() {
		const token = cookies.get('token');
		if (!token) {
			this.props.router.replace('/');
		}
	}

	render () {
		return (
			<Profile {...this.props} />
		);
	}
}

const mapStateToProps = state => ({
	username: state.auth.username,
	token: state.auth.token,
});

export default compose(
	userSoundsQuery,
	withRouter,
	connect(mapStateToProps),
)(ProfileContainer);
