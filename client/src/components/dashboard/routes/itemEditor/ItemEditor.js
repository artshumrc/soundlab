import React from 'react';
import {Field, FieldArray} from 'redux-form';
import Textarea from 'react-textarea-autosize';
import { gql, graphql } from 'react-apollo';
import ItemEditorUploader from '../../components/fileUploader/ItemEditorUploader';
import PrimaryImage from '../../../../modules/items/components/ItemImageViewer/PrimaryImage';
import PrimaryFile from './PrimaryFile';
import Form from '../../components/Form';
import TagEditor from './TagEditor';
import MetaEditor from './MetaEditor';
import autoBind from 'react-autobind';

import './ItemEditor.css';

class ItemEditor extends React.Component {
	constructor(props) {
		super(props);
		console.log('props', props);

		this.state = {
			files: []
		};
		
		autoBind(this);
	}

	submit(values) {
		this.props.mutate({
			variables: {
				item: {
					...values
				},
			},
			context: {
				user: ''
			}
		});
	}

	showError(error) {
		console.error(error);
	}

	isImage(fileType) {
		return fileType.slice(0, fileType.indexOf('/')) === 'image';
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
			<div className="content">
				<div className="itemImageViewer itemEditor">
					<Form
						onSubmit={this.submit}
						form="itemEditor"
						initialValues={this.state}
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
							component={files => (
								<ItemEditorUploader files={files} showError={this.showError} />
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
					</Form>
				</div>
			</div>
		);
	}
}

const addNewItem = gql`
mutation itemCreate($item: ItemCreateInputType!) {
	itemCreate(item: $item) {
		_id
		title
	}
}
`;

export default graphql(addNewItem)(ItemEditor);
