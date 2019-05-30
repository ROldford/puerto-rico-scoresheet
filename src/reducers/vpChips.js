import * as types from "../actions/actionTypes";
import * as directions from "../actions/changeDirections";
import initialState from "./initialState";

export default function vpChips(state=initialState.vpChips, action) {
  switch (action.type) {
    case types.CHANGE_VP_CHIPS:
      switch (action.direction) {
        case directions.ADD:
          return (state + action.amount)
        case directions.SUBTRACT:
          const newVpChips = state - action.amount;
          if (newVpChips > 0) {
            return newVpChips
          } else {
            return 0
          }
        default:
          return state
      }
    default:
      return state
  }
}
