import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Button from '../../../../components/common/buttons/Button';
import DashboardNav from '../../../dashboard/components/DashboardNav';
import CoverImageUploader from '../../../dashboard/components/CoverImageUploader';
import { required, maxLength } from '../../../../lib/formHelpers';

import './CollectionEditor.css';


const maxLength200 = maxLength(200);
const maxLength2100 = maxLength(2100);


class CollectionEditor extends React.Component {
	componentWillReceiveProps (nextProps) {
		if (
			(!this.props.collection && nextProps.collection)
		|| this.props.collection !== nextProps.collection
		) {
			this.props.destroy();
			this.props.initialize({ ...nextProps.collection });
		}
	}

	render() {
		const { collection } = this.props;

		return (
			<div className="collectionEditor">

				<h1>{collection ? 'Edit' : 'Create'} Collection</h1>

				<CoverImageUploader />

				<form
					className="collectionEditorForm"
					onSubmit={this.props.handleSubmit}
				>
					<div className="collectionEditorFormInputOuter collectionEditorFormTitleOuter">
						<label>Enter the title of the collection.</label>
						<Field
							name="title"
							type="text"
							component="input"
							placeholder="Your collection title"
							validate={[required, maxLength200]}
						/>
						<span
							className="collectionEditorFormHelp"
						>
							?
						</span>
					</div>

					<div className="collectionEditorFormInputOuter collectionEditorFormDescriptionOuter">
						<label>Enter a brief description of your collection.</label>
						<Field
							name="description"
							type="text"
							component="textarea"
							placeholder="Example description of collection . . . "
							validate={[required, maxLength2100]}
						/>
						<span
							className="collectionEditorFormHelp"
						>
							?
						</span>
					</div>

					<button
						type="submit"
						className={`
							collectionEditorButton
						`}
					>
						Save
					</button>
				</form>
			</div>
		);
	}
}

export default reduxForm({
	form: 'CollectionEditor',
})(CollectionEditor);
