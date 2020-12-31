export interface RequestData {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface Support {
  url: string;
  text: string;
}

export interface RequestResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages?: number;
  data: RequestData[];
  support: Support;
}

export interface PostResponseModel {
  name: string;
  job: string;
  id: string;
  createdAt: Date;
}
export interface PostParams {
  url: string;
  body: RequestData;
}
export interface PostBody {
  name: string;
  job: string;
}
export interface UrlQueryParamsModel {
  [key: string]: string;
}
