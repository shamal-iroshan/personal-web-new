import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Config, ConfigState } from '../types';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../../../store/types';

const initialState: ConfigState = {
  getConfigIsLoading: false,
  getConfigIsSuccess: false,
  getConfigError: { hasError: false, description: '' },
  config: undefined,
};

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    getConfig(state) {
      state.getConfigIsLoading = true;
      state.getConfigError = { hasError: false, description: '' };
    },
    getConfigSuccess(state, action: PayloadAction<Config>) {
      state.getConfigIsLoading = false;
      state.config = action.payload;
      state.getConfigIsSuccess = true;
    },
    getConfigFailure(state, action: PayloadAction<string>) {
      state.getConfigIsLoading = false;
      state.getConfigError = { hasError: true, description: action.payload };
    },
  },
});

// Actions
export const configActions = configSlice.actions;

// Selectors
export const selectConfig = (state: RootState) => state.configReducer.config;
export const selectGetConfigLoading = (state: RootState) =>
  state.configReducer.getConfigIsLoading;
export const selectGetConfigSuccess = (state: RootState) =>
  state.configReducer.getConfigIsSuccess;
export const selectGetConfigError = (state: RootState) =>
  state.configReducer.getConfigError;

// Reducer
const configReducer = configSlice.reducer;
export default configReducer;
