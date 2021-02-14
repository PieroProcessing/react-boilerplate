import { UserState } from '../../models';
import type from '../types';

export const getUser = (username: string, payload: UserState) => ({
  type: type.GET_USERS,
  payload,
});

export type UserAction = ReturnType<typeof getUser>;
