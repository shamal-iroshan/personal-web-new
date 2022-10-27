import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContactState, CreateMessage } from '../types';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../../../store/types';

const initialState: ContactState = {
  createMessageIsLoading: false,
  createMessageIsSuccess: false,
  createMessageError: { hasError: false, description: '' },
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    createMessage(state, action: PayloadAction<CreateMessage>) {
      state.createMessageIsLoading = true;
      state.createMessageError = { hasError: false, description: '' };
      state.createMessageIsSuccess = false;
    },
    createMessageSuccess(state) {
      state.createMessageIsLoading = false;
      state.createMessageIsSuccess = true;
    },
    createMessageFailure(state, action: PayloadAction<string>) {
      state.createMessageIsLoading = false;
      state.createMessageError = {
        hasError: true,
        description: action.payload,
      };
      state.createMessageIsSuccess = false;
    },
  },
});

// Action
export const contactActions = contactSlice.actions;

// Selectors
export const selectCreateMessageIsLoading = (state: RootState) =>
  state.contactReducer.createMessageIsLoading;
export const selectCreateMessageIsSuccess = (state: RootState) =>
  state.contactReducer.createMessageIsSuccess;
export const selectCreateMessageError = (state: RootState) =>
  state.contactReducer.createMessageError;

// Reducer
const contactReducer = contactSlice.reducer;
export default contactReducer;
