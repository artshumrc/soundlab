import React from 'react';
import PropTypes from 'prop-types';
import { Field, FieldArray, SubmissionError, reduxForm } from 'redux-form';
import Textarea from 'react-textarea-autosize';
import { gql, graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';
import autoBind from 'react-autobind';

import TagEditor from '../../items/ItemEditor/TagEditor';
import MetaEditor from '../../items/ItemEditor/MetaEditor';

class ProjectEditor extends React.Component {

	constructor(props) {
		super(props);

		autoBind(this);
	}

	submit(values, e) {
		console.log('new project', values);
		e.preventDefault();
		/*
		this.props.mutate({
			variables: {
				project: {
					...values
				},
			},
		});
		*/
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
						>
							<Field
								name="hostname"
								component="input"
								type="text"
								placeholder="myapp.orphe.us"
								className="itemHostnameEdit detailInput"
							/>
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
							<button type="submit">Submit</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

const addNewProject = gql`
	mutation projectCreate($project: ProjectInputType!) {
		projectCreate(project: $project) {
			title
		}
	}
`;

const ProjectEditorForm = reduxForm({
	form: 'projectsEditor',
})(ProjectEditor);

export default graphql(addNewProject)(ProjectEditorForm);
