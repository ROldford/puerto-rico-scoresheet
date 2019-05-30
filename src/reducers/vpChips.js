import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function vpChips(state=initialState.vpChips, action) {
  switch (action.type) {
    case types.ADD_VP_CHIPS:
      return Object.assign({}, state, {
        vpChips: state.vpChips + action.amount
      })
    case types.SUBTRACT_VP_CHIPS:
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
