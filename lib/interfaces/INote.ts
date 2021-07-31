import { IAddressableObject } from './IAddressableObject';

export interface INote {
  type: String;
  id: String;
  created_at: Date;
  user: IAddressableObject;
  body: String;
  author: IAddressableObject;
}
