import { RESUME_PLAYER } from '../actions/actions'
import { NEXT_TRACK } from '../actions/actions'

const initialUIState = {
  isPlaying: false,
  currentIndex: 0
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
