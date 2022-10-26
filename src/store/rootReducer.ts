import { combineReducers } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import configReducer from '../views/home/slice/configSlice';

const rootReducer = combineReducers({
  configReducer,
});

export default rootReducer;
