import {SET_PLAYER_TRACK} from '../actions/actions';
import { NEXT_TRACK } from '../actions/actions';

const initialState = {


};


export default function (state = initialState, action) {

  switch (action.type) {
  case 'SET_PLAYER_TRACK':
    return Object.assign({}, state, {
      ...state,
      title: action.title,
      thumbnail: action.thumbnail,
      byline: action.byline,
      soundCloudLink: action.soundCloudLink,
      id: action.id,
      track: action.track,

    })
  case 'NEXT_TRACK':
    return Object.assign({}, state, {
      ...state,
      isPlaying: action.isPlaying
    })
    default:
      return state
  }
}
