import { combineReducers } from 'redux';
import { usersReducer } from './users.reducers';

export const rootReducer = combineReducers({
  users: usersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
