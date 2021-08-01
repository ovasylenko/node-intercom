import { IAuthorNote } from './IAuthorNote';
import { IUser } from './IUser';

export interface INote {
  type: String;
  id: String;
  created_at: Date;
  user: IUser;
  body: String;
  author: IAuthorNote;
}
