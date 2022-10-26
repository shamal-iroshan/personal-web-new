import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
// eslint-disable-next-line import/no-cycle
import rootReducer from './rootReducer';
// eslint-disable-next-line import/no-cycle
import rootSaga from './rootSaga';

const sagMiddleWare = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [logger, sagMiddleWare],
});

sagMiddleWare.run(rootSaga);

export default store;
