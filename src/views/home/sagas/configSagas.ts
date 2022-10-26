import { takeLatest } from 'redux-saga/effects';
// eslint-disable-next-line import/no-cycle
import { configActions } from '../slice/configSlice';
// eslint-disable-next-line import/no-cycle
import callGetConfigSaga from './callGetConfigSaga';

export default function* configSagas() {
  yield takeLatest(configActions.getConfig, callGetConfigSaga);
}
