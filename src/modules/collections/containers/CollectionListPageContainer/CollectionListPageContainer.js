import React from 'react';
import { compose } from 'react-apollo';

import CollectionListPage from '../../components/CollectionListPage';
import userIsAdminQuery from '../../../users/graphql/queries/userIsAdmin';


const CollectionListPageContainer = (props) => {
	let userIsAdmin = false;

	if (
		props.userIsAdminQuery
		&& props.userIsAdminQuery.project
	) {
		userIsAdmin = props.userIsAdminQuery.project.userIsAdmin;
	}

	return (
		<CollectionListPage
			userIsAdmin={userIsAdmin}
		/>
	);
};

export default compose(
	userIsAdminQuery,
)(CollectionListPageContainer);
