import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import Cover from '../../../../components/common/cover/Cover';
import CoverTitle from '../../../../components/common/cover/CoverTitle';
import BackgroundImage from '../../../../components/common/cover/BackgroundImage';

import './CollectionCover.css';

const CollectionCover = ({ title, coverImage, coverLink, coverLinkText }) => (
	<Cover
		className="collections-cover"
		background={
			<BackgroundImage
				src={
					coverImage ?
					`//iiif.orphe.us/${coverImage}/full/1400,/0/default.jpg`
					: null
				}
			/>
		}
		bottom
		reactsToMouse
	>
		<CoverTitle
			title={title}
			coverLink={coverLink}
			coverLinkText={coverLinkText}
		/>
	</Cover>
);

CollectionCover.propTypes = {
	title: PropTypes.string.isRequired,
	coverImage: PropTypes.string,
	coverLink: PropTypes.string,
	coverLinkText: PropTypes.string,
};

export default CollectionCover;
