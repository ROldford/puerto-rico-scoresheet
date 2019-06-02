import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function buildings(state=initialState.buildings, action) {
  switch (action.type) {
    case types.TOGGLE_BUILDING_BUILT:
      return state.map((building) => {
        if (building.name === action.buildingName) {
          return Object.assign({}, building, {
            isBuilt: !building.isBuilt
          })
        }
        return building
      })
    case types.TOGGLE_BUILDING_HAS_WORKER:
      return state.map((building) => {
        if (building.name === action.buildingName) {
          return Object.assign({}, building, {
            hasWorker: !building.hasWorker
          })
        }
        return building
      })
    case types.SET_BONUS_INPUT:
      return state.map((building) => {
        if (building.name === action.buildingName) {
          return Object.assign({}, building, {
            bonusInput: Object.assign({}, building.bonusInput, {
              value: action.inputValue
            })
          })
        }
        return building
      })
    default:
      return state
  }
}
