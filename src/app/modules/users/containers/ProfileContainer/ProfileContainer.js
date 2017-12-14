import React from 'react';
import { compose } from 'react-apollo';
import { withRouter } from 'react-router';

import { userSoundsQuery } from '../../graphql/queries/users';
import Profile from '../../components/Profile';

class ProfileContainer extends React.Component {
	componentDidMount() {
		if (!this.props.userId) {
			this.props.router.replace('/');
		}
	}

	render () {
		return (
			<Profile {...this.props} />
		);
	}
}

export default compose(
	userSoundsQuery,
	withRouter,
)(ProfileContainer);
