import React from 'react';
import { compose } from 'react-apollo';

import ItemListPage from '../../components/ItemListPage';
import userIsAdminQuery from '../../../users/graphql/queries/userIsAdmin';


const ItemListPageContainer = (props) => {
	let userIsAdmin = false;

	if (
		props.userIsAdminQuery
		&& props.userIsAdminQuery.project
	) {
		userIsAdmin = props.userIsAdminQuery.project.userIsAdmin;
	}

	return (
		<ItemListPage
			userIsAdmin={userIsAdmin}
		/>
	);
};

export default compose(
	userIsAdminQuery,
)(ItemListPageContainer);
