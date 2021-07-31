import { IPlan } from './IPlan';
import { IAddressableObject } from './IAddressableObject';


export interface ICompany {
  type: String;
  id: String;
  created_at: Date;
  remote_created_at: Date;
  updated_at: Date;
  last_created_at: Date;
  company_id: String;
  name: String;
  custom_attributes: IAddressableObject;
  session_count: Number;
  monthly_spend: Number;
  user_count: Number;
  plan: IPlan;
  size: Number;
  website: String;
  industry: String;
}
