import React from 'react';
import PropTypes from 'prop-types';
import { Field, FieldArray, formValueSelector, reduxForm } from 'redux-form';
import Textarea from 'react-textarea-autosize';
import { gql, graphql } from 'react-apollo';
import { Row } from 'react-bootstrap';
import { connect } from 'react-redux';

import Form from '../components/Form';
import TagEditor from '../routes/itemEditor/TagEditor';
import MetaEditor from '../routes/itemEditor/MetaEditor';

// TODO: Format Form
// TODO: Check post method
// TODO: Ensure new project has an associated user
// TODO: Remove autofocus for accessibility reasons


class ProjectsEditor extends React.Component {
	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	async handleSubmit(values) {
		try {
			await this.props.createNewProject;
		} catch (err) {
			console.log('err', err.graphQLErrors);
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

// ProjectEditor.propTypes = {
// 	createNewProject: PropTypes.function
// };

// const addNewProject = gql`
// mutation projectCreate($title: String!, description: String) {
// 	projectCreate(title: $title, description: $description) {
// 		_id
// 		title
// 		description
// 		users
// 		createdAt
// 	}
// }
// `;

// export default graphql(addNewProject, {
// 	props: ({ mutate }) => ({
// 		createNewProject: (title, description) => mutate({ variables: title, description }),
// 	})
// });

ProjectsEditor = reduxForm({
	form: 'projectsEditor'
})(ProjectsEditor);

const selector = formValueSelector('projectsEditor');
ProjectsEditor = connect(
	(state) => {
		const { title, description } = selector(state, 'title', 'description');
		return {
			title,
			description
		};
	}
)(ProjectsEditor);

export default ProjectsEditor;
