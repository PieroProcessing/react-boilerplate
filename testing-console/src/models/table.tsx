import { RequestData } from './request';

export interface TableModel {
  [key: string]: ResponseModel;
}
export interface ResponseModel {
  [key: string]: unknown;
  data: RequestData[];
}
export interface ParamTypes {
  content: string;
  action: string;
}
