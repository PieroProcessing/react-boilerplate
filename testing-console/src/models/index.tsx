import { PokemonResponse } from './pokemon';
import { RequestResponse, RequestData, PostResponseModel, UrlQueryParamsModel, UserState } from './request';
import { JsonPlaceholderModel } from './jsonplaceholder';
import { TableModel, ParamTypes, ResponseModel, InputBaseProps, FiltersModel, FilterModel } from './table';

type Response = PokemonResponse | RequestResponse;

export type {
  FiltersModel,
  FilterModel,
  InputBaseProps,
  JsonPlaceholderModel,
  ParamTypes,
  PokemonResponse,
  PostResponseModel,
  RequestData,
  RequestResponse,
  Response,
  ResponseModel,
  TableModel,
  UrlQueryParamsModel,
  UserState,
};
