import { store } from '../apollo'

export const TOGGLE_BEING_CATEGORY = 'TOGGLE_BEING_CATEGORY'
export const TOGGLE_TIME_CATEGORY = 'TOGGLE_TIME_CATEGORY'



export function toggleBeingCategory() {
  return {
    type: TOGGLE_BEING_CATEGORY,
    displayBeing:!store.getState().ui.displayBeing
  }
}

export function toggleTimeCategory() {
  return {
    type: TOGGLE_TIME_CATEGORY,
    displayTime:!store.getState().ui.displayTime
  }
}
