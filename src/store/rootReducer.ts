import { combineReducers } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import configReducer from '../views/home/slice/configSlice';
// eslint-disable-next-line import/no-cycle
import portfolioReducer from '../views/portfolio/slice/portfolioSlice';
// eslint-disable-next-line import/no-cycle
import contactReducer from '../views/contact/slice/contactSlice';

const rootReducer = combineReducers({
  configReducer,
  portfolioReducer,
  contactReducer,
});

export default rootReducer;
