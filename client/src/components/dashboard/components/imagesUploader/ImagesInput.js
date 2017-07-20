import React from 'react';
import S3Upload from 'react-s3-uploader/s3upload';
import CircularProgressbar from 'react-circular-progressbar';
import {Field} from 'redux-form';
import FontAwesome from 'react-fontawesome';
import TextInput from '../../components/TextInput';

export default class ImagesInput extends React.Component {
	constructor(props) {
		super(props);
		this.handleProgress = this.handleProgress.bind(this);
		this.handleFinish = this.handleFinish.bind(this);
		this.handleError = this.handleError.bind(this);
		this.deleteImage = this.deleteImage.bind(this);
		this.imageIndex = this.props.imageIndex;
		this.imageType = this.props.image.type;
		this.state = {
			progress: 0,
			files: [this.props.image]
		};
	}

	componentWillMount() {
		if (!this.props.image.path && process.env.AWS_BUCKET_URL) {
			this._id = Math.random().toString(36).substring(2);
			this.uploadFile();
		}
	}

	handleProgress(percentage) {
		this.setState({progress: percentage});
	}

	inputComponent(props) {
		return <TextInput {...props} />;
	}

	handleFinish(event) {
		const image = {
			name: event.filename,
			type: this.imageType,
			path: `${process.env.AWS_BUCKET_URL}/${event.filename}`,
			thumbPath: `http://iiif.orphe.us/${event.filename}/full/90,/0/default.jpg`,
			_id: this._id
		};
		this.props.updateImageCb(this.imageIndex, image);
	}

	handleError(error) {
		this.props.showError(error)
	}

	uploadFile() {
		this.myUploader = new S3Upload({
			onProgress: this.handleProgress,
			onFinishS3Put: this.handleFinish,
			fileElement: this.state,
			signingUrl: '/s3/sign',
			server: process.env.REACT_APP_AUTH_SERVER,
			onError: this.handleError,
			uploadRequestHeaders: {'x-amz-acl': 'public-read'},
			contentDisposition: 'auto',
			scrubFilename: (filename) => {
				const secureFilename = filename.replace(/[^\w\d_\-\.]+/ig, '');
				return `${this._id}-${secureFilename}`;
			},
			signingUrlMethod: 'GET',
		});
	}

	deleteImage() {
		this.props.deleteImage(this.imageIndex);
	}

	render() {
    if (!process.env.AWS_BUCKET_URL) {
			this.deleteImage();
			this.handleError('AWS_BUCKET_URL is not set, upload cancelled');
			return null
		} else {
			return (
				<div className="row fileInput">
					<div className="col-lg-2 progressBox">
						{this.props.image.path ? <img src={this.props.image.thumbPath} /> :
						<CircularProgressbar percentage={this.state.progress} />}
					</div>
					<div className="col-lg-10">
						<div className="deleteButton">
							<a href="#" onClick={this.deleteImage}>
								<FontAwesome name="times" />
							</a>
						</div>
						<div>
							<Field
								name={`images[${this.props.imageIndex}].label`} component={this.inputComponent} type="text"
								placeholder="Image label..." value={this.props.image.label}
							/>
						</div>
					</div>
				</div>
			);
		}
	}
}
