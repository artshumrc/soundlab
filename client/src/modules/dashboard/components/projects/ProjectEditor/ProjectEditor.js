import React from 'react';
import PropTypes from 'prop-types';
import { Field, FieldArray, SubmissionError, reduxForm } from 'redux-form';
import Textarea from 'react-textarea-autosize';
import { connect } from 'react-redux';
import autoBind from 'react-autobind';
import MetaEditor from '../../../routes/items/ItemEditor/MetaEditor';

const ProjectEditor = ({ handleSubmit }) => (
	<div>
		<div className="topBar">
			<span className="title">Create New Projects</span>
		</div>
		<div className="content">
			<div className="itemEditor">
				<form
					onSubmit={handleSubmit}
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

export default reduxForm({
	form: 'projectsEditor',
})(ProjectEditor);
