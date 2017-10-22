import { publicSettings } from '../../../settings';


const getPostThumbnailBySize = (image, size) => {

	const fullFilePath = image.file.split('/');
	fullFilePath.pop();

	if (size in image.sizes) {
		return `${publicSettings.uploads}${fullFilePath.join('/')}/${image.sizes[size].file}`;
	}

	return null;
}

export {
	getPostThumbnailBySize,
};
