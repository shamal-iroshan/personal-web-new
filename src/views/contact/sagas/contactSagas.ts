import { takeLatest } from 'redux-saga/effects';
// eslint-disable-next-line import/no-cycle
import { contactActions } from '../slice/contactSlice';
// eslint-disable-next-line import/no-cycle
import callCreateMessageSaga from './callCreateMessageSaga';

export default function* contactSagas() {
  yield takeLatest(contactActions.createMessage, callCreateMessageSaga);
}
