import React from 'react';
import PropTypes from 'prop-types';
import { Field, FieldArray, SubmissionError, reduxForm } from 'redux-form';
import Textarea from 'react-textarea-autosize';
import { gql, graphql } from 'react-apollo';
import { connect } from 'react-redux';

import Form from '../components/Form';
import TagEditor from '../routes/itemEditor/TagEditor';
import MetaEditor from '../routes/itemEditor/MetaEditor';

// TODO: Check post method
// TODO: Ensure new project has an associated user (this is done in mutation)
// TODO: Remove autofocus for accessibility reasons


class ProjectsEditor extends React.Component {
	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	async handleSubmit(values, dispatch) {
		try {
			console.log(values);
			await this.props.createNewProject(values);
			return {};
		} catch (err) {
			throw new SubmissionError({ _error: 'your error' });
		}
	}

	render() {

		return (
			<div className="content">
				<div className="itemEditor">
					<Form
						onSubmit={this.handleSubmit}
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
						<FieldArray
							name="tags"
							component={tags => (
								<TagEditor tags={tags} />
							)}
						/>
					</Form>
				</div>
			</div>
		);
	}
}

ProjectsEditor.propTypes = {
	createNewProject: PropTypes.func.isRequired
};

// $project: projectInputType

const addNewProject = gql`
mutation projectCreate($title: String!, $description: String) { 
	projectCreate(title: $title, description: $description) {
		_id
		title
		description
		users
		createdAt
	}
}
`;


ProjectsEditor = reduxForm({
	form: 'projectsEditor'
})(ProjectsEditor);

export default graphql(addNewProject, {
	props: ({ mutate }) => ({
		createNewProject: (title, description) => mutate({ variables: title, description }),
	})
})(ProjectsEditor);
