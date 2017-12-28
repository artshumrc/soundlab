import React from 'react';
import { compose } from 'react-apollo';
import autoBind from 'react-autobind';
import shortid from 'shortid';
import { EditorState, ContentState, convertToRaw, convertFromRaw } from 'draft-js';

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
			articleId: shortid.generate(),
			files: [],
			metadata: [],
			createOrUpdate: 'create',
			editorState: EditorState.createEmpty(),
		};
	}

	componentWillReceiveProps(nextProps) {
		if (
			(
				!this.props.articleQuery
			|| !this.props.articleQuery.project
			|| !this.props.articleQuery.project.article
			)
		&&
			(
				nextProps.articleQuery
			&& nextProps.articleQuery.project
			&& nextProps.articleQuery.project.article
			&& nextProps.articleQuery.project.article.content
			)
		) {
			this.setState({
				content: EditorState.createWithContent(
					convertFromRaw(
						nextProps.articleQuery.project.article.content,
					),
				),
			});
		}
	}

	handleSubmit(values) {
		const { articleCreate, articleUpdate } = this.props;
		const { createOrUpdate } = this.state;

		// remove unused values
		delete values.__typename;

		// set id generated with component and projectId if not exists
		values._id = this.state.articleId;
		values.projectId = this.props.articleQuery.project._id;

		// set article content
		let content = this.state.editorState.getCurrentContent();
		values.content = JSON.stringify(convertToRaw(content));

		if (createOrUpdate === 'update') {
			articleUpdate(values)
				.then((response) => {
					console.log('Article updated');
				})
				.catch((err) => {
					console.error(err);
				});
		} else {
			this.setState({
				createOrUpdate: 'update',
			});
			articleCreate(values)
				.then((response) => {
					console.log('Article created');
				})
				.catch((err) => {
					console.error(err);
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
				console.error(err);
			});
	}

	render() {
		const { files, metadata } = this.state;

		let article;
		let project;

		if (
			this.props.articleQuery
			&& this.props.articleQuery.project
		) {
			project = this.props.articleQuery.project;

			if (this.props.articleQuery.project.article) {
				article = this.props.articleQuery.project.article;
			}
		}

		if (!project) {
			return null;
		}

		return (
			<ArticleEditor
				onSubmit={this.handleSubmit}
				onRemove={this.handleRemove}
				initialValues={article}
				files={files}
				addMetadata={this.addMetadata}
				removeMetadata={this.removeMetadata}
				content={this.state.content}
			/>
		);
	}
}

export default compose(
	articleCreateMutation, articleUpdateMutation, articleRemoveMutation, articleDetailQuery,
)(ArticleEditorContainer);
