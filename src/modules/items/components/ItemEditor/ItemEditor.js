import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Button from '../../../../components/common/buttons/Button';
import DashboardNav from '../../../dashboard/components/DashboardNav';
import ItemEditorUploader from '../../../dashboard/components/ItemEditorUploader';
import { required, maxLength } from '../../../../lib/formHelpers';

import './ItemEditor.css';


const maxLength200 = maxLength(200);
const maxLength200000 = maxLength(200000);


class ItemEditor extends React.Component {
	componentWillReceiveProps (nextProps) {
		if (
			(!this.props.item && nextProps.item)
		|| this.props.item !== nextProps.item
		) {
			this.props.destroy();
			this.props.initialize({ ...nextProps.item });
		}
	}

	render() {
		const { item } = this.props;

		return (
			<div className="itemEditor">

				<h1>{item ? 'Edit' : 'Create'} Item</h1>

				<ItemEditorUploader />

				<form
					className="itemEditorForm"
					onSubmit={this.props.handleSubmit}
				>
					<div className="itemEditorFormInputOuter itemEditorFormTitleOuter">
						<label>Title</label>
						<Field
							name="title"
							type="text"
							component="input"
							placeholder="Your item title"
							validate={[required, maxLength200]}
						/>
						<span
							className="itemEditorFormHelp"
						>
							?
						</span>
					</div>

					<div className="itemEditorFormInputOuter itemEditorFormDescriptionOuter">
						<label>Enter a description of your item.</label>
						<Field
							name="description"
							type="text"
							component="textarea"
							placeholder="Example description of item . . . "
							validate={[required, maxLength200000]}
						/>
						<span
							className="itemEditorFormHelp"
						>
							?
						</span>
					</div>

					<button
						type="submit"
						className={`
							itemEditorButton
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
	form: 'ItemEditor',
})(ItemEditor);
