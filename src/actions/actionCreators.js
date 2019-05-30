import * as types from './actionTypes';

export function addVpChips(amount) {
  return { type: types.ADD_VP_CHIPS, amount }
}

export function subtractVpChips(amount) {
  return { type: types.SUBTRACT_VP_CHIPS, amount }
}

export function toggleBuildingBuilt(buildingName) {
  return { type: types.TOGGLE_BUILDING_BUILT, buildingName }
}

export function toggleBuildingHasWorker(buildingName) {
  return { type: types.TOGGLE_BUILDING_HAS_WORKER, buildingName }
}

export function setBonusInput(inputValue) {
  return { type: types.SET_BONUS_INPUT, inputValue }
}
