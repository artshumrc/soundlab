import React from 'react';
import {Field, FieldArray} from 'redux-form';
import AlertContainer from 'react-alert';
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
		this.showError = this.showError.bind(this);
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

	showError(error) {
		this.state.alert.show(error, {
			type: 'error'
		});
	}

	render() {
		const alertOptions = {
			offset: 14,
			position: 'bottom right',
			theme: 'light',
			time: 5000,
			transition: 'scale',
			type: 'error'
		};

		return (
			<div className="content">
				<AlertContainer ref={a => !this.state.alert && this.setState({alert: a})} {...alertOptions} />
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
							<label htmlFor="attribution">Attribution</label>
							<Field name="attribution" component={this.inputComponent} type="text" placeholder="Attribution..." />
						</div>
						<FieldArray
							name="images" component={images => (<div>
								{images.fields.getAll().map((image, index) => (
									<ImagesInput
										image={image} imageIndex={index} key={index}
										updateImageCb={this.updateImage} deleteImage={this.removeImage} showError={this.showError}
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
