import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';

import Button from '../../../../components/common/buttons/Button';
import DashboardNav from '../../../dashboard/components/DashboardNav';
import ItemEditorUploader from '../../../dashboard/components/ItemEditorUploader';
import { required, maxLength } from '../../../../lib/formHelpers';
import NoResults from '../../../../components/pagination/NoResults';

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
		const { item, files, metadata } = this.props;

		return (
			<div className="itemEditor">

				<h1>{item ? 'Edit' : 'Create'} Item</h1>

				<ItemEditorUploader
					changeValue={this.props.changeFilesValue}
					files={files}
				/>

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

					<div className="itemEditorFormInputOuter">
						<label>Enter metadata for this item.</label>
						<div className="itemEditorMetadata">
							<Grid>
								{metadata.map((field) => {
									const fieldType = '';
									return (
										<Row>
											<Col md="3">
												<Field
													name="fieldType"
													type="text"
													component="input"
													placeholder="Example description of item . . . "
													validate={[required, maxLength200000]}
												/>
											</Col>
											<Col md="3">
												<Field
													name="fieldLabel"
													type="text"
													component="input"
													placeholder="Example description of item . . . "
													validate={[required, maxLength200000]}
												/>
											</Col>
											<Col md="4">
												<Field
													name="fieldValue"
													type="text"
													component="textarea"
													placeholder="Example description of item . . . "
													validate={[required, maxLength200000]}
												/>
											</Col>
										</Row>
									);
								})}
							</Grid>

							{!metadata || !metadata.length ?
								<div className="itemEditorMetadataNoResults">
									<NoResults
										message="No metadata entered for this item."
									/>
								</div>
							: ''}

							<button
								className="itemEditorButton itemEditorAddMetadata"
							>
								<i className="mdi mdi-plus" />
								Add metadata
							</button>
						</div>
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


ItemEditor.propTypes = {
	item: PropTypes.object,
	files: PropTypes.array,
	metadata: PropTypes.array,
	addMetadata: PropTypes.func,
	removeMetadata: PropTypes.func,
};


export default reduxForm({
	form: 'ItemEditor',
})(ItemEditor);
