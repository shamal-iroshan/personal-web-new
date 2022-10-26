import { call, put } from 'redux-saga/effects';
import {
  ApiEndpointUrl,
  ApiRequestMethod,
  PublicApiRequest,
} from '../../../utils/apiService';
import { Config } from '../types';
// eslint-disable-next-line import/no-cycle
import { configActions } from '../slice/configSlice';
import errorToast from '../../about/components/toast/errorToast';

async function callApi() {
  return PublicApiRequest(ApiRequestMethod.GET, ApiEndpointUrl.GET_CONFIG);
}

export default function* callGetConfigSaga() {
  try {
    const config: Config = yield call(callApi);
    yield put(configActions.getConfigSuccess(config));
  } catch (error) {
    console.error('callGetConfigSaga', error);
    errorToast(
      'Oops!',
      'Something went wrong when trying to get website config.',
    );
    yield put(configActions.getConfigFailure('error'));
  }
}
