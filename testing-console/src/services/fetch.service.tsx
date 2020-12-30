import { QueryFunctionContext } from 'react-query';

interface QueryKeyParams {
  [key: string]: string;
}
const _fetch = async ({ queryKey }: QueryFunctionContext<QueryKeyParams[]>): Promise<any> => {
  const [, query] = queryKey;
  const data = await fetch(query.url);
  return await data.json();
};
export default _fetch;
