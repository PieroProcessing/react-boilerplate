const _fetch = async <T, A>(url: string, args?: A): Promise<T> => {
  const promise = await fetch(`https://reqres.in/api/${url}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return (await promise.json()) as T;
};

export default _fetch;
