import { UserModel } from '../models';
import { localhost } from './api';

const _fetch = async <T, A>(url: string, args?: A): Promise<T | null> => {
  const user: UserModel | null = JSON.parse(localStorage.getItem('user') as string) as UserModel | null;
  const promise = await fetch(`${localhost}${url}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...(user ? { Authorization: `Bearer ${user.token}` } : {}),
    },
  });
  try {
    return (await promise.json()) as T;
  } catch (error) {
    return null;
  }
};

export default _fetch;
