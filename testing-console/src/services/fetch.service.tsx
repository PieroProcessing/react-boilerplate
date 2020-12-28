import { QueryFunctionContext } from 'react-query';
import { Response } from '../models';

interface QueryKeyParams {
  [key: string]: string;
}
const _fetch = async ({ queryKey }: QueryFunctionContext<QueryKeyParams[]>): Promise<Response> => {
  const [, query] = queryKey;
  const data = await fetch(query.url);
  return data.json() as Promise<Response>;
};
export default _fetch;
