import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagMiddleWare = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [logger, sagMiddleWare],
});

sagMiddleWare.run(rootSaga);

export default store;
