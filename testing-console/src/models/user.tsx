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
