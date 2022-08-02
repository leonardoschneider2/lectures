import { combineReducers } from 'redux';
import personalData from './personalData';
import professionalData from './professionalData';

const rootReducer = combineReducers({
  personalData,
  professionalData,
});

export default rootReducer;
