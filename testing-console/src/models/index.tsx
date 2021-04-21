import { PokemonResponse } from './pokemon';
import { RequestResponse, RequestData, PostResponseModel, UrlQueryParamsModel, UserState } from './request';
import { JsonPlaceholderModel } from './jsonplaceholder';
import { TableModel, ParamTypes, ResponseModel } from './table';

type Response = PokemonResponse | RequestResponse;

export type {
  TableModel,
  ParamTypes,
  ResponseModel,
  Response,
  PokemonResponse,
  RequestResponse,
  RequestData,
  PostResponseModel,
  UrlQueryParamsModel,
  JsonPlaceholderModel,
  UserState,
};
