import React from 'react';
import PropTypes from 'prop-types';
import { Field, FieldArray, SubmissionError, reduxForm } from 'redux-form';
import Textarea from 'react-textarea-autosize';
import { gql, graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';
import autoBind from 'react-autobind';

import TagEditor from '../itemEditor/TagEditor';
import MetaEditor from '../itemEditor/MetaEditor';

// TODO: Fix post method
// TODO: Remove autofocus for accessibility reasons

class ProjectEditor extends React.Component {

	constructor(props) {
		super(props);

		autoBind(this);
	}

	submit(values) {
		this.props.mutate({
			variables: {
				project: {
					...values
				},
			},
		});
	}

	render() {
		return (
			<div>
				<div className="topBar">
					<span className="title">Create New Projects</span>
				</div>
				<div className="content">
					<div className="itemEditor">
						<form
							onSubmit={this.submit}
							form="projectEditor"
						>
							<Field
								name="title"
								component="input"
								type="text"
								placeholder="Title..."
								className="itemTitleEdit detailInput"
							/>
							<Field
								name="description"
								className="itemDescriptionEdit detailInput"
								placeholder="Description..."
								component="input"
							/>
							{/*
							<FieldArray
								name="tags"
								component={tags => (
								<TagEditor tags={tags} />
							)}
							/>
							*/}
						</form>
					</div>
				</div>
			</div>
		);
	}
}

const addNewProject = gql`
	mutation projectCreate($project: ProjectCreateInputType!) {
		projectCreate(project: $project) {
			title
		}
	}
`;

const ProjectEditorForm = reduxForm({
	form: 'projectsEditor',
})(ProjectEditor);

export default graphql(addNewProject)(ProjectEditorForm);
