import React from 'react';
import Dropzone from 'react-dropzone';
import S3Upload from 'react-s3-uploader/s3upload';

import './TrackUploader.css';


const makeId = () => {
	return Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2);
};



export default class TrackUploader extends React.Component {
	constructor(props) {
		super(props);
		this.handleFinish = this.handleFinish.bind(this);
		this.uploadFile = this.uploadFile.bind(this);
		this.handleProgress = this.handleProgress.bind(this);
		this.handleError = this.handleError.bind(this);

		this.state = {
			_id: makeId(),
			uploading: false,
		};
	}

	handleError(error) {
		console.log('Uploader error', error);
	}

	handleFinish(event) {
		this.setState({ uploading: false });
		const track = {
			name: event.filename,
			url: `https://${process.env.REACT_APP_BUCKET_URL}.s3.amazonaws.com/${event.filename}`,
			_id: this.state._id
		};
		this.props.addFile(track);
	}

	handleProgress(event) {
	}

	uploadFile(acceptedFile) {
		const fileToUpload = {
			files: [acceptedFile[0]]
		};
		if (fileToUpload.files.length) {
			this.setState({
				uploading: true
			});

			const uploader = new S3Upload({
				onFinishS3Put: this.handleFinish,
				onProgress: this.handleProgress,
				fileElement: fileToUpload,
				signingUrl: '/s3/sign',
				s3path: 'uploads/',
				server: process.env.REACT_APP_SERVER,
				onError: this.handleError,
				uploadRequestHeaders: {'x-amz-acl': 'public-read'},
				contentDisposition: 'auto',
				scrubFilename: (filename) => {
          const secureFilename = filename.replace(/[^\w\d_\-\.]+/ig, ''); // eslint-disable-line
					return `${makeId()}-${secureFilename}`;
				},
				signingUrlMethod: 'GET',
				signingUrlWithCredentials: true,
			});
		}
	}

	render() {
		const { track } = this.props;
		const { uploading } = this.state;

		let textValue = 'Upload';

		if (track) {
			textValue = 'Sound uploaded!';
		} else if ( uploading ) {
			textValue = 'Uploading . . . ';
		}

		return (
			<Dropzone className="dropzone" onDrop={this.uploadFile}>
				<div className="text">
					{textValue}
				</div>
			</Dropzone>
		);
	}
}
