import { RESUME_PLAYER } from '../actions/actions'
import { NEXT_TRACK } from '../actions/actions'
import { TOGGLE_BEING_CATEGORY } from '../actions/searchActions'
import { TOGGLE_TIME_CATEGORY } from '../actions/searchActions'

const initialUIState = {
  isPlaying: false,
  currentIndex: 0,
  displayTime: false,
  displayBeing: false
}

export default function (state = initialUIState, action) {
  console.log('reducer was called with state', state, 'and action', action)
  switch (action.type) {
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
  case 'NEXT_TRACK':
    return Object.assign({}, state, {
      ...state,
      currentIndex: action.currentIndex,
      isPlaying: action.isPlaying
    })
  case 'PREVIOUS_TRACK':
    return Object.assign({}, state, {
      ...state,
      currentIndex: action.currentIndex,
      isPlaying: action.isPlaying
    })
  case 'TOGGLE_BEING_CATEGORY':
    return Object.assign({}, state, {
      ...state,
      displayBeing: action.displayBeing
    })
  case 'TOGGLE_TIME_CATEGORY':
    return Object.assign({}, state, {
      ...state,
      displayTime: action.displayTime
    })
  default:
    return state
  }
}


/*import { PAUSE_PLAYER, RESUME_PLAYER } from '../actions/actions'

const initialUIState = {
  isPlaying:false,

}

export default function uiReducers(state = initialUIState, action) {
  console.log('reducer was called with state', state, 'and action', action)
  switch (action.type) {
  case PAUSE_PLAYER:
    return action.isPlaying
  case RESUME_PLAYER:
    return action.isPlaying

  default:
    return state
  }
}
*/
