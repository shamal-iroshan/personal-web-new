import { call, put } from 'redux-saga/effects';
import {
  ApiEndpointUrl,
  ApiRequestMethod,
  publicApiRequest,
} from '../../../utils/apiService';
import errorToast from '../../about/components/toast/errorToast';
// eslint-disable-next-line import/no-cycle
import { portfolioActions } from '../slice/portfolioSlice';
import { AllPortfolios } from '../types';

async function callApi() {
  return publicApiRequest(ApiRequestMethod.GET, ApiEndpointUrl.GET_PORTFOLIOS);
}

export default function* callGetAllPortfolioSaga() {
  try {
    const portfolios: AllPortfolios = yield call(callApi);
    yield put(portfolioActions.getPortfolioSuccess(portfolios));
  } catch (error) {
    console.error('callGetAllPortfolioSaga', error);
    errorToast('Oops!', 'Something went wrong when trying to get portfolios.');
    yield put(portfolioActions.getPortfolioFailure('error'));
  }
}
