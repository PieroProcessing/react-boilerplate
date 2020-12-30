import { PokemonResponse } from './pokemon';
import { RequestResponse, PostResponseModel, PostParams } from './request';

type Response = PokemonResponse | RequestResponse;

export type { Response, PokemonResponse, RequestResponse, PostResponseModel, PostParams };
