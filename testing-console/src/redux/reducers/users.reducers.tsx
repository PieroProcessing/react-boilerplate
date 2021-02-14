import type from '../types';
import { UserAction } from '../actions/users.action';
import { UserState } from '../../models';

const initialState = {
  username: '',
  users: [],
  loading: false,
  error: null,
};

export function usersReducer(state = initialState, action: UserAction): UserState {
  switch (action.type) {
    case type.GET_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload.users,
      };
    case type.GET_USERS:
      return {
        ...state,
        users: action.payload.users,
      };
    default:
      return state;
  }
}
export type UserReducer = ReturnType<typeof usersReducer>;
