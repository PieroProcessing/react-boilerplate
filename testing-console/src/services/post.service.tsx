import { PostParams, RequestResponse } from '../models';

const _post = async ({ url, body }: PostParams): Promise<RequestResponse> => {
  const data = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return (await data.json()) as Promise<RequestResponse>;
};
export default _post;
