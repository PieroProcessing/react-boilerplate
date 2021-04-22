import { combineReducers } from '@reduxjs/toolkit';
import filtersSlice from './filtersSlice';
import tableSlice from './tableSlice';
import userSlice from './userSlice';

export const rootReducer = combineReducers({
  users: userSlice,
  table: tableSlice,
  filters: filtersSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
