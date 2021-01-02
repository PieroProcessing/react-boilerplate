import type from '../types';
import { UserAction, UserState } from '../actions/users.action';

const initialState = {
  username: '',
};

export function usersReducer(state = initialState, action: UserAction): UserState {
  switch (action.type) {
    case type.GET_USERS:
      return {
        username: action.payload,
      };
      break;

    default:
      return state;
      break;
  }
}
export type UserReducer = ReturnType<typeof usersReducer>;
