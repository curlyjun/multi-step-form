import { combineReducers } from 'redux';
// import inputReducer from './input';
import stepReducer from './step';
import resultReducer from './result';
const rootReducer = combineReducers({
  step: stepReducer,
  result: resultReducer,
  // input: inputReducer,
});

export default rootReducer;
