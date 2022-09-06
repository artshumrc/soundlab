import React from 'react';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';

import './FileUploader.css';


export default class FileUploader extends React.Component {
	constructor(props) {
		super(props);
		this.handleDrop = this.handleDrop.bind(this);
	}

	handleDrop(acceptedFiles, rejectedFiles) {
		acceptedFiles.forEach((file) => {
			this.props.addFile(file);
		});
	}

	render() {
		return (
			<div>
			<Dropzone className="dropzone" onDrop={this.handleDrop}>
					<div className="text">Upload</div>
				</Dropzone>
			</div>
		);
	}
}
FileUploader.propTypes = {
	addFile: PropTypes.func.isRequired
};
