import React from 'react';
import PropTypes from 'prop-types';
import { Field, FieldArray } from 'redux-form';
import Textarea from 'react-textarea-autosize';
import { gql, graphql } from 'react-apollo';
import { Row } from 'react-bootstrap';

import Form from '../components/Form';
import TagEditor from '../routes/itemEditor/TagEditor';
import MetaEditor from '../routes/itemEditor/MetaEditor';

// TODO: Format Form
// TODO: Check post method
// TODO: Ensure new project has an associated user
// TODO: Remove autofocus for accessibility reasons


class ProjectEditor extends React.Component {
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
		const inputComponent = props => (<input
			{...props.input}
			placeholder={props.placeholder}
			className={props.className}
			autoFocus
		/>);
		const textComponent = props => (<Textarea
			{...props.input}
			placeholder={props.placeholder}
			className={props.className}
		/>);
		return (
			<div>
				<Form
					onSubmit={this.handleSubmit}
					form="projectEditor"
					initialValues={this.state}
				>
					<Field
						name="title"
						component={inputComponent}
						type="text"
						placeholder="Title..."
						className="itemTitleEdit detailInput"
					/>
					<Field
						name="description"
						className="itemDescriptionEdit detailInput"
						placeholder="Description..."
						component={textComponent}
					/>
					<FieldArray
						name="tags"
						component={tags => (
							<TagEditor tags={tags} />
						)}
					/>
				</Form>
			</div>
		);
	}
}

ProjectEditor.propTypes = {
	createNewProject: PropTypes.function
};

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

export default ProjectEditor;
