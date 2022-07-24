
import { PokemonResponse, RequestResponse } from '../models';
import { XOR } from '../models/utils';

interface QueryKeyParams {
  [key: string]: string;
}
type ResponseFetch = XOR<PokemonResponse, RequestResponse>;

const _fetch = async ({ url }: QueryKeyParams): Promise<ResponseFetch> => {

  const data = await fetch(url);
  return (await data.json()) as ResponseFetch;
};
export default _fetch;
