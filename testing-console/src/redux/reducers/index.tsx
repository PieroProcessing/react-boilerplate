import { combineReducers } from '@reduxjs/toolkit';
import tableSlice from './tableSlice';
import userSlice from './userSlice';

export const rootReducer = combineReducers({
  users: userSlice,
  table: tableSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
