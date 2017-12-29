import React from 'react';
import { compose } from 'react-apollo';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import autoBind from 'react-autobind';
import shortid from 'shortid';
import { EditorState, ContentState, convertToRaw, convertFromRaw } from 'draft-js';

import ArticleEditor from '../../components/ArticleEditor';
import getCurrentProjectHostname from '../../../../lib/getCurrentProjectHostname';
import articleDetailQuery from '../../graphql/queries/detail';
import articleSaveMutation from '../../graphql/mutations/save';
import articleRemoveMutation from '../../graphql/mutations/remove';


class ArticleEditorContainer extends React.Component {
	constructor(props) {
		super(props);
		autoBind(this);


		this.state = {
			articleId: shortid.generate(),
			files: [],
			metadata: [],
			editorState: null,
		};
	}

	componentWillReceiveProps(nextProps) {
		console.log('###########')
		console.log('###########')
		console.log('###########')
		console.log('###########')
		console.log('###########')
		console.log('nextProps');
		console.log(nextProps);
		console.log('this.props');
		console.log(this.props)
		console.log('this.state');
		console.log(this.state);
		console.log('###########')
		console.log('###########')
		console.log('###########')
		console.log('###########')
		console.log('###########')
		console.log('###########')
		if (
				nextProps.articleQuery
			&& nextProps.articleQuery.project
			&& nextProps.articleQuery.project.article
			&& nextProps.articleQuery.project.article.content
			&& !this.state.editorState
		) {
			const article = nextProps.articleQuery.project.article;
			this.setState({
				editorState: JSON.parse(article.content),
				articleId: article._id,
			});
		}
	}

	handleSubmit(_values) {
		const { router } = this.props;

		// on publish?
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

	handleEditorChange(saveBehavior) {
		const values = {};
		const { articleSave } = this.props;

		// set id generated with component and projectId if not exists
		values._id = this.state.articleId;
		values.projectId = this.props.articleQuery.project._id;
		values.title = this.props.title;

		// set article content
		values.content = JSON.stringify(saveBehavior.editorContent);

		if (!values.title) {
			return null;
		}

		articleSave(values)
			.then((response) => {
				console.log('Article saved');
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
				editorState={this.state.editorState}
				handleEditorChange={this.handleEditorChange}
				title={this.props.title}
			/>
		);
	}
}

const selector = formValueSelector('ArticleEditor') // <-- same as form name

const mapStateToProps = (state, props) => {
	const title = selector(state, 'title')

	return {
		title,
	};
};

export default compose(
	articleSaveMutation, articleRemoveMutation,
	articleDetailQuery,
	connect(
		mapStateToProps,
	),
)(ArticleEditorContainer);
