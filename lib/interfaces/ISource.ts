import { IAdmin } from './IAdmin';
import { IContact } from './IContact';
import { ITeam } from './ITeam';

export interface ISource {
  type: String;
  id: String;
  delivered_as: String;
  subject: String;
  body: String;
  author: IContact | IAdmin | ITeam;
  attachments: any[];
  url: String;
  redacted: Boolean;
}
