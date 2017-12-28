import React from 'react';
import { compose } from 'react-apollo';
import autoBind from 'react-autobind';
import winston from 'winston';

import ArticleEditor from '../../components/ArticleEditor';
import getCurrentProjectHostname from '../../../../lib/getCurrentProjectHostname';
import articleDetailQuery from '../../graphql/queries/detail';
import articleCreateMutation from '../../graphql/mutations/create';
import articleUpdateMutation from '../../graphql/mutations/update';
import articleRemoveMutation from '../../graphql/mutations/remove';


class ArticleEditorContainer extends React.Component {
	constructor(props) {
		super(props);
		autoBind(this);

		this.state = {
			files: [],
			metadata: [],
		};
	}

	handleSubmit(values) {
		const { articleCreate, articleUpdate, router } = this.props;
		delete values.__typename;

		if ('_id' in values) {
			articleUpdate(values)
				.then((response) => {
					router.replace(`/articles/${values.slug}`);
				})
				.catch((err) => {
					winston.error(err);
				});
		} else {
			articleCreate(values)
				.then((response) => {
					router.replace('/articles/');
				})
				.catch((err) => {
					winston.error(err);
				});
		}
	}

	handleRemove(articleId) {
		const { articleRemove, router } = this.props;

		articleRemove(articleId)
			.then((response) => {
				router.replace('/articles');
			})
			.catch((err) => {
				winston.error(err);
			});
	}

	render() {
		const { files, metadata } = this.state;

		let article;

		if (this.props.articleQuery && !this.props.articleQuery.loading) {
			article = this.props.articleQuery.article;
		}

		return (
			<ArticleEditor
				onSubmit={this.handleSubmit}
				onRemove={this.handleRemove}
				article={article}
				metadata={metadata}
				files={files}
				addMetadata={this.addMetadata}
				removeMetadata={this.removeMetadata}
			/>
		);
	}
}

export default compose(
	articleCreateMutation, articleUpdateMutation, articleRemoveMutation, articleDetailQuery,
)(ArticleEditorContainer);
