import { spawn } from 'redux-saga/effects';
// eslint-disable-next-line import/no-cycle
import configSagas from '../views/home/sagas/configSagas';
// eslint-disable-next-line import/no-cycle
import portfolioSagas from '../views/portfolio/sagas/portfolioSagas';
// eslint-disable-next-line import/no-cycle
import contactSagas from '../views/contact/sagas/contactSagas';

export default function* rootSaga() {
  yield spawn(configSagas);
  yield spawn(portfolioSagas);
  yield spawn(contactSagas);
}
