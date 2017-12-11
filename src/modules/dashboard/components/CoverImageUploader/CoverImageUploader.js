import React from 'react';
import Dropzone from 'react-dropzone';
import S3Upload from 'react-s3-uploader/s3upload';

import './CoverImageUploader.css';

export default class CoverImageUploader extends React.Component {
	constructor(props) {
		super(props);
		this.handleFinish = this.handleFinish.bind(this);
		this.uploadFile = this.uploadFile.bind(this);
		this.handleProgress = this.handleProgress.bind(this);
		this.handleError = this.handleError.bind(this);
		this.state = {
			image: this.props.image,
			uploading: false
		};
	}

	handleError(error) {
		console.log('error LOG', error);
	}

	componentWillMount() {
		if (!this.props.image && process.env.REACT_APP_BUCKET_URL) {
			this._id = Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2);
		}
	}

	handleFinish(event) {
		console.log('event LOG', event);
		this.setState({uploading: false});
		const image = {
			name: event.filename,
			type: 'sometype',
			path: `${process.env.REACT_APP_BUCKET_URL}/${event.filename}`,
			thumbPath: `http://iiif.orphe.us/${event.filename}/full/90,/0/default.jpg`,
			_id: this._id
		};
		this.props.image.changeValue('coverImage', image);
	}

	handleProgress(event) {
		console.log('event LOG', event);
	}

	uploadFile(acceptedFile) {
		const fileToUpload = {
			files: [acceptedFile[0]]
		};
		if (fileToUpload.files.length) {
			this.setState({uploading: true});
			this.myUploader = new S3Upload({
				onFinishS3Put: this.handleFinish,
				onProgress: this.handleProgress,
				fileElement: fileToUpload,
				signingUrl: '/s3/sign',
				server: process.env.REACT_APP_SERVER,
				onError: this.handleError,
				uploadRequestHeaders: {'x-amz-acl': 'public-read'},
				contentDisposition: 'auto',
				scrubFilename: (filename) => {
          const secureFilename = filename.replace(/[^\w\d_\-\.]+/ig, ''); // eslint-disable-line
					return `${this._id}-${secureFilename}`;
				},
				signingUrlMethod: 'GET',
				signingUrlWithCredentials: true
			});
		}
	}

	render() {
		const { image } = this.props;
		const backgroundImage = image && image.input && image.input.value ? {background: `url(${image.input.value.path})`} : {};
		return (
			<div className="coverImageUploader">
				<Dropzone className="backgroundImage" accept="image/*" style={backgroundImage} onDrop={this.uploadFile}>
					<div className="text">
						{
							this.state.uploading ?
								'Uploading...'
							:
	              'Drop a cover image'
            }
					</div>
				</Dropzone>
			</div>
		);
	}
}
