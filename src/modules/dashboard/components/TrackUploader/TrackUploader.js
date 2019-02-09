import React from 'react';
import Dropzone from 'react-dropzone';
import S3Upload from 'react-s3-uploader/s3upload';
import $ from 'jquery';

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
			name: event.title.rendered,
		    url: event.source_url,
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
		    let apiUrl = `${process.env.ADMIN_URL}/wp-json/wp/v2/media`;
		    let formData = new FormData();
		    formData.append('file', acceptedFile[0]);
		    let _this = this;

		    $.ajax({
                        url: apiUrl,
			method: 'POST',
                        data: formData,
                        processData: false,
                        contentType: false,
			headers: {
			    Accept: 'application/json',
			    'Content-Type': 'multipart/form-data',
			    'Authorization': 'Bearer ' + this.props.token,
			    'Content-Disposition': `attachment; filename=${acceptedFile[0].name}`
			}
                    }).done( function(response) {
			_this.handleFinish(response);
		    }).fail( function(error) {
			_this.handleError(error);
		    });
		}
	}

	render() {
	    const { track, token } = this.props;
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
