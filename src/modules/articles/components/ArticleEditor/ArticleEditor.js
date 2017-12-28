import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';
import { Field, FieldArray, reduxForm } from 'redux-form';

import Button from '../../../../components/common/buttons/Button';
import DashboardNav from '../../../dashboard/components/DashboardNav';
import ItemEditorUploader from '../../../dashboard/components/ItemEditorUploader';
import ExampleEditor from '../ExampleEditor';
import { required, maxLength } from '../../../../lib/formHelpers';

import './ArticleEditor.css';


const maxLength200 = maxLength(200);
const maxLength200000 = maxLength(200000);


class ArticleEditor extends React.Component {

	render() {
		const { article, files, metadata } = this.props;

		return (
			<div className="articleEditor">

				<div className="articleEditorHead">
					<h1>{article ? 'Edit' : 'Create'} Article</h1>

					<ItemEditorUploader
						changeValue={this.props.changeFilesValue}
						files={files}
					/>
				</div>

				<form
					className="articleEditorForm"
					onSubmit={this.props.handleSubmit}
				>
					<div className="articleEditorFormInputOuter articleEditorFormTitleOuter">
						<label>Title</label>
						<Field
							name="title"
							type="text"
							component="input"
							placeholder="Your article title"
							validate={[required, maxLength200]}
						/>
						<span
							className="articleEditorFormHelp"
						>
							?
						</span>
					</div>

					<ExampleEditor />


					<div className="articleEditorFormInputOuter">
						<button
							type="submit"
							className={`
								articleEditorButton
							`}
						>
							Save
						</button>
					</div>
				</form>
			</div>
		);
	}
}


ArticleEditor.propTypes = {
	article: PropTypes.object,
	files: PropTypes.array,
	metadata: PropTypes.array,
	addMetadata: PropTypes.func,
	removeMetadata: PropTypes.func,
};


export default reduxForm({
	form: 'ArticleEditor',
})(ArticleEditor);
