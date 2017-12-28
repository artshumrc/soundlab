import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import autoBind from 'react-autobind';

import PrimaryImage from './PrimaryImage';
import ThumbnailImages from './ThumbnailImages';

import './ItemImageViewer.css';


class ItemImageViewer extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			activeImage: null,
		};

		autoBind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (
			nextProps.files
			&& this.props.files
		) {

		}
	}

	setActiveFile(file) {
		const activeImage = `//iiif.orphe.us/orpheus/art/${file.path}.jpg/full/750,/0/default.jpg`;

	}


	render() {
		const { files, title } = this.props;
		const { activeImage } = this.state;

		return (
			<div className="itemImageViewer">
				<PrimaryImage
					alt={title}
					src={activeImage}
				/>
				<ThumbnailImages
					files={files}
				/>
			</div>
		);
	}
}

ItemImageViewer.propTypes = {
	title: PropTypes.string,
	files: PropTypes.array,
};

ItemImageViewer.defaultProps = {
	title: '',
	files: [],
};

export default ItemImageViewer;
