import { ICompany } from './ICompany';

export interface IAuthorNote {
  type: String;
  id: String;
  name: String;
  email: String;
  companies: ICompany[];
}
