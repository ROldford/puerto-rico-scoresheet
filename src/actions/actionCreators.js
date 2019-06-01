import * as types from './actionTypes';

export function changeVpChips(direction, amount) {
  return { type: types.CHANGE_VP_CHIPS, direction, amount }
}

export function toggleBuildingBuilt(buildingName) {
  return { type: types.TOGGLE_BUILDING_BUILT, buildingName }
}

export function toggleBuildingHasWorker(buildingName) {
  return { type: types.TOGGLE_BUILDING_HAS_WORKER, buildingName }
}

export function setBonusInput(buildingName, inputValue) {
  return { type: types.SET_BONUS_INPUT, buildingName, inputValue }
}
