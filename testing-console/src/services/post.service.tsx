const _post = async <T, A> ({ url, body, method }: Request, args?: A): Promise<T> => {
  const data = await fetch(url, {
    method: method || 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return (await data.json()) as T;
};
export default _post;
