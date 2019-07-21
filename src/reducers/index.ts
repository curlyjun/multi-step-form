import { combineReducers } from 'redux';
import stepReducer from './step';
import resultReducer from './result';

const rootReducer = combineReducers({
  step: stepReducer,
  result: resultReducer,
});

export default rootReducer;
