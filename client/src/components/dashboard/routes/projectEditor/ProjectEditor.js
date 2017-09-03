import React from 'react';
import PropTypes from 'prop-types';
import { Field, FieldArray, SubmissionError, reduxForm } from 'redux-form';
import Textarea from 'react-textarea-autosize';
import { gql, graphql } from 'react-apollo';
import { connect } from 'react-redux';

import Form from '../../components/Form';
import TagEditor from '../itemEditor/TagEditor';
import MetaEditor from '../itemEditor/MetaEditor';

// TODO: Fix post method
// TODO: Remove autofocus for accessibility reasons


class ProjectEditor extends React.Component {
	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	async handleSubmit(values, dispatch) {
		const { createNewProject } = this.props;
		try {
			console.log(values);
			await createNewProject(values);
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

ProjectEditor.propTypes = {
	createNewProject: PropTypes.func.isRequired
};

ProjectEditor = reduxForm({
	form: 'projectsEditor'
})(ProjectEditor);

const addNewProject = gql`
mutation projectCreate($project: ProjectCreateInputType!) {
	projectCreate(project: $project) {
		title
	}
}
`;

export default graphql(addNewProject, {
	props: ({ mutate }) => ({
		createNewProject: project => mutate({ variables: project }),
	})
})(ProjectEditor);
