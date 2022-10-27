import { takeLatest } from 'redux-saga/effects';
// eslint-disable-next-line import/no-cycle
import { portfolioActions } from '../slice/portfolioSlice';
// eslint-disable-next-line import/no-cycle
import callGetAllPortfolioSaga from './callGetAllPortfolioSaga';

export default function* portfolioSagas() {
  yield takeLatest(portfolioActions.getPortfolios, callGetAllPortfolioSaga);
}
