import { PokemonResponse } from './pokemon';
import { RequestResponse, RequestData, PostResponseModel,  UrlQueryParamsModel, UserState } from './request';
import { JsonPlaceholderModel } from './jsonplaceholder';

type Response = PokemonResponse | RequestResponse;

export type {
  Response,
  PokemonResponse,
  RequestResponse,
  RequestData,
  PostResponseModel,
  UrlQueryParamsModel,
  JsonPlaceholderModel,
  UserState,
};
