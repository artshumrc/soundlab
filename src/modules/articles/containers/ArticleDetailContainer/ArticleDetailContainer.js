import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'react-apollo';
import autoBind from 'react-autobind';

import ArticleDetail from '../../components/ArticleDetail';
import articleDetailQuery from '../../graphql/queries/detail';


class ArticleDetailContainer extends React.Component {
	render() {
		let article = [];
		let userIsAdmin = false;

		if (
			this.props.articleQuery
			&& !this.props.articleQuery.loading
			&& this.props.articleQuery.project
		) {
			article = this.props.articleQuery.project.article;
			userIsAdmin = this.props.articleQuery.project.userIsAdmin;
		}

		return (
			<ArticleDetail
				{...article}
				userIsAdmin={userIsAdmin}
			/>
		);
	}
}

export default compose(
	articleDetailQuery,
)(ArticleDetailContainer);
