import * as Decoder from 'io-ts/Decoder';

export const personValidator = Decoder.type({
  firstName: Decoder.string,
  lastName: Decoder.string,
  age: Decoder.number,
});
export type Person = Decoder.TypeOf<typeof personValidator>;
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
