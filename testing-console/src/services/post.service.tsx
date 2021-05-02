import { UserModel } from '../models';

const _post = async <T, A>({ url, method }: { url: string; method: string }, body: unknown, args?: A): Promise<T | null> => {
  const user: UserModel | null = JSON.parse(localStorage.getItem('user') as string) as UserModel | null;
  const data = await fetch(url, {
    method: method || 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(user ? { Authorization: `Bearer ${user.token}` } : {}),
    },
    body: JSON.stringify(body),
  });
  try {
    return (await data.json()) as T;
  } catch (error) {
    return null;
  }
};
export default _post;
