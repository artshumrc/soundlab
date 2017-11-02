import React from 'react';
import { compose } from 'react-apollo';

import { userSoundsQuery } from '../../graphql/queries/users';
import Profile from '../../components/Profile';

const ProfileContainer = props => (
	<Profile {...props} />
);

export default compose(
	userSoundsQuery,
)(ProfileContainer);
