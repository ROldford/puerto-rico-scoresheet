import * as types from "../actions/actionTypes";
import * as directions from "../actions/changeDirections";
import initialState from "./initialState";

export default function vpChips(state=initialState.vpChips, action) {
  switch (action.type) {
    case types.CHANGE_VP_CHIPS:
      switch (action.direction):
        case directions.ADD:
          return Object.assign({}, state, {
            vpChips: state.vpChips + action.amount
          })
        case directions.SUBTRACT:
          const newVpChips = state.vpChips - action.amount;
          if (newVpChips > 0) {
            return Object.assign({}, state, {
              vpChips: newVpChips
            })
          } else {
            return Object.assign({}, state, {
              vpChips: 0
            })
          }
    default:
      return state
  }
}
