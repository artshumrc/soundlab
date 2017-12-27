import React from 'react';
import { compose } from 'react-apollo';

import ArticleListPage from '../../components/ArticleListPage';
import userIsAdminQuery from '../../../users/graphql/queries/userIsAdmin';


const ArticleListPageContainer = (props) => {
	let userIsAdmin = false;

	if (
		props.userIsAdminQuery
		&& props.userIsAdminQuery.project
	) {
		userIsAdmin = props.userIsAdminQuery.project.userIsAdmin;
	}

	return (
		<ArticleListPage
			userIsAdmin={userIsAdmin}
		/>
	);
};

export default compose(
	userIsAdminQuery,
)(ArticleListPageContainer);
