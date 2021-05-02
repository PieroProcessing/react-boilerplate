import { combineReducers } from '@reduxjs/toolkit';
// import filtersSlice from './filtersSlice';
// import tableSlice from './tableSlice';
// import userSlice from './userSlice';
import toastSlice from './toastSlice';

export const rootReducer = combineReducers({
  // users: userSlice,
  // table: tableSlice,
  // filters: filtersSlice,
  toast: toastSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
