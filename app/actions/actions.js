export const RESUME_PLAYER = 'RESUME_PLAYER'
export const PAUSE_PLAYER = 'PAUSE_PLAYER'


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
