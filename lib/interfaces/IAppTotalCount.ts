import { ICount } from './ICount';

export interface IAppTotalCount {
  type: String;
  company: ICount;
  segments: ICount;
  tag: ICount;
  user: ICount;
}
