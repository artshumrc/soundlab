import React from 'react';
import { compose } from 'react-apollo';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { formValueSelector } from 'redux-form';
import autoBind from 'react-autobind';
import shortid from 'shortid';
import { EditorState, convertToRaw } from 'draft-js';
import _s from 'underscore.string';

import ArticleEditor from '../../components/ArticleEditor';
import articleDetailQuery from '../../graphql/queries/detail';
import articleSaveMutation from '../../graphql/mutations/save';
import articleRemoveMutation from '../../graphql/mutations/remove';


class ArticleEditorContainer extends React.Component {
	constructor(props) {
		super(props);
		autoBind(this);


		let editorState;
		// if creating a new article, initialize with editorstate empty
		if (props.location.pathname === '/articles/create') {
			editorState = convertToRaw(EditorState.createEmpty().getCurrentContent());
		}

		this.state = {
			articleId: shortid.generate(),
			files: [],
			metadata: [],
			editorState,
		};
	}

	componentWillReceiveProps(nextProps) {
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

	async handleSubmit() {
		const values = {};
		const { articleSave, router } = this.props;

		// set id generated with component and projectId if not exists
		values._id = this.state.articleId;
		values.projectId = this.props.articleQuery.project._id;
		values.title = this.props.title;

		// set article content
		// values.content = JSON.stringify(saveBehavior.editorContent);

		if (!values.title) {
			return null;
		}

		await articleSave(values)
			.then((response) => {
				console.log('Article saved');
				router.replace(`/articles/${_s.slugify(values.title)}`)
			})
			.catch((err) => {
				console.error(err);
			});
	}

	async handleRemove(articleId) {
		const { articleRemove, router } = this.props;

		await articleRemove(articleId)
			.then((response) => {
				router.replace('/articles');
			})
			.catch((err) => {
				console.error(err);
			});
	}

	async handleEditorChange(saveBehavior) {
		const values = {};
		const { articleSave } = this.props;

		// set id generated with component and projectId if not exists
		values._id = this.state.articleId;
		values.projectId = this.props.articleQuery.project._id;
		values.title = this.props.title;

		// TODO: find better solution for preventing this
		// prevent false submit before editor is initialized
		if (
			saveBehavior.editorContent.blocks
		&& saveBehavior.editorContent.blocks.length
		&& !saveBehavior.editorContent.blocks[0].text.length
		) {
			return null
		}

		// set article content
		values.content = JSON.stringify(saveBehavior.editorContent);

		if (!values.title) {
			return null;
		}

		await articleSave(values)
			.then((response) => {
				console.log('Article saved');
			})
			.catch((err) => {
				console.error(err);
			});
	}

	render() {
		const { files, editorState } = this.state;

		let article;

		if (
			this.props.articleQuery
			&& this.props.articleQuery.project
			&& this.props.articleQuery.project.article
		) {
			article = this.props.articleQuery.project.article;
		}

		if (!editorState) {
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
				editorState={editorState}
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
	withRouter,
)(ArticleEditorContainer);
