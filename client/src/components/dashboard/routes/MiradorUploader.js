import React from 'react';
import {Field, FieldArray} from 'redux-form';
import Form from '../components/Form';
import TextInput from '../components/TextInput';
import ImagesUploader from '../components/imagesUploader/ImagesUploader';
import ImagesInput from '../components/imagesUploader/ImagesInput';

const validate = (values) => {
	const errors = {};
	if (!values.title) {
		errors.firstName = 'Required';
	}
	if (!values.label) {
		errors.label = 'Required';
	}
	if (!values.abbr) {
		errors.abbr = 'Required';
	}
	if (!values.author) {
		errors.author = 'Required';
	}
  if (!values.seeAlso) {
    errors.seeAlso = 'Required';
  }
  if (!values.attr) {
    errors.attr = 'Required';
  }
	return errors;
};

export default class Test extends React.Component {
	constructor(props) {
		super(props);
		this.onUploadStart = this.onUploadStart.bind(this);
		this.onUploadProgress = this.onUploadProgress.bind(this);
		this.onUploadError = this.onUploadError.bind(this);
		this.onUploadFinish = this.onUploadFinish.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.inputComponent = this.inputComponent.bind(this);
		this.addImage = this.addImage.bind(this);
		this.updateImage = this.updateImage.bind(this);
		this.removeImage = this.removeImage.bind(this);
		this.state = {
			images: []
		};
	}

	onUploadStart(event) {
		console.log('event onUploadStart LOG', event);
	}

	onUploadProgress(event) {
		console.log('event onUploadProgress LOG', event);
	}

	onUploadError(event) {
		console.log('event onUploadError LOG', event);
	}

	onUploadFinish(event) {
		console.log('event onUploadFinish LOG', event);
	}

	handleSubmit(event) {
		console.log('event LOG', event);
	}

	inputComponent(props) {
		return <TextInput {...props} />;
	}

	addImage(image) {
		console.log('this.state LOG', this.state);
		const currentImages = this.state.images;
		currentImages.push(image);
		this.setState({images: currentImages});
	}

	updateImage(index, image) {
		const currentImages = this.state.images;
		currentImages[index] = image;
		this.setState({images: currentImages});
	}

	removeImage(index) {
    const currentImages = this.state.images;
    currentImages.splice(index, 1);
    this.setState(currentImages);
  }

	render() {
		console.log('process.env LOG', process.env);
		return (
			<div className="content">
				<div className="container">
					<Form
						onSubmit={this.handleSubmit} validate={validate} form="exampleForm"
						initialValues={this.state}
					>
						<div>
							<label htmlFor="title">Title</label>
							<Field name="title" component={this.inputComponent} type="text" placeholder="Title..." />
						</div>
						<div>
							<label htmlFor="label">Label</label>
							<Field name="label" component={this.inputComponent} type="text" placeholder="Label..." />
						</div>
						<div>
							<label htmlFor="abbr">Abbreviation</label>
							<Field name="abbr" component={this.inputComponent} type="text" placeholder="Abbreviation..." />
						</div>
						<div>
							<label htmlFor="author">Author</label>
							<Field name="author" component={this.inputComponent} type="text" placeholder="Author..." />
						</div>
						<div>
							<label htmlFor="seeAlso">See Also</label>
							<Field name="seeAlso" component={this.inputComponent} type="text" placeholder="See Also..." />
						</div>
						<div>
							<label htmlFor="attr">Attribution</label>
							<Field name="attr" component={this.inputComponent} type="text" placeholder="Attribution..." />
						</div>
						<FieldArray
							name="images" component={images => (<div>
								{images.fields.getAll().map((image, index) => (<ImagesInput
									image={image} imageIndex={index} key={index}
									updateImageCb={this.updateImage} deleteImage={this.removeImage}
								/>))}
							</div>)
            }
						/>
					</Form>
					<ImagesUploader addImage={this.addImage} />
				</div>
			</div>

		);
	}
}
