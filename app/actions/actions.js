import { store } from '../middleware/apolloClient'


export const RESUME_PLAYER = 'RESUME_PLAYER'
export const PAUSE_PLAYER = 'PAUSE_PLAYER'
export const NEXT_TRACK = 'NEXT_TRACK'
export const PREVIOUS_TRACK = 'PREVIOUS_TRACK'
export const SET_PLAYER_TRACK = 'SET_PLAYER_TRACK'

export function resumePlayer() {
  return {
    type: RESUME_PLAYER,
    isPlaying:true
  }
}

export function pausePlayer() {
  return {
    type: PAUSE_PLAYER,
    isPlaying:false
  }
}

export function nextTrack(track) {

  return {
    type: NEXT_TRACK,
    currentIndex: store.getState().ui.currentIndex + 1,
    isPlaying:false
  }
}

export function previousTrack() {

  return {
    type: PREVIOUS_TRACK,
    currentIndex: store.getState().ui.currentIndex - 1,
    isPlaying:false

  }
}

export function setPlayerTrack(title, thumbnail, byline, soundCloudLink, id, track) {

  return {
    type: SET_PLAYER_TRACK,
    title,
    thumbnail,
    byline,
    soundCloudLink,
    id,
    track

  }
}
