import React from 'react';
import PropTypes from 'prop-types';
import { Field, FieldArray, SubmissionError, reduxForm } from 'redux-form';
import Textarea from 'react-textarea-autosize';
import { gql, graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Form from '../../components/Form';
import TagEditor from '../itemEditor/TagEditor';
import MetaEditor from '../itemEditor/MetaEditor';

// TODO: Fix post method
// TODO: Remove autofocus for accessibility reasons

const ProjectEditor = ({ submit }) => (
	<div>
		<div className="topBar">
			<span className="title">Create New Projects</span>
		</div>
		<div className="content">
			<div className="itemEditor">
				<Form
					onSubmit={() => submit}
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
	</div>
	
);

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

export default compose(
	reduxForm({ form: 'projectsEditor' }),
	graphql(addNewProject, {
		props: ({ mutate }) => ({
			submit: project => mutate({ variables: project }),
		})
	})
)(ProjectEditor);
