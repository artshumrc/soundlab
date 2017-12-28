import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';
import { Field, FieldArray, reduxForm } from 'redux-form';

import Button from '../../../../components/common/buttons/Button';
import DashboardNav from '../../../dashboard/components/DashboardNav';
import ItemEditorUploader from '../../../dashboard/components/ItemEditorUploader';
import ArticleTextEditor from '../ArticleTextEditor';
import { required, maxLength } from '../../../../lib/formHelpers';

import './ArticleEditor.css';


const maxLength2000 = maxLength(2000);


class ArticleEditor extends React.Component {

	render() {
		const { article, files, metadata } = this.props;

		return (
			<div className="articleEditor">
				<form
					className="articleEditorForm"
					onSubmit={this.props.handleSubmit}
				>
					<div className="articleEditorFormInputOuter articleEditorFormTitleOuter">
						<Field
							name="title"
							type="text"
							component="textarea"
							placeholder="Enter title"
							validate={[required, maxLength2000]}
						/>
						<span
							className="articleEditorFormHelp"
						>
							?
						</span>
					</div>

					<ArticleTextEditor
						content={this.props.content}
					/>

					<div className="articleEditorFormInputOuter">
						<button
							type="submit"
							className={`
								articleEditorButton
								articleEditorButtonSubmit
							`}
						>
							Publish
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
	content: PropTypes.string,
};


export default reduxForm({
	form: 'ArticleEditor',
})(ArticleEditor);
