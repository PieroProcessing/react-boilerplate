import { combineReducers } from '@reduxjs/toolkit';
import userSlice from './userSlice';

export const rootReducer = combineReducers({
  users: userSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
