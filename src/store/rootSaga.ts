import { spawn } from 'redux-saga/effects';
// eslint-disable-next-line import/no-cycle
import configSagas from '../views/home/sagas/configSagas';

export default function* rootSaga() {
  yield spawn(configSagas);
}
