import React from 'react';
import {Field, FieldArray} from 'redux-form';
import Textarea from 'react-textarea-autosize';
import ItemEditorUploader from '../../components/fileUploader/ItemEditorUploader';
import PrimaryImage from '../../../items/ItemImageViewer/PrimaryImage';
import Form from '../../components/Form';
import TagEditor from './TagEditor';
import MetaEditor from './MetaEditor';
import './ItemEditor.css';

export default class ItemEditor extends React.Component {
	constructor(props) {
		super(props);
    // this.state = {
    //   files: [{title: 'Image title', url: '//iiif.orphe.us/orpheus/art/48.jpg/full/600,/0/default.jpg', fileName: '48.jpg'},
    //     {title: 'Image title', url: '//iiif.orphe.us/orpheus/art/48.jpg/full/600,/0/default.jpg', fileName: '16.jpg'},
    //     {title: 'Image title', url: '//iiif.orphe.us/orpheus/art/38.jpg/full/600,/0/default.jpg', fileName: '38.jpg'},
    //     {title: 'Image title', url: '//iiif.orphe.us/orpheus/art/47.jpg/full/600,/0/default.jpg', fileName: '47.jpg'},
    //     {title: 'Image title', url: '//iiif.orphe.us/orpheus/art/3.jpg/full/600,/0/default.jpg', fileName: '3.jpg'},
    //     {title: 'Image title', url: '//iiif.orphe.us/orpheus/art/95.jpg/full/600,/0/default.jpg', fileName: '95.jpg'},
    //   ]
    // };
		this.state = {
			files: []
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.showError = this.showError.bind(this);
	}

	handleSubmit(values) {
		console.log('values LOG', values);
	}

	showError(error) {
		console.error(error);
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
						onSubmit={this.handleSubmit}
						form="itemEditor"
						initialValues={this.state}
					>
						<Field
							name="files"
							component={files => (files.input.value[0] && files.input.value[0].path ?
								<PrimaryImage
									alt={files.input.value[0].name}
									src={`//iiif.orphe.us/${files.input.value[0].name}/full/600,/0/default.jpg`}
								/> : null)}
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
