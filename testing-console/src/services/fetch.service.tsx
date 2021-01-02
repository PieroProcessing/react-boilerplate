import { QueryFunctionContext } from 'react-query';
import { PokemonResponse, RequestResponse } from '../models';
import { XOR } from '../models/utils';

interface QueryKeyParams {
  [key: string]: string;
}
type ResponseFetch = XOR<PokemonResponse, RequestResponse>;

const _fetch = async ({ queryKey }: QueryFunctionContext<QueryKeyParams[]>): Promise<ResponseFetch> => {
  const [, query] = queryKey;
  const data = await fetch(query.url);
  return (await data.json()) as ResponseFetch;
};
export default _fetch;
