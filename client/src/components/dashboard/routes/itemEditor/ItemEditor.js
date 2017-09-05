import React from 'react';
import {Field, FieldArray} from 'redux-form';
import Textarea from 'react-textarea-autosize';
import { gql, graphql } from 'react-apollo';
import ItemEditorUploader from '../../components/fileUploader/ItemEditorUploader';
import PrimaryImage from '../../../items/ItemImageViewer/PrimaryImage';
import PrimaryFile from './PrimaryFile';
import Form from '../../components/Form';
import TagEditor from './TagEditor';
import MetaEditor from './MetaEditor';
import './ItemEditor.css';

class _ItemEditor extends React.Component {
	constructor(props) {
		super(props);
		console.log('props', props);
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
		this.isImage = this.isImage.bind(this);
	}

	async handleSubmit(values) {
		try {
			await this.props.createNewItem({ /* TODO */ });
		} catch (err) {
			console.log('err', err.graphQLErrors);
		}
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
						onSubmit={this.handleSubmit}
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

export default graphql(addNewItem, {
	props: ({ mutate }) => ({
		createNewItem: item => mutate({ variables: { item } }),
	}),
})(_ItemEditor);
