import React from 'react';
import PropTypes from 'prop-types';
import { Field, FieldArray } from 'redux-form';
import Textarea from 'react-textarea-autosize';

import Form from '../components/Form';
import TagEditor from '../routes/itemEditor/TagEditor';
import MetaEditor from '../routes/itemEditor/MetaEditor';

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
	createNewProject: PropTypes.node.isRequired
};

export default ProjectEditor;
