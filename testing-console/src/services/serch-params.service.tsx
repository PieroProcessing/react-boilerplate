interface UrlQueryParamsModel {
  [key: string]: string;
}
const setUrlQeueryParams = (params: UrlQueryParamsModel): URLSearchParams => {
  return new URLSearchParams(params);
};
export default setUrlQeueryParams;
