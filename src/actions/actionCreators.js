import * as types from './actionTypes';

export function addVpChips(amount) {
  return { type: ADD_VP_CHIPS, amount }
}

export function subtractVpChips(amount) {
  return { type: SUBTRACT_VP_CHIPS, amount }
}

export function toggleBuildingBuilt(buildingName) {
  return { type: TOGGLE_BUILDING_BUILT, buildingName }
}

export function toggleBuildingHasWorker(buildingName) {
  return { type: TOGGLE_BUILDING_HAS_WORKER, buildingName }
}

export function setIslandSpacesOccupied(amount) {
  return { type: SET_ISLAND_SPACES_OCCUPIED, amount }
}

export function setTotalColonists(amount) {
  return { type: SET_TOTAL_COLONISTS, amount }
}
