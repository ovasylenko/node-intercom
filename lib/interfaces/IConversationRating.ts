import { IContactConversation } from './IContactConversation';
import { ITeammate } from './ITeammate';

export interface IConversationRating {
  rating: Number;
  remark: String;
  created_at: Date;
  contact: IContactConversation;
  teammate: ITeammate;
}
