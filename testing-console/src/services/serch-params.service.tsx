import { UrlQueryParamsModel } from '../models';

const setUrlQeueryParams = (params: UrlQueryParamsModel): URLSearchParams => {
  return new URLSearchParams(params);
};
export default setUrlQeueryParams;
