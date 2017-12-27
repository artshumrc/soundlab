import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'react-apollo';
import autoBind from 'react-autobind';

import ArticleList from '../../components/ArticleList';
import articlesQuery from '../../graphql/queries/list';


class ArticleListContainer extends React.Component {
	render() {
		let articles = [];

		if (
			this.props.articleListQuery
			&& !this.props.articleListQuery.loading
			&& this.props.articleListQuery.project
		) {
			articles = this.props.articleListQuery.project.articles;
		}

		console.log('############');
		console.log('############');
		console.log('############');
		console.log(this.props);

		console.log('############');
		console.log('############');
		return (
			<ArticleList
				articles={articles}
			/>
		);
	}
}

export default compose(
	articlesQuery,
)(ArticleListContainer);
