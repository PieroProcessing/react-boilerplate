import { combineReducers } from '@reduxjs/toolkit';
import formSlice from './formSlice';
// import filtersSlice from './filtersSlice';
// import tableSlice from './tableSlice';
// import userSlice from './userSlice';
import toastSlice from './toastSlice';

export const rootReducer = combineReducers({
  // users: userSlice,
  // table: tableSlice,
  // filters: filtersSlice,
  form: formSlice,
  toast: toastSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
