import { IAddressableObject } from './IAddressableObject';

export interface IAddressableList {
  type: String;
  data: IAddressableObject[];
  url: String;
  owner_id: Number;
  has_more: Boolean;
}
