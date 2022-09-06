import { store } from '../middleware/apolloClient';

export const RESUME_PLAYER = 'RESUME_PLAYER';
export const PAUSE_PLAYER = 'PAUSE_PLAYER';
export const SET_PLAYLIST = 'SET_PLAYLIST';
export const SET_PLAYER_PROGRESS = 'SET_PLAYER_PROGRESS';
export const SET_PLAYER_TRACK = 'SET_PLAYER_TRACK';

export const resumePlayer = () => ({
	type: RESUME_PLAYER,
	isPlaying: true,
});

export const pausePlayer = () => ({
	type: PAUSE_PLAYER,
	isPlaying: false,
});

export const setPlaylist = (tracks) => ({
	type: SET_PLAYLIST,
	tracks,
});

export const setPlayerProgress = (progress) => ({
	type: SET_PLAYER_PROGRESS,
	progress,
});

export const setPlayerTrack = (track) => ({
	type: SET_PLAYER_TRACK,
	track,
});
