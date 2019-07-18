import { combineReducers } from 'redux';
import inputReducer from './input';
import stepReducer from './step';

const rootReducer = combineReducers({
  step: stepReducer,
  input: inputReducer,
});

export default rootReducer;
