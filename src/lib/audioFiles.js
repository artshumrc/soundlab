/**
 * Get the requested audio file full url
 * @param {Object} audioFile - audio file object from wordpress
 * @returns {Object} full path to requested thumbnail size
 */

const getAudioFileURL = (audioFile) => {
	return `${process.env.REACT_APP_WORDPRESS_UPLOADS_URL}${audioFile.attached_file}`;
}

export {
	getAudioFileURL,
};
