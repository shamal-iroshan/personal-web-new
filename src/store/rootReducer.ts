import { combineReducers } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import configReducer from '../views/home/slice/configSlice';
import portfolioReducer from '../views/portfolio/slice/portfolioSlice';

const rootReducer = combineReducers({
  configReducer,
  portfolioReducer,
});

export default rootReducer;
