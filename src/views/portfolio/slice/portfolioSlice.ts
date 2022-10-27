import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AllPortfolios, PortfolioState } from '../types';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../../../store/types';

const initialState: PortfolioState = {
  getPortfolioIsLoading: false,
  getPortfolioIsSuccess: false,
  getPortfolioError: { hasError: false, description: '' },
  portfolios: {
    total: 0,
    data: [],
  },
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    getPortfolios(state) {
      state.getPortfolioIsLoading = true;
      state.getPortfolioError = { hasError: false, description: '' };
    },
    getPortfolioSuccess(state, action: PayloadAction<AllPortfolios>) {
      state.getPortfolioIsLoading = false;
      state.portfolios = action.payload;
      state.getPortfolioIsSuccess = true;
    },
    getPortfolioFailure(state, action: PayloadAction<string>) {
      state.getPortfolioIsLoading = false;
      state.getPortfolioError = { hasError: true, description: action.payload };
    },
  },
});

// Actions
export const portfolioActions = portfolioSlice.actions;

// Selectors
export const selectPortfolios = (state: RootState) =>
  state.portfolioReducer.portfolios;
export const selectGetPortfolioLoading = (state: RootState) =>
  state.portfolioReducer.getPortfolioIsLoading;
export const selectGetPortfolioSuccess = (state: RootState) =>
  state.portfolioReducer.getPortfolioIsSuccess;
export const selectGetPortfolioError = (state: RootState) =>
  state.portfolioReducer.getPortfolioError;

// Reducer
const portfolioReducer = portfolioSlice.reducer;
export default portfolioReducer;
