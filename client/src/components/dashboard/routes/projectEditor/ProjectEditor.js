import React from 'react';
import PropTypes from 'prop-types';
import { Field, FieldArray, SubmissionError, reduxForm } from 'redux-form';
import Textarea from 'react-textarea-autosize';
import { gql, graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';
import autoBind from 'react-autobind';

import Form from '../../components/Form';
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
		console.log('form submit values', values);
	}

	render() {
		return (
			<div>
				<div className="topBar">
					<span className="title">Create New Projects</span>
				</div>
				<div className="content">
					<div className="itemEditor">
						<Form
							onSubmit={this.submit}
							form="projectEditor"
							initialValues={this.state}
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
						</Form>
					</div>
				</div>
			</div>
		);
	}
}

ProjectEditor.propTypes = {
	submit: PropTypes.func.isRequired
};

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

/*
export default ProjectEditorForm;
*/
