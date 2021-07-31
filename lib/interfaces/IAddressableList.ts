import { IData } from './IData';

export interface IAddressableList {
  type: String;
  data: IData[];
  url: String;
  owner_id: Number;
  has_more: Boolean;
}
