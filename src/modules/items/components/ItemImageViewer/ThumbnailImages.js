import React from 'react';
import PropTypes from 'prop-types';

import ThumbnailImage from './ThumbnailImage';

import './ThumbnailImages.css';


const ThumbnailImages = ({ files }) => {
	if (!files) {
		return null;
	}

	return (
		<div className="thumbnailImages">
			{files.map((file, i) => (
				<ThumbnailImage
					key={file._id}
					{...file}
				/>
			))}
		</div>
	);
};

ThumbnailImages.propTypes = {
	files: PropTypes.array,
};

ThumbnailImages.defaultProps = {
	files: [],
};


export default ThumbnailImages;
