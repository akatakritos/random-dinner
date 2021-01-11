import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { restaurantsSlice } from './restaurantsSlice';

const rootReducer = combineReducers({
  [restaurantsSlice.name]: restaurantsSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

export const rootStore = configureStore({
  reducer: rootReducer,
});
