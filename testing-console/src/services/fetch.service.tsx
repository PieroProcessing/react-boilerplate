const _fetch = async <T, A >(url: Request, args?: A): Promise<T> => {
  const promise = await fetch(url);
  return (await promise.json()) as T;
};

export default _fetch;
