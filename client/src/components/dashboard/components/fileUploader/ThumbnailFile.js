import React from 'react';
import './ThumbnailFile.css';
import {SortableHandle} from 'react-sortable-hoc';
import FontAwesome from 'react-fontawesome';
import S3Upload from 'react-s3-uploader/s3upload';

export default class ThumbnailFile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showTitle: false,
			files: [this.props.file]
		};
		this.fileIndex = this.props.fileIndex;
		this.fileType = this.props.file.type;

		this.toggleTitleInput = this.toggleTitleInput.bind(this);
		this.uploadFile = this.uploadFile.bind(this);
		this.handleProgress = this.handleProgress.bind(this);
		this.handleFinish = this.handleFinish.bind(this);
		this.setTitle = this.setTitle.bind(this);
	}

	componentWillMount() {
		if (!this.props.file.path && process.env.REACT_APP_BUCKET_URL) {
			this._id = Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2);
			this.uploadFile();
		}
	}

	uploadFile() {
		this.myUploader = new S3Upload({
			onProgress: this.handleProgress,
			onFinishS3Put: this.handleFinish,
			fileElement: this.state,
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

	handleProgress(percentage) {
		this.setState({progress: percentage});
	}

	handleFinish(event) {
		const file = {
			name: event.filename,
			type: this.fileType,
			path: `${process.env.REACT_APP_BUCKET_URL}/${event.filename}`,
			thumbPath: `http://iiif.orphe.us/${event.filename}/full/90,/0/default.jpg`,
			_id: this._id
		};
		this.props.updateFileCb(this.fileIndex, file);
	}

	toggleTitleInput(event) {
		event.preventDefault();
		this.setState({
			showTitle: !this.state.showTitle
		});
	}

	setTitle(event) {
		this.setState({
			title: event.target.value
		});
		const file = this.props.file;
		file.title = event.target.value;
		this.props.updateFileCb(this.fileIndex, file);
	}

	render() {
		const displayTitle = this.state.showTitle ? 'fileDetails' : 'fileDetails fileDetailsHide';
		const DragHandle = SortableHandle(() => <div className="moveButton"><FontAwesome name="bars" /></div>); // This can be any component you want
		return (
			<div className="singleImage">
				<DragHandle />
				{this.props.file.path ? <img
					className="thumbnailImage"
					alt={this.props.file.title}
					src={`//iiif.orphe.us/${this.props.file.name}/square/90,/0/default.jpg`}
					onClick={this.toggleTitleInput}
				/>
          : <div className="fileUploading"><FontAwesome name="circle-o-notch" spin /></div>
        }


				<div className={displayTitle}>
					<div className="textInput">
						<input type="text" onChange={this.setTitle} placeholder="File title" value={this.state.title} />
					</div>
					<div className="fileDetailsButtons">
						<button
							className="deleteFile pull-left"
							onClick={() => {
								this.props.deleteFile(this.fileIndex);
							}}
						><FontAwesome name="trash" /></button>
						<button onClick={this.toggleTitleInput}>Save</button>
					</div>
				</div>
			</div>
		);
	}
}
