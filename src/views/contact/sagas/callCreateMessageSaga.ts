import { PayloadAction } from '@reduxjs/toolkit';
import { call, put } from 'redux-saga/effects';
import { CreateMessage } from '../types';
import {
  ApiEndpointUrl,
  ApiRequestMethod,
  publicApiRequest,
} from '../../../utils/apiService';
import errorToast from '../../about/components/toast/errorToast';
// eslint-disable-next-line import/no-cycle
import { contactActions } from '../slice/contactSlice';
import successToast from '../../about/components/toast/successToast';

async function callApi(data: CreateMessage) {
  return publicApiRequest(
    ApiRequestMethod.POST,
    ApiEndpointUrl.CREATE_MESSAGE,
    data,
  );
}

export default function* callCreateMessageSaga({
  payload,
}: PayloadAction<CreateMessage>) {
  try {
    yield call(callApi, payload);
    yield put(contactActions.createMessageSuccess());
    successToast('Hooray!', 'Message sent successfully!');
  } catch (error) {
    console.error('callCreateMessageSaga', error);
    errorToast(
      'Oops!',
      'Something went wrong when trying to send the message.',
    );
    yield put(contactActions.createMessageFailure('error'));
  }
}
