import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import './TextEditor.css';



class TextEditor extends React.Component {

	render() {
		const { text } = this.props;

		return (
			<div className="textEditor">

				<h1>{text ? 'Edit' : 'Create'} Text</h1>

				<form
					className="textEditorForm"
					onSubmit={this.props.handleSubmit}
				>
					<div className="textEditorFormInputOuter textEditorFormTitleOuter">
						<label>Enter the title of the text.</label>
						<Field
							name="title"
							type="text"
							component="input"
							placeholder="Your text title"
						/>
						<span
							className="textEditorFormHelp"
						>
							?
						</span>
					</div>

					<div className="textEditorFormInputOuter textEditorFormDescriptionOuter">
						<label>Enter a brief description of your text.</label>
						<Field
							name="description"
							type="text"
							component="textarea"
							placeholder="Example description of text . . . "
						/>
						<span
							className="textEditorFormHelp"
						>
							?
						</span>
					</div>

					<button
						type="submit"
						className={`
							textEditorButton
						`}
					>
						Save
					</button>
				</form>
			</div>
		);
	}
}

TextEditor.propTypes = {
	text: PropTypes.object,
};

TextEditor.defaultProps = {
	text: null,
};

export default reduxForm({
	form: 'TextEditor',
})(TextEditor);
