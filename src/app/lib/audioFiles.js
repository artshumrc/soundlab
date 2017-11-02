import { publicSettings } from '../../../settings';

/**
 * Get the requested audio file full url
 * @param {Object} audioFile - audio file object from wordpress
 * @returns {Object} full path to requested thumbnail size
 */

const getAudioFileURL = (audioFile) => {
	return `${publicSettings.uploads}${audioFile.attached_file}`;
}

export {
	getAudioFileURL,
};
