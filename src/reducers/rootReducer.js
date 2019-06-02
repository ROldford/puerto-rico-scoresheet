import {combineReducers} from 'redux';
import vpChips from './vpChips';
import buildings from './buildings';

const rootReducer = combineReducers({
  vpChips,
  buildings
})

export default rootReducer;
