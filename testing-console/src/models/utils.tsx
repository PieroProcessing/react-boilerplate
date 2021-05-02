/* eslint-disable @typescript-eslint/indent */
export type OptionalExceptFor<T, TRequired extends keyof T> = Partial<T> & Pick<T, TRequired>;
export type FieldsType<T extends string> = {
  [x in T]: { value: string; isValid: boolean };
};
export type Without<T> = { [P in keyof T]?: undefined };
export type XOR<T, U> = (Without<T> & U) | (Without<U> & T);
export type AtLeastOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> &
  { [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>> }[Keys];
export interface IObjectKeys {
  [key: string]: unknown;
}
export interface ParamTypes {
  content: string;
  action: string;
  token?: string;
}
