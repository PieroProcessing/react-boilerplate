import * as IO from 'io-ts';
// import { IObjectKeys } from './utils';

// export const personValidator = Decoder.type({
//   name: Decoder.string,
//   email: Decoder.string,
//   age: Decoder.number,
// });
export const interfacePerson = IO.interface({
  name: IO.string,
  email: IO.string,
  age: IO.number,
});
export type Person = IO.TypeOf<typeof interfacePerson>;
export interface UserModel {
  name: string;
  permissions: string[];
  id: string;
  roles: string[];
  token: string;
  fc30InstanceId?: string;
}
export interface UsersByIdModel {
  adfsId: string;
  email: string;
  fc30Instances: string[];
  firstname: string;
  id: string;
  lastname: string;
  nameID: string;
  permissions: string[];
  roles: string[];
}
