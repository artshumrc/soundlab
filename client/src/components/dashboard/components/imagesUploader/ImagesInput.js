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
		this.state = {
			progress: 0,
			files: [this.props.image]
		};
	}

	handleProgress(percentage) {
		this.setState({uploading: true, progress: percentage});
	}

	inputComponent(props) {
		return <TextInput {...props} />;
	}

	handleFinish(event) {
		const image = {
			name: event.filename,
			type: 'image/jpeg',
			path: `${process.env.AWS_BUCKET_URL}/${event.filename}`,
			thumbPath: `http://iiif.orphe.us/${event.filename}/full/90,/0/default.jpg`
		};
		this.props.updateImageCb(this.imageIndex, image);
		this.setState({uploading: false});
	}

	handleError(event) {
		console.log('event handleError LOG', event);
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
			scrubFilename: filename => filename.replace(/[^\w\d_\-\.]+/ig, ''),
			signingUrlMethod: 'GET',
		});
	}

	deleteImage() {
	  this.props.deleteImage(this.imageIndex);
  }

	render() {
		if (!this.props.image.path && !this.state.uploading) {
			this.uploadFile();
		}
		return (
			<div className="row fileInput">

				<div className="col-lg-2 progressBox">
					{this.props.image.path ? <img src={this.props.image.thumbPath} /> : <CircularProgressbar percentage={this.state.progress} />}
				</div>
				<div className="col-lg-10">
          <div className="deleteButton">
            <a href="#" onClick={this.deleteImage}>
              <FontAwesome name="times" />
            </a>
          </div>
					<div>
						<Field name={`images[${this.props.imageIndex}].label`} component={this.inputComponent} type="text" placeholder="Image label..." value={this.props.image.label} />
					</div>
				</div>
			</div>
		);
	}
}
