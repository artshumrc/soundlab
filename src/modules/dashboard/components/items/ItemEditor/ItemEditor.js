import React from 'react';
import { Field, FieldArray, SubmissionError, reduxForm } from 'redux-form';
import Textarea from 'react-textarea-autosize';
import { gql, graphql } from 'react-apollo';

import ItemEditorUploader from '../../../components/FileUploader/ItemEditorUploader';
import PrimaryImage from '../../../../items/components/ItemImageViewer/PrimaryImage';
import PrimaryFile from './PrimaryFile';
import TagEditor from './TagEditor';
import MetaEditor from './MetaEditor';
import autoBind from 'react-autobind';

import './ItemEditor.css';

const inputComponent = props => (
	<input
		{...props.input}
		placeholder={props.placeholder}
		className={props.className}
	/>
);

const textComponent = props => (
	<Textarea
		{...props.input}
		placeholder={props.placeholder}
		className={props.className}
	/>
);

class ItemEditor extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			files: []
		};

		autoBind(this);
	}

	showError(error) {
		console.error(error);
	}

	isImage(fileType) {
		return fileType.slice(0, fileType.indexOf('/')) === 'image';
	}

	render() {

		return (
			<div className="content">
				<div className="itemImageViewer itemEditor">
					<form
						form="itemEditor"
						onSubmit={this.props.handleSubmit}
					>
						<Field
							name="files"
							component={files => (files.input.value[0] && files.input.value[0].path ?
								this.isImage(files.input.value[0].type) ?
									<PrimaryImage
										alt={files.input.value[0].name}
										src={`//iiif.orphe.us/${files.input.value[0].name}/full/600,/0/default.jpg`}
									/> :
									<PrimaryFile file={files.input.value[0]} /> : null)}
						/>
						<FieldArray
							name="files"
							component={({ files }) => (
								<ItemEditorUploader
									files={files}
									showError={this.showError}
								/>
              )}
						/>
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
						<FieldArray
							name="meta"
							component={meta => (
								<MetaEditor meta={meta} />
              )}
						/>
						<button type="submit">Submit</button>
					</form>
				</div>
			</div>
		);
	}
}

export default reduxForm({
	form: 'itemsEditor',
})(ItemEditor);
