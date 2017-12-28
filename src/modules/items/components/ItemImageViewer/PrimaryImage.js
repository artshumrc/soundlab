import React from 'react';
import PropTypes from 'prop-types';


const PrimaryImage = ({ alt, src }) => {
	if (!src) {
		return null;
	}

	return (
		<img
			alt={alt}
			src={src}
		/>
	);
};

PrimaryImage.propTypes = {
	alt: PropTypes.string,
	src: PropTypes.string,
};

export default PrimaryImage;
