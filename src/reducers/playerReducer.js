import { SET_PLAYER_TRACK, SET_PLAYLIST, RESUME_PLAYER, PAUSE_PLAYER } from '../actions/actions';

export default function (state = {}, action) {

  switch (action.type) {
  case 'SET_PLAYER_TRACK':
    return Object.assign({}, state, {
      ...state,
      currentTrack: action.track,
    });
  case 'SET_PLAYER_PROGRESS':
    return Object.assign({}, state, {
      ...state,
      progress: action.progress,
    });
  case 'SET_PLAYLIST':
    return Object.assign({}, state, {
      ...state,
      tracks: action.tracks,
      currentTrack: action.tracks[0],
    });
  case 'RESUME_PLAYER':
    return Object.assign({}, state, {
      ...state,
      isPlaying: action.isPlaying
    })
  case 'PAUSE_PLAYER':
    return Object.assign({}, state, {
      ...state,
      isPlaying: action.isPlaying
    })
  default:
    return state
  }
}
