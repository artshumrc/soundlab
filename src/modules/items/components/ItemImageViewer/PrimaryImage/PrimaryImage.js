import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import './PrimaryImage.css';

const PrimaryImage = ({ image }) => {

	if (!image) {
		return null;
	}

	const src = `//iiif.orphe.us/${image.name}/full/1400,/0/default.jpg`;

	const styles = {
		backgroundImage: `url(${src})`,
		backgroundSize: 'contain',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
	};

	return (
		<div className="primaryImageOuter">
			<div
				style={styles}
				className="primaryImage"
			/>
			<Link
				to={`/mirador/${image._id}`}
				className="viewInMiradorLink"
			>
				View in Mirador
			</Link>
		</div>
	);
};

PrimaryImage.propTypes = {
	image: PropTypes.object.isRequired,
};

export default PrimaryImage;
