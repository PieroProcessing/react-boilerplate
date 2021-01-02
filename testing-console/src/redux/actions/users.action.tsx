import type from '../types';

export type UserState = {
  username: string | null;
};

export const getUser = (username: string) => ({
  type: type.GET_USERS,
  payload: username,
});

export type UserAction = ReturnType<typeof getUser>;
