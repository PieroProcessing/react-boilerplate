import { PokemonResponse } from './pokemon';
import { RequestResponse, RequestData, PostResponseModel, PostParams, UrlQueryParamsModel } from './request';

type Response = PokemonResponse | RequestResponse;

export type { Response, PokemonResponse, RequestResponse, RequestData, PostResponseModel, PostParams, UrlQueryParamsModel };
