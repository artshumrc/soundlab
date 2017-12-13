import { publicSettings } from '../../../settings';


/**
 * For an object of image sizes from wordpress, return the requested size
 * @param {Object} image - image object from wordpressj
 * @param {String} size - desired size
 * @returns {Object} full path to requested thumbnail size
 */

const getPostThumbnailBySize = (image, size) => {

	const fullFilePath = image.file.split('/');
	fullFilePath.pop();

	if (size in image.sizes) {
		return `${publicSettings.uploads}${fullFilePath.join('/')}/${image.sizes[size].file}`;
	} else {
		return `${publicSettings.uploads}/${image.file}`;
	}

	return null;
}

export {
	getPostThumbnailBySize,
};
