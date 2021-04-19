export type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> &
{
  [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
}[Keys];
export type OptionalExceptFor<T, TRequired extends keyof T> = Partial<T> & Pick<T, TRequired>;
export type FieldsType<T extends string> = {
  [x in T]: { value: string; isValid: boolean };
};
export type Without<T> = { [P in keyof T]?: undefined };
export type XOR<T, U> = (Without<T> & U) | (Without<U> & T);
